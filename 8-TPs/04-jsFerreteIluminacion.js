/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lampara=35;
    var cantidadLamparas;
    var marca;
    var Descuento;
    var precioBruto=0;
    var importeTotal=0;
    var iibb=0;
    var importeMAsImpuesto=0;

    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marca=document.getElementById("Marca").value;
    importeTotal=cantidadLamparas*lampara;

    if(cantidadLamparas>=6)
    {
        importeTotal=importeTotal*.5;
    }
    switch (marca) 
    {
        case "ArgentinaLuz":
            if(cantidadLamparas==5)
            {
                importeTotal=importeTotal*.6;
            }
            else
            {
                if(cantidadLamparas==4)
                {
                    importeTotal=importeTotal*.75;
                }
                else
                {
                    if(cantidadLamparas==3)
                    {
                        importeTotal=importeTotal*.85;
                    }
                }
            }
            break;
        case "FelipeLamparas":
            if(cantidadLamparas==4)
            {
                importeTotal=importeTotal*.75;
            }
            else
            {
                if(cantidadLamparas==3)
                {
                    importeTotal=importeTotal*9;
                }
            }
            break;
        case "JeLuz":
            break;
        case "HazIluminacion":
            break;
        case "Osram":
            break;
    }
    if(marca!="ArgentinaLuz"&&cantidadLamparas==5)
    {
        importeTotal=importeTotal*.7;
    }
    if(marca!="ArgentinaLuz"&&marca!="FelipeLamparas"&&cantidadLamparas==4)
    {
        importeTotal=importeTotal*.8;
    }
    if(marca!="ArgentinaLuz"&&marca!="FelipeLamparas"&&cantidadLamparas==3)
    {
        importeTotal=importeTotal*95;
    }
    document.getElementById("txtIdprecioDescuento").value=importeTotal.toFixed(2);
    if(importeTotal>120)
    {
        iibb=importeTotal*0.1;
        importeMAsImpuesto=importeTotal+iibb;
        alert("Usted pago $"+importeMAsImpuesto.toFixed(2)+" siendo "+iibb+" el impuesto que se pagó.")
    }
}
/*
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”,
 siendo X el impuesto que se pagó.
*/