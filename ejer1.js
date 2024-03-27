function figurageometrica(lados) {
    if (lados < 0) {
      console.log("Error");
      return;
    }
  
    if (lados == 0) {
      console.log("Círculo");
    } else if (lados == 4) { 
      console.log("cuadrado");
    } else if (lados == 3) { 
      console.log("ciculo");
    } else if (lados == 5) {
      console.log("Pentágono");
    } else if (lados == 6) {
      console.log("Hexágono");
    } else {
      console.log("Polígono");
    }
  }
  
  figurageometrica(4); 