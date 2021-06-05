//there are maybe 2 differences here from Dixant's file
//1st is that this file links to member.js file with the code "./member" and not to "seller" or "customer" so many of our codes will be changed from customer/seller to member syntax
//2nd is that I just changed the port to 4000, not really important... just didnt want to mix up my code to know which was running and which was not..dunno how to explain
const member = require("./member");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express();
app.use(cors());
app.use(bodyparser.json());


app.use(member.router);

app.listen(4000);
