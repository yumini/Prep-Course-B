// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var num=1;
    var sum=0;
    while(num<=10){
      sum+=num;
      num++;
    }
    return sum;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares=[];
  
  for (numero of array) {
    if (numero % 2 === 0){
     pares.push(numero);
    }
  }
  return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  /*
  var array_cuadrado=[];
  var cont=0;
  for (numero of array) {
    array_cuadrado[cont] = numero**2;
    cont++;
  }
  return array_cuadrado;*/
  var cuadrado=array.map(
    function(elemento)
    {
      return elemento**2;
    }
  )
  return cuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma=0;
  array.forEach(function (elemento, indice) {
    suma+=elemento;
  });
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
