import moment from 'moment';

export const toTimeFormat = (seconds: number) => moment.utc(moment.duration(seconds, 'seconds').as('milliseconds')).format('mm:ss');
