---
marp: true
math: mathjax
title: Bernoulli Distribution & Independant Trials
week: 0
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---

The Bernoulli distribution is a discrete probability distribution that represents the outcome of a single experiment with two possible outcomes: success or failure. It is characterized by a single parameter, usually denoted as $p$, which represents the probability of success.

---

## Probability Mass Function (PMF)

The probability mass function (PMF) of a Bernoulli distribution is defined as:

$$
f(x) =
\begin{cases}
p & \text{if } x = 1 \\
1 - p & \text{if } x = 0
\end{cases}
$$

where $x \in \{0, 1\}$.

---
## Independent Trials

Independent trials refer to a sequence of experiments where the outcome of one experiment does not affect the outcome of any other experiment in the sequence. Each trial is assumed to have the same probability distribution.

---
## Example

Let's consider an example where we toss a fair coin three times. Each toss is an independent trial, and the outcome of each toss follows a Bernoulli distribution with $p = 0.5$.

### Probability of Success

In this case, success can be defined as getting a "heads" when tossing the coin. Thus, $p = 0.5$ represents the probability of success (getting heads), and $1 - p = 0.5$ represents the probability of failure (getting tails).

---
### Probability Mass Function

The probability mass function for a single trial is:

$$
f(x) =
\begin{cases}
0.5 & \text{if } x = 1 \text{ (heads)} \\
0.5 & \text{if } x = 0 \text{ (tails)}
\end{cases}
$$

