import React from 'react';

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