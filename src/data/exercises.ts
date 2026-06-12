/* ─── 39 Exercises — josie.ai voice ─── */
export interface Exercise {
  name: string
  slug: string
  oneLine: string
  body: string
  steps: string[]
  output: string
}

export const exerciseData: Record<string, Exercise> = {

  /* ─── Week 1: Desire ─── */

  'Desire Statement': {
    name: 'Desire Statement',
    slug: 'desire-statement',
    oneLine: 'Put your want in writing — a number and a date — or admit it was a daydream.',
    body: "A desire you can't write in one sentence isn't a desire, it's a mood. This is where you stop hedging. Vague goals fail quietly; a signed, specific one makes you accountable — which is exactly why most people never write it down.",
    steps: [
      'Write one sentence: what you want, the exact number, the date you will have it.',
      'Name what you will give in return — effort, skill, service. Wishing is not payment.',
      'Read it aloud once. If it sounds slightly absurd, the size is right.',
      'Put it where you see it before anyone else gets your attention each morning.',
    ],
    output: 'One signed sentence you can read in ten seconds and feel in your chest.',
  },

  'Visualization': {
    name: 'Visualization',
    slug: 'visualization',
    oneLine: 'Your brain cannot distinguish a vivid image from a real memory. Use that.',
    body: 'The subconscious treats a clearly imagined outcome as data. It does not care if the event happened or you simply built it in detail — it begins engineering toward it. Most people skip this because it feels like pretending. It is not pretending. It is calibration.',
    steps: [
      'Sit in silence for two minutes. Let the ambient noise settle.',
      'Build the scene: where you are, what you are holding, who is with you.',
      'Run the sensory layer — what the air feels like, what you hear, what you smell.',
      'Hold it for three more minutes. If your mind wanders, restart.',
    ],
    output: 'A sensory scene you can return to in under 10 seconds.',
  },

  'Burning Desire Test': {
    name: 'Burning Desire Test',
    slug: 'burning-desire-test',
    oneLine: 'A wish waits for permission. A burning desire builds the door.',
    body: "Hill distinguishes wanting from wanting so badly the thought of not having it hurts. Most desires are polite. A burning desire is not polite — it overrides sleep, overrides comfort, overrides the part of you that settles. This test surfaces which kind you are holding.",
    steps: [
      'Ask: would I still pursue this if I knew it would take five years?',
      'Ask: would I still pursue this if no one ever knew I succeeded?',
      'Ask: would I still pursue this if I had to give up one thing I enjoy?',
      'If you answered no to any, you do not yet have a burning desire. You have a preference.',
    ],
    output: 'A clear verdict: burning or not-yet-burning.',
  },

  /* ─── Week 2: Faith ─── */

  'Affirmation Writing': {
    name: 'Affirmation Writing',
    slug: 'affirmation-writing',
    oneLine: 'Write the same thing ten times until your hand believes it before your mind does.',
    body: 'Faith is not something you feel first. It is something you demonstrate with repetition until the feeling arrives. Hill calls repetition the only known method. Writing by hand is slower than thinking — that is the point. It gives the idea time to land.',
    steps: [
      'Write your desire statement ten times in a row. Same words each time.',
      'On each repetition, pause after the last word and breathe once.',
      'If a repetition feels hollow, write it again slower.',
      'Date the page. Stack them. After thirty days, read the first and the latest.',
    ],
    output: 'Ten repetitions, written. One page. A habit stack in progress.',
  },

  'Faith Builder': {
    name: 'Faith Builder',
    slug: 'faith-builder',
    oneLine: 'Faith is built from small wins you bothered to notice.',
    body: 'Hill believed faith compounds. It does not require a leap — it requires a ledger. Each evening you record one thing that worked today. Not a grand success. One thing that moved forward. Over weeks, the ledger becomes heavier than the doubt.',
    steps: [
      'At the end of the day, write one thing you did that moved toward your want.',
      'It can be as small as one email, one refusal, one decision you did not postpone.',
      'Read the previous three entries before writing the new one.',
      'After one week, read the full list. Notice that something is building.',
    ],
    output: 'A dated ledger of small wins. Read it when the doubt is loud.',
  },

  'Belief Audit': {
    name: 'Belief Audit',
    slug: 'belief-audit',
    oneLine: 'Find the belief that is quietly sabotaging your want and name it out loud.',
    body: 'The beliefs that block you are rarely dramatic. They sound reasonable: "I am not the type of person who..." or "That works for other people." Hill called these negative thought habits. They run on autopilot until you expose them to light.',
    steps: [
      'Write down every reason this goal will not happen. Do not edit.',
      'Beside each reason, write: is this a fact or a story I have repeated?',
      'For each story, write one counterexample — any time the opposite was true.',
      'Tear the page or delete the file. The beliefs are not gone, but they are no longer invisible.',
    ],
    output: 'A written list of the beliefs that were running beneath your decisions.',
  },

  /* ─── Week 3: Auto-Suggestion ─── */

  'Auto-Suggestion Script': {
    name: 'Auto-Suggestion Script',
    slug: 'auto-suggestion-script',
    oneLine: 'A script you read to your own subconscious while it is still awake enough to listen.',
    body: "Auto-suggestion is self-suggestion: you feeding your own mind on purpose rather than letting it graze on whatever drifts in. A script gives the subconscious a clean signal. The mind does not argue with repetition — it accepts whatever signal arrives with feeling attached.",
    steps: [
      'Write a one-minute script in first person, present tense, as if your want is already true.',
      'Use emotional language: grateful, clear, relieved, ready.',
      'Read it aloud once with full voice. If it feels false, rewrite until it does not.',
      'Read it aloud twice daily — once in the morning, once before sleep.',
    ],
    output: 'A one-minute script. No longer. No jargon. Yours.',
  },

  'Mirror Practice': {
    name: 'Mirror Practice',
    slug: 'mirror-practice',
    oneLine: 'Look at your own face and say it. The回避 reflex is the resistance showing itself.',
    body: "Speaking your desire while looking into your own eyes is uncomfortable. That discomfort is the resistance Hill describes — the part of the mind that prefers the status quo. Doing it anyway is how you prove to yourself that the want is real enough to say out loud to your own reflection.",
    steps: [
      'Stand in front of a mirror. Look at your own eyes, not your hair or your posture.',
      'Say your desire statement slowly, at full voice.',
      'Notice where you want to look away. Stay. Repeat.',
      'Do it three times. The third time will be easier than the first.',
    ],
    output: 'Three repetitions. One moment of sustained eye contact with the person who needs to hear it most.',
  },

  'Voice Recording': {
    name: 'Voice Recording',
    slug: 'voice-recording',
    oneLine: 'Hear your own voice say the thing. The subconscious trusts direct address.',
    body: "Your own voice, recorded and played back, bypasses the skepticism your mind reserves for external sources. You cannot argue with yourself the way you argue with a book or a coach. A recording puts your desire directly into your auditory channel — the fastest path to the subconscious during its most receptive states.",
    steps: [
      'Record your desire statement in your own voice. One minute. No music.',
      'Listen to it as you fall asleep — the subconscious is most open at the threshold of sleep.',
      'Listen again when you wake, before you check any device.',
      'Do this for seven consecutive days before judging whether it works.',
    ],
    output: 'One recording. Seven days of listening. A direct line to your own operating system.',
  },

  /* ─── Week 4: Specialized Knowledge ─── */

  'Skills Audit': {
    name: 'Skills Audit',
    slug: 'skills-audit',
    oneLine: 'You do not need more knowledge. You need to know what you lack and stop avoiding it.',
    body: "Hill's phrase is 'specialized knowledge' — not general knowledge, not curiosity, not a well-rounded education. The gap between where you are and where you want to be is almost never 'try harder.' It is 'learn this specific thing.' A skills audit makes the gap visible instead of letting it loom.",
    steps: [
      'List every skill you currently have that your want demands. Be honest.',
      'Rate each skill 1–5: 1 = can talk about it, 5 = can teach it.',
      'List every skill your want demands that you do not have.',
      'Circle the one gap that hurts most. That is your first learning target.',
    ],
    output: 'A one-page inventory. One circled gap. One thing to learn this month.',
  },

  'Learning Plan': {
    name: 'Learning Plan',
    slug: 'learning-plan',
    oneLine: 'A schedule for closing the gap. Without one, you will study what is comfortable, not what is necessary.',
    body: 'A learning plan without deadlines is a reading list. Hill studied men who turned knowledge into results — they did not wander from book to book. They identified exactly what they needed and acquired it methodically. Your plan should be narrower than you think.',
    steps: [
      'Take the circled gap from your Skills Audit.',
      'Find three resources that teach exactly that gap — one book, one course, one person.',
      'Assign a deadline to each. Week 1 for the book. Week 2 for the course.',
      'Block the time now. Not \'someday.\' This Tuesday at 8 AM.',
    ],
    output: 'Three resources. Three deadlines. One blocked calendar slot.',
  },

  'Knowledge Gap Analysis': {
    name: 'Knowledge Gap Analysis',
    slug: 'knowledge-gap-analysis',
    oneLine: 'The distance between what you know and what the work demands. Measured, not felt.',
    body: 'A gap analysis is a Skills Audit turned into action. It forces you to distinguish between the discomfort of learning something new (normal) and the discomfort of not knowing something essential (fixable). Most people confuse the two and stay stuck in the first.',
    steps: [
      'Draw three columns: What I Know · What I Need · How to Bridge.',
      'Fill each column. The third column must name a specific action, not a sentiment.',
      'Rank the gaps by impact — which one, if closed, changes the most?',
      'Start with the highest-impact gap. Do not optimize sequencing. Just start.',
    ],
    output: 'A three-column map. One gap selected. One action scheduled.',
  },

  /* ─── Week 5: Imagination ─── */

  'Vision Board': {
    name: 'Vision Board',
    slug: 'vision-board',
    oneLine: 'A board of images that reminds your brain what it is engineering toward.',
    body: "Hill calls imagination 'the workshop wherein are fashioned all plans.' A vision board is not decoration — it is a reference layer. Images bypass the analytical mind and speak directly to the part of the brain that recognizes patterns. It works because the brain cannot ignore what it sees daily.",
    steps: [
      'Collect images and words that represent the end state of your want — not the process.',
      'Arrange them on a board or a single digital canvas. No more than 15 items.',
      'Place it where you will see it within the first hour of waking.',
      'Spend sixty seconds looking at it. Feel the scene, do not narrate it.',
    ],
    output: 'One board, physical or digital. Seen daily. Felt briefly.',
  },

  'Creative Exercise': {
    name: 'Creative Exercise',
    slug: 'creative-exercise',
    oneLine: 'Generate solutions without editing. The editor shows up too early for most people.',
    body: 'Hill describes two forms of imagination: synthetic (rearranging what exists) and creative (generating what did not exist before). Both are trainable. This exercise trains the muscle of generation by disabling the internal editor. Quantity is the goal. Quality emerges from quantity.',
    steps: [
      'Take one problem you are currently stuck on.',
      'Set a timer for ten minutes.',
      'Write every possible solution. No judgment. No filtering. No typing—handwrite.',
      'When the timer ends, circle the three least-absurd ideas and save them for tomorrow.',
    ],
    output: 'Ten minutes of unfiltered generation. Three ideas worth revisiting.',
  },

  'Synthetic vs Creative Test': {
    name: 'Synthetic vs Creative Test',
    slug: 'synthetic-vs-creative-test',
    oneLine: 'Are you rearranging or originating? Both are useful. You should know which you are doing.',
    body: "Synthetic imagination recombines existing ideas — a new business model from known parts. Creative imagination draws from somewhere else — a hunch, a pattern you cannot explain yet. Hill believed both are valuable but they require different postures. You cannot hybridize your way to a breakthrough.",
    steps: [
      'For each idea this week, tag it: synthetic or creative.',
      'Synthetic: did this exist in a different form before I rearranged it?',
      'Creative: did this arrive as a feeling or image before I could explain it?',
      'If you have not had a creative idea in two weeks, change your input — read outside your field, talk to someone who disagrees with you.',
    ],
    output: 'A tagged week of ideas. One deliberate input change if the well is dry.',
  },

  /* ─── Week 6: Organized Planning ─── */

  'One-Page Plan': {
    name: 'One-Page Plan',
    slug: 'one-page-plan',
    oneLine: 'If you cannot fit your plan on one page, you have not found the actual plan yet.',
    body: "Hill's insight is brutally practical: a flawed plan executed today beats a perfect plan finished next month. A one-page constraint forces clarity. Every word that does not belong becomes obvious. The exercise is not planning—it is compression. What survives compression is what matters.",
    steps: [
      'Write your goal at the top. One sentence.',
      'List the three actions you will take this month. Not twelve. Three.',
      'Name one obstacle you expect and your response to it.',
      'Set a date for the first action. Not \'soon.\' This Friday.',
    ],
    output: 'One page. One goal. Three actions. One date. No excuses left to hide in.',
  },

  'Mastermind Pitch': {
    name: 'Mastermind Pitch',
    slug: 'mastermind-pitch',
    oneLine: 'You need allies. A pitch is how you recruit them without apologizing for ambition.',
    body: "Hill's mastermind principle is not networking. It is coordination of knowledge and effort toward a shared purpose. A pitch is the invitation. It must be clear enough that someone can decide in two minutes whether they want in. If they need more than two minutes, the pitch is not the problem — the idea is.",
    steps: [
      'Write your goal in one sentence.',
      'Write what you offer the group — not what you need from them.',
      'Write what you are looking for in a member. Be specific.',
      'Practice it once. Then invite three people this week.',
    ],
    output: 'A two-minute pitch. Three invitations sent. One reply to start.',
  },

  'Deadline Setting': {
    name: 'Deadline Setting',
    slug: 'deadline-setting',
    oneLine: 'A goal without a date is a thought experiment. A deadline is a decision.',
    body: "Hill says a goal is a dream with a deadline. A date on a calendar converts desire into pressure. Pressure is the mechanism, not the enemy. Without it, the brain treats the goal as optional. Optional goals get done last. Last never happens.",
    steps: [
      'Take every action from your One-Page Plan and assign a specific date.',
      'Break any action longer than two weeks into smaller pieces with their own dates.',
      'Put every date on a calendar you actually check.',
      'If you miss a date, reset it immediately. Do not let one miss become abandonment.',
    ],
    output: 'A dated action plan. Every step has a week. Every week has a day.',
  },

  /* ─── Week 7: Decision ─── */

  'Decision Journal': {
    name: 'Decision Journal',
    slug: 'decision-journal',
    oneLine: 'Every decision you postponed cost more than a fast mistake would have.',
    body: 'Hill found that successful people reach decisions promptly and change them slowly. A decision journal captures what you decided, why, and what happened. Over time it reveals your decision pattern: where you are decisive, where you hedge, and whether your instincts are better than you think.',
    steps: [
      'For each significant decision, write: the decision, your reasoning, and the expected outcome.',
      'Add a date and a confidence rating 1–5.',
      'Review each entry one month later. Note what actually happened.',
      'Look for patterns: which types of decisions do you delay? Which do you nail?',
    ],
    output: 'A running record of decisions made. A pattern you can read after 90 days.',
  },

  'Procrastination Audit': {
    name: 'Procrastination Audit',
    slug: 'procrastination-audit',
    oneLine: 'The thing you keep putting off is telling you something. Listen and act.',
    body: 'Procrastination is not laziness. It is a signal that something is unresolved — fear, ambiguity, or a step you do not know how to take. Hill called it a slow poison. An audit surfaces the pattern instead of letting it run beneath your attention.',
    steps: [
      'Write down everything you have postponed for more than one week.',
      'Beside each, write the reason: fear of failure, lack of clarity, perfectionism.',
      'Circle the item with the shortest completion time — under 30 minutes.',
      'Complete it now. Not today. Now. Momentum is more valuable than the task itself.',
    ],
    output: 'A list of every open loop. One item closed immediately.',
  },

  '24-Hour Challenge': {
    name: '24-Hour Challenge',
    slug: '24-hour-challenge',
    oneLine: 'Make the decision you have been dodging. You have one day.',
    body: 'Indecision is just fear wearing a calendar. The cost of a slow "maybe" is almost always higher than a fast "no." This week you practice closing an open loop before it rots.',
    steps: [
      'Name one decision you have postponed for more than two weeks.',
      'Set a 24-hour clock. Gather only the facts you can get in that window.',
      'Decide. Write the decision and the date next to it.',
      'Take one irreversible action that proves the decision is real.',
    ],
    output: 'One closed loop, and proof you can move without certainty.',
  },

  /* ─── Week 8: Persistence ─── */

  'Persistence Tracker': {
    name: 'Persistence Tracker',
    slug: 'persistence-tracker',
    oneLine: 'What gets measured does not get abandoned. A streak is a contract with yourself.',
    body: 'Persistence is not a trait. It is a system. A persistence tracker makes daily action visible, and visible action is harder to ignore. Hill called persistence the sustained effort necessary to induce faith. Without a tracker, you are relying on memory — and memory favors the easy days.',
    steps: [
      'Each day you take one action toward your want, mark it. A wall calendar works.',
      'Do not judge the size of the action. One email counts. One refusal counts.',
      'If you miss a day, do not miss two. A gap is not a stop.',
      'Review the streak each Sunday. The visual record is the point.',
    ],
    output: 'A visible streak. No judgment on size. Consecutive days are the metric.',
  },

  'Restart a Goal': {
    name: 'Restart a Goal',
    slug: 'restart-a-goal',
    oneLine: 'The goal you abandoned still matters. You just learned how not to do it.',
    body: 'Hill found most people fail close to success. The goal you dropped is not a mistake — it is tuition paid. The learning from the attempt is real even if the outcome is not. Restarting is not failure revisited. It is the second attempt with better intelligence.',
    steps: [
      'Identify one goal you abandoned. Write what you learned from the attempt.',
      'Write what you will do differently this time. One change. Not ten.',
      'Set a date to restart. This week.',
      'Take the first step. It can be smaller than the original first step.',
    ],
    output: 'One restarted goal. One lesson extracted. One smaller first step taken.',
  },

  'Obstacle Plan': {
    name: 'Obstacle Plan',
    slug: 'obstacle-plan',
    oneLine: 'Anticipate the obstacle. Plan the response. Remove the surprise.',
    body: 'Every plan meets resistance. Hill taught that temporary defeat is not failure — it is data. An obstacle plan uses if-then logic: when X happens, I do Y. It removes the cognitive load of deciding in the moment. You do not rise to the occasion. You fall back on your training.',
    steps: [
      'List the three most likely obstacles in the next month.',
      'Beside each, write your response. Start with "If X, then I will..."',
      'Make each response a concrete action, not a feeling.',
      'Put the list where you can see it. When an obstacle arrives, execute without thinking.',
    ],
    output: 'Three if-then plans. One less reason to stop when it gets hard.',
  },

  /* ─── Week 9: Master Mind ─── */

  'Group Formation': {
    name: 'Group Formation',
    slug: 'group-formation',
    oneLine: 'You cannot mastermind alone. Find the people who will raise the standard.',
    body: "Hill's mastermind principle is not social — it is strategic. When two minds align around a definite purpose, a third force emerges that neither could produce alone. You cannot generate this force in isolation. You need other people who are serious enough to show up and push. Finding them is the bottleneck.",
    steps: [
      'Identify three people who share your level of ambition. They do not need the same goal.',
      'Invite each to a single trial meeting. Explain Hill\'s principle. No pitch, no pressure.',
      'Propose a structure: weekly, 60 minutes, one person presents a challenge each session.',
      'If no one says yes, expand the net. The right three people exist. You may need to meet more wrong ones first.',
    ],
    output: 'Three invitations sent. One trial meeting scheduled.',
  },

  'Meeting Structure': {
    name: 'Meeting Structure',
    slug: 'meeting-structure',
    oneLine: 'A mastermind without structure is a coffee chat. A structured one is a multiplier.',
    body: 'Hill emphasized that mastermind meetings must have definite purpose. Without structure, they drift into social hour. With structure, they become the highest-leverage hour of your week. A tight agenda respects everyone\'s time and produces decisions, not discussion.',
    steps: [
      'Design a 60-minute agenda: 5min check-in, 20min presenter, 20min solutions, 10min commitments, 5min close.',
      'Rotate the presenter each week so every member gets the group\'s full attention.',
      'End every meeting with each person stating one commitment for the coming week.',
      'Review commitments at the start of the next meeting. Accountability is the mechanism.',
    ],
    output: 'One repeatable agenda. One rotation schedule. Accountability built into the format.',
  },

  'Accountability Pair': {
    name: 'Accountability Pair',
    slug: 'accountability-pair',
    oneLine: 'One person who expects your update. That expectation is worth more than motivation.',
    body: 'A mastermind group is powerful. An accountability pair is surgical. One person who knows your goal, your deadline, and whether you hit it creates a gentle pressure that outperforms willpower. Hill observed that we rise to the level of our peers — a pair makes that rise measurable.',
    steps: [
      'From your mastermind group, choose one person as your accountability partner.',
      'Exchange goals and weekly action plans. Write them down.',
      'Schedule a mid-week check-in. Five minutes. Not negotiable.',
      'Report honestly. If you did not act, say so. The admission is the accountability.',
    ],
    output: 'One partner. One shared goal. One weekly check-in that you will not skip.',
  },

  /* ─── Week 10: Sex Transmutation ─── */

  'Energy Audit': {
    name: 'Energy Audit',
    slug: 'energy-audit',
    oneLine: 'Your drive is a resource. Track where it goes before you try to redirect it.',
    body: 'Hill calls sex the most powerful human desire — not because of its physical expression, but because the same drive, channeled, produces creative output of extraordinary intensity. An energy audit traces where that drive is currently flowing: into work, into distraction, into loops that do not serve you.',
    steps: [
      'For three days, log every hour. Note when you feel most alive and focused.',
      'Note where your mind goes when it is unoccupied. That is your natural channel.',
      'Compare the two patterns. Is your peak energy hitting your most important work?',
      'If not, identify one energy leak you can plug this week.',
    ],
    output: 'A three-day energy map. One leak identified. One hour reclaimed.',
  },

  'Creative Channeling': {
    name: 'Creative Channeling',
    slug: 'creative-channeling',
    oneLine: 'Take the energy you are spending on distraction and point it at the work that matters.',
    body: 'Hill observed that great artists, leaders, and inventors all transmute creative drive into their work. The mechanism is not suppression — it is direction. The same restlessness that leads to scrolling, overthinking, or loops can be aimed at production. The energy is neutral. The channel decides the result.',
    steps: [
      'Identify your peak creative window. It is usually the same 2–3 hours each day.',
      'During that window, work only on your most important goal. No notifications. No switching.',
      'When you feel the pull to distract, channel it into the work. Write faster. Build harder.',
      'After the window closes, you can return to normal life. The work is done.',
    ],
    output: 'One protected creative window daily. The channel is the discipline.',
  },

  'Passion Project': {
    name: 'Passion Project',
    slug: 'passion-project',
    oneLine: 'One project that excites you enough to pull energy through it instead of wasting it.',
    body: 'Hill found that highly successful people maintain an outlet for transmuted drive — something that demands their full creative force. A passion project is not a hobby. It is a container for energy that would otherwise dissipate. It must be meaningful enough to command focus and concrete enough to produce something real.',
    steps: [
      'Choose one project that excites you so much you lose track of time working on it.',
      'It should relate to your definite purpose but not be identical to it.',
      'Dedicate one hour per week. No interruptions. No multitasking.',
      'At the end of each session, write one sentence about what you produced.',
    ],
    output: 'One project. One protected hour weekly. Tangible output each session.',
  },

  /* ─── Week 11: Subconscious Mind ─── */

  'Affirmation Repetition': {
    name: 'Affirmation Repetition',
    slug: 'affirmation-repetition',
    oneLine: 'Repeat the same words until the mind stops arguing and starts building.',
    body: "The subconscious does not judge — it accepts. Whatever you feed it with repetition and feeling becomes its operating material. Hill warned that if you do not feed it deliberately, it will feed on whatever drifts in — news, complaints, worries. Repetition is the mechanism. Feeling is the fuel.",
    steps: [
      'Choose three affirmations that directly counter your most common negative thought.',
      'Say each one ten times, morning and evening. Out loud.',
      'Add feeling: say it as if it is already true. The body learns faster than the mind.',
      'If one affirmation feels hollow, rewrite it. The words must fit you.',
    ],
    output: 'Three affirmations. Twenty repetitions daily. A clean signal to your own operating system.',
  },

  'Negativity Detox': {
    name: 'Negativity Detox',
    slug: 'negativity-detox',
    oneLine: 'For 30 days, stop consuming what poisons your thinking. Then decide if you want it back.',
    body: "Hill was blunt: the mind accepts whatever you feed it. Negative news, gossip, complaint loops, doom-scrolling — these are not harmless. They are input. Your subconscious cannot filter them out later. A detox is not about morality. It is about hygiene. You would not drink dirty water. Why consume dirty information?",
    steps: [
      'For 30 days: no negative news, no gossip, no complaint conversations.',
      'Replace each eliminated source with a positive one — a book, a podcast, a conversation.',
      'When you catch yourself complaining, stop mid-sentence. Say nothing instead.',
      'At day 30, evaluate: do you want any of it back? Most people do not.',
    ],
    output: '30 days of clean input. One honest evaluation at the end.',
  },

  'Thought Monitoring': {
    name: 'Thought Monitoring',
    slug: 'thought-monitoring',
    oneLine: 'Catch the thought before it becomes a belief. You have about three seconds.',
    body: 'Hill teaches that the subconscious accepts any thought you plant, positive or negative. A thought repeated becomes a belief. A belief acted upon becomes a habit. The intervention must happen early — at the thought stage, not the habit stage. Monitoring is the skill of catching a thought before it takes root.',
    steps: [
      'Wear a band or bracelet. Each time you catch a negative or self-limiting thought, switch wrists.',
      'At the end of the day, count the switches. That is your baseline.',
      'Each day, aim for a lower number. Awareness alone reduces frequency.',
      'When you catch a thought, immediately replace it with its positive opposite. Do not leave a vacuum.',
    ],
    output: 'A daily count of caught thoughts. A replacement practice. Decreasing baseline over time.',
  },

  /* ─── Week 12: The Brain ─── */

  'Broadcasting Practice': {
    name: 'Broadcasting Practice',
    slug: 'broadcasting-practice',
    oneLine: 'Your mind is a transmitter. What frequency are you on right now?',
    body: 'Hill describes the brain as both a broadcasting and receiving station. Thought vibrations carry a frequency: fear vibrates low, faith vibrates high. What you broadcast is what you attract. This is not mysticism — it is attention mechanics. What you focus on, you move toward. Broadcasting practice makes the frequency conscious.',
    steps: [
      'Each morning, set your mental frequency: "I am broadcasting [your want]. I am receiving [what it requires]."',
      'Set three random alarms. When they ring, check your frequency. Are you broadcasting your want or your worry?',
      'If you catch yourself on a low frequency, switch it. Say your desire statement once.',
      'At the end of the day, note how many times you consciously switched frequency.',
    ],
    output: 'A daily broadcast set. Three frequency checks. A switching muscle getting stronger.',
  },

  'Vibration Check': {
    name: 'Vibration Check',
    slug: 'vibration-check',
    oneLine: 'Rate your mental state 1–10 three times a day. Low scores are data, not failures.',
    body: 'Hill believed every mental state has a vibrational quality. High vibration (faith, gratitude, clarity) attracts. Low vibration (fear, doubt, resentment) repels. A vibration check is not about staying at 10 all day — that is impossible. It is about noticing when you drop and having a protocol to return.',
    steps: [
      'Set three random alarms throughout the day.',
      'When each rings, rate your vibration 1–10 without judgment.',
      'If below 7, take 60 seconds: breathe, recall your desire, read one sentence of your script.',
      'If below 4, take a walk. Movement shifts vibration faster than thought.',
    ],
    output: 'Three daily readings. A 60-second protocol. A trend line over weeks.',
  },

  'Thought Replacement': {
    name: 'Thought Replacement',
    slug: 'thought-replacement',
    oneLine: 'You cannot delete a thought. You can only replace it with a better one.',
    body: "Hill's mechanism is simple: the mind abhors a vacuum. Trying to 'stop thinking' a negative thought gives it more energy. Replacement works because it gives the mind something to do. Every time you replace a negative thought with its positive opposite, you weaken the neural path of the old and strengthen the new.",
    steps: [
      'When a negative thought arises, acknowledge it. "I notice I am thinking X."',
      'Say "Cancel" — silently or aloud.',
      'Immediately replace it with its positive opposite. Write it if you need to.',
      'Do not judge yourself for having the thought. Judge only whether you keep it.',
    ],
    output: 'A practiced replacement reflex. Each replacement strengthens the new path.',
  },

  /* ─── Week 13: Sixth Sense ─── */

  'Meditation Practice': {
    name: 'Meditation Practice',
    slug: 'meditation-practice',
    oneLine: 'Quiet the conscious mind so the sixth sense has room to speak.',
    body: "Hill calls the sixth sense the apex of the philosophy — the faculty that receives hunches, inspirations, and flashes of insight that feel like they came from somewhere else. It cannot be forced. It can only be made room for. Meditation is that room: ten minutes of listening instead of broadcasting.",
    steps: [
      'Sit in silence for ten minutes. No music. No guidance.',
      'Breathe naturally. When thoughts arise, let them pass without engaging.',
      'If an insight arrives, open your eyes and write it down. Then return to silence.',
      'Do this daily for 30 days before deciding whether anything is happening.',
    ],
    output: 'Ten minutes of silence daily. A growing record of what arrives in that space.',
  },

  'Intuition Journal': {
    name: 'Intuition Journal',
    slug: 'intuition-journal',
    oneLine: 'Hunches are data from a part of your mind that works faster than your reasoning.',
    body: 'Hill found that great ideas often arrive as hunches. Most people dismiss them as random. An intuition journal treats them as data worth capturing. Over time, patterns emerge: which kinds of hunches were right, which were noise, and which situations sharpen your intuitive signal.',
    steps: [
      'Keep a notebook or note accessible at all times.',
      'When a hunch, gut feeling, or sudden insight arrives, write it immediately — date, time, and situation.',
      'Do not judge it. Do not explain it. Just record it.',
      'Review the journal weekly. Highlight accurate hunches. Learn the conditions that produced them.',
    ],
    output: 'A dated log of hunches. A weekly review. A pattern emerging over weeks.',
  },

  'Integration Review': {
    name: 'Integration Review',
    slug: 'integration-review',
    oneLine: 'The thirteen principles are not a checklist. They are a system. Review it as one.',
    body: "Hill designed the principles to work together. Desire without planning is a wish. Faith without action is a feeling. The sixth sense without the other twelve is unreachable. An integration review examines how each principle is performing and where the system has a weak link. The chain is only as strong as the least-practiced principle.",
    steps: [
      'Rate each of the 13 principles 1–10: how consistently are you applying it this week?',
      'Identify your three lowest scores. Those are your leverage points.',
      'For each low score, choose one exercise from that week to re-run this week.',
      'Write one sentence: what changed from the start of the 13 weeks to now?',
    ],
    output: 'A 13-principle scorecard. Three exercises selected. One sentence of delta.',
  },
}
