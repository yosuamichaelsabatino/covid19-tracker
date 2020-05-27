class DataSource {
  static searchCountry(keyword) {
      return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
      .then(response => {
        if (response.status == '200') {
          return response.json();
        } else {
          return Promise.reject(`${keyword} is not listed in country list`);
        }
      })
      .then(responseJson => {
        return Promise.resolve(responseJson);
      })
  }
}

export default DataSource;