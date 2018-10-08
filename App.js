import React, { Component } from 'react';
import Form from "./components/Form";
import Recipes from "./components/Recipes";


import './App.css';


const API_KEY = "98ffc16f043898c38cd16fe3ca352211";

class App extends Component {



    state = {
      recipes: []
    }
 

  

  getRecipe = async (e) =>{
    e.preventDefault();
    const recipe_name = e.target.elements.recipe_name.value;

    const api_call =  fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${recipe_name}&count=6`)
    .then(function(data) {
      return data.json();
    }).then((data) =>{
      this.setState({
        recipes: data.recipes
      });
      });


  }


  render() {
    return (
      <div className='container-fluid'>
        <div className='row>'>
        <Form getRecipe={this.getRecipe}/>
         <Recipes recipes={this.state.recipes}/>      
        </div>
         
      </div>
    );
  }
}

export default App;
