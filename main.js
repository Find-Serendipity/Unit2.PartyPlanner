// state

// establish a base connection to the API

const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`;

// create a function to await and fetch the API
// then create a json variable to await the awaitFetch with .json()
// this is being used in multiple functions
const awaitFetchJson = async () => {
  let fetchAPI = await fetch(API_URL);
  let transformerJson = await fetchAPI.json();
  return transformerJson;
};

// create an empty array for JSON data

const partyTime = {
  parties: [],
};

// establish DOM connections

// async functions

// required: add API to the empty partyTime state array partyTime to use later
// create an async function that
// try(s) to
// return awaitFetchJson
// update the partyTime state object with the data from the new json object
// catch any errors in the console.log

// * Sync partyTime state with the API and rerender
// */
// async function renderEvents() {
//  await getArtists();
//  renderArtists();
// }

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

// perform regular functions

// required: invoke renderEvents function

// renderEvents();

// required: render partyTime state to DOM
// create a renderEvents function
// that creates a new varible eventsItems
// that is a .map of the partyTime array
// which creates an anonymous function
// that looks through eachObject in the array
// and creates a new li element
// and sets the innerText of eachObject
// to contain the ${eachObject.key1} - ${eachObject.key2} - etc
// names
// dates
// times
// locations
// descriptions
// return the li element afterward, back to the .map;
// });
// .replaceChildren of partyTime with a spread of eventsItems

// There is also a form
// that allows the user to enter information
// about a new party that they want to schedule.
// After filling out the form and submitting it,
// the user observes their party added to the list of parties.

// Next to each party in the list
// is a delete button.
// The user clicks the delete button for one of the parties.
// That party is then removed from the list.
