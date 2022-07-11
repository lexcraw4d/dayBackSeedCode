// Displays a timezone selector in DayBack's Settings sidebar
// and adds a timezone dispay to the right of the date 
// in the caledar header

// Loads a specific set of possible timezones for users to
// pick from instead of the huge list of all tiemzones

// Set this as a "Before Calendar Rendered" App Action
// Prevent Default Action: No

// More info on custom app actions here:
// https://docs.dayback.com/article/140-custom-app-actions

// Get config
var config = seedcodeCalendar.get('config');

// Set config property to show timezone list
config.showInTimezone = true;

// Optional: set a currently selected timezone. Leave blank to use
// "auto" which employs the user's current timezone 
config.clientTimezone = 'America/New_York';

// Optional: set list of possible timezones for users to
// pick from instead of the huge list of all tiemzones
config.timezonesAvailable = 'America/Los_Angeles, America/Denver, America/Chicago, America/New_York, Europe/Dublin, Asia/Colombo, Africa/Johannesburg, Asia/Tokyo';

// Enable the next line if calling this after the calendar has
// rendered, as you might when calling from a button action or 
// when clicking on a resource folder
// seedcodeCalendar.init('initCalendar');