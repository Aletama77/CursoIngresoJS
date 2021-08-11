/*
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, 
informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/
function mostrar()
{
    var altura=0;
    var sexo;
    var acumAlturas=0;
    var contAlturas=0;
    var promAlturas;
    var alturaMasBaja=0;
    var flagAlturaMasBaja=0;
    var sexoMasBaja;
    var alturaMas190=0;
    
    for(i=0;i<5;i++)
    {
        altura=parseFloat(prompt("Ingrese altura en centímetros"));
        while(altura<1&&altura>250||isNaN(altura))
        {
            altura=parceFloat(prompt("Error. Ingrese altura en centímetros"));
        }
        sexo=prompt('Ingrese sexo: "f", "m"');
        while(sexo!="f"&&sexo!="m")
        {
            sexo=prompt('Error. Ingrese sexo: "f", "m"');
        }
        if(sexo=="f"&&altura>190)
        {
            alturaMas190=alturaMas190+1;
        }
        acumAlturas=acumAlturas+altura;
        contAlturas++;
        if(flagAlturaMasBaja==0||alturaMasBaja>altura)
        {
            alturaMasBaja=altura;
            sexoMasBaja=sexo;
            flagAlturaMasBaja=1;
        }
    }
    promAlturas=acumAlturas/contAlturas;
    alert("A-El promedio de alturas total es: "+promAlturas);
    alert("B-La altura más baja es: "+alturaMasBaja+" y el sexo es: "+sexoMasBaja);
    alert("C-La cantidad de mujeres que superan los 190 cm son: "+alturaMas190);
}
/*
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/