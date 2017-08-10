import React from 'react';

import AccountList from './AccountList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AccountList accounts={this.props.accounts}/>
      </div>
    );
  }
};
