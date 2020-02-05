import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        content: '',
        id: 3
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content !== '') {
            let id = Math.random();
            this.setState({
                id: id
            });
            this.props.addItem(this.state);
            this.setState({
                content: ''
            });
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Item: </label>
                    <input type="text" onChange={this.handleChange} value = {this.state.content} placeholder = "Enter to submit"/>
                </form>
            </div>
        );
    }
}

export default AddForm;