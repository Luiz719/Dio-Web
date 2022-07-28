package shopping;

//criando uma classe de erro personalizado do tipo unchecked - tempo de execução
//herança da classe pai
public class OptionException extends RuntimeException{
    public OptionException(String message){
        super(message);
    }  
}