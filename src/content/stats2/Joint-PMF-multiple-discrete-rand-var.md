---
marp: true
math: mathjax
title: Joint  Probability Mass Function (PMF) of More than Two Discrete Random Variables
week: 1
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---
## Introduction

The joint Probability Mass Function (PMF) describes the probability distribution of a set of two or more discrete random variables. For more than two discrete random variables, the joint PMF provides a complete description of their simultaneous behavior.

---
## Definition

For discrete random variables $X_1, X_2, \ldots, X_n$, the joint PMF $P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n)$ gives the probability that $X_1$ takes value $x_1$, $X_2$ takes value $x_2$, and so on.

Mathematically, the joint PMF is defined as:

$$
P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n)
$$

where $x_1, x_2, \ldots, x_n$ are specific values that the random variables $X_1, X_2, \ldots, X_n$ can take.

---
## Calculation

To calculate the joint PMF for multiple discrete random variables, follow these steps:

1. **List all possible outcomes**: Identify all possible combinations of values that the random variables can take.
2. **Assign probabilities**: Assign probabilities to each combination based on the problem's context or experimental data.
3. **Ensure valid probabilities**: Ensure that the sum of all assigned probabilities equals 1.

The joint PMF must satisfy the following conditions:
- Non-negativity: $P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n) \geq 0$
- Normalization: 

$$
\sum_{x_1} \sum_{x_2} \cdots \sum_{x_n} P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n) = 1
$$

---
## Meaning

The joint PMF provides the probability of observing specific values simultaneously for all the random variables involved. It captures the dependencies and interactions between the variables.

## Importance

Understanding the joint PMF is crucial in:

- **Modeling Dependencies**: It helps in analyzing and modeling the dependencies between multiple random variables.
- **Multivariate Analysis**: It is essential for multivariate statistical analysis, where the behavior of several variables is studied together.
- **Decision Making**: In probabilistic decision-making, the joint PMF can be used to calculate joint probabilities, expectations, and variances.

---
## Example: Coin Toss

Consider a simple example involving three coin tosses. Let:

- $X_1$ be the outcome of the first coin toss (0 for tails, 1 for heads),
- $X_2$ be the outcome of the second coin toss,
- $X_3$ be the outcome of the third coin toss.

Each coin toss is independent, and the probability of heads or tails is $\frac{1}{2}$.

The joint PMF for $X_1, X_2,$ and $X_3$ is:

$$
P(X_1 = x_1, X_2 = x_2, X_3 = x_3) = \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}
$$

for all $x_1, x_2, x_3 \in \{0, 1\}$.

$$
\begin{array}{|c|c|c|c|}
\hline
X_1 & X_2 & X_3 & P(X_1, X_2, X_3) \\
\hline
0 & 0 & 0 & \frac{1}{8} \\
0 & 0 & 1 & \frac{1}{8} \\
0 & 1 & 0 & \frac{1}{8} \\
0 & 1 & 1 & \frac{1}{8} \\
1 & 0 & 0 & \frac{1}{8} \\
1 & 0 & 1 & \frac{1}{8} \\
1 & 1 & 0 & \frac{1}{8} \\
1 & 1 & 1 & \frac{1}{8} \\
\hline
\end{array}
$$
### Example Calculation

Let's calculate the probability that we get exactly one head in three tosses.

Possible outcomes for exactly one head:

- $(1, 0, 0)$
- $(0, 1, 0)$
- $(0, 0, 1)$

The joint PMF for each outcome is $\frac{1}{8}$.

So, the probability of exactly one head is:

$$
P(\text{exactly one head}) = P(1, 0, 0) + P(0, 1, 0) + P(0, 0, 1) = \frac{1}{8} + \frac{1}{8} + \frac{1}{8} = \frac{3}{8}
$$



