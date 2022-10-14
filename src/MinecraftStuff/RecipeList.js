import React, { Component } from 'react'
import GetModData from '../GetModData'
import Recipe from './Recipe'

export default class RecipeList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       waitingForRecipes: true,
       recipes: [],
       mod: this.props.mod,
       input: this.props.findInput,
       item: this.props.item
    }
  }
  componentDidMount() {
    console.log(this.state.item)
    GetModData(`${this.state.mod}/data/recipes.json`).then(data=>{
        this.setState({recipes:data.recipes.filter(x=>x.output===this.state.item), waitingForRecipes:false})
    })
  }
  render() {
    if (this.state.waitingForRecipes){
    return (
      <div>RecipeList</div>
    )}
    if (this.state.recipes.length === 0) {
      <div>There are no recipes for this item.</div>
    }
    else {
      return (
        <>{this.state.recipes.map((x,i)=><Recipe key={i} recipe={x} mod={this.state.mod}/>)}</>
      )
    }
  }
}
