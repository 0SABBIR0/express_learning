const express = require('express');

app = express();

app.get("/",(req,res)=>{
    res.send('Hello Express jS');
})


app.listen(8000,(error)=>{
    if(error){
        console.log('Server listen Failed');
    }
    else{
        console.log('Server run did well');
    }
});