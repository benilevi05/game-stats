import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className="header">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 40 }}>{props.title}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: "Title",
  age: 5
}

Header.propTypes = {
  title: PropTypes.string,
  age: PropTypes.number
}

export default Header
