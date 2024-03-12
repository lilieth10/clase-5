const numerosDeLaLista = document.querySelectorAll(".numeros");

let sumaTotalNumeros = 0;
let numeroMasChico = Number(numerosDeLaLista[0].textContent);
let numeroMasGrande = Number(numerosDeLaLista[0].textContent);
let numeroMasRepetido;
let mayorFrecuencia = 0;
let cantidadDeNumeros = 0;

for (let i = 0; i < numerosDeLaLista.length; i++) {
    let numero = Number(numerosDeLaLista[i].textContent);
    sumaTotalNumeros += numero;
    cantidadDeNumeros++;

    if (numero < numeroMasChico) {
        numeroMasChico = numero;
    } 
    if (numero > numeroMasGrande){
        numeroMasGrande = numero;
    }

    let frecuenciaDeUnNumero = 0;
    for (let j = 0; j < numerosDeLaLista.length; j++) {
        if (Number(numerosDeLaLista[j].textContent) === numero) {
            frecuenciaDeUnNumero++;
        }
    }

    if (frecuenciaDeUnNumero > mayorFrecuencia) {
        mayorFrecuencia = frecuenciaDeUnNumero;
        numeroMasRepetido = numero;
    }
}

function realizarPromedio (sumaTotal, cantidadDeNumeros) {
    return sumaTotal / cantidadDeNumeros;
}

document.querySelector("#resultado-promedio").innerText = `El promedio es ${realizarPromedio(sumaTotalNumeros, cantidadDeNumeros)}`;
document.querySelector("#resultado-numero-pequenio").innerText = `El número más pequeño es ${numeroMasChico}`;
document.querySelector("#resultado-numero-grande").innerText = `El número más grande es ${numeroMasGrande}`;
document.querySelector("#resultado-numero-frecuente").innerText = `El número más frecuente es ${numeroMasRepetido}`;
