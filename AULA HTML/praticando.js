let valor = parseFloat(prompt('Digite o valor de 1 xerox'))
alert('Valor da xerox = R$ '+valor);

for (cont = 1; cont <=10; cont++){
    alert(cont+' = R$ '+(cont*valor).toFixed(2))
}


