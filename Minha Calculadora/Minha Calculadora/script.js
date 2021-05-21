let res = document.getElementById("res")


res.readOnly = true


teclado = function(codigo, função, nome){
    document.addEventListener("keydown", teclaEvent = function(event){
        
        let tecla = event.keyCode

        cor = function(){
            nome.style.color = "white"
            nome.style.backgroundColor = "black"
        }
        
        if(tecla == codigo){
            função()
            nome.style.color = "black"
            nome.style.backgroundColor = "white"

            setTimeout(cor, 100)
        }
    })
}


let um = document.getElementById("um")
um.addEventListener("click", n1 = function(){
    res.focus()
    return escrever(1)   
})
teclado(97, n1, um)
teclado(49, n1, um)

let dois = document.getElementById("dois")
dois.addEventListener("click", n2 = function(){
    res.focus()
    return escrever(2)
})
teclado(98, n2, dois)
teclado(50, n2, dois)

let treis = document.getElementById("treis")
treis.addEventListener("click", n3 = function(){
    res.focus()
    return escrever(3)
})
teclado(99, n3, treis)
teclado(51, n3, treis)

let quatro = document.getElementById("quatro")
quatro.addEventListener("click", n4 = function(){
    res.focus()
    return escrever(4)
})
teclado(100, n4, quatro)
teclado(52, n4, quatro)

let cinco = document.getElementById("cinco")
cinco.addEventListener("click", n5 = function(){
    res.focus()
    return escrever(5)
})
teclado(101, n5, cinco)
teclado(53, n5, cinco)

let seis = document.getElementById("seis")
seis.addEventListener("click", n6 = function(){
    res.focus()
    return escrever(6)
})
teclado(102, n6, seis)
teclado(54, n6, seis)

let sete = document.getElementById("sete")
sete.addEventListener("click", n7 = function(){
    res.focus()
    return escrever(7)
})
teclado(103, n7, sete)
teclado(55, n7, sete)

let oito = document.getElementById("oito")
oito.addEventListener("click", n8 = function(){
    res.focus()
    return escrever(8)
})
teclado(104, n8, oito)
teclado(56, n8, oito)

let nove = document.getElementById("nove")
nove.addEventListener("click", n9 = function(){
    res.focus()
    return escrever(9)
})
teclado(105, n9, nove)
teclado(57, n9, nove)


let zero = document.getElementById("zero")
zero.addEventListener("click", n0 = function(){
    res.focus()
    return escrever(0)
})
teclado(96, n0, zero)
teclado(48,n0, zero)



let mais = document.getElementById("mais")
mais.addEventListener("click", adição = function(){
    res.focus()
    return escrever(" + ")
})
teclado(107, adição, mais)

let menos = document.getElementById("menos")
menos.addEventListener("click", subtração = function(){
    res.focus()
    return escrever(" - ")
})
teclado(109, subtração, menos)
teclado(189, subtração, menos)

let dividir = document.getElementById("dividir")
dividir.addEventListener("click", divisão = function(){
    res.focus()
    return escrever(" / ")
})
teclado(111, divisão, dividir)

let vezes = document.getElementById("vezes")
vezes.addEventListener("click", multiplicação = function(){
    res.focus()
    return escrever(" * ")
})
teclado(106, multiplicação, vezes)
teclado(88, multiplicação, vezes)

let igual = document.getElementById("igual")
igual.addEventListener("click", resultado = function(){
    res.focus()
    let contaNumero = eval(String(res.value)) 
    res.value = `${contaNumero}`
})
teclado(187, resultado, igual)
teclado(13, resultado, igual)



let limpar = document.getElementById("limpar")
limpar.addEventListener("click", limparConta = function(){
    res.focus()
    let text = res.value
    let apagar = text.substring(text.length - 1, 0)
    res.value = apagar
    console.log(apagar)

})
teclado(8, limparConta, limpar)


apagarTudo = function (){
    res.value = ""
}
teclado(46, apagarTudo, limpar)

let virgula = document.getElementById("virgula")
virgula.addEventListener("click", colocarVirgula = function(){
    res.focus()
    return escrever(".")
})
teclado(110, colocarVirgula, virgula)
teclado(108, colocarVirgula, virgula)
teclado(188, colocarVirgula, virgula)
teclado(190, colocarVirgula, virgula)


escrever = function (n){
    res.value += n
}


