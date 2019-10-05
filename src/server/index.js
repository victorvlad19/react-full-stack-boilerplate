const express = require('express');
const os = require('os');

const app = express();
app.use(express.static('dist'));


app.get('/api/getUsername', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    res.send({ username: os.userInfo().username });
});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
