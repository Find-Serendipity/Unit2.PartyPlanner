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
    console.log(gotData);
    // update the partyTime state object with the data from the new json object
    partyTime.parties = gotData.data;
  } catch (error) {
    // catch any errors in the console.log
    console.log(`THERE'S A BAR ERROR FOO`);
  }
}

// optional: add form information to API
// create an async function that
// addsEventListener to the form submit
// which runs a function that
// creates a new variable
// that creates a new object
// that takes in each element of the form
// which contains the information from each input from the form:
// names
// dates
// times
// locations
// descriptions
// try(s) to
// POST input information
// return awaitFetchJson

// REGULAR FUNCTIONS

// required: render from partyTime state to the DOM

// create a renderEvents function
function renderEvents() {
  // that creates a new varible eventsItems
  // that is a .map of the partyTime array
  // that creates an anonymous function that looks through eachObject in the array
  const eventItems = partyTime.parties.map((eachObject) => {
    // create a timePlaceholder against eachObject.date
    const timePlaceholder = eachObject.date;
    console.log(timePlaceholder);
    // create a timeStamp using with timePlaceholder and Date.parse
    const timeStamp = Date.parse(timePlaceholder);
    // creates a new li element
    const li = document.createElement(`li`);
    // and sets the innerText of the new li generated in eachObject to contain
    // the ${eachObject.name} - ${eachObject.date} - times, locations, descriptions, etc
    li.innerHTML = `${eachObject.name} - ${eachObject.date} - ${timeStamp} - ${eachObject.location} - ${eachObject.description}`;
    // return the li element afterward, back to the .map;
    return li;
    // });
  });

  // .replaceChildren of DOM object partyList with a spread of eventsItems
  partyList.replaceChildren(...eventItems);
}

// There is also a form
// that allows the user to enter information
// about a new party that they want to schedule.
// After filling out the form and submitting it,
// the user observes their party added to the list of parties.

// Next to each party in the list
// is a delete button.
// The user clicks the delete button for one of the parties.
// That party is then removed from the list.
