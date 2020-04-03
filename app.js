
loadEvents();
// load every event in the page
function loadEvents(){
    document.querySelector('form').addEventListener('submit',submit);
    document.querySelector('ul').addEventListener('click',removeorcheck);

}
// subit data function
function submit(event){
    event.preventDefault();
    const input = document.querySelector('input');
    if(input.value != '')
        addTask(input.value);

    let todos;

    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todos))
    input.value = '';

}

function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="remove">×</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
  //  document.querySelector('.list').style.display = 'block';
}
function loadstorage(){
    let ul = document.querySelector('ul');


const todos = JSON.parse(window.localStorage.getItem('todos'));
        if(localStorage.length){
        todos.forEach(function(item) {
            let li = document.createElement('li');
            li.innerHTML = `<span class="remove">×</span><input type="checkbox"><label>` + item + `</label>`
            ul.appendChild(li);
        //    document.querySelector('.list').style.display = 'block';



        })
}}

window.onload=loadstorage();

function removeorcheck(event){
    if(event.target.className == 'remove')
        deleteTask(event);
    else {
        tickTask(event);
    }
}

// delete task
function deleteTask(event){
    let remove = event.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);

}

// tick a task
function tickTask(event){
    const task = event.target.nextSibling;
    if(event.target.checked){
        task.style.textDecoration = "line-through";
        task.style.color = "#a9a9a9";
    }else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}

function clearstorage(){
    localStorage.clear()
    location.reload();
    return false;
}


