
import _ from 'lodash';
import DimensionBar from './DimensionBar';
import React from 'react';
import './TaskList.scss';


export default class TaskList extends React.Component {

  render() {
    let xScale = this.props.xScale || 30;
    let tasks = this.props.tasks;

    let min = _(tasks).map((x) => x.column).min();
    let max = _(tasks).map((x) => x.column + x.width).max();
    let width = (max-min) * xScale;

    return (
      <div className="tasklist">
        <div className="tasklist-dimension" style={{
            left: min * xScale,
            width
          }}>
          <DimensionBar width={width} />
        </div>
      {
        tasks.map((task) => (
          <div className="tasklist-row">
            <div className="task" style={{
              left: task.column * xScale,
              width: task.width * xScale
            }}>{task.task.name}</div>
          </div>
        ))
      }
      </div>
    );
  }
};
