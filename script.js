const taskList = document.querySelector('.Task-List')
const NewTaskname = document.getElementById('New-Task-Name')
const BtnModalNewTask = document.getElementById('Btn-New-Task-Modal')
const ModalNewTask = document.querySelector('.Modal-New-Task')

BtnModalNewTask.addEventListener('click', () =>{
    ModalNewTask.showModal()
})

const CriarTask = () => {
    let valorInput = NewTaskname.value
    taskList.innerHTML += `
            <li class="Task">
                <input type="checkbox">
                <span>${valorInput}</span>
            </li>
            `
}
