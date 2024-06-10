---
marp: true
math: mathjax
title: Permutation & Combinations
week: 0
subject: Mathematics 2
subjectcode: maths2
date: 2024-06-10
---
## Permutations

Permutations are arrangements of items where the order matters. The number of permutations of $n$ items taken $r$ at a time is denoted as $P(n, r)$ and can be calculated using the formula:

$$
P(n, r) = \frac{n!}{(n-r)!}
$$


### Example

Find the number of permutations of 5 items taken 3 at a time.

Given $n = 5$ and $r = 3$:

$$
P(5, 3) = \frac{5!}{(5-3)!} = \frac{5!}{2!}
$$

Calculating factorials:

$$
5! = 5 \times 4 \times 3 \times 2 \times 1 = 120
$$
$$
2! = 2 \times 1 = 2
$$

Therefore:

$$
P(5, 3) = \frac{120}{2} = 60
$$

So, there are 60 ways to arrange 5 items taken 3 at a time.

---
## Combinations

Combinations are selections of items where the order does not matter. The number of combinations of $n$ items taken $r$ at a time is denoted as $C(n, r)$ and can be calculated using the formula:

$$
C(n, r) = \frac{n!}{r!(n-r)!}
$$


### Example

Find the number of combinations of 5 items taken 3 at a time.

Given $n = 5$ and $r = 3$:

$$
C(5, 3) = \frac{5!}{3!(5-3)!} = \frac{5!}{3! \times 2!}
$$

Calculating factorials:

$$
5! = 120
$$
$$
3! = 3 \times 2 \times 1 = 6
$$
$$
2! = 2
$$

Therefore:

$$
C(5, 3) = \frac{120}{6 \times 2} = \frac{120}{12} = 10
$$

So, there are 10 ways to choose 5 items taken 3 at a time without regard to order.
