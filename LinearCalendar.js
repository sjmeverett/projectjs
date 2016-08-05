
import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import './LinearCalendar.scss';


export default class LinearCalendar extends React.Component {

  render() {
    let startDate = moment().add(-1, 'weeks');
    let endDate = moment().add(5, 'weeks');

    return (
      <div className="calendar-view">
        <div className="days">
        {
          [...momentRange(startDate, endDate)]
            .map((date, i) => (
              <div className={this.classes(date)} key={i}>
                <div className="date">{date.format('DD')}</div>
                <div className="date">{date.format('dd')}</div>
                <div className="month">{date.format('MMM')}</div>
              </div>
            ))
        }
        </div>

        <div className="tasks">
        {
          this.props.tasks.map((task) => (
            <div class="row">
              <div className="task" style={{
                left: (task.startDate.diff(startDate, 'days') + 1) * 30,
                width: (task.endDate.diff(task.startDate, 'days') + 1) * 30
              }}>{task.name}</div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }


  classes(date) {
    let a = ['day'];

    if (date.month() !== this.lastMonth) {
      this.lastMonth = date.month();
      a.push('new-month');
    }

    if (date.isoWeekday() > 5) {
      a.push('weekend');
    }

    return a.join(' ');
  }
};


function* momentRange(start, end, step=1, duration='days') {
  let current = start.clone();

  while (current <= end) {
    yield current.clone();
    current.add(step, duration);
  }
}
