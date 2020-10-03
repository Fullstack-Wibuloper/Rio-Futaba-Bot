const fetch = require('node-fetch')
module.exports={
    name: "docs",
    description: "Get  docs from documentation discord.js",
    usage: "docs",
    enabled: true,
    guildOnly: true,
    aliases: ["doc"],
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES","EMBED_LINKS"],
    nsfw: false,
    cooldown: 5000,
    ownerOnly: false,

   async execute (client, message, args){
       const searchQuery = args.join(" ");
       const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(searchQuery)}`;

       fetch(url)
       .then((res)=> res.json())
       .then((embed)=>{
           if(embed && !embed.error){
               message.channel.send({embed})
           }else { 
               message.reply(`
               I don't know about you but ${searchQuery} isn't a valid doc.
               `)
           };
       })
       .catch((e)=>{
           message.reply('Woops, there\'s been an error. Check console for details.');
       });
    
    },
};
