const caesar = function(str, shift) {
    let encrypted = "";
[...str].forEach(char => {
    const ascii = char.charCodeAt();
       if(  ascii >= 65 && ascii <= 90) {
        let newShift = shift % 26;
        if(ascii + newShift > 90) {
            const surplus = (ascii + newShift) - 90;
            encrypted += String.fromCharCode(65 + (surplus - 1));
          } else if(ascii + newShift < 65 ) {
             const surplus = 65 - (ascii + newShift) ;
             encrypted += String.fromCharCode((90 - surplus) + 1);
          } else {
              encrypted += String.fromCharCode(ascii + newShift);
          }
       
    } else if(ascii >= 97 && ascii <= 122) {
        let newShift = shift % 26;
        if(ascii + newShift > 122) {
          const surplus = (ascii + newShift) - 122;
          encrypted += String.fromCharCode(97 + (surplus - 1));
        } else if(ascii + newShift < 97 ) {
            const surplus = 97 - (ascii + newShift) ;
            encrypted += String.fromCharCode((122 - surplus) + 1);
         } else {
            encrypted += String.fromCharCode(ascii + newShift);
        }
        

    } else {
        encrypted += String.fromCharCode(ascii);
    }
});
return encrypted;
};


// Do not edit below this line
module.exports = caesar;
