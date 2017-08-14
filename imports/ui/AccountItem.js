import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Account } from '../api/account';
import AccountItemList from './AccountItemList';

export default class AccountItem extends React.Component {
  onSubmit(e) {
    const accountName = this.refs.accountName.value.trim();
    const accountPassword = this.refs.accountPassword.value.trim();

    e.preventDefault();

    if (accountName && accountPassword) {
      Meteor.call('account.insert', accountName, accountPassword);
      this.refs.accountName.value = '';
      this.refs.accountPassword.value = '';
    }
  }
  render() {
    return (
      <div>
        <AccountItemList/>
        <div className="formWrapper">
          <form className="form" onSubmit={this.onSubmit.bind(this)}>
              <input type="text" ref="accountName" placeholder="Name"/>
              <input type="text" ref="accountPassword" placeholder="Password"/>
              <button className="button">Add Account</button>
          </form>
        </div>
      </div>
    );
  }
}
