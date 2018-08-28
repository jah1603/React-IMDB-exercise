import React from 'react';
import ScreeningsList from '../components/ScreeningsList';

class ScreeningsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      screenings: [
        {title: 'Inception', showtime: 'Showtimes', id: 123},
        {title: 'Boy in the Striped Pyjamas', showtime: "Showtimes", id: 456}
      ]
    };
  }
  render() {
    return (
      <div className="screenings-box">
        UK Opening This Week
        <ScreeningsList screenings={this.state.screenings}/>
      </div>
    );
  }
}

export default ScreeningsBox;
