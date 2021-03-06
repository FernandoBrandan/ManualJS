
/*****************************************************************************/
//ASINCRONIA
/*****************************************************************************/

/*Direfencias entre sincrono y asincrono

Asincronico
realizar un request pasandole un callback que se ejecuta a futuro.

Paralelismo vs concurrencia.
Multiples tareas en simultaneo - Una sola tarea se ejecuta en un momento determinado

JAVASCRIP ASINCRONO Y CONCURRENTE
Event loop coordina la ejecucion, eventos y callbacks.
Call Stack ->> Web Apis ->> Callbacks Queue


/*****************************************************************************/
//Callback
/*****************************************************************************/

//Funcion como parametros a otra Function
/*Accion que realice cuando finalice la funcion principal
/*Funcion de retorno

/*Callback para recoger datos
no es tan optimo porque puede generar codigo espaguetti

/****************************/
//Ejemplo  
function saludar(nombre) {
    alert('Hola ' + nombre);
}
function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}  
procesarEntradaUsuario(saludar);

/************/

const getEmpleado = (id, callback) => {
    const empleado = empleado.find(e => e.id === id)
    if(empleado){callback(null, empleado)}
    else{callback(`Empleado no id ${id} no existe`)}}

getEmpleado(1, (err, callback) => {
    if(err){return console.log(`Error: ${err}`)}
    else{console.log(`Existe: ${empleado}`)}
})

/************/

function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);}
function calcProduct(num1, num2) {
    return num1 * num2;}
alert(calculate(5, 15, calcProduct));



/*****************************************************************************/
//Promesas
/*****************************************************************************/
/*
Una Promesa en JavaScript, es un objeto que sirve para reservar el resultado de una
operaci??n futura.
Este resultado llega a trav??s de una operaci??n as??ncrona como puede ser una petici??n
HTTP o una lectura de ficheros, que son operaciones no instant??neas, que requieren un
tiempo, aunque sea peque??o, para ejecutarse y finalizar.*/

/****************/
//Asincron??a

let miPrimeraPromise = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con ??xito.
    // Llamamos a reject(...) cuando falla. 
    setTimeout(function(){
      resolve("????xito!"); // ??Todo sali?? bien!
    }, 250);
  });
  
  miPrimeraPromise.then((successMessage) => {
    // succesMessage es lo que sea que pasamos en la funci??n resolve(...) de arriba.
    // No tiene por qu?? ser un string, pero si solo es un mensaje de ??xito, probablemente lo sea.
    console.log("??S??! " + successMessage);
  })



//La funci??n crea un elemento link y lo a??ade al final de la etiqueta <head>
function loadCSS(url, callback) {
    var elem = window.document.createElement('link');
    elem.rel = "stylesheet";
    elem.href = url;
    window.document.head.appendChild(elem);
    callback();
}

loadCSS('styles.css', function () {
    console.log("Estilos cargados");
});
/*
Cuando ejecutamos esta funci??n, le pasamos la url de styles.css y una funci??n
an??nima que ser?? el callback. Lo que har?? ser?? imprimir por la consola Estilos
cargados cuando finalice la carga.*/

/****************/
//Utilizando Promesas

// Asumamos que loadCSS devuelve una promesa
var promise = loadCSS('styles.css');

promise.then(function () {
    console.log("Estilos cargados");
});

promise.catch(function (err) {
    console.log("Ocurri?? un error: " + err);
});

/*
La funci??n la guardamos en la variable promise . Como es posible aplicar "chaining", es
decir, anidamiento de funciones, podemos escribir la ejecuci??n de la siguiente manera,
que es m??s legible y elegante:*/

loadCSS('styles.css').then(function () {
    console.log("Estilos cargados");
}).catch(function (err) {
    console.log("Ocurri?? un error: " + err);
});
//Pero para que se puedan usar las funciones then y catch , 
//hay que implementar la funci??n loadCSS como una promesa.

//Otro ejemplo
const obtenerInformacion = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(Objecto)}, 3000)
    })
}
obtenerInformacion().then(resultado => console.log());



/*****************************************************************************/
//Asinc Awai
/*****************************************************************************/
//.....

const mostrarResultado = async () => {
    resultado =  await obtenerInformacion();
    console.log(resultado);
}
mostrarResultado();

//ejemplo 
const empleados = [
    {   id: 1,
        nombre: 'Fernando'
    },
    {   id: 2,
        nombre: 'Linda'
    },
    {   id: 3,
        nombre: 'Karen'
    }];

const salarios = [
    {   id: 1,
        salario: 1000
    },
    {   id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {    
    return new Promise(( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;
        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ id }` );
    });
}

const getSalario = () => {
    return new Promise(( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        ( salario ) 
            ? resolve( salario )
            : reject( `No existe salario con id ${ id }` );
    });
}

const getInfoUsuario = async( id ) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);    
        return `El salario del empleado: ${ empleado } es de ${ salario }`;        
    } catch (error) {throw error;}
}

const id = 3;
getInfoUsuario( id )
    .then( msg => {console.log('TODO BIEN!');console.log(msg)})
    .catch( err => {console.log('TODO MAL!');console.log( err )});


/*****************************************************************************/
//Librer??as de terceros para utilizar Promesas
/*****************************************************************************/
//.....
