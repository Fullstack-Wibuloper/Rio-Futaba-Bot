
const { prefix } = require("../config.json");

const chalk = require("chalk");

module.exports = async (client) => {
    try {
        client.setPresence({
            activity: 
             name: 'JavaScript',
             type: 'PLAYING',
            },
             status: 'idle'
       })                    
    }, catch (e) {
        console.log(e);
    }
};
