const mineflayer = require('mineflayer')

let serveraddress = document.getElementById('serveraddress')
let protocol = document.getElementById('protocol')
let premium = document.getElementById('accounts-type')
let accountpath = document.getElementById('account-input')
let busername = document.getElementById('bot-username')
let crackliner = document.getElementById('crack-type-liner')
let crackrandom = document.getElementById('crack-type-random')
let random = document.getElementById('random-length-input')
let randomvalue = random.value
let maxaccounts = document.getElementById('max-accounts-input')
let maxaccountvalue = maxaccount.value
let throttlingdelay = document.getElementById('throttling-delay-input')
let throttlingdelayvalue = throttlingdelay.value

let inputElements = document.querySelectorAll('.connect-msg-input')
var messages = [];

    inputElements.forEach(function(inputElement) {
      var message = inputElement.value;
      messages.push(message);
    });
    
    console.log(messages);

let vpn = document.getElementById('vpn')
let reconnect = document.getElementById('reconnect')
let reconnectdelay = document.getElementById('reconnect-delay-input')
let maxretriesonintialjoin = document.getElementById('max-retries-on-intial-join-input')
let maxrejoinondisconnectinput = document.getElementById('max-rejoin-on-disconnect-input')
let usesprint = document.getElementById('use-sprint')
let maxfall = document.getElementById('max-fall-input')
let pluginspermissions = document.getElementById('all-permissions')
let useproxy = document.getElementById('use-proxies')
let maxproxyretries = document.getElementById('max-proxy-retries-input')
let maxsameproxy = document.getElementById('max-same-proxy-input')
let loginthreads = document.getElementById('login-threads-input')
let proxylist = document.getElementById('proxy-list')
let proxytype = document.getElementById('proxy-type')

let startbutton = document.getElementById('start-button')
let stopbutton = document.getElementById('stop-button')

startbutton.addEventListener('click', function() {
    let ip = serveraddress.split(':')
    const bot = mineflayer.createBot({
        username: 'Bot',
        host: ip[0],
        port: ip[1],
        version: '1.18.2',
    })
})