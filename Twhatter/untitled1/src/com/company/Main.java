package com.company;

import java.awt.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

 public class Main {

    static double calcDiagonals(int i, int j, int l, ArrayList<Point> point)
    {
        return Math.max(Math.max(point.get(i).distance(point.get(j)) ,point.get(j).distance(point.get(l))),
                point.get(l).distance(point.get(i)));
    }

    public static void main(String[] arg) throws IOException {
        try{
            ArrayList<Point> points = new ArrayList<>();

            Scanner in = new Scanner(new File("input.txt"));
            PrintWriter out = new PrintWriter("output.txt");
            int n = in.nextInt();

            if(n==3){
                out.println(0);
                out.flush();

            }

            else {
                while (in.hasNext()) {
                    points.add(new Point(in.nextInt(), in.nextInt()));
                }
                if(n==4){
                    out.format("%.2f%n", Math.min(points.get(0).distance(points.get(2)),points.get(1).distance(points.get(3))));
                    out.flush();
                }else {

                    double[][] m = new double[n + 1][n];

                    n--;
                    for (int i = 1; i <= n; i++)
                        m[i][i] = 0;
                    int j;

                    for (int k = 2; k <= n; k++) {
                        for (int i = 0; i <= n - k ; i++) {
                            j = i + k ;
                            m[i][j] = Integer.MAX_VALUE;

                            for (int l = i; l <= j - 1; l++) {
                                double d = calcDiagonals(i , l, j, points);
                                double t2 =m[i][l];
                                double t3 =m[l + 1][j];
                                double dMax = Math.max(Math.max(m[i][l], m[l + 1][j]), d);
                                if (dMax < m[i][j]) {
                                    m[i][j] = dMax;
                                }
                            }
                        }
                        System.out.print("\n---------------------------------------\n");
                        for (int q = 0; q <= n+1; q++) {
                            for (int z = 0; z <=n ; z++) {
                                System.out.printf("%.2f",m[q][z]);
                                System.out.print("    ");
                            }
                            System.out.print("\n");
                        }
                    }
                    out.format("%.2f%n", m[1][n]);
                    out.flush();
                }
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

    }
}