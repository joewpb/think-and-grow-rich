import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { BookOpen, FileText, Headphones, X } from 'lucide-react'
import Layout from '../components/Layout'

const easeExpoOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ------------------------------------------------------------------ */
/*  EXERCISE DETAIL DATA                                               */
/* ------------------------------------------------------------------ */

interface ExerciseDetail {
  name: string
  principle: string
  description: string
  purpose: string
  method: string
  frequency: string
}

const exerciseDetails: Record<string, ExerciseDetail> = {
  // Week 1 — Desire
  "Desire Statement": {
    name: "Desire Statement",
    principle: "Desire",
    description: "Hill writes that 'the starting point of all achievement is desire.' A weak desire brings weak results. You must write down the exact amount of money you desire, the exact date you will possess it, and what you will give in return. This crystallizes vague wishing into burning, definite purpose.",
    purpose: "To transform a vague wish into a definite, measurable goal that engages your subconscious mind.",
    method: "Take a sheet of paper and write: (1) The exact amount of money you desire. (2) The exact date by which you will possess it. (3) What you will give in return. (4) A definite plan for achieving it. Be specific — not 'lots of money' but '$100,000 by December 31, 2026.'",
    frequency: "Once to create the statement, then read it aloud twice daily."
  },
  "Visualization": {
    name: "Visualization",
    principle: "Desire",
    description: "Desire must be backed by imagination. Hill urges you to 'see' yourself already in possession of your goal. The subconscious mind cannot distinguish between a vividly imagined experience and a real one. Close your eyes and build a complete sensory picture.",
    purpose: "To impress your desire upon the subconscious mind using vivid mental imagery.",
    method: "Find a quiet place. Close your eyes and create a detailed mental scene of yourself already in possession of your goal. What do you see? What do you hear? What do you feel? Engage all five senses. Hold this image for 5–10 minutes.",
    frequency: "Daily, preferably morning and evening."
  },
  "Burning Desire Test": {
    name: "Burning Desire Test",
    principle: "Desire",
    description: "Hill distinguishes between 'wishing' and 'burning desire.' A burning desire is an obsession — you think about it upon waking and before sleeping. This test determines whether your desire is strong enough to carry you past every obstacle.",
    purpose: "To test whether your desire has the intensity required to achieve your goal.",
    method: "Answer honestly: Does the thought of achieving your goal excite you more than anything else? Have you taken at least one concrete step today? Would you persist if everyone told you it was impossible? If you answered 'no' to any, your desire needs strengthening.",
    frequency: "Weekly self-check for the first month."
  },

  // Week 2 — Faith
  "Affirmation Writing": {
    name: "Affirmation Writing",
    principle: "Faith",
    description: "Faith is 'the head chemist of the mind.' Hill teaches that faith can be developed by repeating affirmations with emotional conviction. Writing them reinforces their power — the physical act of writing engages the mind more deeply than thinking alone.",
    purpose: "To program the subconscious with success-oriented beliefs through written repetition.",
    method: "Write your goal statement ten times each morning, each time with full emotional conviction. As you write, feel the joy of already possessing what you desire. The repetition and emotion together build faith.",
    frequency: "Daily, 10 repetitions each morning."
  },
  "Faith Builder": {
    name: "Faith Builder",
    principle: "Faith",
    description: "Hill states that 'faith is the eternal elixir which gives life, power, and action to the impulse of thought.' Faith grows through use — each small success builds confidence for the next challenge. This exercise creates a positive feedback loop.",
    purpose: "To systematically build faith through small wins and positive reinforcement.",
    method: "Each evening, write three things you succeeded at that day — no matter how small. Read them aloud. Over time, this trains your mind to expect success rather than fear failure. Your faith grows with every entry.",
    frequency: "Daily, every evening."
  },
  "Belief Audit": {
    name: "Belief Audit",
    principle: "Faith",
    description: "Hill warns that 'the subconscious mind accepts any thought you plant in it — positive or negative.' A belief audit identifies the self-limiting beliefs that contradict your desire. These hidden doubts must be rooted out.",
    purpose: "To identify and eliminate limiting beliefs that undermine your faith.",
    method: "Write down every doubt or fear about achieving your goal. For each one, ask: 'Is this absolutely true? What evidence contradicts it?' Replace each limiting belief with an empowering truth. Burn or shred the doubts.",
    frequency: "Once as an initial deep-clean, then monthly maintenance."
  },

  // Week 3 — Auto-Suggestion
  "Auto-Suggestion Script": {
    name: "Auto-Suggestion Script",
    principle: "Auto-Suggestion",
    description: "Auto-suggestion is 'the agency of control through which an individual may voluntarily feed the subconscious mind.' Hill teaches that the subconscious accepts any thought you repeat with feeling. Your script must be emotional and precise.",
    purpose: "To create a powerful script that reprograms your subconscious mind for success.",
    method: "Write a one-minute script in first person, present tense, as if your goal is already achieved. Use emotionally charged words. Read it aloud with intensity and belief. Example: 'I am grateful that as of December 31, 2026, I earn $10,000 monthly...'",
    frequency: "Create once, then read aloud twice daily."
  },
  "Mirror Practice": {
    name: "Mirror Practice",
    principle: "Auto-Suggestion",
    description: "Hill describes looking into a mirror as a powerful technique for auto-suggestion. Speaking your affirmations while looking into your own eyes creates a heightened state of focus and conviction that reaches the subconscious more directly.",
    purpose: "To amplify auto-suggestion using eye contact and vocal projection.",
    method: "Stand before a mirror. Look directly into your own eyes. Speak your desire statement aloud with full conviction. Project your voice. Repeat three times. Notice any resistance — that's where the work is.",
    frequency: "Daily, each morning."
  },
  "Voice Recording": {
    name: "Voice Recording",
    principle: "Auto-Suggestion",
    description: "Hill understood that hearing your own voice repeatedly reinforces auto-suggestion. Recording and listening to your statement allows the subconscious to absorb it during its most receptive states — just before sleep and upon waking.",
    purpose: "To saturate the subconscious with your desire during receptive states.",
    method: "Record your desire statement in your own voice. Add background music if it helps. Listen to it as you fall asleep (when the subconscious is most receptive) and again when you wake. Your own voice carries unique power.",
    frequency: "Twice daily — before sleep and upon waking."
  },

  // Week 4 — Specialized Knowledge
  "Skills Audit": {
    name: "Skills Audit",
    principle: "Specialized Knowledge",
    description: "Hill declares that 'knowledge is only potential power. It becomes power only when organized into a definite plan of action.' General knowledge is useless. You need specialized knowledge in your field to achieve extraordinary results.",
    purpose: "To assess your current specialized knowledge against what your goal requires.",
    method: "List every skill and knowledge area you currently possess. Beside each, rate your proficiency (1-10). Now list the knowledge your goal demands. Identify gaps. Your specialized knowledge is your edge — sharpen it.",
    frequency: "Quarterly review and update."
  },
  "Learning Plan": {
    name: "Learning Plan",
    principle: "Specialized Knowledge",
    description: "Hill studied 500+ successful people and found that they never stopped learning. Specialized knowledge must be acquired deliberately. A learning plan ensures you don't wander — you progress systematically toward mastery.",
    purpose: "To create a structured plan for acquiring the knowledge you need.",
    method: "For each knowledge gap identified in your Skills Audit, create a learning path: books to read, courses to take, mentors to find, experiences to gain. Assign deadlines. Treat learning as seriously as earning.",
    frequency: "Create quarterly. Review monthly."
  },
  "Knowledge Gap Analysis": {
    name: "Knowledge Gap Analysis",
    principle: "Specialized Knowledge",
    description: "Hill observed that most people fail because they rely on opinions rather than organized facts. A gap analysis bridges the distance between where you are and where you need to be. It reveals the specific knowledge that stands between you and your goal.",
    purpose: "To identify the precise knowledge that separates you from your goal.",
    method: "Draw three columns: 'What I Know,' 'What I Need to Know,' 'How to Bridge the Gap.' Be brutally honest. The gaps you've been avoiding are usually the most important ones. Start with the biggest gap first.",
    frequency: "Once as foundation, then quarterly updates."
  },

  // Week 5 — Imagination
  "Vision Board": {
    name: "Vision Board",
    principle: "Imagination",
    description: "Hill calls imagination 'the workshop wherein are fashioned all plans created by man.' A vision board makes abstract goals concrete. Images bypass the conscious mind and speak directly to the subconscious, making your desire tangible.",
    purpose: "To create a visual representation of your goal that feeds your imagination daily.",
    method: "Gather images, words, and symbols that represent your goal. Arrange them on a board or digital canvas. Place it where you'll see it every day. Spend one minute each day imagining yourself living what you see.",
    frequency: "Create once. View daily."
  },
  "Creative Exercise": {
    name: "Creative Exercise",
    principle: "Imagination",
    description: "Hill identifies two forms of imagination: synthetic (rearranging existing ideas) and creative (tapping into infinite intelligence). Both can be strengthened, like a muscle. This exercise trains creative imagination through deliberate practice.",
    purpose: "To strengthen your creative imagination through structured practice.",
    method: "Choose a problem you're facing. Set a timer for 10 minutes. Write down every possible solution — no judgment, no editing, no matter how absurd. Quantity over quality. You're training your mind to generate freely.",
    frequency: "3-4 times per week."
  },
  "Synthetic vs Creative Test": {
    name: "Synthetic vs Creative Test",
    principle: "Imagination",
    description: "Hill teaches that synthetic imagination rearranges existing knowledge while creative imagination draws from something greater. Knowing which mode you're in helps you leverage the right one for the task at hand.",
    purpose: "To distinguish when you're using synthetic vs. creative imagination.",
    method: "For each idea you have this week, ask: 'Am I rearranging something that already exists (synthetic), or does this feel genuinely new (creative)?' Record both types. Practice shifting from synthetic to creative by asking 'What if there are no constraints?'",
    frequency: "Track for one week, then use as needed."
  },

  // Week 6 — Organized Planning
  "One-Page Plan": {
    name: "One-Page Plan",
    principle: "Organized Planning",
    description: "Hill warns that 'no plan is perfect. But a flawed plan executed today is infinitely better than a perfect plan executed never.' A one-page plan forces clarity. If you can't explain your plan on one page, it's too complicated.",
    purpose: "To condense your strategy into a single, actionable page.",
    method: "On one page: (1) Your definite goal with deadline. (2) Top 3 actions this month. (3) Resources needed. (4) Potential obstacles. (5) Your mastermind allies. Keep it visible. Revise as you learn. Action beats perfection.",
    frequency: "Create once. Review and revise weekly."
  },
  "Mastermind Pitch": {
    name: "Mastermind Pitch",
    principle: "Organized Planning",
    description: "Hill's mastermind principle states that 'no two minds ever come together without creating a third, invisible force.' A mastermind pitch helps you recruit allies who will strengthen your plans and hold you accountable.",
    purpose: "To prepare and deliver a compelling invitation to join your mastermind group.",
    method: "Write a 2-minute pitch: (1) Your goal and why it matters. (2) What you bring to the group. (3) What you're looking for in members. (4) Your proposed meeting structure. Practice it. Then invite three people this week.",
    frequency: "Once for preparation. Use to recruit members."
  },
  "Deadline Setting": {
    name: "Deadline Setting",
    principle: "Organized Planning",
    description: "Hill says 'a goal is a dream with a deadline.' Without a deadline, a goal is a wish. Deadlines create urgency, activate your mind's problem-solving abilities, and prevent procrastination from derailing your plans.",
    purpose: "To assign specific deadlines to every step of your plan.",
    method: "Take your one-page plan and assign a specific date to every action item. Break large tasks into weekly chunks. Put them in your calendar. Treat each deadline as sacred. Miss one? Reset immediately — don't abandon the plan.",
    frequency: "Monthly planning session."
  },

  // Week 7 — Decision
  "Decision Journal": {
    name: "Decision Journal",
    principle: "Decision",
    description: "Hill found that successful people 'reach decisions promptly and change them slowly, if at all.' A decision journal captures your reasoning, making you more deliberate and less reactive. It trains the habit of decisive thinking.",
    purpose: "To record and learn from every major decision you make.",
    method: "For each significant decision, write: (1) The decision. (2) Your reasoning. (3) Alternatives considered. (4) Expected outcome. (5) Actual outcome (review later). Patterns emerge — you'll learn when you decide well and when you hesitate.",
    frequency: "Weekly review of decisions made."
  },
  "Procrastination Audit": {
    name: "Procrastination Audit",
    principle: "Decision",
    description: "Hill calls procrastination 'one of the most common causes of failure.' It is the opposite of decision — a slow poison that kills initiative. A procrastination audit shines a light on where you're stalling and why.",
    purpose: "To identify patterns of procrastination and their root causes.",
    method: "List every task you've been putting off for more than a week. Next to each, write why: fear of failure, fear of criticism, lack of clarity, or perfectionism. Pick the smallest item and complete it in the next 24 hours. Momentum is the cure.",
    frequency: "Weekly audit. Daily micro-actions."
  },
  "24-Hour Challenge": {
    name: "24-Hour Challenge",
    principle: "Decision",
    description: "Hill observed that opportunity often arrives quietly and vanishes quickly. The ability to make a decision within 24 hours separates achievers from dreamers. This challenge builds your decision-making muscle.",
    purpose: "To build the habit of prompt decision-making.",
    method: "Each day, identify one decision you've been postponing. Set a timer for 24 hours. Before it expires, make the decision and act on it. It doesn't have to be perfect — it has to be made. Speed of execution compounds.",
    frequency: "Daily for 21 days to build the habit."
  },

  // Week 8 — Persistence
  "Persistence Tracker": {
    name: "Persistence Tracker",
    principle: "Persistence",
    description: "Hill declares that 'a quitter never wins — and a winner never quits.' Persistence is the sustained effort that creates faith. A tracker makes your effort visible, and what gets measured gets maintained.",
    purpose: "To track your daily persistent actions toward your goal.",
    method: "Create a simple tracker: each day you take at least one action toward your goal, mark it. Use a wall calendar, a spreadsheet, or an app. Don't break the chain. If you miss a day, don't miss two. Consistency compounds.",
    frequency: "Daily tracking."
  },
  "Restart a Goal": {
    name: "Restart a Goal",
    principle: "Persistence",
    description: "Hill found that most people fail 'just when they are closest to success.' Revisiting an abandoned goal is an act of persistence. The lessons from past attempts are not losses — they are tuition for your next attempt.",
    purpose: "To reclaim a goal you abandoned and restart it with new knowledge.",
    method: "Identify one goal you gave up on. Write what you learned from the attempt. Determine what you would do differently. Recommit to it with a specific daily action, no matter how small. The restart IS the victory.",
    frequency: "As needed, but at most one restart per quarter."
  },
  "Obstacle Plan": {
    name: "Obstacle Plan",
    principle: "Persistence",
    description: "Hill teaches that every success is preceded by temporary defeat. Expecting obstacles removes their power to surprise you. An obstacle plan uses the 'if-then' technique — when X happens, I will do Y.",
    purpose: "To anticipate obstacles and prepare responses in advance.",
    method: "List every obstacle you might face on the path to your goal. Next to each, write your planned response. 'If I lose motivation, then I will re-read my desire statement.' 'If I face criticism, then I will remember Hill's words.'",
    frequency: "Create once. Review when obstacles arise."
  },

  // Week 9 — Master Mind
  "Group Formation": {
    name: "Group Formation",
    principle: "Master Mind",
    description: "Hill calls the mastermind 'the coordination of knowledge and effort between two or more people for the attainment of a definite purpose.' Forming a group multiplies your individual power exponentially.",
    purpose: "To identify and recruit members for your mastermind group.",
    method: "Identify 3-5 people who share your ambition level and values. They don't need the same goal — they need the same commitment to growth. Invite them to a trial meeting. Explain Hill's mastermind principle. Let them feel the potential.",
    frequency: "One-time formation. Replace members only if necessary."
  },
  "Meeting Structure": {
    name: "Meeting Structure",
    principle: "Master Mind",
    description: "Hill emphasized that mastermind meetings must have a definite purpose and structure. Without structure, meetings become social gatherings. With structure, they become engines of progress.",
    purpose: "To create a repeatable framework for productive mastermind meetings.",
    method: "Design a 60-minute meeting: (1) 5 min — Check-in and wins. (2) 20 min — Member A presents their challenge. (3) 20 min — Group brainstorming and solutions. (4) 10 min — Commitments for next week. (5) 5 min — Close. Rotate the presenter each week.",
    frequency: "Weekly, same day and time."
  },
  "Accountability Pair": {
    name: "Accountability Pair",
    principle: "Master Mind",
    description: "Hill understood that we rise to the level of our peers. An accountability pair within your mastermind creates a deeper bond. Your partner knows your goal and expects your weekly progress report.",
    purpose: "To pair with one mastermind member for weekly accountability.",
    method: "Choose one person from your mastermind group as your accountability partner. Exchange goals and weekly action plans. Check in mid-week (5 minutes) and before each mastermind meeting. Be honest — if you didn't act, say so.",
    frequency: "Weekly check-ins."
  },

  // Week 10 — Sex Transmutation
  "Energy Audit": {
    name: "Energy Audit",
    principle: "Sex Transmutation",
    description: "Hill calls sex 'the most powerful human desire' and teaches that its energy can be channeled into creative and productive work. An energy audit reveals where this powerful force is currently flowing — and where it's being wasted.",
    purpose: "To assess where your creative energy is currently going.",
    method: "Track your energy for one week. When do you feel most alive and focused? Where does your mind wander when unoccupied? How much time goes to entertainment vs. creation? The answers reveal where your transmuted energy is flowing.",
    frequency: "One-week baseline audit, then monthly check-ins."
  },
  "Creative Channeling": {
    name: "Creative Channeling",
    principle: "Sex Transmutation",
    description: "Hill states that 'the greatest artists, musicians, poets, and leaders all achieved greatness through transmutation.' Channeling creative energy requires deliberate direction — turning passion into production.",
    purpose: "To redirect creative energy into your most important work.",
    method: "Identify your peak creative hours each day. During those hours, work exclusively on your most important goal. No distractions. When you feel creative restlessness, channel it into your work. Passion becomes productivity.",
    frequency: "Daily during peak creative hours."
  },
  "Passion Project": {
    name: "Passion Project",
    principle: "Sex Transmutation",
    description: "Hill observed that highly successful people maintain a project that excites them deeply. This passion project becomes the vessel for transmuted creative energy. It must be meaningful enough to command your full creative force.",
    purpose: "To create a project that channels your deepest creative drive.",
    method: "Identify one project that excites you so much you lose track of time. It should relate to your definite purpose. Dedicate one hour per week to this project — no interruptions, no guilt. This is your transmutation practice.",
    frequency: "Weekly, one focused hour."
  },

  // Week 11 — Subconscious Mind
  "Affirmation Repetition": {
    name: "Affirmation Repetition",
    principle: "Subconscious Mind",
    description: "Hill teaches that 'the subconscious mind will not remain idle — if you fail to plant desires in it, it will feed upon neglect.' Repetition is the mechanism. Affirmations repeated with feeling eventually become beliefs.",
    purpose: "To program the subconscious mind with positive, success-oriented thoughts.",
    method: "Choose 3-5 positive affirmations aligned with your goal. Repeat each one 10 times, morning and evening. Say them with emotion — the subconscious responds to feeling, not just words. 'I am worthy of success. I attract opportunity.'",
    frequency: "Twice daily, morning and evening."
  },
  "Negativity Detox": {
    name: "Negativity Detox",
    principle: "Subconscious Mind",
    description: "Hill warns that the subconscious accepts whatever you feed it — positive or negative. A negativity detox removes the sources of toxic input that poison your mental garden. What you don't consume can't infect you.",
    purpose: "To eliminate negative influences that contaminate your subconscious.",
    method: "For 30 days: (1) No negative news. (2) No complaining. (3) No gossip. (4) No social media doom-scrolling. Replace each with positive input — uplifting books, podcasts, or conversations. Notice how your mental landscape shifts.",
    frequency: "30-day initial detox. Then maintain boundaries."
  },
  "Thought Monitoring": {
    name: "Thought Monitoring",
    principle: "Subconscious Mind",
    description: "Hill teaches that 'your subconscious mind accepts and acts upon any thought you plant in it.' Most people let negative thoughts run unchecked. Monitoring catches them at the gate before they take root.",
    purpose: "To catch and replace negative thoughts before they implant in the subconscious.",
    method: "Wear a bracelet or band. Each time you catch yourself thinking a negative or self-limiting thought, switch it to the other wrist. At day's end, count the switches. Each switch is a caught thought. The goal: fewer switches over time.",
    frequency: "Daily, all day. Review each evening."
  },

  // Week 12 — The Brain
  "Broadcasting Practice": {
    name: "Broadcasting Practice",
    principle: "The Brain",
    description: "Hill describes the brain as 'both a broadcasting and receiving station for the vibration of thought.' What you broadcast, you attract. Broadcasting practice trains you to transmit the frequency of your desire, not your fear.",
    purpose: "To consciously broadcast the thoughts and energy that attract what you desire.",
    method: "Each morning, set your mental frequency: 'I am broadcasting success, abundance, and opportunity.' Throughout the day, when you catch yourself broadcasting doubt, consciously switch your frequency. Your thoughts are your transmission.",
    frequency: "Daily, with check-ins every 2-3 hours."
  },
  "Vibration Check": {
    name: "Vibration Check",
    principle: "The Brain",
    description: "Hill's concept of thought vibrations means every mental state carries a specific frequency. Fear vibrates low. Faith vibrates high. A vibration check helps you maintain the frequency that attracts what you want.",
    purpose: "To regularly assess and adjust your mental vibration throughout the day.",
    method: "Set 3 alarms at random times. When they ring, pause and rate your vibration 1-10: 1 = fear/doubt, 10 = faith/confidence. If below 7, take 60 seconds to elevate it — breathe, recall your goal, read an affirmation.",
    frequency: "3 random checks daily."
  },
  "Thought Replacement": {
    name: "Thought Replacement",
    principle: "The Brain",
    description: "Hill teaches that you cannot simply 'stop' a negative thought — you must replace it with a positive one. The brain abhors a vacuum. Thought replacement gives your mind something better to focus on.",
    purpose: "To replace negative thoughts with empowering ones immediately.",
    method: "When a negative thought arises, immediately: (1) Acknowledge it without judgment. (2) Say 'Cancel.' (3) Replace it with its positive opposite. 'I can't afford this' becomes 'How can I create the resources to afford this?'",
    frequency: "On-demand, every time a negative thought appears."
  },

  // Week 13 — Sixth Sense
  "Meditation Practice": {
    name: "Meditation Practice",
    principle: "Sixth Sense",
    description: "Hill calls the sixth sense 'that portion of the subconscious mind which has been referred to as the Creative Imagination.' It is the apex of the philosophy. Meditation quiets the conscious mind so the sixth sense can speak.",
    purpose: "To quiet the conscious mind and create space for intuitive insights.",
    method: "Sit in silence for 10 minutes. No music, no guidance. Simply breathe and observe. If thoughts arise, let them pass without engaging. Over time, insights will emerge from a deeper place — these are whispers from the sixth sense.",
    frequency: "Daily, 10 minutes minimum."
  },
  "Intuition Journal": {
    name: "Intuition Journal",
    principle: "Sixth Sense",
    description: "Hill found that great ideas often arrive as hunches, feelings, or sudden inspirations. Most people dismiss these. An intuition journal captures them. Over time, patterns emerge that prove the reality of the sixth sense.",
    purpose: "To record and validate intuitive insights and hunches.",
    method: "Keep a small notebook or digital note. Whenever you have a hunch, gut feeling, or sudden inspiration, write it immediately — including the date, time, and circumstances. Review weekly. You'll discover how often your intuition was right.",
    frequency: "On-demand, whenever an insight arrives. Review weekly."
  },
  "Integration Review": {
    name: "Integration Review",
    principle: "Sixth Sense",
    description: "The sixth sense only awakens after mastering the other 12 principles. An integration review brings all 13 together — examining how desire, faith, auto-suggestion, and the rest work as a unified system in your life.",
    purpose: "To review how all 13 principles work together in your life.",
    method: "For each of the 13 principles, rate your mastery 1-10. Identify your weakest three. Create a 30-day plan to strengthen them. Reflect: Which principle created the most shift? Which still feels elusive? The system only works when all parts engage.",
    frequency: "Quarterly — at the end of each 13-week cycle."
  }
}

