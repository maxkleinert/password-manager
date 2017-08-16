import { Mongo } from 'meteor/mongo';

export const Account = new Mongo.Collection('account');

if (Meteor.isServer) {
  Meteor.publish('account', function () {
    return Account.find();
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
