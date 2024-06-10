---
marp: true
math: mathjax
title: Maringal Probability Mass Function (PMF) of More than Two Discrete Random Variables
week: 1
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---



## Overview

The **Marginal Probability Mass Function (PMF)** is a fundamental concept in probability theory, used to describe the probability distribution of a subset of random variables from a larger set. When dealing with more than two discrete random variables, the marginal PMF provides the probability of each variable independently of the others.

---
## Calculation

Given a joint PMF of $n$ discrete random variables $X_1, X_2, \ldots, X_n$, the marginal PMF of any subset of these variables is obtained by summing the joint PMF over the other variables. Mathematically, if you have random variables $X_1, X_2, \ldots, X_n$ and you are interested in the marginal PMF of $X_1$ and $X_2$, it is calculated as:

$$
P(X_1 = x_1, X_2 = x_2) = \sum_{x_3} \sum_{x_4} \cdots \sum_{x_n} P(X_1 = x_1, X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n)
$$

Here, $x_3, x_4, \ldots, x_n$ represent all possible values of the other variables over which we sum to marginalize them out.

---
## Meaning

The marginal PMF provides the probability distribution of one or more random variables independently of the others. It helps in understanding the individual behavior of the variables without considering their dependencies. 

For example, in a system with three random variables $X_1$, $X_2$, and $X_3$, the marginal PMF $P(X_1)$ represents the probabilities of different values of $X_1$, regardless of the values that $X_2$ and $X_3$ may take.

---
## Importance

The marginal PMF is crucial for several reasons:

1. **Simplification**: It reduces complexity by focusing on individual variables, making analysis more manageable.
2. **Independence Assessment**: It helps in determining the independence of variables.
3. **Initial Analysis**: It provides insights into the distribution of individual variables which can be useful before analyzing the joint behavior.

---
## Example: Tossing Three Coins

Consider the example of tossing three fair coins. Define the random variables as follows:

- $X_1$: Result of the first coin (0 for tails, 1 for heads)
- $X_2$: Result of the second coin (0 for tails, 1 for heads)
- $X_3$: Result of the third coin (0 for tails, 1 for heads)

The joint PMF $P(X_1 = x_1, X_2 = x_2, X_3 = x_3)$ can be written based on the probabilities of each outcome in the sample space.

To find the marginal PMF of $X_1$ and $X_2$:

$$
P(X_1 = x_1, X_2 = x_2) = \sum_{x_3} P(X_1 = x_1, X_2 = x_2, X_3 = x_3)
$$


Since the coins are fair and the results are independent:

$$
P(X_1 = x_1, X_2 = x_2, X_3 = x_3) = \frac{1}{8} \quad \text{for all} \ (x_1, x_2, x_3)
$$

The marginal PMF of $X_1$ and $X_2$ is:

$$
P(X_1 = x_1, X_2 = x_2) = \frac{1}{8} + \frac{1}{8} = \frac{1}{4}
$$

This indicates that each pair of results for $X_1$ and $X_2$ occurs with a probability of $\frac{1}{4}$.

