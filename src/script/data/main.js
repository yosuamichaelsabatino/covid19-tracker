const main = () => {
  const apiUrl = "https://covid19.mathdro.id/api";

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}`);
      const datas = await response.json();

      if(datas) {
        renderData(datas);
      } else {
        showResponseMessage(datas.message);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  }
  fetchData();

  const renderData = (datas) => {
    const dataCovid = document.querySelector("#dataCovid");

    dataCovid.innerHTML += `
      <div class="container">
        <h1 class="title">Corona Virus Global Live Data</h1>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12" style="margin-top: 12px;">
            <div class="card yellow-shadow">
              <div class="card-body">
                <h5>Confirmed</h5>
                <p class="value">${parseFloat(datas.confirmed.value).toLocaleString('en')}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12" style="margin-top: 12px;">
            <div class="card green-shadow">
              <div class="card-body">
                <h5>Recovered</h5>
                <p class="value">${parseFloat(datas.recovered.value).toLocaleString('en')}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12" style="margin-top: 12px;">
            <div class="card red-shadow">
              <div class="card-body">
                <h5>Deaths</h5>
                <p class="value">${parseFloat(datas.deaths.value).toLocaleString('en')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };
}

export default main;