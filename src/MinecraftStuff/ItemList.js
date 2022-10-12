import React, { Component } from 'react'
import ItemListItem from './ItemListItem'

export default class ItemList extends Component {
  render() {
    return (
      <table><tbody>{this.props.items.map((x,i)=><ItemListItem item={x} key={i} mod={this.props.mod}/>)}</tbody></table>
    )
  }
}
