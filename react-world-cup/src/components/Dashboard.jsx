import React from 'react';
import json from '../assets/json/data.json';
import StickerCard from './StickerCard';
import SearchSticker from './SearchSticker';


class Dashboard extends React.Component {

constructor (props) {
  super(props);
  this.state = {
    filter: '', 
    stickers: json.stickers 
  }
  this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
}

  getFilteredStickers(filterValue) {
    return json.stickers.filter(function(sticker) {
      return sticker.name.toLowerCase().indexOf(filterValue.toLowerCase())!==-1;
    });
   }


 handleFilterUpdate(value) {
  this.setState({filter: value});
  this.setState({stickers: this.getFilteredStickers(value)});
}; 


render(props) {
  return (
  <div>
    <h1 className="float-left">2018 FIFA World Cup Russia - Stickers catalogue</h1>
    <div className="clearfix"></div>

    <div className="row">
      <SearchSticker updateFilter={this.handleFilterUpdate}  />
    </div>
    <div>{this.state.filter}</div>
    <div className="row">
        {this.state.stickers.map((sticker, index) => {
      return (<StickerCard sticker={sticker} buttonMessage={"Traded"} key={index} filter={this.state.filter}/>
      )
     })
    }
    </div>
  </div>
)
};

}
export default Dashboard;
