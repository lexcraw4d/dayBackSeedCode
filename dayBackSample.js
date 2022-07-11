// Displays a timezone selector in DayBack's Settings sidebar
// and changes timezone when you select a resource sub folder
// with the name of the sub folders
// Action Type: Custom App Action - After Filter Selection
// Prevent Default Action: No
// More info on custom app actions here:
// https://docs.dayback.com/article/140-custom-app-actions


//Personalized DayBack Calendar based on filtering through family/co-workers and their given timezones
function showModal() {
var item = params.data.item
var name = item.name
  //Message displayed in modal
  const title = "Time Zone Confirmation";
  //Template literal added for customization in presenting the selected filters name
  var message = `Would you like to change to ${name}'s timezone?`
  const cancelButtonText = "No";
  const confirmButtonText = "Yes";
  //Modal display method and callbacks 
  //if user selects no then null is used as the cancelFunction
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
  //Custimization based on sub-folder/ sub-filter's name
  //Optional to set to your own needs
  var personalTimezones = {
    "The Gilliam": "America/New_York",
    "Lesley": "America/New_York",
    "Mom/Dad": "America/Chicago",
    "Chad/Beth": "America/Chicago",
    "Lex/Sam": "America/New_York",
    "John": "America/Denver",
    "KC": "America/Los_Angeles",
  };

  var item = params.data.item;
  var name = item.name;
  var status = item.status.selected;
  //here get calandar based on selected person's timezone
  if (status) {
    var config = seedcodeCalendar.get("config");
    var timeZone = personalTimezones[name];
    config.clientTimezone = timeZone;
    seedcodeCalendar.init("initCalendar");
  }
}

//conditional based on if the filtered item is truly selected then show modal
// if not then do nothing
let initialItem = params.data.item
let isSelected = initialItem.status.selected
if (isSelected === true){
    showModal();
}