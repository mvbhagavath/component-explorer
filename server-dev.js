const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const proxy = require('express-http-proxy');

const APP_PORT = 9000;

const app = express();
const compiler = webpack(config);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use('/', express.static(__dirname));
app.use(express.static('src/static'));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//proxy for images, on local
app.use('/content/*', proxy('http://nginx/content/', {
	preserveHostHdr: true,
	forwardPath: function (req, res) {
		return req.originalUrl;
	}
}));

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.use('*', function (request, response) {
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(APP_PORT, 'localhost', (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`App is now running on http://localhost:${APP_PORT}`);
});