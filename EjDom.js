document.addEventListener('DOMContentLoaded', function(){

    const titulo = document.querySelector('#Titulo');
    const alerta = document.querySelector('#alerta');
    const Desc = document.querySelector('#Desc');

    const btn = document.getElementById('agregar');
    const btn2 = document.getElementById('agregar2');
    const btn3 = document.getElementById('agregar3');
    
    const Body = document.querySelector("#Body");
    const lista = document.querySelector("#Lista");


    btn.onclick = function(){
        if(titulo.value === '' || Desc.value === ''){   
            alerta.classList.remove("d-none");
            return;
        } 
        alerta.classList.add("d-none");
        const contenido = ` <tr>
                <td>${titulo.value}</td>
                <td>${Desc.value}</td>
            </tr>`;            
        Body.innerHTML+=contenido; 
        return;
    }

    btn2.onclick = function(){
        if(titulo.value === '' || Desc.value === ''){   
            alerta.classList.remove("d-none");
            return;
        } 
        alerta.classList.add("d-none");
        const row = lista.insertRow();
        row.innerHTML = `<td>${titulo.value}1</td>
                        <td>${Desc.value}</td>`;  
        titulo.value = '';
        Desc.value= '';
    }

    btn3.onclick = function(){
        if(titulo.value === '' || Desc.value === ''){   
            alerta.classList.remove("d-none");
            return;
        } 
        alerta.classList.add("d-none");
        
        const row = lista.insertRow();
        row.innerHTML = `<td>${titulo.value}1</td>
                        <td>${Desc.value}</td>                       
                        <button id="p">Aceptar</button>`;  
        titulo.value = '';
        Desc.value= '';
        
        const removeBnt = document.createElement('button'); 
        removeBnt.innerText = 'borrar';  
        row.appendChild(removeBnt);
        removeBnt.onclick = function(e){
            alert("Borrado");
        }
    }    


    /** ESTO CONSUME MUCHOS ELEMENTOS PORQUE REESCRIBE SIEMPRE EL ARBOL DE NODOS*/

    const fragment =  document.createDocumentFragment();
    for(const day of days)
    {
        const itemList = document.createElement('LI');
        itemList.textContent = days;
        fragment.appendChild(itemList);
    } 
    dayList.appendChild(fragment);
    
})

document.addEventListener('DOMContentLoaded', () => {

    const nuevo = document.createElement('a');
    nuevo.textContent = 'nuevo enlace';
    nuevo.href = "wwww.google.com";
    nuevo.classList.add('nombre clase');

    const nav = document.querySelector(".navegacion");
    nav.appendChild(nuevo);
    nav.insertBefore(nuevo, nav.children[2]); //insertar antes de

    /*Evento*/
    const btnFlotante = document.querySelector('.btn-flotante'); 
    const footer = document.querySelector('.footer'); 
    btnFlotante.addEventListener('click', mostrarOcultarFooter); 
    function mostrarOcultarFooter() {
        if( footer.classList.contains('activo') ) {
            footer.classList.remove('activo');
            this.classList.remove('activo');
            this.textContent = 'Idioma y Moneda';
        } else {
            footer.classList.add('activo');
            this.classList.add('activo');
            this.textContent = 'X Cerrar';
        }
    }

    /**Crear elementos con ´´  */
    const contendido = `<div>
        <p> ${variable} </p>
    </div>`;
    Lista.innetHTML += contendido;

})

