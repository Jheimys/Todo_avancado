(function () {

    //-----------------------  SELEÇÃO DE ELEMENTOS --------------------------------------------------

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

    // ---------------------------  EVENTS ------------------------------------------------------------------------
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const inputValue = todoInput.value

        if(inputValue) {
            console.log(inputValue)
        }
    })
    
})()