---
marp: true
math: mathjax
title: Conditional Probability Mass Function (PMF) of Two Discrete Random Variables
week: 1
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---

In probability theory and statistics, the **conditional probability mass function (PMF)** of two discrete random variables $X$ and $Y$ describes the probability distribution of one random variable, given that the other random variable takes on a specific value.

---
## Definition

The conditional PMF of $X$ given $Y = y$ is defined as:

$$
P(X = x \mid Y = y) = \frac{P(X = x, Y = y)}{P(Y = y)}
$$

for $P(Y = y) > 0$. Here:
- $P(X = x, Y = y)$ is the joint PMF of $X$ and $Y$.
- $P(Y = y)$ is the marginal PMF of $Y$.

---
## Explanation

1. **Joint PMF**: This gives the probability that $X$ and $Y$ simultaneously take on specific values.
2. **Marginal PMF**: This gives the probability that $Y$ takes on a specific value, summing over all possible values of $X$.

---
# Example: Conditional PMF of Coin Tosses

Consider a scenario where we toss a coin twice. Define two discrete random variables:
- $X$: The number of heads in the first toss.
- $Y$: The total number of heads in both tosses.

## Joint PMF

The sample space for two coin tosses is \{HH, HT, TH, TT\}, where 'H' stands for heads and 'T' stands for tails.

The joint PMF $P(X = x, Y = y)$ is:

$$
\begin{array}{c|ccccc}
(X, Y) & P(X = x, Y = y) \\
\hline
(0, 0) & \frac{1}{4} \\
(0, 1) & \frac{1}{4} \\
(1, 1) & \frac{1}{4} \\
(1, 2) & \frac{1}{4} \\
\end{array}
$$


## Marginal PMF

The marginal PMF $P(Y = y)$ is found by summing over all possible values of $X$:

$$
P(Y = y) = \sum_{x} P(X = x, Y = y)
$$

So,

$$
\begin{aligned}
P(Y = 0) &= P(0, 0) = \frac{1}{4} \\
P(Y = 1) &= P(0, 1) + P(1, 1) = \frac{1}{4} + \frac{1}{4} = \frac{1}{2} \\
P(Y = 2) &= P(1, 2) = \frac{1}{4}
\end{aligned}
$$


## Conditional PMF

We now compute the conditional PMF of $X$ given $Y = y$:

1. **For $Y = 0$**:

$$
P(X = x \mid Y = 0) = \frac{P(X = x, Y = 0)}{P(Y = 0)}
$$

$$
\begin{aligned}
P(X = 0 \mid Y = 0) &= \frac{\frac{1}{4}}{\frac{1}{4}} = 1 \\
P(X = 1 \mid Y = 0) &= \frac{0}{\frac{1}{4}} = 0
\end{aligned}
$$


2. **For $Y = 1$**:

$$
P(X = x \mid Y = 1) = \frac{P(X = x, Y = 1)}{P(Y = 1)}
$$

$$
\begin{aligned}
P(X = 0 \mid Y = 1) &= \frac{\frac{1}{4}}{\frac{1}{2}} = \frac{1}{2} \\
P(X = 1 \mid Y = 1) &= \frac{\frac{1}{4}}{\frac{1}{2}} = \frac{1}{2}
\end{aligned}
$$


3. **For $Y = 2$**:

$$
P(X = x \mid Y = 2) = \frac{P(X = x, Y = 2)}{P(Y = 2)}
$$

$$
\begin{aligned}
P(X = 1 \mid Y = 2) &= \frac{\frac{1}{4}}{\frac{1}{4}} = 1 \\
P(X = 0 \mid Y = 2) &= \frac{0}{\frac{1}{4}} = 0
\end{aligned}
$$

---
## Summary

Here’s the conditional PMF summarized:

$$
P(X = x \mid Y = y) =
\begin{cases}
1 & \text{if } (x, y) = (0, 0) \\
0 & \text{if } (x, y) = (1, 0) \\
\frac{1}{2} & \text{if } y = 1 \\
1 & \text{if } (x, y) = (1, 2) \\
0 & \text{if } (x, y) = (0, 2)
\end{cases}
$$

