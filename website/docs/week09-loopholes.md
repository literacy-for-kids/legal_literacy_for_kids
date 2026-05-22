---
sidebar_position: 9
sidebar_label: "Week 9: Finding and Closing the Edge Cases"
title: "Week 9: Finding and Closing the Edge Cases"
description: "Students learn to identify loopholes as unintended edge cases and practice closing them."
---

# Week 9: Finding and Closing the Edge Cases
*Debugging the Code — Phase 3*

Last week we asked what to do when the letter of a rule disagrees with the intent of a rule. This week we look at what happens when someone notices that gap and tries to use it.

A **loophole** is a way to follow the letter of a rule while completely violating its intent. Loopholes aren't always evil — sometimes they reveal that the rule was poorly written. But when someone finds one and uses it for private advantage, they're effectively saying: *"The rule didn't quite say what it meant, and I'm going to use that gap."*

This week, we put on the hat of the rule-maker. The student gets to write rules, watch other people (you, the facilitator) try to find loopholes, and then **patch** the rules to close those loopholes. It's the legal equivalent of beta-testing code: test the system, then fix the bugs.

---

:::info Facilitator Snapshot
- This week is fun, because it gives the student permission to think like a tester — what's the cleverest way to comply technically while violating the spirit?
- The flip side: closing loopholes is harder than it looks. Every patch creates new edges.
- The key skill: a loophole-resistant rule states its purpose, not just its prohibition. ("No vehicles" is loophole-bait. "Nothing that disturbs the peace of pedestrians" is harder to game.)
- This sets up Week 10, where students see how courts use prior rulings (precedent) to close gaps incrementally.
:::

:::note Ethics Note
We study loopholes to improve rules, not to teach people how to trick others. If the conversation turns into planning how to game a live family or classroom rule, stop and redirect the energy back into repair.
:::

