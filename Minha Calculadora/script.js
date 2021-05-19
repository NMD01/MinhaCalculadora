

let res = document.getElementById("res")


res.readOnly = true


document.addEventListener("keydown", enter = function(event){
    let tecla = event.keyCode
    
    if(tecla == 13){
        resultado()
    }
})


// document.addEventListener("keydown", tn1 = function(event){
//     let tecla = event.keyCode

//     console.log(tecla)
// })

teclado = function(codigo, função){
    document.addEventListener("keydown", teclaEvent = function(event){
        
        let tecla = event.keyCode

        if(tecla == codigo){
            função()
        }
    })
}





let um = document.getElementById("um")
um.addEventListener("click", n1 = function(){
    res.focus()
    return escrever(1)   
})
teclado(97, n1)
teclado(49, n1)

let dois = document.getElementById("dois")
dois.addEventListener("click", n2 = function(){
    res.focus()
    return escrever(2)
})
teclado(98, n2)
teclado(50, n2)

let treis = document.getElementById("treis")
treis.addEventListener("click", n3 = function(){
    res.focus()
    return escrever(3)
})
teclado(99, n3)
teclado(51, n3)

let quatro = document.getElementById("quatro")
quatro.addEventListener("click", n4 = function(){
    res.focus()
    return escrever(4)
})
teclado(100, n4)
teclado(52, n4)

let cinco = document.getElementById("cinco")
cinco.addEventListener("click", n5 = function(){
    res.focus()
    return escrever(5)
})
teclado(101, n5)
teclado(53, n5)

let seis = document.getElementById("seis")
seis.addEventListener("click", n6 = function(){
    res.focus()
    return escrever(6)
})
teclado(102, n6)
teclado(54, n6)

let sete = document.getElementById("sete")
sete.addEventListener("click", n7 = function(){
    res.focus()
    return escrever(7)
})
teclado(103, n7)
teclado(55, n7)

let oito = document.getElementById("oito")
oito.addEventListener("click", n8 = function(){
    res.focus()
    return escrever(8)
})
teclado(104, n8)
teclado(56, n8)

let nove = document.getElementById("nove")
nove.addEventListener("click", n9 = function(){
    res.focus()
    return escrever(9)
})
teclado(105, n9)
teclado(57, n9)


let zero = document.getElementById("zero")
zero.addEventListener("click", n0 = function(){
    res.focus()
    return escrever(0)
})
teclado(96, n0)
teclado(48,n0)







let mais = document.getElementById("mais")
mais.addEventListener("click", adição = function(){
    res.focus()
    return escrever(" + ")
})
teclado(107, adição)

let menos = document.getElementById("menos")
menos.addEventListener("click", subtração = function(){
    res.focus()
    return escrever(" - ")
})
teclado(109, subtração)
teclado(189, subtração)

let dividir = document.getElementById("dividir")
dividir.addEventListener("click", divisão = function(){
    res.focus()
    return escrever(" / ")
})
teclado(111, divisão)

let vezes = document.getElementById("vezes")
vezes.addEventListener("click", multiplicação = function(){
    res.focus()
    return escrever(" * ")
})
teclado(106, multiplicação)
teclado(88, multiplicação)

let igual = document.getElementById("igual")
igual.addEventListener("click", resultado = function(){
    res.focus()

    let conta = res.value

    let contaNumero = eval(String(conta))

    res.value = `${contaNumero}`
    // console.log(contaNumero)


})
teclado(187, resultado)

let limpar = document.getElementById("limpar")
limpar.addEventListener("click", limparConta = function(){
    res.focus()
    res.value = ""
})
teclado(46, limparConta)
teclado(8, limparConta)

let virgula = document.getElementById("virgula")
virgula.addEventListener("click", colocarVirgula = function(){
    res.focus()
    return escrever(".")
})
teclado(110, colocarVirgula)
teclado(108, colocarVirgula)
teclado(188, colocarVirgula)
teclado(190, colocarVirgula)













escrever = function (n){
    res.value += n
}


