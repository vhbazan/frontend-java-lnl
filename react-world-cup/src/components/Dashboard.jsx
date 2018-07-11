import React from 'react';
import json from '../assets/json/data.json';
import StickerCard from './StickerCard';
import SearchSticker from './SearchSticker';

const Dashboard = (props) => (
  <div>
    <h1 className="float-left">2018 FIFA World Cup Russia - Stickers catalogue</h1>
    <div className="clearfix"></div>

    <div className="row">
      <SearchSticker />
    </div>
    <div class="row">
    {json.stickers.map((sticker, index) => {
      return (<StickerCard sticker={sticker} buttonMessage={"Traded"} key={index}/>
      )
     })
    }
    </div>
  </div>
);

export default Dashboard;
