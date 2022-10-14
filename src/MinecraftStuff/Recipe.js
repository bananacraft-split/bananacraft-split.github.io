import React, { Component } from 'react'
import GetModData from '../GetModData'
import Item from './Item'
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
    console.log(this.state.recipe)
    GetModData(`${this.state.mod}/data/items.json`).then(data=>{
        console.log(data)
        this.setState({items:data.items, waitingForItems:false})
    })
  }
  getItem(name) {
    if (name === "") {return null}
    if (name.length === 0) {return null}
    if (name.startsWith("CUSTOM:")) {
      let item = this.state.items.filter(x=>x.mcreatorname === name.substring(7))[0]
      console.log(item, name)
      return <Item mod={this.state.mod} item={item} scale={1}/>
    } else {
      let id = "minecraft:" + name.substring(name.indexOf(".") + 1).toLowerCase()
      return <VanillaItem item={id} scale={1}/>
    }
  }
  render() {
    if (this.state.waitingForItems) {
    return (
      null
    )}
    else {
      console.log(this.state.items)
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
            <span className="invslot invslot-large">{this.getItem(this.state.recipe.output)}</span>
        </span>
        </span>
      )
    }
  }
}
