// STATE

// establish a base connection to the API

const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`;

// create a function to await and fetch the API
// then create a json variable to await the awaitFetch with .json()
// this is being used in multiple functions, which is why it is in the state
const awaitFetchJson = async () => {
  let fetchAPI = await fetch(API_URL);
  let transformerJson = await fetchAPI.json();
  return transformerJson;
};

// create an object with an empty array for JSON data

const partyTime = {
  parties: [],
};

// establish DOM connections

const partyList = document.querySelector(`#parties`);

// ASYNC FUNCTIONS

// required: sync the partyTime state by invoking functions

async function render() {
  await partyTimeConnection();
  renderEvents();
}

// required: render the render function

render();

// required: add API to the empty partyTime state array partyTime to use later

// create an async function //
async function partyTimeConnection() {
  // that try(s) to
  try {
    // create a variable to await the awaitFetchJson
    const gotData = await awaitFetchJson();
    // update the partyTime state object with the data from the new json object
    partyTime.parties = gotData.data;
  } catch (error) {
    // catch any errors in the console.log
    console.log(`THERE'S A BAR ERROR FOO`);
  }
}

// REGULAR FUNCTIONS

// borrow a function that splits time strings into an AM/PM format
// shamelessly plugged in from https://stackoverflow.com/questions/13898423/javascript-convert-24-hour-time-of-day-string-to-12-hour-time-with-am-pm-and-no
// why are dates and times so hard T_T

function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

// required: render from partyTime state to the DOM

// create a renderEvents function
function renderEvents() {
  // that creates a new varible eventsItems
  // that is a .map of the partyTime array
  // that creates an anonymous function that looks through eachObject in the array
  const eventItems = partyTime.parties.map((eachObject) => {
    // create a timePlaceholder against eachObject.date
    const timePlaceholder = eachObject.date;
    // create a dateTimeSplit using a split on the timePlaceholder
    const dateTimeSplit = timePlaceholder.split(`T`);
    // create a timeSplit starting at the dateTimeSplit at index 1
    const timeSplit = dateTimeSplit[1].split(`.`);
    // create a timeStamp using tConvert starting at the timeSplit at index 0
    const timeStamp = tConvert(timeSplit[0]);
    // creates a new li element
    const div = document.createElement(`div`);
    // and sets the innerText of the new li generated in eachObject to contain
    // the ${eachObject.name} - ${eachObject.date} - times, locations, descriptions, etc
    div.innerHTML = `${eachObject.name.toUpperCase()} </br></br> Date: ${
      dateTimeSplit[0]
    }  </br> Time: ${timeStamp} </br></br> Location: ${
      eachObject.location
    } </br></br> Description: </br> ${eachObject.description} </br></br>`;
    // return the li element afterward, back to the .map;
    return div;
    // });
  });

  // .replaceChildren of DOM object partyList with a spread of eventsItems
  partyList.replaceChildren(...eventItems);
}
