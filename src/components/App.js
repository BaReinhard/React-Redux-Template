import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/somewrongurl">404 Page</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;