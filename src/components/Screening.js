import React from 'react';

class Screening extends React.Component {

  render() {
    return (
      <li>
        <h4>{this.props.title}</h4>
        <p>{this.props.children}</p>
      </li>
    )
  }

}

export default Screening;
