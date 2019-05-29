import React, { Component } from 'react';

class AddTodoUI extends Component {
    state = {
        content : ''
    };
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.newTodo(this.state);
        //資料傳輸路徑: 此文件state -> App.js的newTodo property
        // -> addTodo函數的 (todo)
        this.setState({
            content : ''
        });
    };
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todos:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
};

export default AddTodoUI;