import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'; 
import GetModData from '../GetModData';
import GetModHtml from '../GetModHtml';
import ItemList from '../MinecraftStuff/ItemList';

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mod: props.mod,
            modData: "",
            modItems: [],
            waitingForModData: true,
            waitingForModItems: true,
        }
    }
    componentDidMount() {
        GetModHtml(`${this.state.mod}/data/home.html`).then(data=>{
            this.setState({modData:data, waitingForModData:false})
        })
        GetModData(`${this.state.mod}/data/items.json`).then(data=>{
            this.setState({modItems:data.items, waitingForModItems:false})
        })
    }
    render() {
        if (this.state.waitingForModData || this.state.waitingForModItems){
        return (
        <div className='homepage'>Loading...</div>
        )}
        else {
            return (
                <div className='homepage'>
                    {ReactHtmlParser(this.state.modData)}
                    <h2>Items</h2>
                    <ItemList items={this.state.modItems} mod={this.state.mod} />
                </div>
            )
        }
    }
}

export default Home