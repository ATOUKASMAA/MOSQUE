function playSoundAt(hour, minute) {
   
    setInterval(function() {
      const now = new Date();
      if (now.getHours() === hour && now.getMinutes() === minute) {
        const sound = document.getElementById('sound');
        if (sound) {
          sound.play().catch(function(error) {
            console.log(error); // Log any errors to the console
          });
        }
      }
    }, 1000);
  }
  
  // Call the function with the desired time
  playSoundAt(11, 38); // Note that the hour parameter is without the leading zero