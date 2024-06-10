---
marp: true
math: mathjax
title: Independence of Multiple Random Variables
week: 2
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---

## Introduction

Independence is a fundamental concept in probability theory and statistics. When two or more random variables are independent, the occurrence of one does not affect the probability distribution of the others. This concept can be extended from two variables to multiple random variables.

## Definition

Let $X_1, X_2, \ldots, X_n$ be random variables. They are said to be **independent** if for any sets of real numbers $A_1, A_2, \ldots, A_n$, the following holds:

$$
P(X_1 \in A_1, X_2 \in A_2, \ldots, X_n \in A_n) = P(X_1 \in A_1) \cdot P(X_2 \in A_2) \cdot \ldots \cdot P(X_n \in A_n)
$$

In simpler terms, the joint probability of the variables taking on any combination of values is equal to the product of their individual probabilities.

## Mathematical Explanation

Consider two random variables $X$ and $Y$. They are independent if:

$$
P(X \leq x, Y \leq y) = P(X \leq x) \cdot P(Y \leq y)
$$

For multiple random variables $X_1, X_2, \ldots, X_n$, independence means:

$$
P(X_1 \leq x_1, X_2 \leq x_2, \ldots, X_n \leq x_n) = P(X_1 \leq x_1) \cdot P(X_2 \leq x_2) \cdot \ldots \cdot P(X_n \leq x_n)
$$

In terms of joint and marginal densities, if $X_1, X_2, \ldots, X_n$ are continuous random variables with joint density $f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n)$ and marginal densities $f_{X_1}(x_1), f_{X_2}(x_2), \ldots, f_{X_n}(x_n)$, then they are independent if:

$$
f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) = f_{X_1}(x_1) \cdot f_{X_2}(x_2) \cdot \ldots \cdot f_{X_n}(x_n)
$$

## Examples

### Example 1: Coin Flips

Consider flipping three coins. Let $X_1$, $X_2$, and $X_3$ represent the outcomes of each flip, where 1 indicates heads and 0 indicates tails. Each flip is independent of the others. The probability of getting heads on each flip is $\frac{1}{2}$. Therefore:

$$
P(X_1 = 1, X_2 = 0, X_3 = 1) = P(X_1 = 1) \cdot P(X_2 = 0) \cdot P(X_3 = 1) = \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8}
$$
$$
\begin{table}[h!]
\centering
\begin{tabular}{|c|c|c|c|c|c|}
\hline
Outcome & \( X_1 \) & \( X_2 \) & \( X_3 \) & Probability Calculation & Probability \\
\hline
1 & 0 & 0 & 0 & \( \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \) & \( \frac{1}{8} \) \\
\hline
2 & 0 & 0 & 1 & \( \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \) & \( \frac{1}{8} \) \\
\hline
3 & 0 & 1 & 0 & \( \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \) & \( \frac{1}{8} \) \\
\hline
4 & 0 & 1 & 1 & \( \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \) & \( \frac{1}{8} \) \\
\hline
5 & 1 & 0 & 0 & \( \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \) & \( \frac{1}{8} \) \\
\hline
6 & 1 & 0 & 1 & \( \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \) & \( \frac{1}{8} \) \\
\hline
7 & 1 & 1 & 0 & \( \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \) & \( \frac{1}{8} \) \\
\hline
8 & 1 & 1 & 1 & \( \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \) & \( \frac{1}{8} \) \\
\hline
\end{tabular}
\caption{Outcomes and Probabilities of Flipping Three Coins}
\end{table}
$$

### Example 2: Independent Normal Variables

Let $X$ and $Y$ be independent random variables with standard normal distributions, $X \sim N(0, 1)$ and $Y \sim N(0, 1)$. Their joint distribution is:

$$
f_{X,Y}(x,y) = f_X(x) \cdot f_Y(y) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}} \cdot \frac{1}{\sqrt{2\pi}} e^{-\frac{y^2}{2}}
$$

### Example 3: Rolling Dice

Consider rolling two six-sided dice. Let $X$ and $Y$ be the results of the first and second dice, respectively. The outcomes of the dice are independent. The probability of any specific combination of outcomes (e.g., $X = 3$ and $Y = 5$) is:

$$
P(X = 3, Y = 5) = P(X = 3) \cdot P(Y = 5) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}
$$

## Properties

1. **Symmetry**: Independence is symmetric, meaning if $X$ is independent of $Y$, then $Y$ is independent of $X$.
2. **Transitivity**: If $X$ and $Y$ are independent, and $X$ and $Z$ are independent, then $X$ and $(Y, Z)$ are independent.
3. **Pairwise Independence**: Pairwise independence does not imply mutual independence. Three random variables can be pairwise independent but not mutually independent.

