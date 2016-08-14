/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

 //Ed: Modified for our use

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var APP_STATE_FILE = path.join(__dirname, 'state.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

/*
app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});
*/

app.post('/api/form1', function(req, res) {
  fs.readFile(APP_STATE_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var appState = JSON.parse(data);

    var newForm1 = {
      name: req.body.name,
      age: req.body.age,
    };
    console.log("Req.body: ");
    console.log(req.body);
    console.log("Received: ");
    console.log("name: " + newForm1.name);
    console.log("age: " + newForm1.age);

    appState.form1 = newForm1;
    fs.writeFile(APP_STATE_FILE, JSON.stringify(appState, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(appState);
    });
  });
});

app.post('/api/form2', function(req, res) {
  fs.readFile(APP_STATE_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var appState = JSON.parse(data);

    var newForm2 = {
      occupation: req.body.occupation,
      salary: req.body.salary,
    };
    console.log("Received: ");
    console.log("occupation: " + newForm2.occupation);
    console.log("salary: " + newForm2.salary);

    appState.form2 = newForm2;
    fs.writeFile(APP_STATE_FILE, JSON.stringify(appState, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(appState);
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
