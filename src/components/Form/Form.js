import { useState, Component } from 'react';
import shortid from 'shortid';

const initialState = {
  name: '',
  tag: '',
  experience: 'junior',
  license: false,
};

const Form = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const { name, tag, experience, license } = inputValue;

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValue);
    reset();
  };

  const reset = () => {
    setInputValue({ ...initialState });
  };

  const handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    setInputValue({ ...inputValue, license: e.currentTarget.checked });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Прозвище
        <input type="text" name="tag" value={tag} onChange={handleChange} />
      </label>
      <p>Ваш уровень разработчика</p>
      <label>
        <input
          type="radio"
          name="experience"
          value="junior"
          checked={experience === 'junior'}
          onChange={handleChange}
        />{' '}
        Junior
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          value="middle"
          checked={experience === 'middle'}
          onChange={handleChange}
        />
        Middle
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          value="senior"
          checked={experience === 'senior'}
          onChange={handleChange}
        />{' '}
        Senior
      </label>
      <label>
        <input
          type="checkbox"
          name="license"
          checked={license}
          onChange={handleLicenseChange}
        />
        Согласен с условием
      </label>
      <button type="submit" disabled={!license}>
        Отправить
      </button>
    </form>
  );
};

class Form2 extends Component {
  state = { ...initialState };

  nameInputId = shortid.generate();
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(initialState);
  };

  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Ваш уровень разработчика</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === 'junior'}
            onChange={this.handleChange}
          />{' '}
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === 'middle'}
            onChange={this.handleChange}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === 'senior'}
            onChange={this.handleChange}
          />{' '}
          Senior
        </label>
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
          Согласен с условием
        </label>
        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}

export { Form, Form2 };
