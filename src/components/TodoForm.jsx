import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todoobjj, setTodo] = useState("")
//addTodo function is destructured from the context
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todoobjj) return

      addTodo({ todo:todoobjj, completed: false})
//After adding the todo,it resets the todoobjj state to an empty string, clearing the input field for the user
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
    //In an HTML form, the type attribute specifies the type of <input> element to display. If you don't specify
    //a type attribute for an <input> element, it defaults to "text". This means that if you omit type="text" from 
    //your <input> element, it will still behave as a text input field.
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todoobjj}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;