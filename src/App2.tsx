import React, { useState } from 'react';

interface ITodo {
    act: string
    isCompleted: boolean
}

function App() {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const onAdd = () => {
        const temp = [...todos, { act: value, isCompleted: false }]
        setTodos(temp)
        setValue('')
    }

    const onComplete = (ind: number) => {
        const temp = [...todos]
        temp[ind].isCompleted = !temp[ind].isCompleted
        setTodos(temp)
    }

    const onDelete = (ind: number) => {
        const temp = [...todos]
        temp.splice(ind, 1)
        setTodos(temp)
    }

    return (
        <div className="App">
            <h1>Todo-List</h1>
            <form>
                <input value={value} type="text" required onChange={e => setValue(e.target.value)} />
                <button onClick={onAdd} disabled={value === '' ? true : false}>Add New Todo</button>
            </form>
            <div>
                {todos.map((item: ITodo, ind: number) => {
                    return (
                        <div key={ind}>
                            <div style={{ textDecoration: item.isCompleted ? 'line-through' : '' }}>{item.act}</div>
                            <button onClick={() => onComplete(ind)}>{item.isCompleted ? "Completed" : "Incomplete"}</button>
                            <button onClick={() => onDelete(ind)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}



export default App;
