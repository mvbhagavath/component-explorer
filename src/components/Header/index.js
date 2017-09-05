import React, { Component, PropTypes } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { props } = this;
    const { headerData, children } = props;
    return (
      <div>
        <h2>Header</h2>
        <p>{headerData}</p>
        {children}
      </div>
    )
  }

}
Header.propTypes = {
  headerData: PropTypes.string,
};

export default Header; 