import '../components/search-bar.js';
import DataSource from '../data/data-source.js';

const moment = require("moment");

const country = () => {
  const searchElement = document.querySelector("search-bar");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCountry(searchElement.value);
      renderResult(result);
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderResult = (result) => {
    const flagUrl = `https://www.countryflags.io/${searchElement.value}/shiny/64.png`;
    const countryElement =  document.querySelector("#country-result");
    countryElement.innerHTML += `
    <div class="flag">
        <img src="${flagUrl}" alt="country-flag">
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4">
        <h5>Confirmed</h5>
        <p>${parseFloat(result.confirmed.value).toLocaleString('en')}</p>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <h5>Recovered</h5>
        <p>${parseFloat(result.recovered.value).toLocaleString('en')}</p>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <h5>Deaths</h5>
        <p>${parseFloat(result.deaths.value).toLocaleString('en')}</p>
      </div>
      <div class="info-text">
        <p>Last update: ${moment(new Date(result.lastUpdate)).format("MMM Do YYYY")}</p>
      </div>
    </div>
    `
  }

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
}

export default country;