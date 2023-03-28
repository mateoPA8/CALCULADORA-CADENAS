function sumarCadena(cadena)
{
    let cadenaConvertidaANumeros = cadena.split(",");
    var sumaTotal=0;
    if(cadena=="")
    {
        return 0;
    }
    else
    {
        for(let i=0;i<cadenaConvertidaANumeros.length;i++)
        {
             sumaTotal = sumaTotal + Number(cadenaConvertidaANumeros[i]);
        }
        return sumaTotal;
    }
}

export default sumarCadena;