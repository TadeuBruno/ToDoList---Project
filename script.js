"use strict"
function addTask(){
    const taskTitle = document.querySelector("#task-title").value
    if(taskTitle){
        const template = document.querySelector(".template")
        const novaTarefa = template.cloneNode(true)
        novaTarefa.querySelector(".task-title").textContent = taskTitle
        novaTarefa.classList.remove("template")
        novaTarefa.classList.remove("hide")
        const list = document.querySelector("#task-list")
        list.appendChild(novaTarefa)
        //limpar caixa
        const taskTitle2 = document.querySelector("#task-title").value = ""
        //completar tarefa
        const doneBtn = novaTarefa.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this)
        })
        //remover botão
        const removeBtn = novaTarefa.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(novaTarefa)
        })
    }
}
function removeTask(novaTarefa){
    novaTarefa.classList.add("hide")
}
function completeTask(task){
    const taskComplete = task.parentNode
    taskComplete.classList.toggle('done')
}
const addBtn = document.querySelector("#add-btn")
addBtn.addEventListener("click", function(e){
    e.preventDefault()
    addTask()
})