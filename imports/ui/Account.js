import React from "react";

export default class Account extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.account._id} - {this.props.account.accountName} - {this.props.account.accountPassword}</p>
      </div>
    );
  }
}
