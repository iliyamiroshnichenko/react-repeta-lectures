import { Component, useState } from 'react';

const TodoEditorFunc = ({ onSubmit }) => {
  const [state, setState] = useState({
    msg: '',
  });
  const { msg } = state;

  const handleCgange = e => {
    setState({ ...state, msg: e.currentTarget.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(msg);
    setState({ msg: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea value={msg} onChange={handleCgange}></textarea>
      <button type="submit">Добавить</button>
    </form>
  );
};

class TodoEditor extends Component {
  state = {
    msg: '',
  };

  handleCgange = e => {
    this.setState({ msg: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.msg);
    this.setState({ msg: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.msg}
          onChange={this.handleCgange}
        ></textarea>
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export { TodoEditor, TodoEditorFunc };
