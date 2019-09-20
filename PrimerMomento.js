const fs = require('fs');

console.log("Escribe tu nombre");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var dato = d.toString().trim();
    console.log("Tu nombre es: " + dato);
    if(dato == 'salir'){
        return process.stdin.destroy();
    }
    //process.stdin.destroy();
    var base = dato;
    if(base.toString().trim() != "NaN"){
        
        var idio1="Hola "+dato;
        var idio2="Hello "+dato;
        var idio3="Hallo "+dato;
        var idio4="नमस्कार "+dato;
        var idio5="γεια σας "+dato;
        fs.writeFile(
            `idioma Nombre ${ base }.txt` , 
          idio1+idio2+idio3+idio4,idio5,
            (err) => {
                if (err) 
                  console.log(err);
                console.log(`${ idio1} ${ idio2} ${idio3} ${ idio4} ${ idio5}`);
            }
            
        );
        console.log(`${ idio1} ${ idio2} ${idio3} ${ idio4} ${ idio5}`);
    }else{
        console.log("No ingresaste un nombre");
    }
    
});

