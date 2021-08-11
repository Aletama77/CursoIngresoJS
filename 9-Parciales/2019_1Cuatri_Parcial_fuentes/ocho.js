/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
    var letra;
    var numero=0;
    var respuesta;
    var contadorDePares=0;
    var contImpares=0;
    var contadorDeCeros=0;
    var acumPositivos=0;
    var contPositivos=0;
    var promPositivos;
    var acumNegativos=0;
    var contNegativos=0;
    var flagMaximo=0;
    var flagMinimo=0;
    var numMaximo=0;
    var numMinimo=0;
    var letraMaximo;
    var letraMinimo;

    while(respuesta!="no")
    {
        letra=prompt("Ingrese letra");
        numero=parseFloat(prompt("Ingrese numero entre -100 y 100"));
        while(numero<-100||numero>100||isNaN(numero))
        {
            numero=parseFloat(prompt("Error. Ingrese numero entre -100 y 100"));            
        }
        if(numero % 2==0)
        {
            contadorDePares++;
        }
        else
        {
            contImpares++;
        }
        if(numero==0)
        {
            contadorDeCeros++;
        }
        if(numero>=0)
        {
            acumPositivos=acumPositivos+numero;
            contPositivos++;
        }
        else
        {
            acumNegativos=acumNegativos+numero;
        }
        if(flagMaximo==0||numMaximo<numero)
        {
            numMaximo=numero;
            letraMaximo=letra;
            flagMaximo=1;
        }
        if(flagMinimo==0||numMinimo>numero)
        {
            numMinimo=numero;
            letraMinimo=letra;
            flagMinimo=1;
        }
        respuesta=prompt("Desea seguir ingresando?");
    }
    promPositivos=acumPositivos/contPositivos;
    alert("A-La cantidad de numeros pares es: "+contadorDePares);
    alert("B-La cantidad de numeros impares es: "+contImpares);
    alert("C-La cantidad de ceros es: "+contadorDeCeros);
    alert("D-El promedio de todos los números positivos ingresados es de: "+promPositivos.toFixed(2));
    alert("E-La suma de todos los negativos ingresados es de: "+acumNegativos);
    alert("F-El numero y letra del maximo es: "+numMaximo+letraMaximo+" .Y el numero minimo y su letra son: "+numMinimo+letraMinimo+".");
}  
/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/