/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma=0;
    var promedio=0;
    var precioFinal=0;
    
    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma=precio1+precio2+precio3;
    promedio=suma/3;
    precioFinal=suma*1.21;

    alert("A-La suma es: "+suma);
    alert("B-El promedio es: "+promedio);
    alert("C-El precio final es: "+precioFinal);


    
}