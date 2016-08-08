

import _ from 'lodash';
import React from 'react';
import momentRange from '../util/momentRange';
import './Timeline.scss';


export default class Timeline extends React.Component {

  render() {
    let dates = [...momentRange(this.props.startDate, this.props.endDate)];
    let xScale = this.props.xScale;
    
    return (
      <div className="timeline" style={{width: dates.length * xScale}}>
      {
        dates
          .map((date, i) => (
            <div className={this.classes(date, i)} key={date.format('YYYY-MM-DD')}>
              <div className="date">{date.format('DD')}</div>
              <div className="date">{date.format('dd')}</div>
              <div className="month">{date.format('MMM')}</div>
            </div>
          ))
      }
      </div>
    );
  }


  classes(date, i) {
    let a = ['timeline-day'];

    if (date.month() !== this.lastMonth) {
      this.lastMonth = date.month();

      if (i > 0)
        a.push('new-month');
    }

    if (date.isoWeekday() > 5) {
      a.push('weekend');
    }

    return a.join(' ');
  }
};
