import React, { Component } from 'react';

class Form extends React.Component{
    render(){
        return(

        <div className='text-center sfondo'>
        <h3 >Recipe App</h3>
        <small>by Umberto Gonnella</small>
            <form onSubmit={this.props.getRecipe}>
                <input type="text" name="recipe_name"></input>
                <button className="btn btn-info">Search</button>
            </form>
        </div>
        );
    }
}

export default Form;