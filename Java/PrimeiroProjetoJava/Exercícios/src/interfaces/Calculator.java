package interfaces;

//interface
interface Calculable{
    public int calculate(int a, int b);
}

//classes que implementam a interface
class Sum implements Calculable{
    public int calculate(int a, int b) {
        return a + b;
    }
}

class Subtraction implements Calculable{
    public int calculate(int a, int b) {
        return a - b;
    }  
}

public class Calculator {   
    public static void main(String[] args) {      
        Sum sum = new Sum();
        Subtraction subtraction = new Subtraction();
        int resultSum = sum.calculate(2,3);
        int resultSubtraction = subtraction.calculate(5,3);
        System.out.println("resultSum: " + resultSum);
        System.out.println("resultSubtraction: " + resultSubtraction);
    }
}