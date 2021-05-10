const express = require('express');

const app = express();

app.get('/hello', (_req, res) => {
    return res.send({ message: 'hello world kubernetes' });
});

app.listen(3000);
console.log('listen 3000');