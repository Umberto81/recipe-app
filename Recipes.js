import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Recipes extends React.Component{

    render(){
        return(
            <div className='row'>
                {this.props.recipes.map((recipe) => {
           return (
             <div key={recipe.recipe_id}className='col-md-4 sfondo' style={{ marginBottom: "2rem"}}>
                <img className='img-fluid' src={recipe.image_url}></img>
                <h5>
                {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p>Publisher: {recipe.publisher}</p>

                <button className="btn btn-success">
                        <Link to={{pathname: `/recipe/${recipe.recipe_id}`,
                        state:{recipe: recipe.title}
                    
                    }}>Recipe</Link> 
                </button>
            </div>
           )
         }) }
            </div>
        );
    }
}

export default Recipes;