---
marp: true
math: mathjax
title: Conditional Probability Mass Function (PMF) of More than Two Discrete Random Variables
week: 1
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---
## Introduction

In probability theory, the **Conditional Probability Mass Function (PMF)** provides the probability distribution of a discrete random variable given that certain conditions are satisfied by other random variables. When dealing with more than two discrete random variables, the conditional PMF describes the probability of one variable given specific values of the other variables.

---
## Definition

Let $X_1, X_2, \ldots, X_n$ be discrete random variables. The conditional PMF of $X_1$ given $X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n$ is defined as:

$$
P(X_1 = x_1 \mid X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n)
$$

This can be computed using the joint PMF $P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n)$ and the marginal PMF $P(X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n)$:

$$
P(X_1 = x_1 \mid X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n) = \frac{P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n)}{P(X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n)}
$$

where $P(X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n)$ is not zero.

---
## Calculation

To calculate the conditional PMF:

1. **Determine the Joint PMF**:
   The joint PMF of $X_1, X_2, \ldots, X_n$ is:

   $$
   P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n)
   $$

2. **Determine the Marginal PMF**:
   The marginal PMF of $X_2, X_3, \ldots, X_n$ is:

   $$
   P(X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n) = \sum_{x_1} P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n)
   $$

3. **Apply the Formula**:
   Substitute the joint and marginal PMFs into the conditional PMF formula:

   $$
   P(X_1 = x_1 \mid X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n) = \frac{P(X_1 = x_1, X_2 = x_2, \ldots, X_n = x_n)}{P(X_2 = x_2, X_3 = x_3, \ldots, X_n = x_n)}
   $$

---
## Meaning and Importance

Understanding conditional PMFs is crucial for:

- **Modeling Dependencies**: It helps in understanding the dependency of one variable on the others in a probabilistic sense.
- **Bayesian Inference**: Conditional probabilities are foundational in Bayesian statistics, allowing updates of beliefs based on new evidence.
- **Data Analysis**: In multivariate data analysis, conditional PMFs help in understanding relationships between different variables.

---
## Example: Coin Toss

Consider a scenario with three coins. Let $X$, $Y$, and $Z$ be the outcomes of the three coins, respectively. Define $X = 1$ for heads and $X = 0$ for tails (similarly for $Y$ and $Z$). Assume the results of the coin tosses are independent.

The joint PMF can be defined as follows:

- $P(X = x, Y = y, Z = z) = \frac{1}{8}$ for all $x, y, z \in \{0, 1\}$, because each coin has two possible outcomes, and all combinations are equally likely.


To find the conditional PMF of $X$ given $Y = y$ and $Z = z$:

1. **Joint PMF**:
   
   $$
   P(X = x, Y = y, Z = z) = \frac{1}{8}
   $$

2. **Marginal PMF**:
   
   $$
   P(Y = y, Z = z) = \sum_{x \in \{0,1\}} P(X = x, Y = y, Z = z) = \frac{1}{8} + \frac{1}{8} = \frac{1}{4}
   $$

3. **Conditional PMF**:
   
   $$
   P(X = x \mid Y = y, Z = z) = \frac{P(X = x, Y = y, Z = z)}{P(Y = y, Z = z)} = \frac{\frac{1}{8}}{\frac{1}{4}} = \frac{1}{2}
   $$


So, given $Y = y$ and $Z = z$, the probability that $X = 0$ is 0.5, and the probability that $X = 1$ is also 0.5. 

This result is expected because the outcomes are independent. Hence, knowing the outcomes of $Y$ and $Z$ does not affect the probability distribution of $X$.

So, given that $Y = 1$, the probability that $X = 0$ is 0.5, and the probability that $X = 1$ is also 0.5.


