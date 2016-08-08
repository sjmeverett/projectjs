
import _ from 'lodash';
import React from 'react';
import './DimensionBar.scss';


export default class DimensionBar extends React.Component {

  render() {
    let width = this.props.width;

    let points = [
      [0, 4],
      [0, 21],
      [5, 14],
      [width-5, 14],
      [width, 21],
      [width, 4]
    ].map((p) => p.join(',')).join(' ');

    return (
      <svg className="dimensionbar">
        <polygon points={points} />
      </svg>
    );
  }
};
