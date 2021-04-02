import { Component } from 'react';

class TodoEditor extends Component {
  state = {
    msg: '',
  };

  handleCgange = () => {};

  render() {
    return (
      <form>
        <textarea
          value={this.state.msg}
          onChange={this.handleCgange}
        ></textarea>
        <button type="button">Добавить</button>
      </form>
    );
  }
}

export default TodoEditor;
