String.prototype.toDOM=function(parent){
    var d = document, 
        i,
        a = d.createElement(parent),
        b = d.createDocumentFragment();
        a.innerHTML=this;
    while(i = a.firstChild)
        b.appendChild(i);
        return b;
};
function customSelect(id = null)
{    
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    if(id == null)
    {
        x = document.getElementsByClassName("custom-select");
        l = x.length;    
        for (i = 0; i < l; i++) {
            vueltas =  x[i].getElementsByTagName("div").length
            ldcs = x[i].getElementsByTagName("div")
            for (let index = 0; index < vueltas; index++) {
                ldcs[0].remove();            
            }        
            
        }    
        for (i = 0; i < l; i++) {         
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;         
            a = `<div class="select-selected">${selElmnt.options[selElmnt.selectedIndex].innerHTML}</div>`.toDOM('div')
            x[i].appendChild(a);
            /* For each element, create a new DIV that will contain the option list: */
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
    
          for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    s.dispatchEvent(new Event('change', { bubbles: true }));
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
        }        
    }else{
        
        let element = document.getElementById(id).parentNode;        
        //let vueltas = element.getElementsByTagName("div").length;
        let ldcs = element.getElementsByTagName("div")        
        if(ldcs.length > 0){
          for (let index = 0; index < 2; index++) {            
            ldcs[0].remove();            
          }        
        }
        selElmnt = document.getElementById(id);
        ll = selElmnt.length;
        a = `<div class="select-selected">${selElmnt.options[selElmnt.selectedIndex].innerHTML}</div>`.toDOM('div')
        element.appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  s.dispatchEvent(new Event('change', { bubbles: true }));
                  break;
                }
              }
              h.click();
          });
          b.appendChild(c);
        }
        element.appendChild(b);
    }
    agregarEventos()
}
function agregarEventos(){
    seleccionados = document.getElementsByClassName('select-selected')    
    for (let index = 0; index < seleccionados.length; index++) {        
        seleccionados[index].removeEventListener("click", openSelect);
        seleccionados[index].addEventListener("click", openSelect);        
    }
}
function openSelect(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */    
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  }
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);