/* ------------------------------------------------------------------ */
/*  RESOURCE DETAIL DATA                                                */
/* ------------------------------------------------------------------ */

interface ResourceDetail {
  title: string
  icon: typeof BookOpen
  category: string
  items: { name: string; description: string; type: string }[]
}

const resourceDetails: ResourceDetail[] = [
  {
    title: 'Study Guides',
    icon: BookOpen,
    category: 'Study Guides',
    items: [
      {
        name: 'Chapter summaries',
        description: 'Concise summaries of each chapter of Think and Grow Rich, capturing the key principles and actionable insights in under 500 words per chapter.',
        type: 'PDF'
      },
      {
        name: 'Key concept explanations',
        description: 'Deep dives into the core concepts — burning desire, faith, mastermind, sex transmutation, and the sixth sense — with historical context from Hill\'s original research.',
        type: 'PDF'
      },
      {
        name: 'Principle deep-dives',
        description: 'Each of the 13 principles examined in depth: the original text, modern applications, case studies from Hill\'s 500+ interviews, and reflection questions.',
        type: 'PDF'
      },
      {
        name: 'Vocabulary definitions',
        description: 'Hill\'s unique terminology defined in plain language — including terms like definite major purpose, auto-suggestion, thought vibration, and infinite intelligence.',
        type: 'Reference'
      }
    ]
  },
  {
    title: 'Worksheets',
    icon: FileText,
    category: 'Worksheets',
    items: [
      {
        name: 'Desire statements',
        description: 'Templated worksheets for crafting your Definite Major Purpose statement following Hill\'s six-step method for turning desire into reality.',
        type: 'Template'
      },
      {
        name: 'Affirmation templates',
        description: 'Structured templates for creating personalized affirmations that align with Hill\'s auto-suggestion principles, with examples for each of the 13 principles.',
        type: 'Template'
      },
      {
        name: 'Progress trackers',
        description: 'Daily and weekly trackers for monitoring your persistence, thought patterns, and progress through the 13-week study plan.',
        type: 'Tracker'
      },
      {
        name: 'Self-analysis questionnaires',
        description: 'Hill\'s own self-analysis questions adapted for modern use — designed to reveal hidden fears, limiting beliefs, and areas for growth.',
        type: 'Assessment'
      }
    ]
  },
  {
    title: 'Audio Summaries',
    icon: Headphones,
    category: 'Audio Summaries',
    items: [
      {
        name: '15-minute chapter recaps',
        description: 'Audio summaries of each chapter, perfect for listening during commutes or workouts. Each recap distills the chapter into its essential teachings.',
        type: 'Audio'
      },
      {
        name: 'Guided visualization audio',
        description: 'Narrated visualization sessions that guide you through seeing and feeling your already-achieved goal, based on Hill\'s imagination and faith principles.',
        type: 'Audio'
      },
      {
        name: 'Auto-suggestion recordings',
        description: 'Pre-recorded affirmation tracks aligned with each of the 13 principles. Use them as your daily auto-suggestion practice.',
        type: 'Audio'
      }
    ]
  }
]

