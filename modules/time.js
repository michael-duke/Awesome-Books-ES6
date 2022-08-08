import { DateTime } from './luxon.min.js';

class Time extends DateTime {
  static displayTime() {
    const dateTime = DateTime.now();
    const customeDateFormat = {
      ...DateTime.DATE_FULL,
      ...DateTime.TIME_WITH_SECONDS,
    };
    document.querySelector(
      '.date-time p',
    ).textContent = `${dateTime.toLocaleString(customeDateFormat)}`;
  }
}

export default Time;
