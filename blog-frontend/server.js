const webpack = require('webpack');
const config = require('./webpack.config');

const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath
});

const port = 3000

// server.get("/", (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// });

server.listen(port, (error) => {
	if(error){
		console.log(error);
	}else{
		console.info("Listening on port %s.", port);
	}
});