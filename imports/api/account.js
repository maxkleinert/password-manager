import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Account = new Mongo.Collection('account');

if (Meteor.isServer) {
  Meteor.publish('account', function () {
    return Account.find({}, {sort: {accountName: 1}});
  });
}

Meteor.methods({
  'account.insert'(accountName, accountNummer, accountPassword, accountUrl) {
    Account.insert({
      accountName,
      accountNummer,
      accountPassword,
      accountUrl
    });
  },
  'account.deleteItem'(id) {
    Account.remove(id);
  }
});
