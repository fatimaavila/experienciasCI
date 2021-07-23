import axios from 'axios';
import { Component } from 'react';

export default class RatingCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ratings: [],
    };
  }
  async componentDidMount() {
    const { data } = await axios.get('http://localhost:8080/bookings/rating');
    const ratings = data.data.rating;
    console.log(ratings);
    this.setState({ ratings });
  }

  render() {
    return (
      <div>
        {this.state.ratings.map((rating) => {
          return <p>{rating}</p>;
        })}
      </div>
    );
  }
}
