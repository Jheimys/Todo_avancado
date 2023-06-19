(function () {

    //-----------------------  SELEÇÃO DE ELEMENTOS ----------------------------------------------------------------

    //Form for entering tasks 
    const todoForm = document.querySelector('#todo-form')
    const todoInput = document.querySelector('#todo-input')

    //Task edit form
    const editForm = document.querySelector('#edit-form')
    const editInput = document.querySelector('#edit-input')
    const cancelEditBtn = document.querySelector('#cancel-edit-btn')

    //Tasks
    const todoList = document.querySelector('#todo-list')


    // ----------------------------    FUNCTIONS ------------------------------------------------------------------
    
    const saveTodo = (texto) => {

        const todo = document.createElement('div')
        todo.classList.add('todo')

        const todoTitle = document.createElement('h3')
        todoTitle.innerText = texto
        todo.appendChild(todoTitle)

        const doneBtn = document.createElement('button')
        doneBtn.classList.add('finish-todo')
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todo.appendChild(doneBtn)

        const editBtn = document.createElement('button')
        editBtn.classList.add('edit-todo')
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
        todo.appendChild(editBtn)

        const deletBtn = document.createElement('button')
        deletBtn.classList.add('remove-todo')
        deletBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        todo.appendChild(deletBtn)

        todoList.appendChild(todo)

        todoInput.value = ''
        todoInput.focus()


    }

    // ---------------------------  EVENTS ------------------------------------------------------------------------
    
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const inputValue = todoInput.value

        if(inputValue) {
            saveTodo(inputValue)
        }
    })

    document.addEventListener('click', (e) => {
        const targetEl = e.target
        const parentEl = targetEl.closest('div')
        
        if(targetEl.classList.contains('finish-todo')) {
            parentEl.classList.toggle('done')
        }

        if(targetEl.classList.contains('remove-todo')) {
            parentEl.remove()
        }
    })

})()