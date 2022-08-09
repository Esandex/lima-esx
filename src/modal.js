function modalInit(){
    addTriggerClose()     
    addTriggers()
}
function addTriggers(){
    
    let triggers = document.getElementsByClassName('modal-trigger')    
   
    for (let index = 0; index < triggers.length; index++) {        
        triggers[index].removeEventListener("click", modalTrigger);
        triggers[index].addEventListener("click", modalTrigger);        
    }
}
function addTriggerClose(){
  
    let seleccionados = document.getElementsByClassName('modal-close')         
    for (let index = 0; index < seleccionados.length; index++) {        
        seleccionados[index].removeEventListener("click", modalClose);
        seleccionados[index].addEventListener("click", modalClose);             
    }
}
function modalTrigger(e){
   
    e.stopPropagation();   
    let el = document.getElementById(this.dataset.target)
    modalToggle(el)
}
function modalToggle(e) {    
   
    e.classList.toggle("active");  
    document.getElementsByClassName('modal-overlay')[0].classList.toggle("active");  
}
function modalClose(e)
{
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */    
   
    e.stopPropagation();    
    let el = this.closest(".modal")
    modalToggle(el)
}
//export {modalInit, addTriggers, modalTrigger, addTriggerClose, modalToggle, modalClose}