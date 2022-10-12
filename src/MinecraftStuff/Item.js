import React, { Component } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default class Item extends Component {
  render() {
    return (
        <OverlayTrigger placement="top" overlay={
            <Tooltip className='mctooltip minecraft'>{this.props.item.name}{this.props.item.show_hover_description?this.props.item.hover_description.map(x=><p className="dark_gray">{x}</p>):null}</Tooltip>
        }>
      <a href={`/#/mod/${this.props.mod}/item/${this.props.item.id}/`}><img className="pixelated" src={`${this.props.mod}/data/assets/${this.props.item.picture}`} alt="" width={this.props.scale * 28} height={this.props.scale * 28} /></a>
      </OverlayTrigger>
    )
  }
}
