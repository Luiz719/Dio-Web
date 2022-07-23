import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class IOExceptions{
    public static void main(String[] args) {
        String textLine;
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader("./src/files/text.txt"))) {
            while( (textLine = bufferedReader.readLine())!= null){
                System.out.println(textLine);
            }
        //checked exception    
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}