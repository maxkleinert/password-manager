import React from 'react';

import TitleBar from './TitleBar';
import AddAccount from './AddAccount';
import AccountList from './AccountList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Werbebotschaft"/>
        <div className="wrapper">
          <AccountList accounts={this.props.accounts}/>
          <AddAccount/>
        </div>
      </div>
    );
  }
};
