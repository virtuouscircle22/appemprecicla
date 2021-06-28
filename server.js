const express = require('express')
const app = express()
app.use(express.static('./dist/appemprecicla'));
app.get('/*', function(req, res) {
 res.sendFile('index.html', {root: 'dist/appemprecicla/'}
 );
});
const port = 4200;
app.listen(process.env.PORT || 4200), () => {
 console.log(`Example app listening at http://localhost:${port}`)
}
