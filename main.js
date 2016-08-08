
import TaskChart from './src/components/TaskChart';
import ReactDOM from 'react-dom';
import React from 'react';
import './styles.scss';
import moment from 'moment';

let tasks = [];/*
  {
    startDate: moment('2016-08-04'),
    endDate: moment('2016-08-08'),
    title: 'Developments',
    row: 0
  },
  {
    startDate: moment('2016-08-09'),
    endDate: moment('2016-08-11'),
    title: 'QA',
    row: 0
  },
  {
    startDate: moment('2016-08-12'),
    endDate: moment('2016-08-14'),
    title: 'UAT',
    row: 0
  }
];*/

ReactDOM.render(<TaskChart tasks={tasks} />, document.getElementById('content'));
