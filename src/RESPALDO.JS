window.cipher = { 
    encode: (offsetNumber, newTxt) => {
      console.log(newTxt)
      let encodeTxt = "";
      for (let i = 0; i < newTxt.length; i++) {
             let asciiNumber = newTxt.charCodeAt(i);
             console.log(asciiNumber)
                 if ((asciiNumber >= 65) && (asciiNumber <= 90)) {
             let code = ((asciiNumber - 65 + parseInt(offsetNumber)) % 26 + 65);
             console.log(code)
             encodeTxt += String.fromCharCode(code);
                 }
             }
             console.log(encodeTxt)
   
             return encodeTxt;
   },
   
   decode: (offsetNumber, newTxt) => {
     console.log(newTxt)
     let encodeTxt = "";
     for (let i = 0; i < newTxt.length; i++) {
            let asciiNumber = newTxt.charCodeAt(i);
            console.log(asciiNumber)
                if ((asciiNumber >= 65) && (asciiNumber <= 90)) {
            let code = ((asciiNumber - 90 - parseInt(offsetNumber)) % 26 + 90);
            console.log(code)
            encodeTxt += String.fromCharCode(code);
                }
            }
            console.log(encodeTxt)
   
            return encodeTxt;
   }
};