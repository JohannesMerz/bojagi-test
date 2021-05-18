import React from 'react';
import BoxWithButtons from './BoxWithButtons'

export default { title: 'BoxWithButtonss' };

export const trafficLight = () => <BoxWithButtons color="white" buttons={[{text: 'stop', color: 'red'},{text: 'ready', color: 'yellow'}, {text: 'go', color: 'green'}]}/>