---
marp: true
math: mathjax
title: Independence of Two Random Variables
week: 2
subject: Statistics 2
subjectcode: stats2
date: 2024-06-10
---


In probability theory and statistics, two random variables are said to be independent if the occurrence of one does not affect the occurrence of the other. In other words, the joint probability distribution of the two variables is the product of their individual probability distributions.

## Joint Probability Mass Function (PMF)

The joint PMF of two discrete random variables $$X$$ and $$Y$$ is a function that gives the probability that $$X=x$$ and $$Y=y$$ simultaneously.

$$
P(X=x, Y=y) = P(X=x) \cdot P(Y=y)
$$

where $$P(X=x)$$ and $$P(Y=y)$$ are the marginal PMFs of $$X$$ and $$Y$$ respectively.

## Marginal Probability Mass Function (PMF)

The marginal PMF of a random variable $$X$$ is obtained by summing (or integrating, in the continuous case) the joint PMF over all possible values of the other random variable.

$$
P(X=x) = \sum_{y} P(X=x, Y=y)
$$

$$
P(Y=y) = \sum_{x} P(X=x, Y=y)
$$

---
## Independence

Two random variables $$X$$ and $$Y$$ are independent if and only if their joint PMF is the product of their marginal PMFs.

$$
P(X=x, Y=y) = P(X=x) \cdot P(Y=y)
$$

---
## Example

Consider two fair six-sided dice, $$X$$ and $$Y$$, representing the outcomes of the first and second dice rolls respectively. Let $$X$$ be the number rolled on the first die and $$Y$$ be the number rolled on the second die.

The joint PMF of $$X$$ and $$Y$$ is:

$$
P(X=x, Y=y) = \frac{1}{36}
$$

since each outcome is equally likely.

The marginal PMFs of $$X$$ and $$Y$$ are:

$$
P(X=x) = \frac{1}{6} \quad \text{for } x = 1,2,3,4,5,6
$$
$$
P(Y=y) = \frac{1}{6} \quad \text{for } y = 1,2,3,4,5,6
$$

Since $$P(X=x, Y=y) = P(X=x) \cdot P(Y=y)$$ for all $$x$$ and $$y$$, $$X$$ and $$Y$$ are independent.

Joint PMF Array Table:

$$
\begin{array}{|c|c|c|c|c|c|c|c|}
\hline
X / Y & 1 & 2 & 3 & 4 & 5 & 6 &f(X)\\
\hline
1 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{6}\\
\hline
2 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{6}\\
\hline
3 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{6}\\
\hline
4 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{6}\\
\hline
5 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{6} \\
\hline
6 & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{36} & \frac{1}{6}\\
\hline
f(y) & \frac{1}{6} & \frac{1}{6} & \frac{1}{6} &\frac{1}{6} &\frac{1}{6} &\frac{1}{6} \\
\hline
\end{array}
$$

Marginal PMF Equations:

$$
P(X=x) = \frac{1}{6} \quad \text{for } x = 1,2,3,4,5,6
$$
$$
P(Y=y) = \frac{1}{6} \quad \text{for } y = 1,2,3,4,5,6
$$
