
function ToDoFun(whatToDo,date){
    this.whatToDo =whatToDo;
    this.date= date;
    
}



ToDoFun.prototype.render = function(){
    var toDoList = document.getElementById('toDo');
    toDoList.addEventListener('submit',function(event){
    event.preventDefault();
    var whatToDo = event.target.whatToDo.value;
    var date = event.target.date.value;
    var div = document.getElementsById('list');
    var listToDo = document.createElement('ol');
    div.appendChild.listToDo
    var listItem = document.createElement('li');
    listToDo.appendChild.listItem;
    var newList = new ToDoFun(whatToDo,date);
    listItem.textContent = newList.render();
    
   
});


}
console.log(this.newList);


function setItem(){
    var formLocal = JSON.stringify(toDoList);
    localStorage.setItem('createdList', formLocal);
}
function gitItem(){
    var formLocal = localStorage.getItem('createdList');
    toDoList = JSON.parse(formLocal);
}


