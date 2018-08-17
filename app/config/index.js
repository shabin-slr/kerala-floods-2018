let config = {}
//console.log(process.env.NODE_ENV);
if( ["test", "production"].indexOf( process.env.NODE_ENV ) != -1 ){
    
    config = {
        "db" : process.env.db,
        "app" : {
        },
        "facebook" : {
            "challenge" : process.env.facebook_challenge,
            "access_token" : process.env.facebook_access_token,
            "app_id" : process.env.facebook_app_id,
            "app_secret" : process.env.facebook_app_secret
        },
        "user" : {
            
        },
        "smtp" : {
            "host" : process.env.smtp_host,
            "port" : process.env.smtp_port,
            "secure" : process.env.smtp_secure === "true",
            "user" : process.env.smtp_user,
            "pass" : process.env.smtp_password,
            "reply_emails"  : process.env.smtp_reply_emails
        }
    }

} else {
    config = require('./development_dev.json');
}

// test drive form en/ar, car service form, customer service form

module.exports = config;