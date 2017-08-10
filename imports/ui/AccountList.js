import React from 'react';

import Account from './Account';

export default class AccountList extends React.Component {
  renderAccounts() {
    return this.props.accounts.map((account) => {
      return <Account key={account._id} account={account}/>;
    });
  }
  render() {
    return (
      <div className="accountList">
        {this.renderAccounts()}
      </div>
    );
  }
};
