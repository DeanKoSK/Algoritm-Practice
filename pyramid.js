function daechulCode() {
    for (let firstI = 3; firstI > 0; firstI--) {
        let a = "";

        for (let secondI = 1; secondI <= 3; secondI++) {
            if (secondI >= firstI) {
                a = a + "*";
            } else {
                a = a + " ";
            }
        }

        for (let i = 0; i < 2; i++) {
            if (firstI + i < 3) {
                a = a + "*";
            } else {
                a = a + " ";
            }
        }
        
        console.log(a);
    }
    
    for(let thridI = 0; thridI > -2; thridI-- ){
     let b = " ";
    
      for(let fourthI = -2; fourthI <= 0; fourthI++){
          if(fourthI <= thridI){
              b = b + "*";
          } else {
              b = b + " ";
          }
      }
      console.log(b);
    }
   
}

daechulCode();