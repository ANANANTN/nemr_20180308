import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <li>Still waiting.</li>;
      case false:
        return <li>Login with Google</li>;
      default:
        return <li>Logged In</li>;
    }
  }

  render() {
    return (
      <nav className="row">
        <div className="nav-wrapper col s12">
          <a href="/" className="brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  // Whatever is returned will show up as props inside BookList
  return { auth };
}

export default connect(mapStateToProps)(Header);
