import React, { useState } from 'react';

type FormElm = React.FormEvent<HTMLFormElement>

interface ITodo {
  act: string
  isCompleted: boolean
}

function App() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])
  console.log(todos)

  const handleSubmit = (e: FormElm): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (act: string) => {
    const newTodo: ITodo[] = [...todos, { act, isCompleted: false }]
    setTodos(newTodo)
  }

  const onComplete = (index: number): void => {
    const temp: ITodo[] = [...todos]
    temp[index].isCompleted = !temp[index].isCompleted
    setTodos(temp)

  }

  const onDelete = (ind: number) => {
    const temp: ITodo[] = [...todos]
    temp.splice(ind, 1)
    setTodos(temp)
  }

  return (
    <div className="App">
      <h1>Todo-List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required value={value} onChange={e => setValue(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, ind: number) =>
          <div key={ind}>
            <div style={{textDecoration: todo.isCompleted? "line-through" : ""}}>{todo.act}</div>
            <button type='button' onClick={() => onComplete(ind)}>{todo.isCompleted ? "Incomplete" : "completed"}</button>
            <button type='button' onClick={() => onDelete(ind)}>&times;</button>
          </div>)}
      </section>
    </div>
  );
}

export default App;
