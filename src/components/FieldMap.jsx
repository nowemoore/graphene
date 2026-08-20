import { useCallback, useState } from 'react'
import {
  ReactFlow,
  Controls,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { ArrowsLeftRightIcon, BankIcon, BrainIcon, CoinsIcon, DropIcon,
  HeartIcon, UsersIcon } from '@phosphor-icons/react'
import { nodeContentById } from '../content/nodes'
import NodeModal from './NodeModal.jsx'

// ─── icons ─────────────────────────────────────────────────────────────────────

const NODE_ICONS = {
  social:                UsersIcon,
  emotionalSafety:       HeartIcon,
  economics:             CoinsIcon,
  epistemicRisk:         BrainIcon,
  politicalImpacts:      BankIcon,
  gradualDisempowerment: DropIcon,
  misalignment:          ArrowsLeftRightIcon,
}

// ─── graph data ────────────────────────────────────────────────────────────────

const CLICKABLE = new Set(Object.keys(nodeContentById))

// tier 1 = societal resilience, 2 = human/systems, 3 = clickable problems, 4 = leaf context
const rawNodes = [
  // ── top leaf row (human branch +75) ────────────────────────────────────
  { id: 'isolation',             label: 'isolation',              x: -160, y: 235, dominant: false, tier: 4 },
  { id: 'psychosis',             label: 'psychosis',              x: 430,  y: 91,  dominant: false, tier: 4 },
  { id: 'parasocialAttachment',  label: 'parasocial attachment',  x: 570,  y: 91,  dominant: false, tier: 4 },
  { id: 'identity',              label: 'identity destabilisation', x: 220, y: 99,  dominant: false, tier: 4 },
  { id: 'deterioration',         label: 'social skill atrophy',   x: -160, y: 139, dominant: false, tier: 4 },

  // ── upper mid ────────────────────────────────────────────────────────────
  { id: 'social',                label: 'community risks',        x: -10,  y: 215, dominant: true,  tier: 3 },
  { id: 'emotionalSafety',       label: 'emotional safety',       x: 312,  y: 215, dominant: true,  tier: 3 },
  { id: 'economics',             label: 'economic impacts',       x: 904,  y: 65,  dominant: true,  tier: 3 },

  // ── central spine ────────────────────────────────────────────────────────
  { id: 'humanInfluence',        label: 'human influence',        x: 168,  y: 347, dominant: false, tier: 2 },
  { id: 'societalResilience',    label: 'societal resilience',    x: 580,  y: 272, dominant: false, tier: 1 },
  { id: 'systemsInfluence',      label: 'systems influence',      x: 920,  y: 197, dominant: false, tier: 2 },

  // ── lower mid ────────────────────────────────────────────────────────────
  { id: 'epistemicRisk',         label: 'epistemic risk',         x: 168,  y: 483, dominant: true,  tier: 3 },
  { id: 'gradualDisempowerment', label: 'gradual disempowerment', x: 800,  y: 370, dominant: true,  tier: 3 },
  { id: 'politicalImpacts',      label: 'political impacts',      x: 1190, y: 175, dominant: true,  tier: 3 },

  // ── econ leaves (sys branch -75) ─────────────────────────────────────────
  { id: 'liabilityVacuum',       label: 'liability vacuum',       x: 700,  y: -15,  dominant: false, tier: 4 },
  { id: 'redistributionFailure', label: 'redistribution failure', x: 758,  y: -80,  dominant: false, tier: 4 },
  { id: 'taxBaseErosion',        label: 'tax base erosion',       x: 923,  y: -100, dominant: false, tier: 4 },
  { id: 'transitionShock',       label: 'transition shock',       x: 1073, y: -80,  dominant: false, tier: 4 },
  { id: 'marketConcentration',   label: 'market concentration',   x: 1150, y: -15,  dominant: false, tier: 4 },

  // ── misalignment (sys branch) ────────────────────────────────────────────
  { id: 'misalignment',         label: 'misalignment',           x: 1190, y: 420, dominant: true,  tier: 3 },

  // ── COP leaves (sys branch -75) ──────────────────────────────────────────
  { id: 'concentrationOfPower',  label: 'concentration of power', x: 1420, y: 100, dominant: false, tier: 4 },
  { id: 'stateCollapse',         label: 'state collapse',         x: 1420, y: 237, dominant: false, tier: 4 },

  // ── bottom leaf row ──────────────────────────────────────────────────────
  { id: 'offloading',            label: 'offloading',             x: -20,  y: 643, dominant: false, tier: 4 },
  { id: 'informationSafety',     label: 'information safety',     x: 168,  y: 643, dominant: false, tier: 4 },
  { id: 'knowledgeCollapse',     label: 'knowledge collapse',     x: 430,  y: 543, dominant: false, tier: 4 },
  { id: 'collectiveCognition',   label: 'collective cognition',   x: 580,  y: 643, dominant: false, tier: 4 },
  { id: 'culture',               label: 'cultural displacement',  x: 800,  y: 500, dominant: false, tier: 4 },
]

const rawEdges = [
  ['humanInfluence',        'social',                'left-src', 'bottom-tgt'],

  ['emotionalSafety',       'psychosis',             'top-src',  'bottom-tgt'],
  ['emotionalSafety',       'parasocialAttachment',  'top-src',  'bottom-tgt'],
  ['emotionalSafety',       'identity',              'top-src',  'bottom-tgt'],
  ['humanInfluence',        'emotionalSafety',        'top-src',  'bottom-tgt'],
  ['humanInfluence',        'epistemicRisk',         'bottom',   'top'],
  ['social',                'isolation',             'left-src', 'right-tgt'],
  ['social',                'deterioration',         'left-src', 'right-tgt'],
  ['isolation',             'deterioration',         'top-src',  'bottom-tgt'],
  ['deterioration',         'identity',              'right',    'left'],
  ['epistemicRisk',         'offloading',            'bottom',   'top'],
  ['epistemicRisk',         'informationSafety',     'bottom',   'top'],
  ['epistemicRisk',         'collectiveCognition',   'bottom',   'left'],
  ['collectiveCognition',   'psychosis',             'top-src',  'bottom-tgt'],
  ['collectiveCognition',   'knowledgeCollapse',     'top-src',  'bottom-tgt'],
  ['knowledgeCollapse',     'epistemicRisk',         'left-src', 'right-tgt'],
  ['systemsInfluence',      'economics',             'top-src',  'bottom-tgt'],
  ['economics',             'postAGIEconomics',      'top-src',  'bottom-tgt'],
  ['economics',             'redistributionFailure', 'top-src',  'bottom-tgt'],
  ['economics',             'liabilityVacuum',       'top-src',  'bottom-tgt'],
  ['economics',             'taxBaseErosion',        'top-src',  'bottom-tgt'],
  ['economics',             'transitionShock',       'top-src',  'bottom-tgt'],
  ['economics',             'marketConcentration',   'top-src',  'bottom-tgt'],
  ['systemsInfluence',      'misalignment',          'right',    'left'],
  ['systemsInfluence',      'gradualDisempowerment', 'bottom',   'top'],
  ['systemsInfluence',      'politicalImpacts',      'right',    'left'],
  ['politicalImpacts',      'concentrationOfPower',  'right',    'left'],
  ['concentrationOfPower',  'economics',             'top-src',  'bottom-tgt'],
  ['politicalImpacts',      'stateCollapse',         'right',    'left'],
  ['gradualDisempowerment', 'economics',             'top-src',  'left'],
  ['gradualDisempowerment', 'culture',               'bottom',   'top'],
  ['gradualDisempowerment', 'politicalImpacts',      'right',     'left'],
  ['culture',               'collectiveCognition',   'left-src', 'right-tgt'],
  ['humanInfluence',        'societalResilience',    'right',    'left'],
  ['societalResilience',    'systemsInfluence',      'right',    'left'],

  /* a cross-branch tie: information safety bears on political impacts.
     'dashed' draws it like a same-tier link even though the tiers differ. */
  ['informationSafety',     'politicalImpacts',      'bottom',   'bottom-tgt', 'dashed'],
]

const initialNodes = rawNodes.map((n) => ({
  id: n.id,
  position: { x: n.x, y: n.y },
  data: { label: n.label, dominant: n.dominant, clickable: CLICKABLE.has(n.id), tier: n.tier, icon: NODE_ICONS[n.id] ?? null },
  type: 'resilienceNode',
}))

const tierById = Object.fromEntries(rawNodes.map((n) => [n.id, n.tier]))

const initialEdges = rawEdges.map(([source, target, sourceHandle, targetHandle, kind]) => ({
  id: `${source}--${target}`,
  source,
  target,
  sourceHandle,
  targetHandle,
  style: {
    stroke: 'var(--color-edge)',
    strokeWidth: 2,
    ...(tierById[source] === tierById[target] || kind === 'dashed'
      ? { strokeDasharray: '5 5' }
      : {}),
  },
}))

// ─── custom node ─────────────────────────────────────────────────────────────

function ResilienceNode({ data }) {
  const cls = [
    'rf-node',
    data.dominant ? 'rf-node--dominant' : 'rf-node--context',
    data.clickable ? 'rf-node--clickable' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={cls} data-tier={data.tier}>
      <Handle type="target" position={Position.Top}    id="top"       className="rf-handle" />
      <Handle type="source" position={Position.Top}    id="top-src"   className="rf-handle" />
      <Handle type="target" position={Position.Left}   id="left"      className="rf-handle" />
      <Handle type="source" position={Position.Left}   id="left-src"  className="rf-handle" />
      <span className="rf-node__label">
        {data.icon && <data.icon className="rf-node__icon" aria-hidden="true" />}
        {data.label}
      </span>
      <Handle type="source" position={Position.Bottom} id="bottom"    className="rf-handle" />
      <Handle type="target" position={Position.Bottom} id="bottom-tgt" className="rf-handle" />
      <Handle type="source" position={Position.Right}  id="right"     className="rf-handle" />
      <Handle type="target" position={Position.Right}  id="right-tgt" className="rf-handle" />
    </div>
  )
}

const nodeTypes = { resilienceNode: ResilienceNode }

// ─── map ─────────────────────────────────────────────────────────────────────

export default function FieldMap() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)
  const [activeNodeId, setActiveNodeId] = useState(null)

  const activeNodeContent = activeNodeId ? nodeContentById[activeNodeId] : null

  const onNodeClick = useCallback((_event, node) => {
    if (node.data.clickable) setActiveNodeId(node.id)
  }, [])

  return (
    <>
      <div className="graph-wrap">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.18 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          defaultEdgeOptions={{ pathOptions: { curvature: 0.7 } }}
        >
          <Controls
            showInteractive={false}
            style={{
              background: 'var(--color-control-bg)',
              border: '1px solid var(--color-border-control)',
              borderRadius: 10,
            }}
          />
        </ReactFlow>
      </div>

      <NodeModal nodeContent={activeNodeContent} onClose={() => setActiveNodeId(null)} />
    </>
  )
}
