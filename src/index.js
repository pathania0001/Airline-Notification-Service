const express = require('express');
const { ServerConfig,Queue } = require('./config');
const apiRoutes = require('./routes');

// const mailsender = require('./config/email-config')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT || 2000}`);
    try {   
        await Queue.connectQueue();
    } catch (error) {
        console.log("error in queue connection")
    }
    console.log("queue is up")
});
