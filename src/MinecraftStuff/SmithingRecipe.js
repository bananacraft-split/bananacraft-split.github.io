import React, { Component } from 'react'
import GetModData from '../GetModData'
import Item from './Item'
import VanillaItem from './VanillaItem'

export default class SmithingRecipe extends Component {
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
      return (<div>
                <span className="mcui pixel-image smithingTable">
                <span className="upgradeGear">
                  Upgrade Gear
                </span>
                <span className="smithingTable1">
                  <span className="invslot">
                  {this.getItem(this.state.recipe.inputs[0])}
                  </span>
                  <span className="invslot smithingTable2">
                  {this.getItem(this.state.recipe.inputs[1])}
                  </span>
                  <span className="invslot smithingTable4">
                  {this.getItem(this.state.recipe.output)}
                  </span>
                </span>
                <span className="smithingTable5">
                  <br />
                </span>
                <span className='smithingTable6'>
                  <br />
                </span>
                <span className='smithingTable7'>
                  <br />
                </span>
              </span>
            </div>)
    }
  }
}
