import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/index";

const App = (props) => {

  const { state, addFeature, removeFeature } = props;

  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   store: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car}/>
        <AddedFeatures car={props.car} removeFeature={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={props.addFeature}  />
        <Total car={props.car}  additionalPrice={props.additionalPrice}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
