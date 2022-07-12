// Displays a timezone selector in DayBack's Settings sidebar
// and changes timezone based on tags associated with a given resource

// Action Type: Custom App Action - After Filter Selection
// Prevent Default Action: No
// More info on custom app actions here:
// https://docs.dayback.com/article/140-custom-app-actions

//here we declare initial variables
let config = seedcodeCalendar.get("config");
let initialItem = params.data.item;
let isSelected = initialItem.status.selected;
let data = params.data.item.tags;
const title = "* Time Zone Confirmation *";
const cancelButtonText = "No";
const confirmButtonText = "Yes";

//timezones currently used (you can customize these to meet your personal/business/teams needs)

let personalTimezones = {
  eastern: "America/New_York",
  est:"America/New_York",
  central: "America/Chicago",
  central: "America/Chicago",
  mountain: "America/Denver",
  mdt: "America/Denver",
 'los angeles': "America/Los_Angeles",
  la: "America/Los_Angeles",
  pdt: "America/Los_Angeles",
 'west coast' : "America/Los_Angeles",
  pacific: "Pacific/Honolulu",
  pst:"Pacific/Honolulu"
};

if (data) {
  for (let i = 0; i < data.length; i++) {
    let tagName = data[i].name;
    //convert to lowercase and reassign tagName 
    tagName = tagName.toLowerCase()
    //future enhancements could be to add switch case e.g.
    getTimeZone(tagName);
  }
}


function getTimeZone(tagName) {
    //here we pass in tag name to the modal for template literal usage and also to our confirm function based on user response to modal
    if (isSelected === true) {
      let timeZone = personalTimezones[tagName];
      confirmFunction(timeZone)
      showModal(timeZone);
    }
}

//Personalized DayBack Calendar based on filtering by tag names 
function showModal(timeZone) {
  let message = `Would you like to change to ${timeZone} timezone?`;
  utilities.showModal(
    title,
    message,
    cancelButtonText,
    confirmFunction,
    confirmButtonText,
    null
  );
}
function confirmFunction(timeZone) {
    config.clientTimezone = timeZone
     seedcodeCalendar.init("initCalendar");
  }
