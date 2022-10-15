import React, { Component } from 'react'
import GetModData from '../GetModData'
import Item from './Item'
import VanillaItem from './VanillaItem'

export default class SmeltingRecipe extends Component {
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
        <span className="mcui mcui-Furnace pixel-image">
          {this.props.label?<><p className='minecraft black' style={{textAlign: "center", margin: "auto", width: "100%"}}>{this.props.label}</p><br /></>:null}
          <span className="mcui-input">
            <span className="invslot">{this.getItem(this.state.recipe.inputs[0])}</span>
            <span className="mcui-fuel"></span>
            <span className="invslot"></span>
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
