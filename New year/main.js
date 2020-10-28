document.addEventListener('DOMContentLoaded', () => {
   let load = document.querySelector('.load'),
      count = document.querySelector('.count'),
      daysEl = document.getElementById('days'),
      hourEl = document.getElementById('hour'),
      minuteEl = document.getElementById('minute'),
      secondEl = document.getElementById('second'),
      angel = document.querySelector('.angel'),
      newYear = new Date('1 Jan 2021'),
      currentDate = new Date(),
      milliseconds, totalSeconds, days, hours, minutes, seconds, footer;
   setTimeout(() => {
      load.classList.add('active');
      setTimeout(() => {
         load.classList.remove('active');
         count.classList.add('active');
         angel.classList.add('active');
         countDown();
      }, 4300);
   }, 12000);
   // Date function
   function countDown() {
      currentDate = new Date();
      totalSeconds = (newYear - currentDate) / 1000;
      // Days
      days = Math.floor(totalSeconds / 86400);
      // Hours
      hours = Math.floor(totalSeconds / 3600) % 24;
      // Minutes
      minutes = Math.floor((totalSeconds / 60) % 60);
      // Seconds
      seconds = Math.floor(totalSeconds % 60);
      daysEl.textContent = days;
      hourEl.textContent = zero(hours);
      minuteEl.textContent = zero(minutes);
      secondEl.textContent = zero(seconds);
      setTimeout(countDown, 1000);
   } function zero(n) {
      return n < 10 ? '0' + n : n;
   } footer = document.querySelector('.fullscr__footer');
   angel.addEventListener('click', () => {
      window.scroll({
         left: 0,
         top: footer.offsetTop,
         behavior: 'smooth'
      });
   });
})
