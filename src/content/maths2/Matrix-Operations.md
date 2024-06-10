---
marp: true
math: mathjax
title: Matrix Operations
week: 1
subject: Mathematics 2
subjectcode: maths2
date: 2024-06-10
---

Matrices are rectangular arrays of numbers or other mathematical objects, for which operations such as addition, subtraction, and multiplication are defined. Below are the different types of matrix operations explained with examples.

---

## 1. Matrix Addition

Matrix addition involves adding corresponding elements of two matrices of the same dimensions.

### Definition

If \( A \) and \( B \) are matrices of the same size, their sum \( C \) is given by:

$$
C = A + B
$$

where each element \( c_{ij} \) of \( C \) is:

$$
c_{ij} = a_{ij} + b_{ij}
$$
### Example

Let 

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
\quad \text{and} \quad
B = \begin{bmatrix}
5 & 6 \\
7 & 8
\end{bmatrix}
$$

The sum \( C \) is:

$$
C = A + B = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
+
\begin{bmatrix}
5 & 6 \\
7 & 8
\end{bmatrix}
=
\begin{bmatrix}
6 & 8 \\
10 & 12
\end{bmatrix}
$$
---
## 2. Matrix Subtraction

Matrix subtraction involves subtracting corresponding elements of one matrix from another of the same dimensions.

### Definition

If \( A \) and \( B \) are matrices of the same size, their difference \( D \) is given by:

$$
D = A - B
$$

where each element \( d_{ij} \) of \( D \) is:

$$
d_{ij} = a_{ij} - b_{ij}
$$



### Example

Let 

$$
A = \begin{bmatrix}
9 & 8 \\
7 & 6
\end{bmatrix}
\quad \text{and} \quad
B = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

The difference \( D \) is:

$$
D = A - B = \begin{bmatrix}
9 & 8 \\
7 & 6
\end{bmatrix}
-
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
=
\begin{bmatrix}
8 & 6 \\
4 & 2
\end{bmatrix}
$$
----
## 3. Matrix - Matrix Multiplication

Matrix multiplication involves taking the dot product of the rows of the first matrix with the columns of the second matrix.

### Definition

If \( A \) is an \( m \times n \) matrix and \( B \) is an \( n \times p \) matrix, their product \( C \) is an \( m \times p \) matrix given by:

$$
C = A \cdot B
$$

where each element \( c_{ij} \) of \( C \) is:

$$
c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}
$$

### Example

Let 

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
\quad \text{and} \quad
B = \begin{bmatrix}
5 & 6 \\
7 & 8
\end{bmatrix}
$$

The product \( C \) is:

$$
C = A \cdot B = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
\cdot
\begin{bmatrix}
5 & 6 \\
7 & 8
\end{bmatrix}
=
\begin{bmatrix}
1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\
3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8
\end{bmatrix}
=
\begin{bmatrix}
19 & 22 \\
43 & 50
\end{bmatrix}
$$

### Example (3x3 Matrix)

Let 

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
\quad \text{and} \quad
B = \begin{bmatrix}
9 & 8 & 7 \\
6 & 5 & 4 \\
3 & 2 & 1
\end{bmatrix}
$$

The product \( C \) is:

$$
C = A \cdot B = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
\cdot
\begin{bmatrix}
9 & 8 & 7 \\
6 & 5 & 4 \\
3 & 2 & 1
\end{bmatrix}
$$
$$
\begin{bmatrix}
1 \cdot 9 + 2 \cdot 6 + 3 \cdot 3 & 1 \cdot 8 + 2 \cdot 5 + 3 \cdot 2 & 1 \cdot 7 + 2 \cdot 4 + 3 \cdot 1 \\
4 \cdot 9 + 5 \cdot 6 + 6 \cdot 3 & 4 \cdot 8 + 5 \cdot 5 + 6 \cdot 2 & 4 \cdot 7 + 5 \cdot 4 + 6 \cdot 1 \\
7 \cdot 9 + 8 \cdot 6 + 9 \cdot 3 & 7 \cdot 8 + 8 \cdot 5 + 9 \cdot 2 & 7 \cdot 7 + 8 \cdot 4 + 9 \cdot 1
\end{bmatrix}
=
\begin{bmatrix}
30 & 24 & 18 \\
84 & 69 & 54 \\
138 & 114 & 90
\end{bmatrix}
$$
---
## 4. Scalar Matrix Multiplication

Scalar multiplication involves multiplying each element of a matrix by a scalar value.

### Definition

If \( A \) is a matrix and \( k \) is a scalar, their product \( B \) is given by:

$$
B = k \cdot A
$$

where each element \( b_{ij} \) of \( B \) is:

$$
b_{ij} = k \cdot a_{ij}
$$

### Example

Let 

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
\quad \text{and} \quad
k = 3
$$

The product \( B \) is:

$$
B = k \cdot A = 3 \cdot \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
=
\begin{bmatrix}
3 & 6 \\
9 & 12
\end{bmatrix}
$$


### Example (3x3 Matrix)

Let 

$$
A = \begin{bmatrix}
2 & 4 & 6 \\
8 & 10 & 12 \\
14 & 16 & 18
\end{bmatrix}
\quad \text{and} \quad
k = 3
$$

The product \( B \) is:

$$
B = k \cdot A = 3 \cdot \begin{bmatrix}
2 & 4 & 6 \\
8 & 10 & 12 \\
14 & 16 & 18
\end{bmatrix}
=
\begin{bmatrix}
6 & 12 & 18 \\
24 & 30 & 36 \\
42 & 48 & 54
\end{bmatrix}
$$