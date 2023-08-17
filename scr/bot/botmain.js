const mineflayer = require('mineflayer');
const log = require('electron-log');

const startbutton = document.getElementById('start-button');
const stopbutton = document.getElementById('stop-button');
const applyserver = document.getElementById('apply-server');
const protocol = document.getElementById('protocol');
const accountpath = document.getElementById('account-input');
const username = document.getElementById('bot-username');
const joindelay = document.getElementById('throttling-delay-input');
const botlist = document.getElementById('botlist');
const selectall = document.getElementById('selectedall');
const deselectall = document.getElementById('deselectedall');
const autoselectall = document.getElementById('auto-select-all');
const bconsole = document.getElementById('botconsole');
const useproxy = document.getElementById('use-proxies');
const proxypath = document.getElementById('proxy-list');

let serveraddress = ''; // Initialize serveraddress

applyserver.addEventListener('click', function() {
    serveraddress = document.getElementById('serveraddress').value;
});

const bots = [];
const selectbot = [];

startbutton.addEventListener('click', connectbot);
stopbutton.addEventListener('click', quitselectbot);

function randomtextgen(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }
  
    return randomText;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function connectbot() {
    const busername = username.value;
    const bversion = protocol.value;
    const botcount = parseInt(document.getElementById('max-accounts-input').value, 10);
    const serverip = serveraddress;
    createBots(botcount, serverip, busername, bversion);
    consolelog(`${busername} connect to ${serverip} with ${bversion}`);
}

async function createBots(botcount, serverip, botusername, bversion) {
    const [bhost, bport] = serverip.split(':');
    const crackliner = document.getElementById('crack-type-liner');
    const crackrandom = document.getElementById('crack-type-random');

    for (let i = 1; i <= botcount; i++) {
        if (crackliner.checked) {
            busername = `${botusername}${i}`
        } else if (crackrandom.checked) {
            busername = `${botusername}${randomtextgen(document.getElementById('random-length-input').value)}`
        } else {
            busername = `${botusername}${randomtextgen(5)}`
        }
        console.log(`${busername} connecting to ${bhost}:${bport} with ${bversion}`);
        const bot = mineflayer.createBot({
            host: bhost,
            port: bport,
            username: busername,
            version: bversion,
        });

        bot.on('login', () => {
            bots.push(bot)
            addbot(bot.username)
            document.getElementById('bot-connected').textContent = botcount()


        });

        bot.on('end', () => {
            bots.splice(bots.indexOf(bot), 1)
            removebot(bot.username)
            document.getElementById('bot-connected').textContent = botcount()
        })

        function botcount() {
            return bots.length;
        }

        await sleep(5000)
    }
}

function addbot(name) {
    const botitem = document.createElement("div");
    botitem.className = "bot-item";
    botitem.innerHTML = name;
    botitem.addEventListener('click', toggleselectbot);
    botlist.appendChild(botitem);
    if (autoselectall.checked) {
        selectBot(name, botitem);
    }
}

function removebot(name) {
    const botitems = document.querySelectorAll(".bot-item");
    botitems.forEach(botitem => {
        if (botitem.innerHTML === name) {
            botlist.removeChild(botitem);
        }
    });
}

function toggleselectbot(event) {
    const botitem = event.target;
    const botName = botitem.innerHTML;

    if (botitem.classList.contains("bot-selected")) {
        deselectBot(botName, botitem);
    } else {
        selectBot(botName, botitem);
    }
}

function selectBot(name, item) {
    item.classList.add("bot-selected");
    if (!selectbot.includes(name)) {
        selectbot.push(name);
    }
}

function deselectBot(name, item) {
    item.classList.remove("bot-selected");
    const botIndex = selectbot.indexOf(name);
    if (botIndex !== -1) {
        selectbot.splice(botIndex, 1);
    }
}


selectall.addEventListener('click', function() {
    const botitems = document.querySelectorAll('.bot-item');
    botitems.forEach(bot => {
        selectBot(bot.innerHTML, bot);
    });
});


deselectall.addEventListener('click', function() {
    const botitems = document.querySelectorAll('.bot-item');
    botitems.forEach(bot => {
        deselectBot(bot.innerHTML, bot);
    });
});


function quitselectbot() {
    for (const bot of bots) {
        if (selectbot.includes(bot.username)) {
            bot.quit();
        }
    }
}

function chatcontrol() {
    for (const bot of bots) {
        if (selectbot.includes(bot.username)) {
            bot.chat(document.getElementById('message-input').value)
        }
    }
}

function spamcontrol() {
    for (const bot of bots) {
        if (selectbot.includes(bot.username)) {
            let spaminput = document.getElementById('spam-input').value
            let spamdelay = document.getElementById('spam-delay-input').value
            let useas = document.getElementById('use-anti-spam')
            let astype= document.getElementById('anti-spam-type')
            let aschars = document.getElementById('anti-spam-chars').value
            let aslength = document.getElementById('anti-spam-length-input').value
            let spamtime = document.getElementById('spam-time-input').value
            let left = ">>"
            let right = "<<"

            function asntispamgen(length, characters) {
                let result = '';
                const characterslength = characters.length;
              
                for (let i = 0; i < length; i++) {
                    const randomindex = Math.floor(Math.random() * characterslength);
                    result += characters.charAt(randomindex);
                }
              
                return result;
            }
        
            consolelog(`Start spam`);

            spamtext = setInterval(() => {
                bot.chat(`${spaminput} ${left} ${asntispamgen(aslength, aschars)} ${right}`)
            }, spamdelay);

            setTimeout(() => {
                consolelog('Stop spam');
                clearInterval(spamtext);
            }, spamtime + 1000);
        }
    }
}

const startcommand = document.getElementById('start-command')
const stopcommand = document.getElementById('stop-command')

startcommand.addEventListener('click', function() {
    consolelog(opencontrol)
    switch (opencontrol) {
        case 'message-control':
            chatcontrol()
            break
        
        case 'spam-control':
            consolelog(`spam hello`)
            spamcontrol()
            break

        default:
            consolelog(`dit cu nha may`)
    }
})




function consolelog(log) {
    if (!log) return;
    const creatlog = document.createElement("div");
    creatlog.innerHTML = `<button class="log-button">${log}</button>`;
    bconsole.appendChild(creatlog);
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('log-button')) {
        event.target.classList.toggle('selected');
    }
});

document.getElementById('console-clear').addEventListener('click', function() {
    bconsole.innerHTML = '';
});

document.getElementById('console-clear-select').addEventListener('click', function() {
    const selectlog = bconsole.querySelectorAll('.selected');
    selectlog.forEach(item => item.parentNode.remove());
});