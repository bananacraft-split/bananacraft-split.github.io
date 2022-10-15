import React, { Component } from 'react'
import GetModData from '../GetModData'
import Item from './Item'
import VanillaItem from './VanillaItem'

export default class StoneCuttingRecipe extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       waitingForItems: true,
       items: [],
       mod: this.props.mod,
       recipe: this.props.recipe,
       label: this.props.label
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
    if (this.state.waitingForItems) {
    return (
      null
    )}
    else {
      return (
        <span className="mcui mcui-Stonecutter pixel-image">
          <span className="mcui-input">
            <span className="invslot">{this.getItem(this.state.recipe.inputs[0])}</span>
          </span>
          <span className="mcui-stonecutterArrow">
            <span className="invslot invslot-plain mcui-stonecutterSprite">{this.getItem(this.state.recipe.output)}</span>
          </span>
          <span className="mcui-output">
            <span className="invslot invslot-large">{this.getItem(this.state.recipe.output)}<span className="invslot-stacksize minecraft">{this.state.recipe.count>1?this.state.recipe.count:null}</span></span>
          </span>
        </span>
      )
    }
  }
}
