import React from 'react';

const TodoUI = ({todoArray}) => {
    const JSX_UI = todoArray.length ? (todoArray.map( element => { 
        return (
        <div className="collection-item" key={element.id}>
            <span>{element.content}</span>
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