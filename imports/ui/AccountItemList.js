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
        <div className="accountItem">
          <p key={account._id}>{account.accountName} - {account.accountPassword}</p>
          {/* ToDo -> Error */}
          {/* <button className="button" onClick={deleteItem.bind(this)}>X</button> */}
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
