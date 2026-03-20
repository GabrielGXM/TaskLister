const taskList = document.querySelector('.Task-List')
const NewTaskname = document.getElementById('New-Task-Name')
const BtnModalNewTask = document.getElementById('Btn-New-Task-Modal')
const ModalNewTask = document.querySelector('.Modal-New-Task')
const CloseModalBtn = document.getElementById('Close-Modal-Btn')
const form = document.querySelector('form')

BtnModalNewTask.addEventListener('click', () =>{
    ModalNewTask.showModal()    
})

CloseModalBtn.addEventListener('click', () =>{
    ModalNewTask.close()
})

const verificarListaVazia = () => {
    let mensagemVazia = document.getElementById('Mensagem-Vazia') 

    if(taskList.children.length === 0 || (taskList.children.length === 1 && mensagemVazia)){
        if(!mensagemVazia){
            taskList.innerHTML = `
            <li id='mensagem-vazia' style="list-style:none; text-align:center; opacity: 0.7; margin-top: 20px;">
                Nenhuma tarefa criada por aqui.<br> Que tal criar uma?
            </li>`     
        }else{
                if (mensagemVazia) {
                mensagemVazia.remove();
            }
        }
    }
}

const CriarTask = () => {
    let valorInput = NewTaskname.value
    taskList.innerHTML += `
            <li class="Task">
                <input type="checkbox">
                <span>${valorInput}</span>
            </li>
            `
}

verificarListaVazia()
