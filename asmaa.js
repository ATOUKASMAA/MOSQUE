function updateClock() {
  var now = new Date();
  var day = now.getDate(); 
  var month = now.getMonth() + 1; // month starts from 0
  var year = now.getUTCFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  if (hours < 10) {
      hours = "0" + hours;
  }
  if (minutes < 10) {
      minutes = "0" + minutes;
  }
  if (seconds < 10) {
      seconds = "0" + seconds;
  }
  // Add Arabic date
  var arabicDate = new Intl.DateTimeFormat('ar-FR-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());
  document.getElementById("arabic-date").innerHTML = arabicDate;

  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateClock, 1000);


  // Fetch the prayer times from the API
  const hijriYear = 1444;
  const hijriMonth = 11;
  const latitude = 33.22415258162422;
  const longitude = -8.501581231968592;
  const method = 2;
 
  const url = `http://api.aladhan.com/v1/hijriCalendar/${hijriYear}/${hijriMonth}?latitude=${latitude}&longitude=${longitude}&method=${method}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const prayerTimes = data.data[0].timings;

  
      document.getElementById("fajr").textContent = prayerTimes.Fajr;
      document.getElementById("dhuhr").textContent = prayerTimes.Dhuhr;
      document.getElementById("asr").textContent = prayerTimes.Asr;
      document.getElementById("maghrib").textContent = prayerTimes.Maghrib;
      document.getElementById("isha").textContent = prayerTimes.Isha;
    })
    .catch(error => console.error(error));

  


var apiKey = "1384a05df33c41c0fda612a23ef3b005";
var country = "MA"; 
var city = "Casablanca"; 
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + apiKey;


$.getJSON(apiUrl, function(data) {

  var temp = Math.round(data.main.temp - 273.15); 
  var iconUrl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";


  $(".weather-icon").attr("src", iconUrl);
  $(".weather-temp").html(temp + "&deg;C");
});


