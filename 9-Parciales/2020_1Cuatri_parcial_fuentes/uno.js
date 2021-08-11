/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
    var tipo;
    var precio;
    var cantidad;
    var marca;
    var fabricante;
    var acumAlcohol=0;
    var contAlcohol=0;
    var contBarbijo=0;
    var contJabon=0;
    var acumBarbijo=0;
    var acumJabon=0;
    var tipoMasUnidades;
    var cantMasUnidades;
    var contMasUnidades=0;
    var flagMasUnidades=0;
    var promedioCompra;
    var flagAlcoholBarato=0;
    var cantAlcoholBarato;
    var alcoholBarato;
    var fabricanteAlcoholBarato;
    var precioMasUnidades;
    var precioAlcoholBarato=0;

    for(i=0;i<5;i++)
    {
        tipo=prompt('Ingrese tipo: "barbijo", "jabon", "alcohol"');
        while(tipo!="barbijo"&&tipo!="jabon"&&tipo!="alcohol")
        {
            tipo=prompt('Error. Ingrese tipo válido: "barbijo", "jabon", "alcohol"');
        }
        precio=parseFloat(prompt("Ingrese precio entre $(100-300)"));
        while(precio<100||precio>300||isNaN(precio))
        {
            precio=parseFloat(prompt("Error. Ingrese precio entre $(100-300)"));
        }
        cantidad=parseInt(prompt("Ingrese cantidad hasta 1000"));
        while(cantidad<1||cantidad>1000||isNaN(cantidad))
        {
            cantidad=parseInt(prompt("Error. Ingrese cantidad hasta 1000"));
        }
        marca=prompt("Ingrese marca");
        fabricante=prompt("Ingrese fabricante");
        if(tipo=="alcohol")
        {
            acumAlcohol+=cantidad;
            contAlcohol++
            if(flagAlcoholBarato==0||precioAlcoholBarato>precio)
            {
                cantAlcoholBarato=cantidad;
                precioAlcoholBarato=precio;
                fabricanteAlcoholBarato=fabricante;
                flagAlcoholBarato=1;
            }
        }
        else
        {
            if(tipo=="barbijo")
            {
                acumBarbijo+=cantidad;
                contBarbijo++
            }
            else
            {
                if(tipo=="jabon")
                {
                    acumJabon+=cantidad;
                    contJabon++
                }
            }
        }
    }
    if(acumAlcohol>acumBarbijo&&acumAlcohol>acumJabon)
    {
        tipoMasUnidades="alcohol";
        promedioCompra=acumAlcohol/contAlcohol;
    }
    else
    {
        if(acumBarbijo>acumAlcohol&&acumBarbijo>acumJabon)
        {
            tipoMasUnidades="barbijo";
            promedioCompra=acumBarbijo/contBarbijo;
        }
        else
        {
            if(acumJabon>acumBarbijo&&acumJabon>acumAlcohol)
            {
                tipoMasUnidades="jabon";
                promedioCompra=acumJabon/contJabon;
            }
        }
    }
    if(flagAlcoholBarato==1)
    {
        alert("A-El fabricante más barato del tipo alcohol es: "+fabricanteAlcoholBarato+". Su precio es de: "+precioAlcoholBarato+" y la cantidad de unidades es: "+cantAlcoholBarato);
    }
    else
    {
        alert("A-No se compraron alcoholes");        
    }
    alert("b-El tipo con más unidades es: "+tipoMasUnidades+" y el promedio por compras es de: "+promedioCompra.toFixed(2));
    alert("C-Las unidades de jabon son: "+acumJabon);
}
/*
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/