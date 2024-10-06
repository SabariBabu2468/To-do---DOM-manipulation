let currentIndex=0;
function addtodo(){
    const input=document.getElementById('styled-input');
    const todoText = input.value.trim();

      if (todoText === '') {
        alert('Please enter a todo item.');
        return;
      }
    currentIndex=currentIndex+1;

    // Create new todo div
    const newTodo = document.createElement('div');
    newTodo.setAttribute("id", 'todo-' + currentIndex);
    newTodo.setAttribute("class", 'todoele');


    // Create new heading element
    const newHeading = document.createElement('h2');
    newHeading.textContent =todoText;

    //button
    const newbutton=document.createElement('button')
    newbutton.textContent='Delete';
    newbutton.setAttribute("onclick","deletetodo("+currentIndex+")");

    newTodo.appendChild(newHeading)
    newTodo.appendChild(newbutton)


    const parent=document.getElementById('todos');
    parent.appendChild(newTodo);

    input.value = "";

}

function deletetodo(index){
    const name=document.getElementById('todo-'+index);
    name.parentNode.removeChild(name);



}