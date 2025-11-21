import moment from 'moment-timezone';

export function dateTime(amount: moment.DurationInputArg1 = 0, unit: moment.unitOfTime.DurationConstructor = 'days', timezone: string= 'Asia/Kolkata', format: string= 'DD-MM-YYYY HH:mm:ss'): string {
    const mm = moment();
    const time = mm.add(amount, unit).tz(timezone).format(format);
    // console.log(time);
    return time.toString();
}