import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getSummerTime(){
    const currentTime = new Date();
    const currentYear = currentTime.getUTCFullYear();
    const currentMonth = currentTime.getUTCMonth();
    const currentDay = currentTime.getUTCDate();
    const currentFullDate = new Date(currentYear, currentMonth, currentDay);

    const nextSummerStart = new Date(currentYear, 5, 21 );
    const nextSummerEnd = new Date(currentYear,8 , 23 );

    let difference = 0;

    if ( currentFullDate.getTime() >= nextSummerEnd.getTime() || currentFullDate.getTime() >= nextSummerStart.getTime() ) {
      difference = null
    } else {
      difference = (nextSummerStart - currentFullDate)
    }
    const days =  difference / (1000 * 3600 * 24);

    return Math.floor(days)
  }

  render() {
    return (
      <div className={styles.component}>
          {this.getSummerTime() == 0 ? null : (this.getSummerTime() == 1 ? `${this.getSummerTime()}'day to summer'` : `${this.getSummerTime()} days to summer`)}
      </div>
    );
  }
}

export default DaysToSummer
