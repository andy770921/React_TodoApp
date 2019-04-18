import React from 'react';

const TodoUI = ({todoArray}) => {
    const JSX_UI = todoArray.map( element => { 
        return (
        <div key={element.id}>
            <p>{element.id}</p>
            <p>{element.content}</p>
        </div>)
    });
    return (
        <div>
            {JSX_UI};
        </div>
    );
};
export default TodoUI;