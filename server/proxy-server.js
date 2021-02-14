process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('access-control-allow-credentials', 'true');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser.text({ type: "*/*" }));
app.use(express.urlencoded());

app.use('/*/', async (req, res) => {
    const url = req._parsedUrl;
    let uri = "";
    let serach_url = ["POST", "PUT", "PATCH"].indexOf(req.method) == -1 ? url.search : req.body;

    let proxyBaseUrl = /((\?|\&)proxyBaseUrl\=)[^\&]+/.exec(serach_url);
    if (proxyBaseUrl != null) {
        proxyBaseUrl = decodeURIComponent(proxyBaseUrl[0].replace(/(\?|\&)?proxyBaseUrl\=/, ''));
    }

    uri = ["POST", "PUT", "PATCH"].indexOf(req.method) == -1 ? proxyBaseUrl + serach_url : proxyBaseUrl;


    console.log(`> ${req.method} '${uri}'`);

    const headers = {};
    Object.keys(req.headers).forEach(key => {
        if (key !== "host" && key !== "origin" && key !== "referer") {
            const headerValue = req.headers[key];
            headers[key] = headerValue;
        }
    });
    const options = {
        method: req.method,
        uri,
        headers,
    }
    // console.log(options)
    if (["POST", "PUT", "PATCH"].indexOf(req.method) >= 0) {
        options.body = req.body;
    }
    console.log(options);
    request(options, (error, response, body) => {
        let statusCode = 200;
        if (response) {
            if (response.statusCode) {
                console.log(`< STATUS: ${response.statusCode}`);
                statusCode = response.statusCode;
            }
            return res.status(statusCode).send(response);
        } else {
            console.log("Error: ", error);
            res.status(500).send(error);
        }
    });
});

app.listen(4000, () => console.log(`listening on 4000`));