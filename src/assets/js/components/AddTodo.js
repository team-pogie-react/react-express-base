// components/AddTodo.js

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {
  // ...

    handleAddTodo = () => {
      // dispatches actions to add todo
      // eslint-disable-next-line react/prop-types
      this.props.addTodo(this.state.input);

      // sets state back to empty string
      this.setState({ input: '' });
    }

    render() {
      return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
      );
    }
}

export default connect(
  null,
  { addTodo },
)(AddTodo);
