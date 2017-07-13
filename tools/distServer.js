import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

let exec = require('child_process').exec;
let execFile = require('child_process').execFile;

/*eslint-disable no-console*/
const port = 3000;
const app = express();
app.use(compression());
app.use(express.static('dist'));

app.post('/api/unlockGate',function(req, res){
	exec(__dirname+"/i.exe");
	console.log("executed");
	res.end();
});
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});



app.listen(port, function(err){
  if(err){
    console.log(err);

  }else{
    open(`http://localhost:${port}`);
  }
});
