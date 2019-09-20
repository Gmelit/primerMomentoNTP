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
        fs.writeFile(
            `idioma Nombre ${ base }.txt` , 
          idio1+idio2,
            (err) => {
                if (err) 
                  console.log(err);
                console.log(`${ idio1} ${ idio2}`);
            }
            
        );
        console.log(`${ idio1} ${ idio2}`);
    }else{
        console.log("No ingresaste un nombre");
    }
    
});

