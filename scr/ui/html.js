//navbar.js
document.addEventListener("DOMContentLoaded", function () {
  showSection("botting");
});

function showSection(sectionId) {

  const allSections = document.querySelectorAll(".page-section");
  for (const section of allSections) {
    section.style.display = "none";
  }

  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "block";

  const buttons = document.getElementsByClassName("nav-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }

  const selectedButton = document.querySelector(`button[onclick="showSection('${sectionId}')"]`);
  selectedButton.classList.add("active-button");
}

// openurl.js
const { shell } = require('electron')

function openurl(url) {
    shell.openExternal(url)
}

// connect-msg.js
let count = 3; 

function addinput() {
  var container = document.getElementById('connect-message-container');
  var newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('class', 'connect-msg-input');
  newInput.setAttribute('id', `connect-message-${count}`);
  newInput.setAttribute('placeholder', `Connect message ${count}`);
  container.appendChild(newInput);

  count++;
}

function removeinput() {
  var container = document.getElementById('connect-message-container');
  var inputs = container.getElementsByTagName('input');
  if (inputs.length > 2) {
    container.removeChild(inputs[inputs.length - 1]);
  }

  if(count > 2) {
    count--;
  }
}

// choosefile.js
function updatefilepath() {
  const accountinput = document.getElementById('account-input');
  const accountpath = document.querySelector('.account-path');

  if (accountinput.files.length > 0) {
    accountpath.textContent = accountinput.files[0].path || accountinput.value;
  } else {
    accountpath.textContent = 'No account chosen';
  }
}

//+-btn.js
document.addEventListener("DOMContentLoaded", function() {
  var maxcccountsinput = document.getElementById("max-accounts-input");
  document.querySelector(".increase-max-accounts-input").addEventListener("click", function() {
    maxcccountsinput.stepUp();
  });

  document.querySelector(".decrease-max-accounts-input").addEventListener("click", function() {
    maxcccountsinput.stepDown();
    if (maxcccountsinput.value <= 0) {
      maxcccountsinput.value = '';
    }
  });


  var throttlingdelayinput = document.getElementById("throttling-delay-input");
  document.querySelector(".increase-throttling-delay-input").addEventListener("click", function() {
    throttlingdelayinput.stepUp();
  });

  document.querySelector(".decrease-throttling-delay-input").addEventListener("click", function() {
    throttlingdelayinput.stepDown();
    if (throttlingdelayinput.value <= 0) {
      throttlingdelayinput.value = '';
    }
  });

  var reconnectdelayinput = document.getElementById("reconnect-delay-input");
  document.querySelector(".increase-reconnect-delay-input").addEventListener("click", function() {
    reconnectdelayinput.stepUp('100');
  });

  document.querySelector(".decrease-reconnect-delay-input").addEventListener("click", function() {
    reconnectdelayinput.stepDown('100');
    if (reconnectdelayinput.value <= 0) {
      reconnectdelayinput.value = '';
    }
  });


  var maxretriesonintialjoininput = document.getElementById("max-retries-on-intial-join-input");
  document.querySelector(".increase-max-retries-on-intial-join-input").addEventListener("click", function() {
    maxretriesonintialjoininput.stepUp();
  });

  document.querySelector(".decrease-max-retries-on-intial-join-input").addEventListener("click", function() {
    maxretriesonintialjoininput.stepDown();
    if (maxretriesonintialjoininput.value <= 0) {
      maxretriesonintialjoininput.value = '';
    }
  });


  var maxrejoinondisconnectinput = document.getElementById("max-rejoin-on-disconnect-input");
  document.querySelector(".increase-max-rejoin-on-disconnect-input").addEventListener("click", function() {
    maxrejoinondisconnectinput.stepUp();
  });

  document.querySelector(".decrease-max-rejoin-on-disconnect-input").addEventListener("click", function() {
    maxrejoinondisconnectinput.stepDown();
    if (maxrejoinondisconnectinput.value <= 0) {
      maxrejoinondisconnectinput.value = '';
    }
  });


  var maxfallinput = document.getElementById("max-fall-input");
  document.querySelector(".increase-max-fall-input").addEventListener("click", function() {
    maxfallinput.stepUp();
  });

  document.querySelector(".decrease-max-fall-input").addEventListener("click", function() {
    maxfallinput.stepDown();
    if (maxfallinput.value <= 0) {
      maxfallinput.value = '';
    }
  });


  var maxproxyretriesinput = document.getElementById("max-proxy-retries-input");
  document.querySelector(".increase-max-proxy-retries-input").addEventListener("click", function() {
    maxproxyretriesinput.stepUp();
  });

  document.querySelector(".decrease-max-proxy-retries-input").addEventListener("click", function() {
    maxproxyretriesinput.stepDown();
    if (maxproxyretriesinput.value <= 0) {
      maxproxyretriesinput.value = '';
    }
  });


  var maxsameproxyinput = document.getElementById("max-same-proxy-input");
  document.querySelector(".increase-max-same-proxy-input").addEventListener("click", function() {
    maxsameproxyinput.stepUp();
  });

  document.querySelector(".decrease-max-same-proxy-input").addEventListener("click", function() {
    maxsameproxyinput.stepDown();
    if (maxsameproxyinput.value <= 0) {
      maxsameproxyinput.value = '';
    }
  });


  var loginthreadsinput = document.getElementById("login-threads-input");
  document.querySelector(".increase-login-threads-input").addEventListener("click", function() {
    loginthreadsinput.stepUp();
  });

  document.querySelector(".decrease-login-threads-input").addEventListener("click", function() {
    loginthreadsinput.stepDown();
    if (loginthreadsinput.value <= 0) {
      loginthreadsinput.value = '';
    }
  });


  var commandrepeatinput = document.getElementById("command-repeat-input");
  document.querySelector(".increase-command-repeat-input").addEventListener("click", function() {
    commandrepeatinput.stepUp();
  });

  document.querySelector(".decrease-command-repeat-input").addEventListener("click", function() {
    commandrepeatinput.stepDown();
    if (commandrepeatinput.value <= 0) {
      commandrepeatinput.value = '';
    }
  });


  var commandrepeatdelayinput = document.getElementById("command-repeat-delay-input");
  document.querySelector(".increase-command-repeat-delay-input").addEventListener("click", function() {
    commandrepeatdelayinput.stepUp('1000');
  });

  document.querySelector(".decrease-command-repeat-delay-input").addEventListener("click", function() {
    commandrepeatdelayinput.stepDown('1000');
    if (commandrepeatdelayinput.value <= 0) {
      commandrepeatdelayinput.value = '';
    }
  });


  var dropdelay = document.getElementById("drop-delay-input");
  document.querySelector(".increase-drop-delay-input").addEventListener("click", function() {
    dropdelay.stepUp();
  });

  document.querySelector(".decrease-drop-delay-input").addEventListener("click", function() {
    dropdelay.stepDown();
    if (dropdelay.value <= 0) {
      dropdelay.value = '';
    }
  });


  var spamdelay = document.getElementById("spam-delay-input");
  document.querySelector(".increase-spam-delay-input").addEventListener("click", function() {
    spamdelay.stepUp();
  });

  document.querySelector(".decrease-spam-delay-input").addEventListener("click", function() {
    spamdelay.stepDown();
    if (spamdelay.value <= 0) {
      spamdelay.value = '';
    }
  });


  var antispamlengthinput = document.getElementById("anti-spam-length-input");
  document.querySelector(".increase-anti-spam-length-input").addEventListener("click", function() {
    antispamlengthinput.stepUp();
  });

  document.querySelector(".decrease-anti-spam-length-input").addEventListener("click", function() {
    antispamlengthinput.stepDown();
  });


  var spamtimeinput = document.getElementById("spam-time-input");
  document.querySelector(".increase-spam-time-input").addEventListener("click", function() {
    spamtimeinput.stepUp();
  });

  document.querySelector(".decrease-spam-time-input").addEventListener("click", function() {
    spamtimeinput.stepDown();
  });


  var pathxinput = document.getElementById("path-x-input");
  document.querySelector(".increase-path-x-input").addEventListener("click", function() {
    pathxinput.stepUp();
  });

  document.querySelector(".decrease-path-x-input").addEventListener("click", function() {
    pathxinput.stepDown();
  });


  var pathyinput = document.getElementById("path-y-input");
  document.querySelector(".increase-path-y-input").addEventListener("click", function() {
    pathyinput.stepUp();
  });

  document.querySelector(".decrease-path-y-input").addEventListener("click", function() {
    pathyinput.stepDown();
  });


  var pathzinput = document.getElementById("path-z-input");
  document.querySelector(".increase-path-z-input").addEventListener("click", function() {
    pathzinput.stepUp();
  });

  document.querySelector(".decrease-path-z-input").addEventListener("click", function() {
    pathzinput.stepDown();
  });
});

//random-range.js
const rangeInput = document.getElementById("random-length-input");
const valueDisplay = document.getElementById("value-display");
rangeInput.addEventListener("input", function() {
  valueDisplay.textContent = rangeInput.value;
});

//botcontrolbtn.js
document.addEventListener("DOMContentLoaded", function () {
  showcontrol("spam-control");
});

function showcontrol(controlid) {
  const allcontrolpage = document.querySelectorAll(".control-page-select");
  const controlbutton = document.getElementsByClassName("control-button");

  for (let i = 0; i < controlbutton.length; i++) {
    controlbutton[i].classList.remove("control-button-select");
  }

  const selectcontrolbutton = document.querySelector(`button[onclick="showcontrol('${controlid}')"]`);
  selectcontrolbutton.classList.add("control-button-select");

  allcontrolpage.forEach((section) => {
    section.style.display = "none";
    section.classList.remove("open-control");
  });

  const selectcontrol = document.getElementById(controlid);
  selectcontrol.style.display = "block";
  selectcontrol.classList.add("open-control");

  opencontrol = controlid
}


// proxypath.css
const proxylistpath = document.getElementById("proxy-list-path");
const proxydisplay = document.getElementById("file-path");
proxylistpath.addEventListener("change", function() {
    if (proxylistpath.files.length > 0) {
        proxydisplay.textContent = proxylistpath.files[0].path;
    } else {
      proxydisplay.textContent = `No file choose`
    }
});

//spamcontrol.js
const antispamtype = document.getElementById('anti-spam-type')
const antispamchars = document.getElementById('anti-spam-chars')

antispamtype.addEventListener('change', function() {
  switch (antispamtype.value) {
      case 'as-all':
          antispamchars.readOnly = true
          antispamchars.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
          break
      case 'as-number':
          antispamchars.readOnly = true
          antispamchars.value = "0123456789";
          break
      case 'as-letter':
          antispamchars.readOnly = true
          antispamchars.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          break
      case 'as-uppercase':
          antispamchars.readOnly = true
          antispamchars.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break
      case 'as-lowercase':
          antispamchars.readOnly = true
          antispamchars.value = "abcdefghijklmnopqrstuvwxyz";
          break
      case 'as-custom':
          antispamchars.readOnly = false
          antispamchars.value = ''
          break
      default:
          antispamchars.readOnly = true
          antispamchars.value = "";
  }       
})
