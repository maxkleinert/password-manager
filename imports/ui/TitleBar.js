import React from 'react';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
    }
  }
  renderLogoutBtn() {
    if (Meteor.userId()) {
      return <button className="button" onClick={this.onLogout.bind(this)}>Logout</button>;
    }
  }
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div className="title-bar">
        {this.renderLogoutBtn()}
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}
