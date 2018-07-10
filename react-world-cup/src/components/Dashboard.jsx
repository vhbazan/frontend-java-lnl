import React from 'react';
import json from '../assets/json/data.json';
import StickerCard from './StickerCard';
import logo from 'assets/img/logo.png'

const Dashboard = (props) => (
  <div>
    <div className="text-center">
    <h1>Java Lunch and Learn - Frontend Session </h1>
      <img className="d-block mx-auto" src={logo} />
      <h2>React &amp;&amp; Bootstrap 4</h2>
      </div>
    <h1 className="float-left">2018 FIFA World Cup Russia - Stickers catalogue</h1>
    <div className="clearfix"></div>

    <hr className="col-md-12"/>
    <div className="d-block col-md-12">
      <h3 className="">React Bootstrap components: </h3>
      <a className="m-2 d-block" href="https://reactstrap.github.io/components/alerts/">https://reactstrap.github.io/components/alerts/</a>
    </div>
    <hr className="col-md-12"/>
    
  </div>
);

export default Dashboard;
