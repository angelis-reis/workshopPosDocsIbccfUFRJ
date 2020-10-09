document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  var event_date = 1604396400

  // Set up FlipDown
  var flipdown = new FlipDown(event_date)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;

    body.classList.toggle('dark-theme');

    // body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    
    // body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');

  }, 5000);

  // Show version number
  
});
