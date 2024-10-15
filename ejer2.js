function tipoFigura(lados) {
    if (lados < 3) {
      console.log("Error, introducir un numero valido");
          }
    function perimetro(largo) {
        perimetro=tipoFigura*largo 
          console.log("el perimetro de: " + tipoFigura  + "es: " + perimetro);
    }
    if (lados = 0) {
      console.log("Círculo");
     } else if (lados = 4) { 
      console.log("cuadrado");
    } else if (lados = 3) { 
      console.log("ciculo");
    } else if (lados = 5) {
      console.log("Pentágono");
    } else if (lados = 6) {
      console.log("Hexágono");
    } else {
      console.log("Polígono");
    }
    }
tipoFigura(4); 
perimetro(2);