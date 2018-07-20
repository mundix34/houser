const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const ct = require('./controller');
// const session = require('express-session');


require('dotenv').config();
const {PORT, CONNECTION} = process.env;

// const checkSess = require('./middlewares/checkForSession');//middleware









app.use(bodyParser.json());
app.get('/api/properties', ct.getAll)























// massive(process.env.CONNECTION.then(dbSet => {    
    
//     app.set('db', dbSet)
// }).catch(err => console.log(err)
// )
// )


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
    
});
