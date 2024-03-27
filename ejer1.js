function figurageometrica(numLados) {
    if (numLados < 0) {
      console.log("Error");
      return;
    }
  
    if (numLados == 0) {
      console.log("Círculo");
    } else if (numLados == 4) { 
      console.log("cuadrado");
    } else if (numLados == 3) { 
      console.log("ciculo");
    } else if (numLados == 5) {
      console.log("Pentágono");
    } else if (numLados == 6) {
      console.log("Hexágono");
    } else {
      console.log("Polígono");
    }
  }
  
  figurageometrica(4); // Esto mostrará "Cuadrado" en la consola