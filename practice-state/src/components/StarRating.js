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
          isSelected={this.state.rating > i}
          setRating={() => this.handleSetRating(i + 1)} //passing i + 1 to make sure the rating is updating properly
          key={i}
        />
      )
    }

    return stars;
  }

  // Write an event handler that updates the rating state.
  handleSetRating = (rating) => {
    //sets rating to 0 if the same rating is selected
    if(this.state.rating === rating) {
      this.setState({rating: 0});
    } else {
      this.setState({rating});

    }
  }
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