//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos
const edad_18 = 0.1; // 10%
const edad_25 = 0.2; // 20%
const edad_50 = 0.3; // 30%

const casado_18 = 0.1; // 10%
const casado_25 = 0.2; // 20%
const casado_50 = 0.3; // 30%

const hijos_recargo = 0.2; // 20%

const propiedas = 0.35;

const salario = 0.5;
var salir_sistema = '';
while(salir_sistema!='salir'.toLowerCase()){
  var mensaje = '';
  //Recargo
  var recargo = 0;
  var recargo_casado = 0;
  var recargo_hijos = 0;
  var recargo_salario = 0;
  var recargo_propiedades = 0;
  var recargo_total = 0;

  //Precio final
  var precio_final = 0;

  //Mensajes de alerta para ingresar datos
  var nombre = prompt("Ingrese su nombre, por favor");
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ");
  //convirtiendo las edades ingresadas a números
  var edad_numero = parseInt(edad);

  var casado = prompt("¿Está casado actualmente?", "si/no");
  //Comprobamos la edad del cónyuge, solamente si se está casado/a

  var edad_conyuge = 0;
  var edad_conyuge_numero = 0;
  if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solamente números");
  //convirtiendo la edad del cónyuge si se esta casado/a
    edad_conyuge_numero = parseInt(edad_conyuge);
  }

  var hijos = prompt("¿Tiene hijos o hijas?","si/no")
  //Comprobamos la cantidad de hijos solamente si los tienen
  var hijos_cantidad = 0;
  var hijos_numero = 0;
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  if(hijos.toUpperCase() == "SI"  ){
    hijos_cantidad = prompt("¿Cúantos hijos tiene?");
    hijos_numero = parseInt(hijos_cantidad);
  }

  var trabaja = prompt("¿Trabaja actualmente?","si/no");
  var salario_cantidad = 0;
  var salario_numero = 0;

  if(trabaja.toUpperCase() == "SI"  ){
    salario_cantidad = prompt("¿Cuál es su salario? Ingrese solamente números");
    salario_numero = parseInt(salario_cantidad);
  }


  var propiedades = prompt("¿Tiene propiedades?","si/no");
  var propiedades_cantidad = 0;
  var propiedades_numero = 0;

  if(propiedades.toUpperCase() == "SI"  ){
    propiedades_cantidad = prompt("¿Cuántas propiedades tiene? Ingrese solamente números");
    propiedades_numero = parseInt(propiedades_cantidad);
  }
  //Aquí debe calcular el recargo total basado en las respuestas ingresadas

  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado

  mensaje = "******************************\r\n"+
            "* Para el asegurado "+nombre+
         "r\n******************************\r\n";

  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad
    recargo = precio_base * edad_18;
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo;
  }
  //aqui puede colocar un else if() con el siguiente rango
  else if(edad_numero>=25 && edad_numero<50){
     recargo = precio_base * edad_25;
     recargo_total = recargo_total + recargo;
  }else{
     recargo = precio_base * edad_50;
     recargo_total = recargo_total + recargo;
  }
  mensaje += "* Su recargo es de: Q."+ recargo+"\r\n";
  /**
   * 2. Recargo por la edad del conyuge
   */
  if(casado.toUpperCase() == "SI"  ){
      if(edad_conyuge_numero>=18 && edad_numero<25){
          recargo_casado = precio_base * casado_18;
          recargo_total = recargo_total + recargo_casado;
      }
      else if(edad_conyuge_numero>=25 && edad_numero<50){
         recargo_casado = precio_base * casado_25;
         recargo_total = recargo_total + recargo_casado;
      }else{
         recargo_casado = precio_base * casado_50;
         recargo_total = recargo_total + recargo_casado;
      }
      mensaje += "* El recargo por su pareja es de: Q."+ recargo+"\r\n";
  }
  /**
   * 3. Recargo por la cantidad de hijos
   */
  if(hijos.toUpperCase() == "SI"  ){
      recargo_hijos = precio_base * (hijos_numero * hijos_recargo);
      recargo_total = recargo_total + recargo_hijos;
      mensaje += "* El recargo por su "+ hijos_numero +" hijo/s es de: Q."+ recargo_hijos+"\r\n";
  }
  /**
   * 4. Recargo por salario
   */
  if(trabaja.toUpperCase() == "SI"  ){
      recargo_salario = salario_numero * salario;
      recargo_total = recargo_total + recargo_salario;
      mensaje += "* El recargo por su salario de Q." + salario_numero + "es de: Q."+ recargo_salario+"\r\n";
  }
  /**
   * 5. Recargo por propiedades
   */
  if(propiedades.toUpperCase() == "SI"  ){
      recargo_propiedades = precio_base * (propiedades_numero * propiedas)  ;
      recargo_total = recargo_total + recargo_propiedades;
      mensaje += "* El recargo por su/s " + propiedades_numero + " propiedades es de: Q."+ recargo_propiedades+"\r\n";
  }

  precio_final = precio_base + recargo_total;
  //Resultado


  mensaje += "******************************\r\n"+
             "* El recargo total sera de: Q."+recargo_total+"\r\n"
             "*------------------------------\r\n"+
             "* El precio valor del seguro es de: Q."+precio_final+"\r\n"
             "******************************";
  alert(mensaje);
  salir_sistema = prompt("Para continuar cotizando presione enter. Para terminar escriba \"salir\"");
}
