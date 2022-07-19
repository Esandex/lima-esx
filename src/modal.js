document.addEventListener('DOMContentLoaded', function() {       
    addTriggerClose()     
    addTriggers()
});
function modalInit(){
    addTriggerClose()     
    addTriggers()
}
function addTriggers(){
    console.log('agregando triggers modal') 
    triggers = document.getElementsByClassName('modal-trigger')    
    console.log(triggers)
    for (let index = 0; index < triggers.length; index++) {        
        triggers[index].removeEventListener("click", modalTrigger);
        triggers[index].addEventListener("click", modalTrigger);        
    }
}
function addTriggerClose(){
    console.log('agregando eventos modal')
    seleccionados = document.getElementsByClassName('modal-close')         
    for (let index = 0; index < seleccionados.length; index++) {        
        seleccionados[index].removeEventListener("click", modalClose);
        seleccionados[index].addEventListener("click", modalClose);             
    }
}
function modalTrigger(e){
    console.log(this);
    e.stopPropagation();   
    el = document.getElementById(this.dataset.target)
    modalToggle(el)
}
function modalToggle(e) {    
    console.log(e)  
    e.classList.toggle("active");  
    document.getElementsByClassName('modal-overlay')[0].classList.toggle("active");  
}
function modalClose(e)
{
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */    
    console.log(this.closest(".modal"));
    e.stopPropagation();    
    el = this.closest(".modal")
    modalToggle(el)
}