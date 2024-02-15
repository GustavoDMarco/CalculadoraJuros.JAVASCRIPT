//TAXA AO ANO
//TEMPO EM MESES

function jurosSimples(Capital,taxa,tempo){
    console.log("Juros Simples:")
    console.log("Juros = " +  (Capital * ((taxa/12) / 100) * tempo))
    console.log("Montante final = " + (Capital + (Capital * ((taxa/12)/100) * tempo)))
}

jurosSimples(1000,10,60)

function jurosCompostos(Capital,taxa,tempo) {
    console.log("\nJuros Compostos:")
    console.log("Juros = " + ((Capital * (1 + ((taxa/12) / 100)) ** (tempo/12)) - Capital))
    console.log("Montante final = " +  (Capital * (1 + ((taxa/12) / 100)) ** (tempo/12)))
}

jurosCompostos(10000,12,12)

