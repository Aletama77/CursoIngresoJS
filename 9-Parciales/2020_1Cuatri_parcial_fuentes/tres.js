/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var acumMayoresEdadViudo=0;
	var nombreMasTemperatura;
	var flagMasTemp=0;
	var masTemperatura=0;
	var acumEdadHombreSoltero=0;
	var personaTercEdadMas38=0;
	var acumHombreSoltero=0;
	var contHombreSoltero=0;
	var promEdadHombreSoltero=0;

	while(respuesta!="no")
	{
		nombre=prompt("Ingrese nombre");
		edad=parseInt(prompt("Ingrese edad"));
		while(edad<=0||isNaN(edad))
		{
			edad=parseInt(prompt("Error. Ingrese edad"));		
		}
		sexo=prompt('Ingrese sexo: "f", "m"');
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt('Error. Ingrese sexo: "f", "m"');
		}
		estadoCivil=prompt('Ingrese estado civil: "soltero", "casado", "viudo"');
		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt('Error. Ingrese estado civil: "soltero", "casado", "viudo"');
		}
		temperaturaCorporal=parseFloat(prompt("Ingrese temperatura corporal"));
		while(temperaturaCorporal<20||temperaturaCorporal>50||isNaN(temperaturaCorporal))
		{
			temperaturaCorporal=parseFloat(prompt("Error. Ingrese temperatura corporal"));
		}
		if(sexo=="m"&&estadoCivil!="casado")
		{
			acumHombreSoltero=acumHombreSoltero+1;
		}
		if(flagMasTemp=0||masTemperatura<temperaturaCorporal)
		{
			nombreMasTemperatura=nombre;
		}
		if(edad>17&&estadoCivil=="viudo")
		{
			acumMayoresEdadViudo=acumMayoresEdadViudo+1;
		}
		if(edad>60&&temperaturaCorporal>38)
		{
			personaTercEdadMas38=personaTercEdadMas38+1;
		}
		if(sexo=="m"&&estadoCivil=="soltero")
		{
			acumEdadHombreSoltero=acumEdadHombreSoltero+edad;
			contHombreSoltero++;
		}
		respuesta=prompt("Desea seguir ingresando?");
	}
	promEdadHombreSoltero=acumEdadHombreSoltero/contHombreSoltero;

	alert("A-La persona con más temperatura es: "+nombreMasTemperatura);
	alert("B-La cantidad de mayores de edad que estan viudos son: "+acumMayoresEdadViudo);
	alert("C-La cantidad de hombres que hay solteros o viudos son: "+acumHombreSoltero);
	alert("D-La cantidad de personas de la tercera edad que tienen más de 38 grados es de: "+personaTercEdadMas38);
	alert("E-El promedio de edad de los hombres solteros es de: "+promEdadHombreSoltero);
}
/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/