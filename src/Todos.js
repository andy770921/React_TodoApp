import React from 'react';

//以下用props寫，也可用解構賦值寫
//const TodoUI = ({todoArray, deleteTodoFunc}) => ...
//若用解構賦值，以後不用寫props.todoArray.length,可直接寫todoArray.length
const TodoUI = (props) => {
    const JSX_UI = props.todoArray.length ? (props.todoArray.map( element => { 
        return (
        <div className="collection-item" key={element.id}>
            <span onClick={() => props.deleteTodoFunc(element.id)}>{element.content}</span>
        </div>)
    })) : (
           <p className="center">You have no todo's left!</p>
    );
    return (
        <div className="todos collection">
            {JSX_UI}
        </div>
    );
};
export default TodoUI;