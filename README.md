# Weather_Express
Weather demo using the openweathermap api
-----------------------------------------

Description
-----------
The Weather demo has been built with the aid of the following libraries
- Knockout.js
- Require.js 
- jQuery
- Bootstrap
- Express (server-side)

The demo creates a simple ui with the user able to click on a particular day to show the forecast. 

The data structure from the openweathermap web service call is amended after it is returned to the client from the 
RESTful api route api/weather/:placename. This is done because the forecast list is flat and re-structuring it allows 
simple data-binding of forecasts by day.

The weather forecast component script is contained in the file public/js/app/weather.js and the server code is contained 
in the file server.js.

The demo has been run successfully in firefox, chrome & edge.

With more time the following could be added:
- Error handling for the client side ajax api call
- Error handling for the server side web service call
- An input box could be added so that the user could enter a location for a forecast
- Mobile responsiveness - the forecast is contained in a table which currently has a horizontal scroll when the browser 
  window is re-sized to mobile device size. A different view could be used for mobile device size.
- Another view could be added so that all forecasts are displayed at once (grouped by day) and a ui buttons added to allow 
  the user to select their preferred viewing method
- a map could be added displaying the location
- clicking on the map could allow the longitude and latitude to be used as the forecast 
  
A machine with a node install is needed to run the demo.

Installation
------------
- Download the demo through the 'Clone or Download>Download ZIP'
- Copy the weather folder within the zip file into the node server as a folder

Running the demo
----------------
- Using the node command window change directory so you are located in the weather demo folder
- Enter the command node server which starts the express web server on port 3001
- Open a browser and enter localhost:3001 to display the demo
- The RESTful API call can be tested for different locations by using the url localhost:3001/api/weather/:placename 
  e.g. localhost:3001/api/weather/glasgow
  
 




