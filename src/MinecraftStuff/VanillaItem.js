import React, { Component } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Textures from 'minecraft-textures/dist/textures/1.18'


export default class VanillaItem extends Component {
  render() {
    console.log(this.props.item)
    let item = Textures.items.filter(x=>x.id===this.props.item)[0]
    let id = this.props.item.substring("minecraft:".length)
    return (
        <OverlayTrigger placement="top" overlay={
            <Tooltip className='mctooltip minecraft'><p>{item.readable}</p></Tooltip>
        }>
      <a href={`https://minecraft.fandom.com/wiki/${id}/`}><img className="pixelated" src={item.texture} alt="" width={this.props.scale * 32} height={this.props.scale * 32} /></a>
      </OverlayTrigger>
    )
  }
}
