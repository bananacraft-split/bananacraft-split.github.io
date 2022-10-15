import React, { Component } from 'react'
import GetModData from '../GetModData'
import Item from './Item'
import VanillaItem from './VanillaItem'

export default class BrewingRecipe extends Component {
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
    if (this.state.waitingForItems) {
    return (
      null
    )}
    else {
      return (
        <span className="mcui mcui-Brewing_Stand pixel-image">
          <span className="mcui-input">
            <span className="mcui-bubbling">
              <br />
            </span>
            <span className="invslot">{this.getItem(this.state.recipe.inputs[1])}</span>
            <span className="mcui-arrow">
              <br />
            </span>
          </span>
          <span className="mcui-paths">
            <br />
          </span>
          <span className="mcui-output">
            <span className="invslot mcui-output1"><span className="invslot-item">{this.getItem(this.state.recipe.inputs[0])}</span></span>
            <span className="invslot mcui-output2">
              
            </span>
            <span className="invslot mcui-output3"><span className="invslot-item">{this.getItem(this.state.recipe.output)}</span></span>
          </span>
        </span>
      )
    }
  }
}
