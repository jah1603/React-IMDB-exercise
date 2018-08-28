import React from 'react';
import Screening from './Screening.js';

class ScreeningsList extends React.Component {
  render() {
    const screeningComponents = this.props.screenings.map((screening) => {
      return (<Screening title={screening.title}
          key={screening.id}
        >{screening.text}</Screening>);
    });
    return (
      <ul>
        This is the ScreeningList
        {screeningComponents}
      </ul>
    );
  }
}

export default ScreeningsList;
