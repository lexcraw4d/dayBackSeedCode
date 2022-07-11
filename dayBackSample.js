// Displays a timezone selector in DayBack's Settings sidebar
// and changes timezone when you select a resource sub folder
// with the name of the sub folders
// Action Type: Custom App Action - After Filter Selection
// Prevent Default Action: Yes

// More info on custom app actions here:
// https://docs.dayback.com/article/140-custom-app-actions

function showModal() {
var item = params.data.item
// var folderName = item.folderName;
var name = item.name
// var status = item.status.selected;
var resources = seedcodeCalendar.get('resources');
  //Message displayed in modal
  const title = "Time Zone Confirmation";
  var message = `Would you like to change to ${name}'s timezone?`
  const cancelButtonText = "No";
  const confirmButtonText = "Yes";


  //Modal display
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
  // console.log('the item is', item)
  var name = item.name;
  // console.log('name is:', name)
  var status = item.status.selected;
  // var resources = seedcodeCalendar.get("resources");
  if (status) {
    var config = seedcodeCalendar.get("config");
    var timeZone = personalTimezones[name];
    config.clientTimezone = timeZone;
    seedcodeCalendar.init("initCalendar");
  }
}


let initialItem = params.data.item
let isSelected = initialItem.status.selected
if (isSelected === true){
    showModal();
}