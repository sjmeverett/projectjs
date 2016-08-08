
import GanttChart from './src/components/GanttChart';
import ReactDOM from 'react-dom';
import React from 'react';
import './styles.scss';
import moment from 'moment';

let tasks = [
  {
    startDate: moment('2016-08-04'),
    endDate: moment('2016-08-08'),
    name: 'Developments'
  },
  {
    startDate: moment('2016-08-09'),
    endDate: moment('2016-08-11'),
    name: 'QA'
  },
  {
    startDate: moment('2016-08-12'),
    endDate: moment('2016-08-14'),
    name: 'UAT'
  }
];

ReactDOM.render(<GanttChart tasks={tasks}/>, document.getElementById('content'));
