const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { id, fullName, address, status } = req.body;
    let fee = 0;
    
    switch(status) {
        case 'student':
            fee = 10;
            break;
        case 'staff':
            fee = 50;
            break;
        case 'volunteer':
            fee = 0;
            break;
        default:
            fee = 0;
    }
    
    res.json({
        id,
        fullName,
        address,
        status,
        fee
    });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