:::tip Quick Navigation
- [Facilitator Preparation](#facilitator-preparation)
- [Guided Session 1: How Loopholes Work](#guided-session-1)
- [Guided Session 2: Patch the Rule](#guided-session-2)
- [Independent Practice](#independent-practice)
:::

## Week at a Glance

| | |
|---|---|
| **Prep time** | ~10 minutes |
| **Materials** | Paper, pencil, the list of loophole scenarios, Case Notes |
| **Key vocabulary** | loophole, patch, anti-circumvention, purpose clause, spirit of the law |
| **Difficulty** | Moderate to Advanced |

## Facilitator Preparation

:::info Before You Begin
- Read through the loophole scenarios in Session 1. Be prepared to play the role of the "rule-breaker" trying to exploit each rule.
- Have paper ready for drafting and patching rules.
- Pull out the student's Chores API from Week 7 — we'll loophole-test it later in the week.
- Optional: use the [Loophole Audit Worksheet](./resources/loophole-audit-worksheet.md) so the student can track the rule, the loophole, the patch, and the ethics note in one place.
:::

:::tip Facilitation Mindset
This week, you are the loophole-finder. The student is the rule-maker. When you spot a way to game their rule, lean into it. ("Aha — the rule said 'no eating dessert before dinner.' I'll just have a giant snack at 5:55 PM and skip dinner.") The student should feel both impressed and frustrated — and then get to patch the rule. Keep the tone playful, but be explicit that the goal is system repair, not real-life evasion.
:::

## For Younger Learners (Ages 8–9)

:::info Adapting This Week
**Simplest version of the concept:** "A loophole is when someone follows a rule's exact words but breaks what the rule was really for."

**What to shorten or skip:**
- Use 3 loophole scenarios instead of 5.
- Skip the "anti-circumvention" terminology.
- Keep sessions to 20 minutes.

**Adapting the activities:**
- Make the loophole-finding game very playful. Frame it as "trying to be sneaky."
- Accept simpler patches ("just add a rule that says you can't do that").

**Journal alternative:** Draw a rule with a sneaky person finding a way around it, then draw the patched rule.

**What success looks like:** The learner can find one loophole in a rule and write a patch that closes it.
:::

:::info For Ages 10–12
- Introduce **purpose clauses** — rules that explicitly state their own intent, like "This rule is intended to protect pedestrian safety." Purpose clauses give judges a tool to close loopholes.
- Discuss why **arms races** happen in real law: every loophole someone finds, the rule-makers patch, and then someone finds a new one.
- Have them spot real-world examples of loopholes — tax shelters, online platform terms-of-service workarounds, etc.
:::

---

## Guided Session 1
### How Loopholes Work
#### Learning Goal
By the end of this session, the student can:

- recognize the structure of a loophole
- identify a loophole in a stated rule
- distinguish between a loophole and a legitimate exception

---
#### Activities

**1. The First Loophole**

Set up a small scene:

> "Imagine your parent says: 'No dessert before dinner.'"

> "Now you're a sneaky kid. What's the loophole?"

Brainstorm together:

- Eat a giant snack at 5:55 PM, then skip dinner entirely (technically followed the rule).
- Have dessert *during* dinner (depends on the wording — the rule said "before").
- Eat something that's *technically* not "dessert" but is just as sweet (a smoothie with ice cream in it — is that dessert?).
- Eat dessert *after* dinner, then *before* a second dinner.
- Define "dinner" as one bite of broccoli, then have dessert.

These are loopholes. The rule's *letter* is followed, but the rule's *intent* (eat your real meal first, dessert is a reward, etc.) is destroyed.

---

**2. The Loophole Pattern**

After laughing at the dessert loopholes, name the pattern:

> "A loophole has a specific structure. There's a rule. The rule has a stated purpose. The rule's words don't quite cover every way of violating the purpose. Someone finds the gap. They comply with the words while destroying the purpose. The rule-maker is annoyed, because technically they did follow the rule."

Then ask:

> "Is finding a loophole always bad? Are there ever cases where finding a loophole is actually fair?"

Discuss. Sometimes yes:
- If a rule was poorly written and unfairly broad, finding a loophole exposes the bug.
- If a rule's purpose has become outdated, gaming the letter is one way to surface that.
- Sometimes loopholes are the system's way of saying "this rule needs an update."

But mostly loopholes are about taking advantage of unclear writing for personal benefit.

---

**3. The Loophole Hunt**

Walk through these. For each, the student finds the loophole:

> **Rule:** "No running in the hallways."
> *Loophole: I wasn't running — I was speed-walking. Or hopping. Or skipping really fast. Or wheeling on a scooter, which is rolling.*

> **Rule:** "You must finish your vegetables before getting dessert."
> *Loophole: Define "finish" — I ate one carrot. That's a vegetable, and I finished it.*

> **Rule:** "No cell phones at the dinner table."
> *Loophole: My smartwatch isn't a phone. Or — I have my phone, I just keep it on my lap.*

> **Rule:** "Be home by 9 PM."
> *Loophole: Be in the driveway by 9 PM. Be technically on the property. Have my front foot crossing the threshold at 9:00:00 even if my back foot is outside.*

> **Rule:** "Limit screen time to one hour per day."
> *Loophole: Multiple screens at once — that's not really one hour per screen. Or, the screen was on but I wasn't really watching. Or, that wasn't a screen — that was a Kindle and Kindles are for reading.*

Notice: **almost every rule that just says "don't X" can be gamed by redefining X**. The patch is to either close the redefinition or state the purpose.

---

## Guided Session 2
### Patch the Rule
#### Learning Goal
By the end of this session, the student can:

- write a patch to close a specific loophole
- recognize that every patch creates new edges
- write a rule with an explicit purpose clause

---
#### Activities

**1. Patching One Rule, One Loophole at a Time**

Take a rule. The student writes it. You (facilitator) find a loophole. The student writes a patch. Then you find a new loophole in the patched version. Repeat 3 times.

> **Round 1**
> **Student's rule:** "No screens at dinner."
> **Loophole:** "Smartwatches aren't 'screens' in the way you meant."
> **Patch:** "No screens, including smartwatches, at dinner."

> **Round 2**
> **Loophole:** "I just keep my phone on my lap and check it occasionally."
> **Patch:** "No screens, including smartwatches, at dinner. Devices must be left in another room during meals."

> **Round 3**
> **Loophole:** "I just have my friend text me on their phone and read it over their shoulder."
> **Patch:** "No screens, including smartwatches, at dinner. Devices must be left in another room. Reading off someone else's device counts as a screen for this rule's purpose."

Notice what's happening: **the rule is getting longer, more specific, and more complicated** with every patch. This is what real legal codes look like after decades of loophole-closing.

---

**2. The Purpose Clause Trick**

Now try a different approach. Instead of patching loopholes one by one, write the rule with a **purpose clause**:

> "No screens at dinner. The purpose of this rule is for family members to be present with each other during meals. Anything that pulls a person's attention away from the conversation — phones, watches, books, headphones — violates the purpose of the rule."

Notice: the purpose clause gives whoever enforces the rule **a tool**. If someone tries a new loophole (a clever new device, reading over someone's shoulder), the enforcer can point to the purpose and say, "the spirit of the rule was about attention, not the specific device."

This is one of the most powerful moves in rule design. **State the purpose, not just the prohibition.**

---

**3. Loophole-Test the Chores API**

Pull out the student's Chores API agreement from Week 7.

Together, hunt for loopholes:

- "What does 'cleaning the kitchen' really specify? Could I leave one dirty cup in the sink? Two?"
- "What if I do the task in the most minimal way possible — does that count?"
- "The agreement says 'by 8 PM.' What if I'm finishing at 7:59:30? What if I'm finishing at 8:00:30?"
- "What if the kitchen was already clean? Does the task still need to happen?"
- "What if I trade tasks with my sibling — is that a breach or is it allowed?"

For each loophole, decide: (a) is this really a loophole, or just a reasonable interpretation? (b) if it's a loophole, what patch closes it? (c) is a purpose clause better than a patch?

The student amends their Chores API based on the loophole audit. This is a real edit to a real document.

---

## Independent Practice
### Goal

Find and close loopholes in rules from the student's actual life.

### Activities

**1. The Loophole Audit**

Pick three rules from your daily life (home, school, club, friend group). For each, write:

- The rule, as it currently exists.
- One loophole someone could exploit.
- Your proposed patch.
- An alternative: a purpose clause that would close the loophole without needing a patch.

---

**2. The Hardest Patch**

For one of the rules, try to find a loophole that **no patch can fully close**. (Hint: rules about subjective things — "be respectful," "use your best effort," "don't be mean" — are loophole-resistant because there's no specific gameable letter, but they require human judgment to enforce.)

Discuss: is a vague rule better than a specific one? Or worse?

### Case Notes

Add this to your **Case Notes**:

> **Date:**
>
> **A real-life rule and the loophole I found:**
>
> **My patch:**
>
> **The purpose clause version (an alternative to patching):**
>
> **What I changed in my Chores API after loophole-testing it:**
>
> **A rule I think can't be loophole-proofed — and why:**

**Sentence starters for younger learners:**
- "A sneaky way to break the rule but follow it is ___."
- "If I were the rule-maker, I'd fix it by ___."

### Reflection Questions

- Have you ever exploited a loophole yourself? Did it feel okay at the time? Looking back?
- Is there a rule in your life that probably exists because someone, somewhere, exploited a loophole years ago?
- Why don't rule-makers just write incredibly long, specific rules to cover every loophole in advance?

---

## Check for Understanding

After this week, check whether the learner can:

1. **Define a loophole:** "What's a loophole?" (Looking for: following the letter of a rule while violating its intent.)
2. **Spot one in real life:** "Find a loophole in this rule: 'No running in the hallways.'" (Looking for: any creative gaming — speed-walking, scootering, hopping.)
3. **Write a patch:** "Patch that loophole." (Looking for: a real patch or a purpose clause.)

If the learner can do at least 2 of these, they're ready for Week 10.

---

## Pause and Notice

:::note What Matters Here
After loophole-testing the Chores API, ask:

> "Did finding loopholes in your own agreement make you feel clever, sneaky, or annoyed? What about when you imagined someone else doing the same to your rules?"

This is an important moment. Most students enjoy *finding* loopholes more than they enjoy having their rules gamed. That asymmetry is the engine of a lot of legal evolution: people are sharp when they want something, and the law has to keep up.

> "There's also an ethical difference between testing a rule to improve it and exploiting a rule for private advantage. Which one were you doing in each example?"

> "There's a phrase grown-ups sometimes use: *'the spirit of the law versus the letter of the law.'* When you follow only the letter and ignore the spirit, are you cheating? Or are you just doing what the rule said?"

Don't try to settle this. The legal world has been arguing about it for thousands of years. The point is that the student starts to notice that **the spirit and the letter are two different things, and that's a feature of how rules work, not a flaw to be fixed.**

**This week's takeaway:** A rule's *purpose* is more durable than a rule's *words*. When you write a rule, write the purpose alongside it — that gives the rule a defense against loopholes that no list of patches can match, and it keeps the work focused on improvement rather than exploitation.
:::

---

## Spiral Review

:::tip Connecting to Earlier Weeks
**From Week 8:** Last week we saw that letter and intent can pull in opposite directions. This week, we saw what happens when someone *deliberately* exploits that gap. The two weeks together are the full picture of interpretive challenge.

**From Week 7:** Your Chores API just got an upgrade — version 1.1, patched against loopholes. Real contracts evolve this way constantly.
:::

---

:::tip Simplify (Ages 8–9)
Skip the purpose clause concept. Just teach "find the sneaky way around the rule, then write a better rule." Use only food and bedtime rules.
:::

:::tip Extend (Ages 10–12)
Discuss this real example: tax law has thousands of pages of patches because people keep finding new ways to game it. Compare it to a rule with a strong purpose clause, like "income earned in this jurisdiction is taxable." Which is harder to game in practice? (Trick question — they're both gamed, just differently.)
:::

:::tip Vocabulary This Week
- **Loophole** — A way to follow the letter of a rule while violating its intent.
- **Patch** — An update to a rule that closes a specific loophole.
- **Purpose clause** — A statement in a rule explaining what the rule is intended to accomplish. A defense against loopholes.
- **Spirit of the law** — The general intent and purpose of the rule, as opposed to its exact words.
- **Anti-circumvention** — Rules specifically designed to stop people from gaming other rules.
:::

## Preview of Next Week

Next week, we look at the other major tool courts use to manage interpretation over time: **precedent**. When a court makes a ruling on a hard case, that ruling may guide or sometimes bind similar future cases, depending on the court and jurisdiction. You'll act as judge for a series of escalating edge cases, and your early rulings will lock you into harder decisions later.
