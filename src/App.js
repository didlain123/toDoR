
import { useState } from "react";
import { TodoItem } from "./components/TodoItem";

function App () {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');


    const createTodo = () =>{
        setTodos([...todos,{text:inputValue, complete:true}])
        setInputValue("")
    }

    return (
        <div className="App">
            <div>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button onClick={() => {
                    setTodos([...todos, inputValue]);
                    setInputValue('');
                }}>
                    ADD
                </button>
            </div>

            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
        </div>
        
    );
}

export default App;
