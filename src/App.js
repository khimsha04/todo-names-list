import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Names List</h1>
      <input
        style={styles.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={styles.button}  onClick={() => addTodo(input)}>Add</button>
      <ol style={styles.ol}>
        {list.map((todo) => (
          <li style={styles.li} key={todo.id}>
            {todo.todo}
            <button style={styles.button2} onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ol>
    </div>
  );
}


 const styles={
  container:{
      width:500,
      height:'100%',
      border:'1px solid black',
      margin:'0 auto '
  },
  h1:{
    textAlign: 'center',
    fontSize: 50,
    color: 'green'
  },
  input:{
    width: 400,
    height: 20,
    marginLeft: 20,
    border: '1px solid green',
    fontSize:18
    },
  button:{
    width: 50,
    marginLeft: 10,
    height: 25,
    border: 'none',
    borderRadius: 10,
    background: 'green',
    color: 'white',
  },
  button2:{
    width: 50,
    marginLeft: 50,
    height: 25,
    border: 'none',
    borderRadius: 10,
    background: 'red',
    color: 'white',
  },
  ol:{
    fontSize:20,
    color:'green'
  }
  
 }

export default App;
