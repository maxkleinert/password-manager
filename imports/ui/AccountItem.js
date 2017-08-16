import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Account } from '../api/account';
import AccountItemList from './AccountItemList';

export default class AccountItem extends React.Component {
  onSubmit(e) {
    const accountName = this.refs.accountName.value.trim();
    const accountNummer = this.refs.accountNummer.value.trim();
    const accountPassword = this.refs.accountPassword.value.trim();
    const accountUrl = this.refs.accountUrl.value.trim();

    e.preventDefault();

    if (accountName && accountPassword) {
        Meteor.call('account.insert', accountName, accountNummer, accountPassword, accountUrl);
        this.refs.accountName.value = '';
        this.refs.accountNummer.value = '';
        this.refs.accountPassword.value = '';
        this.refs.accountUrl.value = '';
    }
  }
  render() {
    return (
      <div>
        <AccountItemList/>
        <div className="formWrapper">
          <form className="form" onSubmit={this.onSubmit.bind(this)}>
            <input className="form__input" type="text" ref="accountName" placeholder="Name"/>
            <input className="form__input" type="text" ref="accountNummer" placeholder="Account Nummer"/>
            <input className="form__input" type="text" ref="accountPassword" placeholder="Password"/>
            <input className="form__input" type="text" ref="accountUrl" placeholder="Url"/>
            <button className="button">Add Account</button>
          </form>
        </div>
      </div>
    );
  }
}
