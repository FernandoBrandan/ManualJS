
/*****************************************************************************/
//JSON
/*****************************************************************************/
/*JSON es el acrónimo de JavaScript Object Notation. Notación de objeto JavaScript. Es
un objeto JavaScript pero con algunos detalles de implementación que nos permitirán
serializarlo para poder utilizarlo como intercambio de datos entre servicios.*/


//Los detalles de implementación son que las propiedades del objeto deben ser Strings
//para que no haya problemas al codificarlo y decodificarlo.
//El resto de primitivas y clases como objects , arrays , strings , números, true , false y null.

var usuario = {
    "id": "012345678",
    "username": "carlosazaustre",
    "data": {
        "name": "Carlos Azaustre",
        "city": "Madrid"
        },
    "preferences": { 
    "interests": ["javascript",
                  "angularjs"]
        }
    };

//Acceder 
usuario.data.city; // "Madrid"

/*Si queremos serializarlo para poder realizar un intercambio de datos, debemos usar la
función JSON.stringify que devuelve en un String la información del objeto que se le
pasa por parámetro.*/

var jsonSerializado = JSON.stringify(usuario);
/* Devuelve:
{"id":"012345678","username":"carlosazaustre","password":"fkldfn4r09330adafnanf9843fbcdkjdkks","
*/
//Si ahora queremos acceder a las propiedades no podemos, porque se trata de un string.
    
/*Para poder reconstruirlo a partir del string, tenemos la función JSON.parse que
devuelve un objeto a partir del string que se pasa como parámetro. Tiene que estar
correctamente formado, si no el método parse nos devolverá error.*/

var jsonReconstruido = JSON.parse(jsonSerializado);

//Ahora podemos acceder a sus propiedades como antes.
jsonReconstruido.data.city; // "Madrid"


//json -> polyfill compatible con navegadores viejos

/*****************************************************************************/
//AJAX
/*****************************************************************************/
/*AJAX es el acrónimo de Asynchronous JavaScript And XML. Es el uso de JavaScript
para realizar llamadas o peticiones asíncronas al servidor utilizando XML.*/

/**************/
//XMLHttpRequest

// Creamos el objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Definimos la función que manejará la respuesta
//xhr.addEventListener(("load")=>{})  //otro ejemplo a xhr.onLoad
function reqHandler () {
    if (this.readyState === 4 && this.status === 200) {
        /* Comprobamos que el estado es 4 (operación completada)
        * los estados que podemos comprobar son:
        * 0 = UNSET (No se ha llamado al método open())
        * 1 = OPENED (Se ha llamado al método open())
        * 2 = HEADERS_RECEIVED (Se ha llamado al método send())
        * 3 = LOADING (Se está recibiendo la respuesta)
        * 4 = DONE (se ha completado la operación)
        * y el código 200 es el correspondiente al OK de HTTP de
        * que todo ha salido correcto.
        */
        console.log(this.responseText);
    }
}

// Asociamos la funcion manejadora
xhr.onLoad = reqHandler;

// Abrimos la conexión hacia la URL, indicando el método HTTP, en este caso será GET
xhr.open('GET', 'http://jsonplaceholder.typicode.com/photos', true);

// Enviamos la petición
xhr.send();

// Esto es lo que mostrará en la consola:
[
    {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/30ac17"
    },
    {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/dff9f6"
    }
]


/*Como es un objeto JSON, podemos acceder a sus propiedades, iterarlo, etc.. Entonces
imaginemos que el anterior código JavaScript lo tenemos en una página HTML que
contiene un <div id='respuesta'></div> */

//<div id="respuesta"></div>

//si la función reqHandler la modificamos de esta manera:
// Código JS
function reqHandler () {
    if (this.readyState === 4 && this.status === 200) {
        var respuesta = JSON.parse(this.responseText);
        var respuestaHTML = document.querySelector('#respuesta');
        var tpl = '';
        respuesta.forEach(function (elem) {
            tpl += '<a href="' + elem.url + '">'
            + '<img src="' + elem.thumbnailUrl + '"/>',
            + '</a>',
            + '<br/>',
            + '<span>' + elem.title + '</span>';
        });
        respuestaHTML.innerHTML = tpl;
    }
}

//ActiveXObject --> new XMKHttpRquest -> para que lo soporte int explore


/*****************************************************************************/
//Fetch en ECMAScript6
/*****************************************************************************/
/**En el nuevo estándar de JavaScript se introduce el objeto fetch que funciona de
manera similar al objeto XMLHttpRequest pero de una forma que resulta más legible y
utilizando promesas, recogiendo las funciones con then . Todo el tema de promesas lo
explicaremos más adelante. */

Text()
json()
Blob()
FormData()
ArrayBuffer()


var respuestaHTML = document.querySelector('#respuesta');
var tpl = '';
fetch("http://jsonplaceholder.typicode.com/photos" )
    .then((response) => {return response.json()})
    .then((albums) => {albums.forEach(function (elem) {
                                    tpl += '<a href="' + elem.url + '">'
                                    + '<img src="' + elem.thumbnailUrl + '"/>',
                                    + '</a>',
                                    + '<br/>',
                                    + '<span>' + elem.title + '</span>';
                                });
    respuestaHTML.innerHTML = tpl;
});

//POST

fetch("", {method : 'POST',
            body: json.stringify({
                "":"",
                "":""
            }),
            headers : { "Content-tepy" : "applicaction/json"}
        })
        .then(res=>res.text())
        .then(res=>res.json())
        .then(res=>res.Blob())
        .then(re=>console.log(res))

/*Si usamos fetch es que estamos usando ECMAScript6, por tanto podríamos usar los
Template Strings que provee la nueva versión, y el codificado del template sería más
legible y fácil de escribir. Y si ya queremos ser auténticos PROS, en lugar de usar un
string tpl e ir anidando todos los elementos ahí, utilizaremos un fragmento HTML con
document.createDocumentFragment()*/

var respuestaHTML = document.querySelector('#respuesta') 
var tpl = document.createDocumentFragment();
var elemento;
fetch("http://jsonplaceholder.typicode.com/photos").then((response) => {
    return response.json();
}).then((albums) => {
    albums.forEach(function (elem) {
        elemento = document.createTextNode(
        `<a href="${elem.url}">
        <img src="${elem.thumbnailUrl}" />
        </a>
        <br/>
        <span>${elem.title}</span>`);
        tpl.appendChild(elemento);
    });
    respuestaHTML.appendChild(tpl);
});


/*fetch por defecto utiliza el método GET de HTTP, si necesitamos una configuración
más personalizada, se le puede pasar un objeto con el método, un header y un body
para usar con el método POST. También se le puede pasar un modo, unas credenciales
de autenticación y parámetros de caché. */

var myHeaders = new Header();
myHeaders.append('Content-Type', 'application/json');
fetch(URI, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
})

/*El primer then devuelve la respuesta, que incluye cabeceras, estado, etc.. Hasta que
la respuesta no se haya completado no se puede acceder a los datos. Por eso debemos
llamar de nuevo then devolviendo la respuesta con response.json() entonces es
cuando ya podemos manipular el body de la respuesta.*/