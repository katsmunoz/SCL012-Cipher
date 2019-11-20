window.cipher = { 
 encode: (offsetNumber, newTxt) => {
   //console.log(newTxt)
   let encodeTxt = "";
   for (let i = 0; i <newTxt.length; i++) {
          let asciiNumber = newTxt.charCodeAt(i);
          //console.log(asciiNumber)
//Cifrado para MAYÚSCULAS
              if ((asciiNumber >= 65) && (asciiNumber <= 90)) {
          let code = ((asciiNumber - 65 + parseInt(offsetNumber)) % 26 + 65);
          //console.log(code)
          encodeTxt += String.fromCharCode(code);
          //console.log(encodeTxt)
//Cifrado para MINÚSCULAS
             } if ((asciiNumber >= 97) && (asciiNumber <= 122)) {
                let code = ((asciiNumber - 97 + parseInt(offsetNumber)) % 26 + 97);
                encodeTxt += String.fromCharCode(code);                 
//Para mantener los ESPACIOS
              } else if (asciiNumber == 32) {
              encodeTxt += String.fromCharCode(asciiNumber);
                
              }        
        }
        return encodeTxt; 
},

decode: (offsetNumber, newTxt) => {
  //console.log(newTxt)
  let encodeTxt = "";
  for (let i = 0; i <newTxt.length; i++) {
         let asciiNumber = newTxt.charCodeAt(i);
         //console.log(asciiNumber)
             if ((asciiNumber >= 65) && (asciiNumber <= 90)) {
         let code = ((asciiNumber - 90 - parseInt(offsetNumber)) % 26 + 90);
         //console.log(code)
         encodeTxt += String.fromCharCode(code);
//Cifrado para MINÚSCULAS
        } if ((asciiNumber >= 97) && (asciiNumber <= 122)) {
          let code = ((asciiNumber - 122 - parseInt(offsetNumber)) % 26 + 122);
          encodeTxt += String.fromCharCode(code);
//Para mantener los espacios    
             } else if (asciiNumber == 32) {
              encodeTxt += String.fromCharCode(asciiNumber);
                
              }  
         }
         //console.log(encodeTxt)

         return encodeTxt;
}
    
};
