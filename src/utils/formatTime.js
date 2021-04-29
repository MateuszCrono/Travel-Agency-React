export const formatTime = time => {
  let seconds = 0
  let minutes = 0
  let hours = 0


  if ( time == undefined || isNaN(time) || time < 0 ) {
    return null
  }

  if ( time > 59 ) {
    seconds = time % 60
    minutes = Math.floor((time / 60) % 60);
    hours = Math.floor((time / 3600 ) % 60 );
  }
    else if ( time <= 59 ) {
    seconds = time
    minutes = 0
    hours = 0
    }

    if (seconds <= 9) {
      seconds = '0' + seconds;
    }
    if (minutes <= 9) {
      minutes = '0' + minutes;
    }
    if (hours <= 9) {
      hours = '0' + hours;
    }
    return `${hours}:${minutes}:${seconds}`;
  };


