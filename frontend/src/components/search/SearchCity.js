import axios from 'axios';
import React from 'react';

export default class SearchCity extends React.Component {
  state = {
    experiences: [],
  };

  componentDidMount() {
    axios.get(' http://localhost:8080/experiences').then((res) => {
      const experiences = res.data;
      this.setState({ experiences });
      console.log(res.data);
    });
  }

  render() {
    return (
      <ul>
        {this.state.experiences.map((experience) => (
          <li>{experience}</li>
        ))}
      </ul>
    );
  }
}
