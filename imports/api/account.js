import { Mongo } from 'meteor/mongo';

export const Account = new Mongo.Collection('account');

if (Meteor.isServer) {
  Meteor.publish('account', function () {
    return Account.find();
  });
}

Meteor.methods({
  'account.insert'(accountName, accountPassword) {
    Account.insert({
      accountName,
      accountPassword
    });
  },
  'account.deleteItem'(id) {
    Account.remove(id);
  }
});
