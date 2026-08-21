export const misalignmentContent = {
  id: 'misalignment',
  title: 'Misalignment',
  overview:
    <>As AI systems grow more capable, the gap between the properties they are selected for and those that humans actually value becomes a poorly understood structural risk. Even if individual AIs seem somewhat aligned with their users, composite human-AI or AI-AI intelligences may behave in broadly unpredictable, misaligned or power-seeking ways.</>,
  resources: {
    mustReads: [
      <><a href="https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like" target="_blank" rel="noreferrer" className="resource-link">What failure looks like</a> by Paul Christiano.</>,
      <><a href="https://intelligence.org/2016/12/28/ai-alignment-why-its-hard-and-where-to-start/" target="_blank" rel="noreferrer" className="resource-link">AI Alignment: Why It's Hard, and Where to Start</a> by Eliezer Yudkowsky.</>,
      <><a href="https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power#an-ai-workforce-could-be-made-singularly-loyal-to-institutional-leaders" target="_blank" rel="noreferrer" className="resource-link">AI-Enabled Coups: How a Small Group Could Use AI to Seize Power</a> by Tom Davidson, Lukas Finnveden, and Rose Hadshar.</>,
      <><a href="https://arxiv.org/abs/1902.09469" target="_blank" rel="noreferrer" className="resource-link">Embedded Agency</a> by Abram Demski and Scott Garrabrant.</>,
      <><a href="https://arxiv.org/pdf/1906.01820" target="_blank" rel="noreferrer" className="resource-link">Risks from Learned Optimization</a> by Evan Hubinger et al.</>,
    ],
    people: [
      <><a href="https://scholar.google.com/citations?user=aXe8xXkAAAAJ&hl=en" target="_blank" rel="noreferrer" className="resource-link">Scott Garrabrant</a></>,
      <><a href="https://www.alignmentforum.org/users/abramdemski" target="_blank" rel="noreferrer" className="resource-link">Abram Demski</a></>,
      <><a href="https://www.richardcngo.com/" target="_blank" rel="noreferrer" className="resource-link">Richard Ngo</a></>,
      <><a href="https://www.alignmentforum.org/users/vanessa-kosoy" target="_blank" rel="noreferrer" className="resource-link">Vanessa Kosoy</a></>,
    ],
    orgs: [
      <><a href="https://timaeus.co/" target="_blank" rel="noreferrer" className="resource-link">Timaeus</a></>,
      <><a href="https://www.simplexaisafety.com/" target="_blank" rel="noreferrer" className="resource-link">Simplex</a></>,
      <><a href="https://www.iliad.ac/incubated-organizations" target="_blank" rel="noreferrer" className="resource-link">Stormglass</a></>,
      <><a href="https://www.iliad.ac/incubated-organizations" target="_blank" rel="noreferrer" className="resource-link">AIXI Labs</a></>,
      <><a href="https://resolution.org/" target="_blank" rel="noreferrer" className="resource-link">Resolution</a></>,
    ],
    openQuestions: [
      <>Solomonoff induction and the AIXI framework give clean notions of cognition &mdash; but they assume unbounded compute and a fully specifiable environment. Real agents are embedded in their environments and face unknown unknowns. Does a model of embedded agents come from robust approximations to AIXI, or from a fundamentally different model of cognition?</>,
      <>Many intelligent systems optimise for their goals by organising sub-processes that optimise those goals &ldquo;for&rdquo; them. Why is this pattern so convergent? How do sub-processes get reliably organised to fit the agent's goals &mdash; and how are they prioritised when they conflict?</>,
    ]
  }
}
