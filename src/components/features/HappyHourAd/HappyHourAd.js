import styles from './HappyHourAd.scss'
import React from 'react'
import propTypes from 'prop-types';

class HappyHourAd extends React.Component {


  static propTypes = {
    title: propTypes.string,
    promoDescription: propTypes.node,
  }

  render() {
    const {title} = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}/>
      </div>
    );
  }
}


export default HappyHourAd;
