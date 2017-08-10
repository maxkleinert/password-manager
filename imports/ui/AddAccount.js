import React from 'react';

import { Accounts } from './../api/accounts';

export default class AddAccount extends React.Component {
  handleSubmit(e) {
    let accountName = e.target.accountName.value;
    let accountPassword = e.target.accountPassword.value;

    e.preventDefault();

    if (accountName && accountPassword) {
      e.target.accountName.value = '';
      e.target.accountPassword.value = '';
      Accounts.insert({
        accountName: accountName,
        accountPassword: accountPassword
      });
    }
  }
  render() {
    return (
      <div className="formWrapper">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="accountName" placeholder="Account name"/>
          <input className="form__input" type="text" name="accountPassword" placeholder="Account password"/>
          <button className="button">Add Account</button>
        </form>
      </div>
    );
  }
};
