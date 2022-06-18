function HelloPlus(props){
    var n1 = 40
    var n2 = 500
    return (
        <div>
            <p>
                Resultado: {props.calcNumbers(n1,n2)}
            </p>
        </div>
    )
}
export default HelloPlus;