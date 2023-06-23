---
layout: page
title: "PC-SIG Diskette Library (Disk #1009)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1009/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1009"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ACM VOL 1-5 2 OF 4 (ALSO 1008,1010,1011)"

    Here is a collection of Fortran routines/procedures for solving
    various problems in the areas of science, engineering, and numerical
    analysis.
    
    Some of the many routines covered:
    
    ~ Solution of zeros of polynomials
    
    ~ Various partial differential equation solvers
    
    ~ Linear equation solvers for over/under-determined problems (L1, L2
    and Chebyshev norms)
    
    ~ Eigenvalue solvers
    
    ~ Function integration
    
    ~ Minimization of unconstrained multivariate functions
    
    ~ Curve-fitting in Chebyshev norm
    
    ~ Dependence of solution of nonlinear systems on its parameters
    
    ~ Sorting
    
    ~ Global error estimation for ordinary differential equations
    
    ~ Matrix bandwidth and profile reduction
    
    ~ Spline interpolation
    
    ~ Solution of linear systems for special matrices
    
    ~ Cubic curve-fitting using local data
    
    ~ Computation of condition numbers of a matrix without computing
    eigenvectors
    
    ~ Bessel functions
    
    ~ Statistical functions
    
    ~ Revised simplex method for constrained resource network scheduling
    
    ~ Exact solution of integer systems of linear equations
    
    ~ Convex hull algorithm for planar sets
    
    ~ A multiple-precision arithmetic package
    
    ~ Adaptive smooth curve-fitting
    
    ~ Basic linear algebra subprograms (BLAS)
    
    ~ Optimized mass-storage fit
    
    ~ Efficient one-way enciphering algorithm
    
    ~ And more
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1009.TXT

{% raw %}
```
Disk No  1009
Program Title: ACM VOL 1-5 (Disk 2 of 4)
PC-SIG version 1
 
    These routines are a collection of FORTRAN routines/procedures for
solving a variety of problems in science, engineering, and numerical
analysis. There are routines for the solution of zeros of polynomials,
various partial differential equation solvers, linear equation solvers
for over/under-determined problems (L1, L2 and Chebyshev norms), eigenvalue
solvers, function integration, minimization of unconstrained multivariate
functions, curve fitting in Chebyshev norm, dependence of solution of
nonlinear systems on its parameters, sorting, global error estimation for
ordinary differential equations, matrix bandwidth and profile reduction,
spline interpolation, solution of linear systems for special matrices,
cubic curve fitting using local data, computation of condition numbers of a
matrix without computing eigenvectors, bessel functions, statistical
functions, revised simplex method for constrained resource network
scheduling, exact solution of integer systems of linear equations, convex
hull algorithm for planar sets, a multiple-precision arithmetic package,
adaptive smooth curve fitting, basic linear algebra subprograms (BLAS),
optimized mass-storage fit, efficient one-way enciphering algorithm, and
more.
 
Usage: Fortran Programmers
 
System Requirements: 128K memory, one disk drive, and the Fortran
programming language.
 
How to Start: Type: COPY READ.ME PRN (press enter).
 
Suggested Registration: Any amount is appreciated.
 
File Descriptions:
 
??????   FXZ  Compressed file containing Fortran programs (22 files).
READ     ME   Information file about programs.
CURVEFIT AXZ  Compressed file.
INDEX         Information file about programs.
COMPRESS EXE  File archiving/unarchiving program.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk #1009 ACM VOL 1-5 (Disk 2 of 4)  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ For information on how to unarhive the programs on this disk, Type:     ║
║                        COPY READ.ME PRN (press enter)                   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1009

     Volume in drive A has no label
     Directory of A:\

    ADAPT    FXZ     35857  10-25-87  12:10a
    AIRY     FXZ      6677  10-25-87  12:04a
    APPROX   FXZ      8613  10-25-87  12:04a
    ARSME    FXZ      6432  10-25-87  12:07a
    CHEB     FXZ      4010  10-25-87  12:03a
    COMB     FXZ       889  10-25-87  12:07a
    COMPRESS EXE     19017  10-24-87  12:49a
    CONOPT   FXZ     10964  10-25-87  12:04a
    CONVEX   FXZ      4823  10-25-87  12:08a
    CURVEFIT AXZ      1554  10-28-87   5:22p
    DMRODE   FXZ      8037  10-25-87  12:03a
    ESOLVE   FXZ     16804  10-25-87  12:08a
    FACTOR   FXZ      2387  10-25-87  12:06a
    FILE1009 TXT      1944   2-05-88   1:09p
    FRASER   FXZ     37396  10-25-87   4:11p
    GARBOW   FXZ     14581  10-25-87   3:58p
    GAUTSCHI FXZ     11905  10-25-87   4:09p
    GERK     FXZ      9638  10-25-87  12:05a
    GMA      FXZ     25540  10-25-87  12:12a
    GMADRV   FXZ      9440  10-25-87  12:12a
    GO       BAT        38   2-04-88  11:18a
    GO       TXT       463   2-04-88  11:35a
    HELMHOLT FXZ     12880  10-25-87   4:10p
    HQR3     FXZ      6843  10-25-87  12:05a
    IDBVIP   FXZ     29257  10-25-87  12:11a
    IESIMP   FXZ     33235  10-25-87  12:05a
    INDEX            12972  10-25-87  12:03a
    INERFC   FXZ      4279  10-25-87  12:07a
    READ     ME       4378  11-11-87  11:23p
           29 file(s)     340853 bytes
                            7168 bytes free
