
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();


const DBUSER=process.env.DBUSER;
const DBPASSWORD=process.env.DBPASSWORD;
const DBNAME=process.env.DBNAME;

const URL=`mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.yfzzi.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(
    URL,
    {
        useNewUrlParser: true,
        
        
    }
)
    .then(() => {
        console.log('NODEJS TO MongoDB Connection ESTABLISH.....');
    })
    .catch(err => {
        console.log(err)
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
        process.exit();
    });

    module.exports=mongoose;