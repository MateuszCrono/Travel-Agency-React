import styles from './HappyHourAd.scss'
import React from 'react'
import propTypes from 'prop-types';
import formatTime from '../../../utils/formatTime'

class HappyHourAd extends React.Component {
  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => this.forceUpdate(), 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  // getPromotionTime (){
  //   if (this.getCountdownTime > 23 * 60 * 60) {
  //     return 'BIG DISCOUNT IS HERE';
  //   } else {
  //     return null;
  //   }
  // }

  static propTypes = {
    title: propTypes.string,
    promoDescription: propTypes.node,
    getCountdownTime: propTypes.node,
  }

  render() {
    const {title} = this.props;
    const promoDescription = 'BIG DISCOUNT IS HERE'
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>
          {this.getCountdownTime() > 82800 ? promoDescription : this.getCountdownTime(formatTime)}
        </div>
      </div>
    );
  }
}


export default HappyHourAd;
