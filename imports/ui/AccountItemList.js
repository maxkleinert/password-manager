import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Account } from '../api/account';

export default class AccountItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
  }
  componentDidMount() {
    this.accountsTracker = Tracker.autorun(() => {
      Meteor.subscribe('account');
      const accounts = Account.find().fetch();
      this.setState({ accounts });
    });
  }
  componentWillUnmount() {
    this.accountsTracker.stop();
  }
  deleteItem(id) {
    Meteor.call('account.deleteItem', id);
  }
  renderAccountsListItems() {
    return this.state.accounts.map((account) => {
      return (
        <div key={account._id} className="accountItem">
          <ul>
            <li><span className="label">Name:</span> {account.accountName}</li>
            <li><span className="label">Nummer:</span> {account.accountNummer}</li>
            <li><span className="label">Password</span> {account.accountPassword}</li>
            <li><span className="label">Url:</span> {account.accountUrl}</li>
          </ul>
          <button className="button" onClick={this.deleteItem.bind(this, account._id)}>X</button>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderAccountsListItems()}
      </div>
    );
  }
};
