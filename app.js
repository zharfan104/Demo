const express = require('express');
const app = express()
var port = process.env.PORT || 3000;
app.get('/',(requestAnimationFrame, res)=> res.send('Hello world'));
app.listen(port, () => console.log('server running on port'+ port));