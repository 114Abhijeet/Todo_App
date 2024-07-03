import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todoobj }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todoobj.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todoobj.id, {...todoobj, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    toggleComplete(todoobj.id)
  }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todoobj.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todoobj.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todoobj.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
    //The readOnly={!isTodoEditable} attribute in an input element means that the input will be read-only when 
    // isTodoEditable is false and editable when isTodoEditable is true.
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todoobj.completed) return;
                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
//The attribute disabled={todoobj.completed} means that the input field or button will be disabled 
//(i.e.,the user won't be able to interact with it) when todoobj.completed is true. Conversely, it will 
//be enabled (i.e., the user can interact with it) when todoobj.completed is false
              disabled={todoobj.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todoobj.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;