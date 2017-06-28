import React from 'react';

class Ingredient extends React.Component {

  render() {
    return (
       <li className="ingredient">{this.props.ingredient}</li>
   )
  }
}
export default Ingredient;
