WHERE IS THE ISS?

Build a user interface for displaying the latitude and longitude position of the International Space Station. This assessment is broken into three parts. The first two parts test your knowledge of JS, React, and HTML and get progressively more challenging. The third part asks you higher-level questions about common problems in front-end development.

Complete each part chronologically and ask your interviewer for any clarifying questions. Talk about your thought process as you implement features. You will have a total of 45 minutes to complete this challenge.

PART 1 - SIMPLE POSITION TABLE

Complete a component called <PositionTable/>. This component shows the position of the International Space Station (ISS) for two fixed timestamps.

Requirements

The component must get this information by running an HTTP GET request to a public REST API. The endpoint will return a list of objects.
For the GET request, use the premade request URL below. The query parameters are already set to get the position for two timestamps.
https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902
https://api.wheretheiss.at/v1 - Send a request to v1 of the API
satellites/25544/positions - Get position info about a satellite with ID 25544. This ID corresponds to the ISS.
?timestamps=1436029892,1436029902 - A comma-delimited list of timestamps to get positions for.
After the component successfully fetches this data, it extracts the time, latitude, and longitude data and displays it in a table.
For now, simply, console.error() any error responses from the API call

PART 2 - USER INPUT

Complete a form component called <Form />, allowing users to input a time range for which they would like ISS position data.

Requirements

The component must validate that:
Neither the start and end time ranges are null.
Both the start and end time ranges are positive.
The end time range isn't less than the start time range.
If the above criteria are unmet, the component should render an error message to the user, like the screenshot below.

On submission, the component clears all errors, and the <PositionTable /> displays all the ISS positions in the specified time range. It only shows new position data once the button is pressed.

PART 3 - FOLLOW UP

An error occurs in your API, and you need to display this in the same place you show your errors from part 2. Describe what you would add/change to allow this to happen.
Generally speaking, what other ways are there to manage and share the state in React? When are these strategies employed?
