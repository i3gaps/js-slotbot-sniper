/* * * * * * * * * * * * * * * * * 
*                                *
*        Slotbot Sniper          *
*        Author: i3gaps          *
*       Discord: oxy#2000        *
*                                *
* * * * * * * * * * * * * * * * */

// Modules
const title = require('node-bash-title')
const { Client } = require('discord.js-selfbot');
const chalk = require('chalk')
// Title
title('[ANGEL] Slotbot Sniper');

// Instance, Config & Colors
const client = new Client()
var config = require("./config.json")
const pink = chalk.hex('#dea3eb');


/** Banner */
const ban =(`
${chalk.hex('#FFFFFF')("                               ┌─┐┌┐┌┌─┐┌─┐┬  ")}
${chalk.hex('#8D8C8C')("                               ├─┤││││ ┬├┤ │  ")}
${chalk.hex('#DABEF3')("                               ┴ ┴┘└┘└─┘└─┘┴─┘")}
`)


/** Sends banner */
client.on("ready", async () =>{
    console.clear()
    console.log(ban)
    console.log((`${pink(`Successfully started sniping.`)}`))
})

/** Actual Slotbot Part */
client.on("message", async message => { 
    if(message.author.id == '346353957029019648') {
        if(message.content == "Someone just dropped their wallet in this channel! Hurry and pick it up with `~grab` before someone else gets it!") {
            message.channel.send('~grab')
            console.log((`${pink(`Sniped a wallet in {message.guild.name}`)}`))
        }

    
    }
})

client.login(config.token);
