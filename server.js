var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
var http = require('http');
var app = express();

dotenv.load();

function webServiceGetJSON(webServiceOptions, success) {

    http.request(
        webServiceOptions,
        function (res) {
            var responseString = '';
            res.setEncoding('utf8');
            res.on(
                'data',
                function (data) {
                    responseString += data;
                }
            );
            res.on(
                'end',
                function() {
                    var responseObject = JSON.parse(responseString);
                    success.json(responseObject);
                }
            );
        }
    ).end();
}

app.get(
    '/api/weather/:placename',
    function (req, res) {

        var placename=req.params.placename;
        var appid='46763f25e56a171ca2e315f4ad66cddd';

        var weatherServiceOptions = {
            host: 'api.openweathermap.org',
            path: '/data/2.5/forecast?q='+placename+',uk&units=metric&appid='+appid,
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        };

        webServiceGetJSON(weatherServiceOptions, res);
    }
);

app.use(
	'/',
	express.static(__dirname + '/public')
);

app.use(
	function(req, res, next) {
		res.status(404).send('Sorry cant find that!');
	}
);

var port = process.env.PORT;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

module.exports = app;
