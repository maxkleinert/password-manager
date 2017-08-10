import React from "react";

import { Accounts } from './../api/accounts';

export default class Account extends React.Component {
  render() {
    return (
      <div className="account">
        <p>Name: {this.props.account.accountName}</p>
        <p>Passwort: {this.props.account.accountPassword}</p>
        <button className="button button--round" onClick={() => Accounts.remove(this.props.account._id)}>X</button>
      </div>
    );
  }
}
