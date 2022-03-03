<template>
  <div class="container">
    <div
      id="app"
      class="container"
      :class="
        typeof weather.main != 'undefined' && weather.main.temp > 16
          ? 'warm'
          : ''
      "
    >
      <main>
        <div class="search-box">
          <input
            type="text"
            class="search-bar"
            placeholder="Search.."
            v-model="query"
            @keypress="fetchWeather"
          />
          <!-- {{ query }} -->
        </div>

        <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
          <div class="location-box">
            <div class="location">
              {{ weather.name }}, {{ weather.sys.country }}
            </div>
            <div class="date">{{ dateBuilder() }}</div>
          </div>

          <div class="weather-box">
            <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
            <div class="weather">
              <!-- <img src='http://openweathermap.org/img/w/+" {{weather.weather[0].icon}} "+ .png'>      -->
              <!-- {{ weather.weather[0].icon }} -->

              <img
               width="100" height="100"
                src="../assets/fewclouds.png"
                v-if="
                  weather.weather[0].main == 'Clouds' &&
                  weather.weather[0].description == 'few clouds'
                "
              />
              <img
               width="100" height="100"
                src="../assets/scatteredclouds.png"
                v-if="
                  weather.weather[0].main == 'Clouds' &&
                  weather.weather[0].description == 'scattered clouds'
                "
              />
              <img
               width="100" height="100"
                src="../assets/brokenclouds.png"
                v-if="
                  weather.weather[0].main == 'Clouds' &&
                  weather.weather[0].description == 'broken clouds'
                "
              />
              <img
               width="100" height="100"
                src="../assets/brokenclouds.png"
                v-if="
                  weather.weather[0].main == 'Clouds' &&
                  weather.weather[0].description == 'overcast clouds'
                "
              />
              <img
                width="100" height="100"
                src="../assets/clearsky.png"
                v-if="weather.weather[0].main == 'Clear'"
              />
              <img
                width="100" height="100"
                src="../assets/thunderstorm.png"
                v-if="weather.weather[0].main == 'Thunderstorm'"
              />
              <img
               width="100" height="100"
                src="../assets/drizzle.png"
                v-if="weather.weather[0].main == 'Drizzle'"
              />
              <img
                width="100" height="100"
                src="../assets/rain.png"
                v-if="weather.weather[0].main == 'Rain'"
              />
              <img
                width="100" height="100"
                src="../assets/snow.png"
                v-if="weather.weather[0].main == 'Snow'"
              />
              <img
               width="100" height="100"
                src="../assets/mist.png"
                v-if="weather.weather[0].main == 'Mist'"
              />
            </div>
            <div class="description ">
              {{ weather.weather[0].main }} -  {{ weather.weather[0].description }}
              <br>
             Humidity {{ weather.main.humidity }} %
              <br>
              Minimum temperature: {{  Math.round(weather.main.temp_min)}}
               <br>
              Maximum temperature: {{  Math.round(weather.main.temp_max)}}
              <br>
            Wind speed: {{ weather.wind.speed }} %
              <br>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      api_key: "162d63d79834348681e93d535230595c",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },

  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResult);
      }
    },
    setResult(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

#app {
  background-image: url("cold.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4;
}
#app.warm {
  background-image: url("warm.jpg");
}
main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}


.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;

  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0 px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0 px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);

}
.weather-box .weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .description {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

</style>

