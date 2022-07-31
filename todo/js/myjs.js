let $=document;
let iconDelete='<i onclick="deleteElem()" class="fa-solid fa-trash-can"></i>';
let inputTodo=$.getElementById('inputTodo');
let listTodo=$.querySelector('.listTodo');
console.log(listTodo);
let newTodo;
inputTodo.addEventListener('keydown',function(event){
    console.log(event);
    if(event.key==='Enter' && inputTodo!==''){
        let newEl=$.createElement('span');
        newEl.innerHTML=inputTodo.value+'<i onclick="deleteElem()" class="fa-solid fa-trash-can"></i>'
        listTodo.append(newEl);
        inputTodo.value=''
    }
})
function deleteElem(){
    let elemm=event.target;
    elemm.parentNode.remove();
}