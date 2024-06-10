---
marp: true
math: mathjax
title: Types of Matrix
week: 1
subject: Mathematics 2
subjectcode: maths2
date: 2024-06-10
---

## 1. Square Matrix

A **square matrix** is a matrix with the same number of rows and columns.

$$
A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
$$

### Example

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

---
## 2. Diagonal Matrix

A **diagonal matrix** is a square matrix in which all the elements outside the main diagonal are zero.

$$
D = \begin{bmatrix}
d_{11} & 0 & 0 \\
0 & d_{22} & 0 \\
0 & 0 & d_{33}
\end{bmatrix}
$$

### Example

$$
D = \begin{bmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 3
\end{bmatrix}
$$

---
## 3. Identity Matrix

An **identity matrix** is a diagonal matrix in which all the diagonal elements are equal to 1s. Generally denoted by $I$.

$$
I = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

### Example

$$
I = \begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

---
## 4. Zero Matrix

A **zero matrix** or **null matrix** is a matrix in which all the elements are zero.

$$
O = \begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$

### Example

$$
O = \begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}
$$

---
## 5. Symmetric Matrix

A **symmetric matrix** is a square matrix that is equal to its transpose.

$$
S = \begin{bmatrix}
s_{11} & s_{12} & s_{13} \\
s_{12} & s_{22} & s_{23} \\
s_{13} & s_{23} & s_{33}
\end{bmatrix}
$$

### Example

$$
S = \begin{bmatrix}
1 & 2 & 3 \\
2 & 4 & 5 \\
3 & 5 & 6
\end{bmatrix}
$$

---
## 6. Triangular Matrix

A **triangular matrix** can be either upper triangular or lower triangular.

---
### 6.1 Upper Triangular Matrix

An upper triangular matrix has all the elements below the main diagonal equal to zero.

$$
U = \begin{bmatrix}
u_{11} & u_{12} & u_{13} \\
0 & u_{22} & u_{23} \\
0 & 0 & u_{33}
\end{bmatrix}
$$

### Example

$$
U = \begin{bmatrix}
1 & 2 & 3 \\
0 & 4 & 5 \\
0 & 0 & 6
\end{bmatrix}
$$

---
### 6.2 Lower Triangular Matrix

A lower triangular matrix has all the elements above the main diagonal equal to zero.

$$
L = \begin{bmatrix}
l_{11} & 0 & 0 \\
l_{21} & l_{22} & 0 \\
l_{31} & l_{32} & l_{33}
\end{bmatrix}
$$

### Example

$$
L = \begin{bmatrix}
1 & 0 & 0 \\
2 & 3 & 0 \\
4 & 5 & 6
\end{bmatrix}
$$

---
## 7. Orthogonal Matrix

An **orthogonal matrix** is a square matrix whose rows and columns are orthonormal vectors.

$$
Q = \begin{bmatrix}
q_{11} & q_{12} & q_{13} \\
q_{21} & q_{22} & q_{23} \\
q_{31} & q_{32} & q_{33}
\end{bmatrix}
$$

It satisfies the condition:

$$
Q^T Q = Q Q^T = I
$$

### Example

$$
Q = \frac{1}{\sqrt{2}} \begin{bmatrix}
1 & 1 \\
-1 & 1
\end{bmatrix}
$$

---
## 8. Skew-Symmetric Matrix

A **skew-symmetric matrix** is a square matrix that is equal to the negative of its transpose.

$$
A = \begin{bmatrix}
0 & -a_{12} & -a_{13} \\
a_{12} & 0 & -a_{23} \\
a_{13} & a_{23} & 0
\end{bmatrix}
$$

### Example

$$
A = \begin{bmatrix}
0 & -2 & -3 \\
2 & 0 & -4 \\
3 & 4 & 0
\end{bmatrix}
$$

---
## 9. Row Matrix

A **row matrix** or **row vector** has only one row.

$$
R = \begin{bmatrix}
r_1 & r_2 & r_3
\end{bmatrix}
$$

### Example

$$
R = \begin{bmatrix}
1 & 2 & 3
\end{bmatrix}
$$

---
## 10. Column Matrix

A **column matrix** or **column vector** has only one column.

$$
C = \begin{bmatrix}
c_1 \\
c_2 \\
c_3
\end{bmatrix}
$$

### Example

$$
C = \begin{bmatrix}
1 \\
2 \\
3
\end{bmatrix}
$$

---
## 11. Rectangular Matrix

A **rectangular matrix** is a matrix with a different number of rows and columns.

$$
B = \begin{bmatrix}
b_{11} & b_{12} & b_{13} \\
b_{21} & b_{22} & b_{23}
\end{bmatrix}
$$

### Example

$$
B = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

---
## 12. Block Matrix

A **block matrix** is a matrix partitioned into smaller matrices called blocks.

$$
M = \begin{bmatrix}
A & B \\
C & D
\end{bmatrix}
$$

where \( A, B, C, \) and \( D \) are matrices.

### Example

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}, \quad
B = \begin{bmatrix}
5 & 6 \\
7 & 8
\end{bmatrix}, \quad
C = \begin{bmatrix}
9 & 10 \\
11 & 12
\end{bmatrix}, \quad
D = \begin{bmatrix}
13 & 14 \\
15 & 16
\end{bmatrix}
$$

$$
M = \begin{bmatrix}
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix} &
\begin{bmatrix}
5 & 6 \\
7 & 8
\end{bmatrix} \\
\begin{bmatrix}
9 & 10 \\
11 & 12
\end{bmatrix} &
\begin{bmatrix}
13 & 14 \\
15 & 16
\end{bmatrix}
\end{bmatrix}
$$
