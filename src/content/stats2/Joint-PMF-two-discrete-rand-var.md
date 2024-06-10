---
marp: true
math: mathjax
title: Joint Probability Mass Function (PMF) of Two Discrete Random Variables
week: 1
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---




In probability theory and statistics, the joint probability mass function (joint PMF) describes the probability of observing particular values for two or more discrete random variables simultaneously. It gives the probability of each combination of values that the random variables can take on.

---
## Definition

Let $X$ and $Y$ be two discrete random variables. The joint PMF of $X$ and $Y$, denoted as $p_{X,Y}(x, y)$, is defined as:

$p_{X,Y}(x, y) = P(X = x \text{ and } Y = y)$

Where:
- $x$ and $y$ are possible values of $X$ and $Y$ respectively.
- $p_{X,Y}(x, y)$ represents the probability that $X$ takes the value $x$ and $Y$ takes the value $y$ simultaneously.

---
## Properties

1. **Non-negativity**: $p_{X,Y}(x, y) \geq 0$ for all $x$ and $y$.
2. **Normalization**: $\sum_{x}\sum_{y} p_{X,Y}(x, y) = 1$.
3. **Marginalization**: The marginal PMF of $X$ or $Y$ can be obtained by summing or integrating over all possible values of the other variable.

---
## Example

Consider rolling two fair six-sided dice, $X$ and $Y$. Let $X$ represent the value of the first die, and $Y$ represent the value of the second die.

The joint PMF for this scenario is:

$p_{X,Y}(x, y) = \frac{1}{36}$

Because each outcome (pair of values) has an equal probability of $1/36$ (since each die has 6 sides and they are fair).

The joint PMF table would look like this:
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
Each cell in the table represents the joint probability of getting the respective outcomes. For example, $p_{X,Y}(2, 5) = \frac{1}{36}$, meaning the probability of rolling a 2 on the first die and a 5 on the second die is $1/36$.

Understanding the joint PMF helps in analyzing the relationship between two random variables and making predictions based on their combined outcomes.

---
## Example

Consider two biased coins, $X$ and $Y$, where $X$ has a probability $p = 0.7$ of landing heads and $Y$ has a probability $q = 0.7$ of landing heads. Let $X$ represent the outcome of the first coin flip (0 for tails, 1 for heads), and $Y$ represent the outcome of the second coin flip.

The joint PMF for this scenario is:

$$
p_{X,Y}(x, y) = 
\begin{cases} 
0.09 & \text{if } x = 0 \text{ and } y = 0 \quad p(0.3)\times q(0.3) \\
0.21 & \text{if } x = 0 \text{ and } y = 1 \quad p(0.3)\times q(0.7) \\
0.21 & \text{if } x = 1 \text{ and } y = 0 \quad p(0.7)\times q(0.3) \\
0.49 & \text{if } x = 1 \text{ and } y = 1 \quad p(0.7)\times q(0.7) \\
\end{cases}
$$



The joint PMF table would look like this:

$$
\begin{array}{c|cc}
& 0 & 1 \\
\hline
0 & 0.09 & 0.21 \\
1 & 0.21 & 0.49 \\
\end{array}
$$

Each cell in the table represents the joint probability of getting the respective outcomes. For example, $p_{X,Y}(0, 1) = 0.21$, meaning the probability of getting tails on the first coin and heads on the second coin is $0.21$.

---
# FAQ

---

## What is a joint PMF?

A joint PMF, or joint probability mass function, is a function that assigns probabilities to each possible combination of values of multiple discrete random variables.

## How is a joint PMF represented?

A joint PMF is typically represented as a table or a function that maps each combination of values of the random variables to their respective probabilities.


## How can I compute probabilities using a joint PMF?

To compute probabilities using a joint PMF, you can sum the probabilities associated with all combinations of values that satisfy the condition of interest.

## What is the difference between a joint PMF and a marginal PMF?

A joint PMF gives probabilities for combinations of values of multiple random variables, while a marginal PMF gives probabilities for individual values of a single random variable, ignoring the values of the other variables.


