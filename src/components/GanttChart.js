
import _ from 'lodash';
import React from 'react';
import TaskList from './TaskList';
import Timeline from './Timeline';
import moment from 'moment';
import './GanttChart.scss';


export default class GanttChart extends React.Component {

  render() {
    let startDate = moment().add(-1, 'weeks');
    let endDate = moment().add(5, 'weeks');
    let xScale = this.props.xScale || 30;

    let tasks = this.props.tasks.map((task, i) => ({
      task,
      column: task.startDate.diff(startDate, 'days') + 1,
      row: i,
      width: task.endDate.diff(task.startDate, 'days') + 1,
    }));

    return (
      <div className="ganttchart">
        <Timeline startDate={startDate} endDate={endDate} xScale={xScale} />
        <TaskList tasks={tasks} xScale={xScale} />
      </div>
    );
  }
};
