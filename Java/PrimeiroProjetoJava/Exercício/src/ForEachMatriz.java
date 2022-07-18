import java.util.Scanner;

public class ForEachMatriz {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[][] ages = new int[3][3];
        for (int i = 0; i < ages.length; i++) {
            for (int j = 0; j < ages[i].length; j++) {
                if(i == 0){
                    System.out.println("Informe a idade: " + j);
                    ages[i][j] = scanner.nextInt();
                }else{
                    ages[i][j] = j;
                }
            }
        }
        for (int age : ages[0]) {
            String message = age < 18 ? "Menor" : "Maior";
            System.out.println(message);
        }
        scanner.close();
    }
}
