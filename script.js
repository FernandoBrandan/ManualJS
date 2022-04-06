
const min = document.querySelector('#min')
const max = document.querySelector('#max')

const temas = document.querySelector('.temas')  

//tem2.hidden = true
//temas.hidden = true 

const contenido = document.querySelector('#contenido')  
const contenidoInfo = document.querySelector('#contenido-info')  

contenido.addEventListener("click", function(){ 
    display = contenidoInfo.getAttribute('style')
    if(display == 'null'){
        contenidoInfo.setAttribute("style", "display: none")    
    }else{
        contenidoInfo.setAttribute("style", null)    
    }        
}) 


/*************************************************** */
/**Basico */
/*************************************************** */

const basico = document.querySelector('#basico')  
const basicoInfo = document.querySelector('#basico-info')  
const tem1Info = document.querySelector('#basico-info1')  
const tem1 = document.querySelector('#tem1')  
const tem2Info = document.querySelector('#basico-info2')  
const tem2 = document.querySelector('#tem2')  
const tem3Info = document.querySelector('#basico-info3')  
const tem3 = document.querySelector('#tem3') 
const tem31Info = document.querySelector('#basico-info3-1')  
const tem31 = document.querySelector('#tem3-1') 
const tem32Info = document.querySelector('#basico-info3-2')  
const tem32 = document.querySelector('#tem3-2')   

basico.addEventListener("click", function(){ 
    display = basicoInfo.getAttribute('style')
    if(display == 'null'){
        basicoInfo.setAttribute("style", "display: none")    
    }else{
        basicoInfo.setAttribute("style", null)    
    }        
})   

tem1Info.addEventListener("click", function(){ 
    display = tem1.getAttribute('style')
    if(display == 'null'){
        tem1.setAttribute("style", "display: none")    
    }else{
        tem1.setAttribute("style", null)    
    }        
})  

tem2Info.addEventListener("click", function(){ 
    display = tem2.getAttribute('style')
    if(display == 'null'){
        tem2.setAttribute("style", "display: none")    
    }else{
        tem2.setAttribute("style", null)    
    }        
})

tem3Info.addEventListener("click", function(){ 
    display = tem3.getAttribute('style')
    if(display == 'null'){
        tem3.setAttribute("style", "display: none")    
    }else{
        tem3.setAttribute("style", null)    
    }        
}) 

tem31Info.addEventListener("click", function(){ 
    display = tem31.getAttribute('style')
    if(display == 'null'){
        tem31.setAttribute("style", "display: none")    
    }else{
        tem31.setAttribute("style", null)    
    }        
}) 

tem32Info.addEventListener("click", function(){ 
    display = tem32.getAttribute('style')
    if(display == 'null'){
        tem32.setAttribute("style", "display: none")    
    }else{
        tem32.setAttribute("style", null)    
    }        
}) 

/*************************************************** */
/**Funciones */
/*************************************************** */

const funciones = document.querySelector('#funciones')  
const funcionesInfo = document.querySelector('#funciones-info')  
 
const tem4Info = document.querySelector('#funciones-info4')  
const tem4 = document.querySelector('#tem4')  
const tem5Info = document.querySelector('#funciones-info5')  
const tem5 = document.querySelector('#tem5')  
const tem6Info = document.querySelector('#funciones-info6')  
const tem6 = document.querySelector('#tem6')   
const tem7Info = document.querySelector('#funciones-info7')  
const tem7 = document.querySelector('#tem7') 
const tem8Info = document.querySelector('#funciones-info8')  
const tem8 = document.querySelector('#tem8')  

funciones.addEventListener("click", function(){ 
    display = funcionesInfo.getAttribute('style')
    if(display == 'null'){
        funcionesInfo.setAttribute("style", "display: none")    
    }else{
        funcionesInfo.setAttribute("style", null)    
    }        
})      

tem4Info.addEventListener("click", function(){ 
    display = tem4.getAttribute('style')
    if(display == 'null'){
        tem4.setAttribute("style", "display: none")    
    }else{
        tem4.setAttribute("style", null)    
    }        
})

tem5Info.addEventListener("click", function(){ 
    display = tem5.getAttribute('style')
    if(display == 'null'){
        tem5.setAttribute("style", "display: none")    
    }else{
        tem5.setAttribute("style", null)    
    }        
})

tem6Info.addEventListener("click", function(){ 
    display = tem6.getAttribute('style')
    if(display == 'null'){
        tem6.setAttribute("style", "display: none")    
    }else{
        tem6.setAttribute("style", null)    
    }        
})

tem7Info.addEventListener("click", function(){ 
    display = tem7.getAttribute('style')
    if(display == 'null'){
        tem7.setAttribute("style", "display: none")    
    }else{
        tem7.setAttribute("style", null)    
    }        
})

tem8Info.addEventListener("click", function(){ 
    display = tem8.getAttribute('style')
    if(display == 'null'){
        tem8.setAttribute("style", "display: none")    
    }else{
        tem8.setAttribute("style", null)    
    }        
}) 

/*************************************************** */
/**DOOM */
/*************************************************** */

const doom = document.querySelector('#dom')   
const tem9 = document.querySelector('#tem9')   

doom.addEventListener("click", function(){ 
    display = tem9.getAttribute('style')
    if(display == 'null'){
        tem9.setAttribute("style", "display: none")    
    }else{
        tem9.setAttribute("style", null)    
    }        
})

/*************************************************** */
/**Eventos */
/*************************************************** */

const eventos = document.querySelector('#eventos')   
const tem10 = document.querySelector('#tem10')   

eventos.addEventListener("click", function(){ 
    display = tem10.getAttribute('style')
    if(display == 'null'){
        tem10.setAttribute("style", "display: none")    
    }else{
        tem10.setAttribute("style", null)    
    }        
})
