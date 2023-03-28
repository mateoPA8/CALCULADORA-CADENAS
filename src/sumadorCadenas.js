function sumarCadena(cadena)
{
    //let cadenaConvertidaANumeros = cadena.split(",");
    var sumaTotal=0;
    if(cadena=="")
    {
        return 0;
    }
    else
    {
        for(let i=0;i<cadena.length;i++)
        {
            if(cadena[i]=="," || cadena[i]=="-")
            {
                sumaTotal=sumaTotal+0;
            }
            else
            {
                sumaTotal = sumaTotal + Number(cadena[i]);
            }
        }
        return sumaTotal;
    }
}

export default sumarCadena;