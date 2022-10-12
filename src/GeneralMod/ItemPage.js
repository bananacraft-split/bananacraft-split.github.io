import React, { Component } from 'react'
import GetModData from '../GetModData';
import Item from '../MinecraftStuff/Item';

export class ItemPage extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            mod: props.mod,
            name: props.item,
            item: {},
            waitingForModItem: true,
        }
    }
    componentDidMount() {
        GetModData(`${this.state.mod}/data/items.json`).then(data=>{
            this.setState({item:data.items.filter(x=>x.id===this.state.name)[0], waitingForModItem:false})
        })
    }
    render() {
        if (this.state.waitingForModItem){
        return (
        <div className='homepage'>Loading...</div>
        )}
        else {
            return (
                <div className='homepage'>
                    <h1>{this.state.item.name}</h1>
                    <Item scale={4} item={this.state.item} mod={this.state.mod} />
                    {this.state.item.description.map(x=><p>{x}</p>)}
                </div>
            )
        }
    }
}

export default ItemPage