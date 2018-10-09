import React, { Component } from 'react';
import { Link } from "react-router-dom";


const API_KEY = "YOUR API KEY HERE";


class Recipe extends React.Component{

    state = {
        activeRecipe: []
    }

    componentDidMount = () =>{
    const title = this.props.location.state.recipe;

    const api_call =  fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${title}`)
    .then(function(data) {
        return data.json();
    }).then((data) =>{
        this.setState({
        activeRecipe: data.recipes[0]
        });
        
        });


    }

    render(){

        return(
            <div className='row'>
            <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <p>{this.state.activeRecipe.title}</p>
                    <img className='img-fluid' src={this.state.activeRecipe.image_url}></img>
                    <p>{this.state.activeRecipe.publisher}</p>
                    <p>{this.state.activeRecipe.publisher_url}</p>
                    <button className='btn btn-danger'>
                    <Link to={{ pathname: `/`}}>Go back</Link>
                    </button>
                </div>
          <div className='col-md-3'></div>

            </div>
        );
    }
}

export default Recipe;
