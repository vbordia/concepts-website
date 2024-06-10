---
marp: true
math: mathjax
title: Cofactors, Adjoints, Inverse of a Matrix
week: 1
subject: Mathematics 2
subjectcode: maths2
date: 2024-06-10
---
## Cofactors

The cofactor of an element $a_{ij}$ of a matrix $A$ is defined as $C_{ij} = (-1)^{i+j} \cdot M_{ij}$, where $M_{ij}$ is the minor of $a_{ij}$. The minor $M_{ij}$ is the determinant of the matrix obtained by deleting the $i$-th row and $j$-th column from $A$.



### Example: Cofactors of a 2x2 Matrix

Consider the 2x2 matrix 

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

The cofactors are calculated as:

$$
C_{11} = (-1)^{1+1} \cdot \begin{vmatrix} 4 \end{vmatrix} = 4
$$

$$
C_{12} = (-1)^{1+2} \cdot \begin{vmatrix} 3 \end{vmatrix} = -3
$$

$$
C_{21} = (-1)^{2+1} \cdot \begin{vmatrix} 2 \end{vmatrix} = -2
$$

$$
C_{22} = (-1)^{2+2} \cdot \begin{vmatrix} 1 \end{vmatrix} = 1
$$

So, the cofactor matrix $C$ is:

$$
C = \begin{bmatrix}
4 & -3 \\
-2 & 1
\end{bmatrix}
$$

### Example: Cofactors of a 3x3 Matrix

Consider the 3x3 matrix 

$$
B = \begin{bmatrix}
1 & 2 & 3 \\
0 & 4 & 5 \\
1 & 0 & 6
\end{bmatrix}
$$

The cofactors are:

$$
C_{11} = (-1)^{1+1} \cdot \begin{vmatrix} 4 & 5 \\ 0 & 6 \end{vmatrix} \quad

C_{12} = (-1)^{1+2} \cdot \begin{vmatrix} 0 & 5 \\ 1 & 6 \end{vmatrix} \quad

C_{13} = (-1)^{1+3} \cdot \begin{vmatrix} 0 & 4 \\ 1 & 0 \end{vmatrix} \quad
$$
$$
C_{21} = (-1)^{2+1} \cdot \begin{vmatrix} 2 & 3 \\ 0 & 6 \end{vmatrix} \quad

C_{22} = (-1)^{2+2} \cdot \begin{vmatrix} 1 & 3 \\ 1 & 6 \end{vmatrix} \quad

C_{23} = (-1)^{2+3} \cdot \begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} \quad
$$

$$
C_{31} = (-1)^{3+1} \cdot \begin{vmatrix} 2 & 3 \\ 4 & 5 \end{vmatrix} \quad


C_{32} = (-1)^{3+2} \cdot \begin{vmatrix} 1 & 3 \\ 1 & 5 \end{vmatrix} \quad



C_{33} = (-1)^{3+3} \cdot \begin{vmatrix} 1 & 2 \\ 0 & 4 \end{vmatrix} \quad
$$

$$
C_{11}  = 1 \cdot (4 \cdot 6 - 5 \cdot 0) = 24 \quad

C_{12}  = -1 \cdot (0 \cdot 6 - 5 \cdot 1) = 5 \quad

C_{13}  = 1 \cdot (0 \cdot 0 - 4 \cdot 1) = -4 \quad
$$
$$
C_{21}  = -1 \cdot (2 \cdot 6 - 3 \cdot 0) = -12 \quad

C_{22}  = 1 \cdot (1 \cdot 6 - 3 \cdot 1) = 3 \quad

C_{23}  = -1 \cdot (1 \cdot 0 - 2 \cdot 1) = 2 \quad
$$
$$
C_{31} = 1 \cdot (2 \cdot 5 - 3 \cdot 4) = -2 \quad

C_{32} =  -1 \cdot (1 \cdot 5 - 3 \cdot 1) = -2 \quad
C_{33} =  1 \cdot (1 \cdot 4 - 2 \cdot 0) = 4 \quad

$$


The cofactor matrix $C$ is:

$$
C = \begin{bmatrix}
24 & -5 & -4 \\
-12 & 3 & -2 \\
-2 & 2 & 4
\end{bmatrix}
$$
---
## Adjoint

The adjoint of a matrix $A$ (or adjugate) is the transpose of the cofactor matrix. It is denoted as $\text{adj}(A)$.



### Example: Adjoint of a 2x2 Matrix

Using the cofactor matrix from the previous example:

$$
C = \begin{bmatrix}
4 & -3 \\
-2 & 1
\end{bmatrix}
$$

The adjoint is:

$$
\text{adj}(A) = C^T = \begin{bmatrix}
4 & -2 \\
-3 & 1
\end{bmatrix}
$$

### Example: Adjoint of a 3x3 Matrix

Using the cofactor matrix:

$$
C = \begin{bmatrix}
24 & -5 & -4 \\
-12 & 3 & -2 \\
-2 & 2 & 4
\end{bmatrix}
$$

The adjoint is:

$$
\text{adj}(B) = C^T = \begin{bmatrix}
24 & -12 & -2 \\
-5 & 3 & 2 \\
-4 & -2 & 4
\end{bmatrix}
$$

---
## Inverse

The inverse of a matrix $A$, if it exists, is given by:

$$
A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)
$$


### Example: Inverse of a 2x2 Matrix

For the matrix 

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

the determinant $\det(A)$ is calculated as:

$$
\det(A) = 1 \cdot 4 - 2 \cdot 3 = -2
$$

Using the adjoint from the previous example:

$$
\text{adj}(A) = \begin{bmatrix}
4 & -2 \\
-3 & 1
\end{bmatrix}
$$

the inverse is:

$$
A^{-1} = \frac{1}{-2} \cdot \begin{bmatrix}
4 & -2 \\
-3 & 1
\end{bmatrix} = \begin{bmatrix}
-2 & 1 \\
\frac{3}{2} & -\frac{1}{2}
\end{bmatrix}
$$


### Example: Inverse of a 3x3 Matrix

For the matrix 

$$
B = \begin{bmatrix}
1 & 2 & 3 \\
0 & 4 & 5 \\
1 & 0 & 6
\end{bmatrix}
$$

the determinant $\det(B)$ is calculated as:

$$
\det(B) = 1 \cdot (4 \cdot 6 - 5 \cdot 0) - 2 \cdot (0 \cdot 6 - 5 \cdot 1) + 3 \cdot (0 \cdot 0 - 4 \cdot 1) = 24 + 10 - 12 = 22
$$

Using the adjoint from the previous example:

$$
\text{adj}(B) = \begin{bmatrix}
24 & -12 & -2 \\
-5 & 3 & 2 \\
-4 & -2 & 4
\end{bmatrix}
$$

the inverse is:

$$
B^{-1} = \frac{1}{22} \cdot \begin{bmatrix}
24 & -12 & -2 \\
-5 & 3 & 2 \\
-4 & -2 & 4
\end{bmatrix} = \begin{bmatrix}
\frac{24}{22} & \frac{-12}{22} & \frac{-2}{22} \\
\frac{-5}{22} & \frac{3}{22} & \frac{2}{22} \\
\frac{-4}{22} & \frac{-2}{22} & \frac{4}{22}
\end{bmatrix} = \begin{bmatrix}
\frac{12}{11} & \frac{-6}{11} & \frac{-1}{11} \\
\frac{-5}{22} & \frac{3}{22} & \frac{1}{11} \\
\frac{-2}{11} & \frac{-1}{11} & \frac{2}{11}
\end{bmatrix}
$$
