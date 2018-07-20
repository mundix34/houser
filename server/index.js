const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const ct = require('./controller');
require('dotenv').config();

// const session = require('express-session');




// const checkSess = require('./middlewares/checkForSession');//middleware









app.use(bodyParser.json());

app.get('/api/properties', ct.getAll);
app.post('/api/property', ct.create);
app.delete('/api/property/:id', ct.delete);






















const {PORT, CONNECTION} = process.env;

massive(CONNECTION).then(dbSet => {    
    
    app.set('db', dbSet)
}).catch(err => console.log(err)
)



app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
    
});
