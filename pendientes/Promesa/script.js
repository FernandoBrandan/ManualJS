'use strict';
var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount +
    ') Comenzó (<small>Comenzó el código sincrónico</small>)<br/>');

  // Hacemos una promesa: prometemos un contador numérico de esta promesa, empezando por 1 (después de esperar 3s)
  var p1 = new Promise(
    // La función resolvedora es llamada con la habilidad de resolver o rechazar la promesa
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Comenzó la promesa (<small>Código asíncrono comenzó</small>)<br/>');

      // Esto es solo un ejemplo para crear asincronismo
      window.setTimeout(
        function() {
          // ¡Cumplimos la promesa!
          resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000);
    }
  );

  // Definimos qué hacer cuando la promesa es resuelta/cumplida con la llamada
  // al método then(). La llamada al método catch() define qué hacer si
  // la promesa es rechazada
  p1.then(
    // Registrar el valor de la promesa cumplida
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
        ') Promesa cumplida (<small>Código asíncrono terminado.</small>)<br/>');
    })
  .catch(
    function(reason) {
      console.log('Manejar promesa rechazada ('+reason+') aquí.');
    });
    // Registrar la razón del rechazo

  log.insertAdjacentHTML('beforeend', thisPromiseCount +
    ') Promesa hecha (<small>Código síncrono terminado. </small>)<br/>');
}


/*otro ejemplo simple de promesas*/


document.addEventListener('DOMContentLoaded', function(){
    
  const p1 = document.getElementById('btn');
  
  function saludar(nombre) {
      alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
      var nombre = prompt('Por favor ingresa tu nombre.');
      callback(nombre);
  }
  
  p1.onclick = function(){
      procesarEntradaUsuario(saludar);        
  }
})

