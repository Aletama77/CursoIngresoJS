/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var respuesta;
  var tipo;
  var cantidad=0;
  var precio=0;
  var acumBolsas=0;
  var importeDescuento=0;
  var importeBruto=0;
  var tipoMasCantidad;
  var acumCal=0;
  var acumArena=0;
  var acumCemento=0;
  var tipoMasCaro;
  var flagMasCaro=0;
  var precioMasCaro=0;

  while(respuesta!="no")
  {
    tipo=prompt('Ingrese tipo: "arena", "cal", "cemento"');
    while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
    {
      tipo=prompt('Error. Ingrese tipo: "arena", "cal", "cemento"');
    }
    cantidad=parseInt(prompt("Ingrese cantidad"));
    while(cantidad<1||isNaN(cantidad))
    {
      cantidad=parseInt(prompt("Error. Ingrese cantidad"));
    }
    precio=parseFloat(prompt("Ingrese precio"));
    while(precio<=0||isNaN(precio))
    {
      precio=parseFloat(prompt("Error. Ingrese precio"));
    }
    if(flagMasCaro==0||precioMasCaro<precio)
    {
      precioMasCaro=precio;
      tipoMasCaro=tipo;
      flagMasCaro=1;
    }
    if(tipo=="arena")
    {
      acumArena=acumArena+cantidad;
    }
    else
    {
      if(tipo=="cal")
      {
        acumCal=acumCal+cantidad;
      }
      else
      {
        if(tipo=="cemento")
        {
          acumCemento=acumCemento+cantidad;
        }
      }
    }
    acumBolsas=acumBolsas+cantidad;
    importeBruto=importeBruto+cantidad*precio;
    respuesta=prompt("desea seguir ingresando?");      
  }
  if(acumCal>acumArena&&acumCal>acumCemento)
  {
    tipoMasCantidad="cal";
  }
  else
  {
    if(acumArena>acumCal&&acumArena>acumCemento)
    {
      tipoMasCantidad="arena";
    }
    else
    {
      if(acumCemento>acumArena&&acumCemento>acumCal)
      {
        tipoMasCantidad="Cemento";
      }
    }
  }
  if(acumBolsas>10&&acumBolsas<31)
  {
    importeDescuento=importeBruto*.85;
  }
  else
  {
    if(acumBolsas>30)
    {
      importeDescuento=importeBruto*.75;
    }
  }
  alert("A-El importe total bruto a pagar sin descuento es de: $"+importeBruto);
  if(acumBolsas>10)
  {
    alert("B-El importe total es de: $"+importeDescuento.toFixed(2));
  }
  alert("C-El tipo con más cantidad de bolsas es: "+tipoMasCantidad);
  alert("D-El tipo más caro es: "+tipoMasCaro+" y su precio es de: $"+precioMasCaro);
}
/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/