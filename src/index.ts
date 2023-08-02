
import {connect} from 'mongoose';
import config from './config/config'
import app from './server'
import './db/connect'
const PORT = config.app.PORT;



// connect().then( async function onServerStart(){
//     console.log("Connected to database");
    
// })
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})