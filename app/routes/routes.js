const fbPageWebhook = require("../controllers/facebook/pagesWebhook")

module.exports = {
    "get" : {
        "/webhooks/facebook/page" : fbPageWebhook.handleChallenge,
    },
    "post" : {
        "/webhooks/facebook/page" : fbPageWebhook.handleWebhookEvent,
    }
};