/* ------------------------------------------------------------------ */
/*  WEEK DATA                                                          */
/* ------------------------------------------------------------------ */

const weeks = [
  { week: 1, principle: 'Desire', reading: 'Ch. 1–2', exercises: ['Desire Statement', 'Visualization', 'Burning Desire Test'], prompt: 'What do you want so badly you can almost taste it?' },
  { week: 2, principle: 'Faith', reading: 'Ch. 3', exercises: ['Affirmation Writing', 'Faith Builder', 'Belief Audit'], prompt: 'What would you attempt if you knew you could not fail?' },
  { week: 3, principle: 'Auto-Suggestion', reading: 'Ch. 4', exercises: ['Auto-Suggestion Script', 'Mirror Practice', 'Voice Recording'], prompt: 'What story do you tell yourself every day?' },
  { week: 4, principle: 'Specialized Knowledge', reading: 'Ch. 5', exercises: ['Skills Audit', 'Learning Plan', 'Knowledge Gap Analysis'], prompt: 'What specific knowledge stands between you and your goal?' },
  { week: 5, principle: 'Imagination', reading: 'Ch. 6', exercises: ['Vision Board', 'Creative Exercise', 'Synthetic vs Creative Test'], prompt: 'Can you see, feel, and touch your desired future?' },
  { week: 6, principle: 'Organized Planning', reading: 'Ch. 7', exercises: ['One-Page Plan', 'Mastermind Pitch', 'Deadline Setting'], prompt: 'What is your goal with a deadline attached?' },
  { week: 7, principle: 'Decision', reading: 'Ch. 8', exercises: ['Decision Journal', 'Procrastination Audit', '24-Hour Challenge'], prompt: 'What decision have you been avoiding? Make it this week.' },
  { week: 8, principle: 'Persistence', reading: 'Ch. 9', exercises: ['Persistence Tracker', 'Restart a Goal', 'Obstacle Plan'], prompt: 'What goal did you give up on too soon?' },
  { week: 9, principle: 'Master Mind', reading: 'Ch. 10', exercises: ['Group Formation', 'Meeting Structure', 'Accountability Pair'], prompt: 'Who are your three mastermind partners?' },
  { week: 10, principle: 'Sex Transmutation', reading: 'Ch. 11', exercises: ['Energy Audit', 'Creative Channeling', 'Passion Project'], prompt: 'Where is your most powerful energy going? Redirect it.' },
  { week: 11, principle: 'Subconscious Mind', reading: 'Ch. 12', exercises: ['Affirmation Repetition', 'Negativity Detox', 'Thought Monitoring'], prompt: 'What toxic thoughts have you allowed to take root?' },
  { week: 12, principle: 'The Brain', reading: 'Ch. 13', exercises: ['Broadcasting Practice', 'Vibration Check', 'Thought Replacement'], prompt: 'What signal are you broadcasting to the world?' },
  { week: 13, principle: 'Sixth Sense', reading: 'Ch. 14–15', exercises: ['Meditation Practice', 'Intuition Journal', 'Integration Review'], prompt: 'How does it feel to have mastered all 12 principles?' }
]

