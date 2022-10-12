import React, { Component } from 'react'
import Item from './Item'

export default class ItemListItem extends Component {
  render() {
    return (
      <tr><td>{this.props.item.name}</td><td><Item scale={1} mod={this.props.mod} item={this.props.item} /></td></tr>
    )
  }
}
