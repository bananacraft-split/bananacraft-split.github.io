import React, { Component } from 'react'
import GetModData from '../GetModData'
import BrewingRecipe from './BrewingRecipe'
import Item from './Item'
import SmeltingRecipe from './SmeltingRecipe'
import SmithingRecipe from './SmithingRecipe'
import StoneCuttingRecipe from './StoneCuttingRecipe'
import VanillaItem from './VanillaItem'

export default class Recipe extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       waitingForItems: true,
       items: [],
       mod: this.props.mod,
       recipe: this.props.recipe
    }
  }
  componentDidMount() {
    GetModData(`${this.state.mod}/data/items.json`).then(data=>{
        this.setState({items:data.items, waitingForItems:false})
    })
  }
  getItem(name) {
    if (name === "") {return null}
    if (name.length === 0) {return null}
    if (name.startsWith("CUSTOM:")) {
      let item = this.state.items.filter(x=>x.mcreatorname === name.substring(7))[0]
      return <Item mod={this.state.mod} item={item} scale={1}/>
    } else {
      return <VanillaItem item={name} scale={1}/>
    }
  }
  render() {
    if (this.state.recipe.type === "smelting") {
      return <SmeltingRecipe mod={this.state.mod} recipe={this.state.recipe} label=""/>
    }
    if (this.state.recipe.type === "blasting") {
      return <SmeltingRecipe mod={this.state.mod} recipe={this.state.recipe} label="Blasting" />
    }
    if (this.state.recipe.type === "smoking") {
      return <SmeltingRecipe mod={this.state.mod} recipe={this.state.recipe} label="Smoking" />
    }
    if (this.state.recipe.type === "campfire") {
      return <SmeltingRecipe mod={this.state.mod} recipe={this.state.recipe} label="Campfire" />
    }
    if (this.state.recipe.type === "brewing") {
      return <BrewingRecipe mod={this.state.mod} recipe={this.state.recipe} />
    }
    if (this.state.recipe.type === "stonecutting") {
      return <StoneCuttingRecipe mod={this.state.mod} recipe={this.state.recipe} />
    }
    if (this.state.recipe.type === "smithing") {
      return <SmithingRecipe mod={this.state.mod} recipe={this.state.recipe} />
    }
    else if (this.state.recipe.type !== "crafting") {
      return null
    }
    if (this.state.waitingForItems) {
    return (
      null
    )}
    else {
      return (
        <span className="mcui mcui-Crafting_Table pixel-image">
          <span className="mcui-input">
            <span className="mcui-row">
              <span className="invslot">{this.getItem(this.state.recipe.inputs[0])}</span>
              <span className="invslot">{this.getItem(this.state.recipe.inputs[1])}</span>
              <span className="invslot">{this.getItem(this.state.recipe.inputs[2])}</span>
            </span>
            <span className="mcui-row">
              <span className="invslot">{this.getItem(this.state.recipe.inputs[3])}</span>
              <span className="invslot">{this.getItem(this.state.recipe.inputs[4])}</span>
              <span className="invslot">{this.getItem(this.state.recipe.inputs[5])}</span>
            </span>
            <span className="mcui-row">
              <span className="invslot">{this.getItem(this.state.recipe.inputs[6])}</span>
              <span className="invslot">{this.getItem(this.state.recipe.inputs[7])}</span>
              <span className="invslot">{this.getItem(this.state.recipe.inputs[8])}</span>
            </span>
        </span>
        <span className="mcui-arrow"><br /></span>
        <span className="mcui-output">
            <span className="invslot invslot-large">{this.getItem(this.state.recipe.output)}<span className="invslot-stacksize minecraft">{this.state.recipe.count>1?this.state.recipe.count:null}</span></span>
        </span>
        </span>
      )
    }
  }
}