const dailyPractices = [
  { time: 'Morning', name: 'Read Your Statement', desc: 'Read your written desire statement aloud immediately upon waking, with full faith and visualization.' },
  { time: 'Morning', name: 'Plan Your Day', desc: 'Organize your day around actions that move you toward your definite purpose.' },
  { time: 'Throughout', name: 'Monitor Your Thoughts', desc: 'Catch negative thoughts and immediately replace them with positive affirmations.' },
  { time: 'Evening', name: 'Study & Reflect', desc: 'Read one chapter or study guide section. Journal your insights and applications.' },
  { time: 'Evening', name: 'Read Your Statement Again', desc: 'Read your written statement aloud once more before sleep. Let your subconscious work overnight.' },
]

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  EXERCISE DETAIL MODAL                                               */
/* ------------------------------------------------------------------ */

function ExerciseModal({ exercise, onClose }: { exercise: ExerciseDetail; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        style={{ backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: easeExpoOut }}
          className="relative max-h-[85vh] w-full max-w-[600px] overflow-y-auto border border-accent-gold bg-midnight-blue p-8"
          style={{ borderRadius: '4px' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-steel-blue transition-colors hover:text-accent-gold"
            aria-label="Close exercise details"
          >
            <X size={24} />
          </button>

          {/* Principle tag */}
          <span className="mb-4 inline-block font-inter text-[12px] font-medium uppercase tracking-[2px] text-accent-gold">
            {exercise.principle}
          </span>

          {/* Title */}
          <h3 className="mb-6 font-playfair text-[28px] font-semibold text-pure-white">
            {exercise.name}
          </h3>

          {/* Description */}
          <div className="mb-6">
            <p className="font-inter text-[16px] leading-[1.7] text-off-white">
              {exercise.description}
            </p>
          </div>

          {/* Purpose */}
          <div className="mb-6 border-l-2 border-accent-gold pl-4">
            <span className="block font-inter text-[12px] font-medium uppercase tracking-[1px] text-accent-gold">
              Purpose
            </span>
            <p className="mt-1 font-inter text-[15px] leading-[1.6] text-off-white">
              {exercise.purpose}
            </p>
          </div>

          {/* Method */}
          <div className="mb-6">
            <span className="block font-inter text-[12px] font-medium uppercase tracking-[1px] text-accent-gold">
              Method
            </span>
            <p className="mt-1 font-inter text-[15px] leading-[1.6] text-off-white">
              {exercise.method}
            </p>
          </div>

          {/* Frequency */}
          <div className="border-t border-slate-blue pt-4">
            <span className="block font-inter text-[12px] font-medium uppercase tracking-[1px] text-accent-gold">
              Frequency
            </span>
            <p className="mt-1 font-inter text-[15px] text-off-white">
              {exercise.frequency}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------ */
/*  RESOURCE DETAIL MODAL                                               */
/* ------------------------------------------------------------------ */

function ResourceModal({ item, category, onClose }: { item: { name: string; description: string; type: string }; category: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        style={{ backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: easeExpoOut }}
          className="relative max-h-[75vh] w-full max-w-[500px] overflow-y-auto border border-accent-gold bg-midnight-blue p-8"
          style={{ borderRadius: '4px' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-steel-blue transition-colors hover:text-accent-gold"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <span className="mb-4 inline-block font-inter text-[12px] font-medium uppercase tracking-[2px] text-accent-gold">
            {category} — {item.type}
          </span>

          <h3 className="mb-4 font-playfair text-[24px] font-semibold text-pure-white">
            {item.name}
          </h3>

          <p className="mb-6 font-inter text-[16px] leading-[1.7] text-off-white">
            {item.description}
          </p>

          <div className="border-t border-slate-blue pt-4">
            <span className="font-inter text-[14px] text-steel-blue">
              This resource will be available for download soon. For now, refer to the relevant exercise in the Weekly Timeline above for detailed instructions.
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 1 — PAGE HEADER                                            */
/* ------------------------------------------------------------------ */

function PageHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const titleWords = '13-WEEK STUDY PLAN'.split(' ')

  return (
    <section
      ref={ref}
      className="relative flex min-h-[50vh] items-center justify-center bg-deep-navy px-6"
    >
      <div className="mx-auto max-w-[1200px] text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-[12px] font-medium uppercase tracking-[3px] text-accent-gold"
        >
          YOUR PATH
        </motion.p>
        <h1 className="mt-4 font-playfair text-[clamp(42px,5vw,72px)] font-bold leading-[1.1] text-pure-white">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.08, ease: easeExpoOut }}
              className="mr-[0.3em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: easeExpoOut }}
          className="mx-auto mt-6 max-w-[600px] font-inter text-[18px] font-light leading-[1.6] text-off-white"
        >
          A structured, week-by-week journey through Think and Grow Rich. Each week covers one principle with reading, exercises, and group discussion.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2, ease: easeExpoOut }}
          className="mx-auto mt-8 h-[1px] w-[80px] origin-center bg-accent-gold"
        />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — WEEKLY TIMELINE                                        */
/* ------------------------------------------------------------------ */

function WeeklyTimeline({ onExerciseClick }: { onExerciseClick: (exercise: ExerciseDetail) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="mb-16 text-center font-playfair text-[36px] font-semibold text-pure-white"
        >
          WEEK BY WEEK
        </motion.h2>

        <div className="relative">
          <svg
            className="absolute left-[28px] top-0 hidden h-full w-[2px] md:block"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#D4AF37"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
            />
          </svg>

          <div className="flex flex-col gap-0">
            {weeks.map((w, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={w.week}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.1,
                    ease: easeExpoOut,
                  }}
                  className="relative mb-8 flex items-start gap-6 pl-0 last:mb-0 md:pl-0"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      ease: easeExpoOut,
                    }}
                    className="z-10 flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center rounded-full bg-accent-gold font-inter text-[20px] font-semibold text-deep-navy"
                  >
                    {w.week}
                  </motion.div>

                  <div className="flex-1 border-b border-slate-blue pb-8">
                    <h3 className="font-playfair text-[24px] font-semibold text-pure-white">
                      {w.principle}
                    </h3>
                    <p className="mt-1 font-inter text-[16px] text-off-white">
                      {w.reading}
                    </p>

                    {/* Exercise tags — now clickable */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {w.exercises.map((ex) => (
                        <button
                          key={ex}
                          onClick={() => {
                            const detail = exerciseDetails[ex]
                            if (detail) onExerciseClick(detail)
                          }}
                          className="cursor-pointer rounded-full bg-midnight-blue px-3 py-1 font-inter text-[12px] font-medium text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-deep-navy"
                        >
                          {ex}
                        </button>
                      ))}
                    </div>

                    <p
                      className="mt-3 font-instrument text-[16px] italic"
                      style={{ color: 'rgba(212,175,55,0.5)' }}
                    >
                      &ldquo;{w.prompt}&rdquo;
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — RESOURCES & MATERIALS                                  */
/* ------------------------------------------------------------------ */

function ResourcesSection({ onResourceClick }: { onResourceClick: (item: { name: string; description: string; type: string }, category: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-warm-white px-6 py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="text-center font-playfair text-[clamp(32px,4vw,48px)] font-semibold text-deep-navy"
        >
          STUDY RESOURCES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: easeExpoOut }}
          className="mx-auto mt-4 max-w-[600px] text-center font-inter text-[18px] font-normal text-charcoal"
        >
          Everything you need to complete the 13-week program
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resourceDetails.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.12,
                  ease: easeExpoOut,
                }}
                className="rounded-[4px] border border-black/[0.08] bg-pure-white p-10"
              >
                <div className="mb-6">
                  <Icon size={48} strokeWidth={1.5} className="text-accent-gold" />
                </div>
                <h3 className="font-playfair text-[24px] font-semibold text-deep-navy">
                  {r.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {r.items.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => onResourceClick(item, r.category)}
                        className="flex w-full items-start gap-2 text-left font-inter text-[16px] text-charcoal transition-colors duration-200 hover:text-accent-gold"
                      >
                        <span className="mt-[0.5em] block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-charcoal transition-colors group-hover:bg-accent-gold" />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — DAILY PRACTICE FRAMEWORK                               */
/* ------------------------------------------------------------------ */

function DailyPractice() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="bg-deep-navy px-6 py-[100px]">
      <div className="mx-auto max-w-[800px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeExpoOut }}
          className="font-playfair text-[36px] font-semibold text-pure-white"
        >
          DAILY PRACTICE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: easeExpoOut }}
          className="mx-auto mt-4 max-w-[600px] font-inter text-[18px] font-light text-off-white"
        >
          Hill&apos;s recommended daily disciplines, practiced by the world&apos;s most successful people
        </motion.p>

        <div className="mt-12 text-left">
          {dailyPractices.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.1,
                ease: easeExpoOut,
              }}
              className="border-b border-slate-blue py-6 last:border-b-0"
            >
              <p className="font-inter text-[14px] font-medium uppercase tracking-[1.5px] text-accent-gold">
                {p.time}
              </p>
              <h3 className="mt-2 font-playfair text-[22px] font-semibold text-pure-white">
                {p.name}
              </h3>
              <p className="mt-2 font-inter text-[16px] text-off-white">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 — CTA BANNER                                             */
/* ------------------------------------------------------------------ */

function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-midnight-blue px-6 py-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeExpoOut }}
        className="mx-auto max-w-[800px] text-center"
      >
        <h2 className="font-playfair text-[clamp(28px,3vw,48px)] font-semibold text-pure-white">
          Ready to Begin?
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] font-inter text-[18px] font-light text-off-white">
          Join the StudyClub community and start your 13-week journey today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/community"
            className="inline-block rounded-[4px] bg-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-deep-navy transition-all duration-300 hover:bg-[#C4A02E] hover:shadow-gold-glow"
          >
            Join the Community
          </Link>
          <Link
            to="/principles"
            className="inline-block rounded-[4px] border border-accent-gold px-8 py-4 font-inter text-[14px] font-medium uppercase tracking-[1px] text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-deep-navy"
          >
            Explore the Principles
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE COMPONENT                                                */
/* ------------------------------------------------------------------ */

export default function StudyPlan() {
  const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null)
  const [selectedResource, setSelectedResource] = useState<{ item: { name: string; description: string; type: string }; category: string } | null>(null)

  return (
    <Layout>
      <PageHeader />
      <WeeklyTimeline onExerciseClick={(ex) => setSelectedExercise(ex)} />
      <ResourcesSection
        onResourceClick={(item, category) => setSelectedResource({ item, category })}
      />
      <DailyPractice />
      <CTABanner />

      {/* Exercise Detail Modal */}
      {selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}

      {/* Resource Detail Modal */}
      {selectedResource && (
        <ResourceModal
          item={selectedResource.item}
          category={selectedResource.category}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </Layout>
  )
}
