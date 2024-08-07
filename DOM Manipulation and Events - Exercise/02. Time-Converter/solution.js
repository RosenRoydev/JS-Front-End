function attachEventsListeners() {
 const dayEl = document.getElementById('days');
 const hourEl = document.getElementById('hours');
 const minuteEl = document.getElementById('minutes');
 const secondEl = document.getElementById('seconds');
 const dayButtonEl = document.getElementById('daysBtn');
 const hourButtonEl = document.getElementById('hoursBtn');
 const minuteButtonEl = document.getElementById('minutesBtn');
 const secondButtonEl = document.getElementById('secondsBtn');
 dayButtonEl.addEventListener('click',() =>{
    hourEl.value = Number(dayEl.value) * 24
    minuteEl.value = Number(dayEl.value) * 1440
    secondEl.value = Number(dayEl.value) * 86400
 })
 hourButtonEl.addEventListener('click', ()=>{
  dayEl.value = Number(hourEl.value) /24;
   minuteEl.value = Number(dayEl.value) * 1440
    secondEl.value = Number(dayEl.value) * 86400
 })
 minuteButtonEl.addEventListener('click', ()=>{
    dayEl.value = Number(minuteEl.value)/1440
    hourEl.value = Number(dayEl.value)*24
    secondEl.value = Number(dayEl.value) * 86400
 })
  secondButtonEl.addEventListener('click', ()=>{
    dayEl.value = Number(secondEl.value)/86400
    hourEl.value = Number(dayEl.value)*24
    minuteEl.value = Number(dayEl.value) * 1440
  })
}
