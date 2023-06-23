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

    //Search bar
    const searchInput = document.querySelector('#search-input')
    const eraseBtn = document.querySelector('#erase-button')
    const filterBtn = document.querySelector('#filter-select')

    let oldInputValue

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

    const toggleForms = () =>{
        editForm.classList.toggle('hide')
        todoForm.classList.toggle('hide')
        todoList.classList.toggle('hide')
    }

    const upDataTodo = (text) => {

        const todos = document.querySelectorAll('.todo')

        todos.forEach((todo) => {
            let todoTitle = todo.querySelector('h3')

            if(todoTitle.innerText === oldInputValue){
                todoTitle.innerText = text
            }
        })
    }

    const getSearchTodos = (search) => {
        const todos = document.querySelectorAll('.todo')

        todos.forEach((todo) => {
            let todoTitle = todo.querySelector('h3').innerText.toLowerCase()
            const nomalizeSearch = search.toLowerCase()

            todo.style.display = 'flex'

            if(!todoTitle.includes(nomalizeSearch)){
                todo.style.display = 'none' 
            }
        })
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
        let todoTitle

        if(parentEl && parentEl.querySelector('h3')){
            todoTitle = parentEl.querySelector('h3').innerText
        }
        
        if(targetEl.classList.contains('finish-todo')) {
            parentEl.classList.toggle('done')
        }

        if(targetEl.classList.contains('edit-todo')) {
           toggleForms()

           editInput.value = todoTitle
           oldInputValue = todoTitle
        }

        if(targetEl.classList.contains('remove-todo')) {
            parentEl.remove()
        }
    })

    cancelEditBtn.addEventListener('click', (e) => {
        e.preventDefault()

        toggleForms()
    })

    editForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const editInputValue = editInput.value

        if(editInputValue) {

            upDataTodo(editInputValue)
        }

        toggleForms()
    })

    searchInput.addEventListener('keyup', (e) => {
        const search = e.target.value
        
        getSearchTodos(search)
    })

    eraseBtn.addEventListener('click', (e) => {
        e.preventDefault()

        searchInput.value = ''

        searchInput.dispatchEvent(new Event('keyup'))
    })

})()