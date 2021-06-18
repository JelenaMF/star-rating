import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }
  // Write a function that returns 5 Star components
  renderStars = () => {
    //set a variable to an empty array that will hold the value of stars
    let stars = [];
    let maxStars = 5;
    //use loop and push method to add stars to the empty stars array

    for(let i = 0; i < maxStars; i++) {
      stars.push(
        <Star 
          key={i}
        />
      )
    }

    return stars;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components     
        //render stars to the dom by calling the function renderStars*/}
        {this.renderStars()}
      </ul>
    );
  }
}

export default StarRating;