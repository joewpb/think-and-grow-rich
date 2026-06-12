/* ─── Study Resources — josie.ai voice ─── */

export interface ResourceItem {
  label: string
  slug: string
  blurb: string
  status: 'live' | 'coming-soon'
}

export const resourceData: Record<string, ResourceItem> = {
  'Chapter summaries': {
    label: 'Chapter summaries',
    slug: 'chapter-summaries',
    blurb: 'The spine of each chapter in five minutes — for the week you fell behind and need to catch up without faking it.',
    status: 'coming-soon',
  },
  'Key concept explanations': {
    label: 'Key concept explanations',
    slug: 'key-concept-explanations',
    blurb: 'What Hill actually meant by "burning desire," "mastermind," and "sex transmutation" — clarified without the fog of popself.',
    status: 'coming-soon',
  },
  'Principle deep-dives': {
    label: 'Principle deep-dives',
    slug: 'principle-deep-dives',
    blurb: 'Each of the 13 principles examined through Hill\'s original interviews: what Carnegie, Ford, and Edison actually practiced.',
    status: 'coming-soon',
  },
  'Vocabulary definitions': {
    label: 'Vocabulary definitions',
    slug: 'vocabulary-definitions',
    blurb: 'Hill\'s terminology translated into operational language — "definite major purpose," "auto-suggestion," "thought vibration" — so you can use the terms precisely.',
    status: 'coming-soon',
  },
  'Desire statements': {
    label: 'Desire statements',
    slug: 'desire-statements',
    blurb: 'A worksheet that walks you through the six-step method without letting you skip the hard parts — the number, the date, the price.',
    status: 'coming-soon',
  },
  'Affirmation templates': {
    label: 'Affirmation templates',
    slug: 'affirmation-templates',
    blurb: 'Four frameworks for writing affirmations that do not sound like Instagram captions. Fill in your want, adjust the register, read aloud.',
    status: 'coming-soon',
  },
  'Progress trackers': {
    label: 'Progress trackers',
    slug: 'progress-trackers',
    blurb: 'A daily and weekly tracker for persistence, thought patterns, and principle-by-principle progress through the 13 weeks.',
    status: 'coming-soon',
  },
  'Self-analysis questionnaires': {
    label: 'Self-analysis questionnaires',
    slug: 'self-analysis-questionnaires',
    blurb: 'Hill\'s own self-analysis questions adapted: what you fear, where you hedge, what you are avoiding, and what to do about it.',
    status: 'coming-soon',
  },
  '15-minute chapter recaps': {
    label: '15-minute chapter recaps',
    slug: 'chapter-recaps-audio',
    blurb: 'Audio summaries of each chapter for the commute or the workout — the principle, the mechanism, the exercise, no filler.',
    status: 'coming-soon',
  },
  'Guided visualization audio': {
    label: 'Guided visualization audio',
    slug: 'guided-visualization-audio',
    blurb: 'Narrated sessions that walk you through building a sensory scene of your achieved want. No music, no nature sounds — just the structure.',
    status: 'coming-soon',
  },
  'Auto-suggestion recordings': {
    label: 'Auto-suggestion recordings',
    slug: 'auto-suggestion-recordings',
    blurb: 'Pre-recorded affirmation tracks aligned with each principle. Use them when your own voice feels too familiar to land.',
    status: 'coming-soon',
  },
}

/* ─── Events — josie.ai voice ─── */

export interface EventDetail {
  title: string
  date: string
  desc: string
  detail: string
  ctaLabel: string
  ctaHref: string
}

export const eventDetails: EventDetail[] = [
  {
    title: 'Weekly Principle Discussion',
    date: 'Schedule TBA',
    desc: 'Group discussion of the week\'s principle. Share insights, ask questions, apply together.',
    detail: 'Each session opens with a five-minute recap of the week\'s principle, then opens the floor. Bring one insight you tested and one question you could not answer alone. The group works the question. No recordings, no slides, no presentations — just people who read the same chapter and tried the same exercise.',
    ctaLabel: 'Notify me when scheduled',
    ctaHref: '', // PLACEHOLDER — no link exists yet
  },
  {
    title: 'Vision Board Workshop',
    date: 'Schedule TBA',
    desc: 'A hands-on session to visualize your desires. Materials provided. Open to all members.',
    detail: 'Bring images, words, and anything you want to pin to your board. Physical or digital — both work. The session runs through Hill\'s imagination framework first, then you build. By the end you have a board and a practice for using it daily. No artistic skill required. Ugly boards work as well as beautiful ones.',
    ctaLabel: 'Notify me when scheduled',
    ctaHref: '', // PLACEHOLDER — no link exists yet
  },
  {
    title: 'Guest Speaker Series',
    date: 'Schedule TBA',
    desc: 'Successful entrepreneurs and leaders share how they applied Hill\'s principles in their lives.',
    detail: 'Each guest speaker has applied Hill\'s principles in a specific domain — business, engineering, creative work, or something else entirely. They walk through one principle they struggled with, one they mastered, and what their actual practice looks like. Q&A follows. No sales pitches, no book plugs.',
    ctaLabel: 'Notify me when scheduled',
    ctaHref: '', // PLACEHOLDER — no link exists yet
  },
]

/* ─── Form microcopy — josie.ai voice ─── */

export const formCopy = {
  subscribe: {
    success: 'You\'re on the list. Week one lands in your inbox — read it, don\'t just save it.',
    error: 'That\'s not an email. Try again.',
  },
  join: {
    success: 'You\'re in. Your group forms soon. Bring a real definite want, not a vague one.',
    error: 'That\'s not an email. Try again.',
  },
}
