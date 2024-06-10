---
marp: true
math: mathjax
title: Maringal Probability Mass Function (PMF) of Two Discrete Random Variables
week: 1
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---

In probability theory and statistics, the marginal probability mass function (PMF) of two discrete random variables is a function that gives the probability of each possible value of one of the variables, without reference to the other variable. It essentially represents the distribution of each variable individually, ignoring the other variable.

The marginal PMF is obtained by summing (or integrating, in the case of continuous variables) the joint PMF over all possible values of the other variable.

---
## Formula

For two discrete random variables $X$ and $Y$, the marginal PMF of $X$ is calculated as:

$$
P_X(x) = \sum_{y} P_{XY}(x,y)
$$

Where:
- $P_X(x)$ is the marginal PMF of $X$.
- $P_{XY}(x,y)$ is the joint PMF of $X$ and $Y$.

Similarly, the marginal PMF of $Y$ is calculated as:

$$
P_Y(y) = \sum_{x} P_{XY}(x,y)
$$

---
## Example

In this example, we'll consider two fair six-sided dice. Let's denote the outcomes of the first die as $X$ and the outcomes of the second die as $Y$.

The joint PMF of $X$ and $Y$ can be represented in a table:

$$

\begin{array}{c|cccccc}
& 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} \\
2 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} \\
3 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} \\
4 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} \\
5 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} \\
6 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} \\
\end{array}

$$

To find the marginal PMF of $X$, we sum the probabilities of all outcomes for each value of $X$:

$$
P_X(1) = P_{XY}(1,1) + P_{XY}(1,2) + \ldots + P_{XY}(1,6) = \frac{1}{36} + \frac{1}{36} + \ldots + \frac{1}{36} = \frac{6}{36} = \frac{1}{6}
$$

Similarly, for other values of $X$, we would get $P_X(2) = \frac{1}{6}$, $P_X(3) = \frac{1}{6}$, $\ldots$, $P_X(6) = \frac{1}{6}$, as each die has an equal probability of landing on any number from 1 to 6.

Similarly, to find the marginal PMF of $Y$, we sum the probabilities of all outcomes for each value of $Y$. We would obtain the same result as for $X$, i.e., $P_Y(1) = P_Y(2) = \ldots = P_Y(6) = \frac{1}{6}$.

Thus, both $X$ and $Y$ have marginal PMFs that represent a uniform distribution, each with a probability of $\frac{1}{6}$ for each possible outcome.

---
# FAQ

## What is a marginal PMF?

A marginal PMF is a probability mass function that gives the probabilities of individual values of a single random variable, ignoring the values of other variables.

## How is a marginal PMF computed from a joint PMF?

To compute a marginal PMF from a joint PMF, you sum (or integrate, in the case of continuous variables) the probabilities over all possible values of the other variables, leaving only the variable of interest.


## Why are marginal PMFs useful?

Marginal PMFs are useful because they allow us to analyze the behavior of individual random variables without considering the complexities of their joint distributions with other variables.

