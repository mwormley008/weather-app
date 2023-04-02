
API_KEY = '019746b6638b4a60bb2222637230204'

// Grab the form



async function getCityInfo(cityName){
    try{
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`);
        const data = await response.json();
        return data;
    } catch(err){
        console.error(err);
    };
};

function buildToDo(weatherText, temp, feels, condition) {
    let card = document.createElement('div');
    card.className = 'card h-100';
  
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    let cardTitle = document.createElement('h5');
    cardTitle.innerHTML = weatherText + temp + feels + condition;
    cardTitle.className = 'card-title';
  
    cardBody.append(cardTitle);
    card.append(cardBody);
  
    let col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3 my-3';
    col.append(card);
  
    let weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.append(col);
  
    return card;
  }
  
  let form = document.getElementById('cityForm');
  form.addEventListener('submit', handleFormSubmit);
  
  async function handleFormSubmit(event){
    event.preventDefault();
    let cityName = event.target.cityName.value;
    console.log(cityName);
  
    let cityInfo = await getCityInfo(cityName);
    // console.log(cityInfo);
    temp = cityInfo.current.temp_f
    feels = cityInfo.current.feelslike_f
    condition = cityInfo.current.condition.text
    // Execute the buildToDo function with cityName as argument
    buildToDo(cityName, temp, feels, condition);
  
    event.target.cityName.value = '';
  }