// Displays a timezone selector in DayBack's Settings sidebar
// and changes timezone based on tags associated with a given resource

// Action Type: Custom App Action - After Filter Selection
// Prevent Default Action: No
// More info on custom app actions here:
// https://docs.dayback.com/article/140-custom-app-actions

//here we declare initial variables

var initialItem = params.data.item;
var isSelected = initialItem.status.selected;
var data = params.data.item.tags;
const title = "* Time Zone Confirmation *";
const cancelButtonText = "No";
const confirmButtonText = "Yes";

//timezones currently used (you can customize these to meet your personal/business/teams needs)
//future enhancements if multiple timezones 
var personalTimezones = {
  eastern: "America/New_York",
  est:"America/New_York",
  central: "America/Chicago",
  cst: "America/Chicago",
  mountain: "America/Denver",
  mdt: "America/Denver",
 'los angeles': "America/Los_Angeles",
  la: "America/Los_Angeles",
  pdt: "America/Los_Angeles",
 'west coast' : "America/Los_Angeles",
  pacific: "Pacific/Honolulu",
  pst:"Pacific/Honolulu"
};
var taggedArr = [];
if (data) {
  for (let i = 0; i < data.length; i++) {
    let tagName = data[i].name;
    //convert to lowercase and reassign tagName 
    tagName = tagName.toLowerCase()
    //add tags to tag Array
    taggedArr.push(tagName)
    //future enhancements could be to add a switch case statement if eastern || est : Eastern
    //as well as if multiple timezones selected pushing to diff arrays and prompting based on that
  }
  if (isSelected === true) {
   let tagArrName = taggedArr[0]
    var timeZone = personalTimezones[tagArrName];
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
    null,
    confirmButtonText,
    confirmFunction
  );
}
function confirmFunction() {
    var config = seedcodeCalendar.get("config");
    config.clientTimezone = timeZone;
    seedcodeCalendar.init("initCalendar");
  }
