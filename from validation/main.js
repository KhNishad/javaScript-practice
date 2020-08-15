var addbtn  = document.getElementById('add');
addbtn.addEventListener('click', additem);

var rebtn = document.getElementById('remove');

rebtn.addEventListener('click', removeitem);

var li;
var ul = document.getElementById('list');
function additem() {
    var input  = document.getElementById('input');
    var item  = input.value;
    var ul  = document.getElementById('list');
    var text = document.createTextNode(item);
    // check if the input is empty or not
    if (item == '')
    {
        alert('Name Empty !!!')
    }
    else{
        // create li -> checkbox -> label 
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

     var label = document.createElement('label');
     label.setAttribute('for','item');
  
    //  display them in the ul as a child of li
    //  ul.appendChild(label);
     li.appendChild(checkbox);
     label.appendChild(text);
     li.appendChild(label);
     ul.insertBefore(li, ul.childNodes[0]);
    //  li.className = 'visual';

    }
}
// remove checked item
 function removeitem() {
      li = ul.children;
     for(let i = 0 ; i<li.length ;i++)
     {
         while (li[i] && li[i].children[0].checked) {
             ul.removeChild(li[i])
         }
     }
 }