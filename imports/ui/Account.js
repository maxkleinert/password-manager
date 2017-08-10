import React from "react";

export default class Account extends React.Component {
  render() {
    return (
      <div className="account">
        <p>Name: {this.props.account.accountName}</p>
        <p>Passwort: {this.props.account.accountPassword}</p>
      </div>
    );
  }
}
