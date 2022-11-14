import React, { useState } from 'react';

type TodoItem = {
    name: string
    isCompleted: boolean
}

function App() {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<TodoItem[]>([])

    const onAdd = () => {
        const temp = [...todos, {name: value, isCompleted: false}]
        setTodos(temp)
        setValue('')
    }

    const onComplete = (index: number) => {
        const temp = [...todos]
        todos[index].isCompleted = !todos[index].isCompleted
        setTodos(temp)
    }

    const onDelete = (index: number) => {
        const temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp)
    }
    
    return (
        <div className="App">
            <h1>Todo-List</h1>
            <form>
                <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={onAdd}  disabled={value === '' ? true : false}>Add Todo</button>
            </form>
            <div>
                {todos.map((todoItem, index) => {
                    return (
                        <div key={index}>
                            <div style={{textDecoration: todoItem.isCompleted ? 'line-through' : '' }}>{todoItem.name}</div>
                            <button onClick={() => onComplete(index)}>{todoItem.isCompleted ? 'Completed' : 'Incomplete'}</button>
                            <button onClick={() => onDelete(index)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
