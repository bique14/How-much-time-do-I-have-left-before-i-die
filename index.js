const posterEnd = moment('Thu May 08 2019 08:00:00 GMT+0700')
const finalEnd = moment('Thu May 30 2019 13:00:00 GMT+0700')
const thesisEnd = moment('Thu May 23 2019 16:00:00 GMT+0700')

const x = setInterval(function () {
  const now = moment(new Date())

  const posterRemain = moment.duration(posterEnd.diff(now))
  const finalRemain = moment.duration(finalEnd.diff(now))
  const thesisRemain = moment.duration(thesisEnd.diff(now))

  const posterDays = pad(+posterRemain.days())
  const posterHours = pad(+posterRemain.hours())
  const posterMinutes = pad(+posterRemain.minutes())
  const posterSeconds = pad(+posterRemain.seconds())

  const finalDays = pad(+finalRemain.days())
  const finalHours = pad(+finalRemain.hours())
  const finalMinutes = pad(+finalRemain.minutes())
  const finalSeconds = pad(+finalRemain.seconds())

  const thesisDays = pad(+thesisRemain.days())
  const thesisHours = pad(+thesisRemain.hours())
  const thesisMinutes = pad(+thesisRemain.minutes())
  const thesisSeconds = pad(+thesisRemain.seconds())

  document.getElementById('count-poster').innerHTML = `${posterDays} ${posterHours} ${posterMinutes} ${posterSeconds}`
  document.getElementById('count-presentation').innerHTML = `${finalDays} ${finalHours} ${finalMinutes} ${finalSeconds}`
  document.getElementById('count-thesis').innerHTML = `${thesisDays} ${thesisHours} ${thesisMinutes} ${thesisSeconds}`

  // 1 day = 86,400,000 millisecond
  const warningDays = 86400000 * 3
  if (posterRemain._milliseconds < warningDays) {
    document.getElementById('count-poster').style.color = 'red'
    document.getElementById('date-format').innerHTML = ''
  }
  if (finalRemain._milliseconds < warningDays) {
    document.getElementById('count-poster').style.color = 'red'
  }


  if (posterRemain._milliseconds < 0) {
    document.getElementById('count-poster').innerHTML = 'EXPIRED'
    document.getElementById('count-poster').style.color = 'red'
    document.getElementById('date-format').innerHTML = ''
  }
  if (thesisRemain._milliseconds < 0) {
    document.getElementById('count-thesis').innerHTML = 'EXPIRED'
    document.getElementById('count-thesis').style.color = 'red'
    document.getElementById('date-format').innerHTML = ''
  }
  if (finalRemain._milliseconds < 0) {
    clearInterval(x);
    document.getElementById('count-presentation').innerHTML = 'EXPIRED'
    document.getElementById('count-presentation').style.color = 'red'
    document.getElementById('date-format').innerHTML = ''
  }
}, 1000);

function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}