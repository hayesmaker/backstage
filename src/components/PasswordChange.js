import React, {Component} from 'react';

import {auth} from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATEE = {
  password1: '',
  password2: '',
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATEE};
  }

  onSubmit = (event) => {
    const {password1} = this.state;
    auth.doPasswordUpdate(password1)
      .then(() => {
        this.setState(() => ({...INITIAL_STATEE}));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();

  }


  render() {
    const {
      password1,
      password2,
      error
    } = this.state;

    const isInvalid =
      password1 !== password2 ||
      password1 === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={password1}
          onChange={event => this.setState(byPropKey('password1', event.target.value))}
          type='password'
          placeholder='New Password'
        />
        <input
          value={password2}
          onChange={event => this.setState(byPropKey('password2', event.target.value))}
          type='password'
          placeholder='Confirm Password'
        />
        <button disabled={isInvalid} type='submit'>
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default PasswordChangeForm;