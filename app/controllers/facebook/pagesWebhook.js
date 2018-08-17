const FacebookChallenge = require("../../config").facebook.challenge;

let handleChallenge = (req,res, next) =>{
    
    var challenge = decodeURIComponent(req.query['hub.challenge']);
    var verifyToken = decodeURIComponent(req.query['hub.verify_token']);

    if(verifyToken != FacebookChallenge){
        res.status(401).send("");
    } else {
        res.send(challenge);
    }
};

let handleWebhookEvent = (req,res, next) => {
    res.send();
    console.log(JSON.stringify(req.body));
    /* if(req.body.entry && req.body.entry.length){
        req.body.entry.forEach(entry=>{
            botHandler.handleEntry(entry, ACCESS_TOKEN);
        });
    } */
};

module.exports = {
    handleChallenge : handleChallenge,
    handleWebhookEvent : handleWebhookEvent 
}