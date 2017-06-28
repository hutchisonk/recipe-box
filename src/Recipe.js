import React from 'react';
import Ingredient from './Ingredient';
import EditRecipe from './EditRecipe';

class Recipes extends React.Component {

  constructor() {
    super();
    // this.onEditClick = this.onEditClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
        this.state = {
            showForm: false
            // editing:false
        };
  }

  toggleForm() {
    // if (!this.state.editing) {
      console.log("toggle form");
           this.setState({
               showForm: !this.state.showForm
           })
    // }
    }

  render() {
    // console.log(this.props.recipekey)
    // console.log(this.props.ingredients)
    // console.log(this.state.showForm)
    var editing = this.state.showForm;
    return (
    <div className="recipe_card">
      <button className="edit_recipe_btn" onClick={this.toggleForm}>edit</button>
        <ul className={this.props.recipename.split(" ").join("-")}>
          <h2>{this.props.recipename}</h2>

            {this.props.ingredients.map(function(ingredient,index) {
            // console.log(index, ingredient);
                    return (
                      <Ingredient
                        key={index}
                        ingredient={ingredient}
                        editing={editing}
                      />
                  )
                })
              }

        </ul>
        {this.state.showForm ?
          <EditRecipe
            key={this.props.recipekey}
            recipekey={this.props.recipekey}
            addRecipe={this.props.addRecipe}
            updateRecipe={this.props.updateRecipe}
            removeRecipe={this.props.removeRecipe}
            recipename={this.props.recipename}
            ingredients={this.props.ingredients}
            toggleForm={this.toggleForm}
            />
                    : null }

    </div>

    )
  }
}
export default Recipes;
