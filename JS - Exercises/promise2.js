new Promise((resolve, reject) => {
    let a = 10
    let b = 20
    resolve(a + c)
}).then(res => {
    console.log("RESULTADO: ",res)
}).catch(()=>{
    console.log("Erro!")
}).finally(() => {
    console.log('Fim da execução!');
})