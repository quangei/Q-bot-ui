//navbar.js
document.addEventListener("DOMContentLoaded", function () {
    showSection("general");
  });
  
  
  function showSection(sectionId, cssFile) {
  
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
let count = 2; 

function addinput() {
  var container = document.getElementById('connect-message-container');
  var newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('class', 'inputtext');
  newInput.setAttribute('id', `inputtext_${count}`);
  newInput.setAttribute('placeholder', `inputtext_${count}`);
  container.appendChild(newInput);

  count++;
}

function removeinput() {
  var container = document.getElementById('connect-message-container');
  var inputs = container.getElementsByTagName('input');
  if (inputs.length > 1) {
    container.removeChild(inputs[inputs.length - 1]);
  }

  if(count > 1) {
    count--;
  }
}

// choosefile.js
function choosefile() {
    const fileInput = document.getElementById('account-input');
    fileInput.click();
  }

function updatefilepath() {
  const fileInput = document.getElementById('account-input');
  const filePath = document.querySelector('.account-path');

  if (fileInput.files.length > 0) {
    filePath.textContent = fileInput.files[0].path || fileInput.value;
  } else {
    filePath.textContent = 'No account chosen';
  }
}

// startbtn.js
var button = document.getElementById("start-button");
var isRunning = false;
function toggleButton() {
  if (isRunning) {
    button.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Continue
    `;
    isRunning = false;
  } else {
    button.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Pause
    `;
    isRunning = true;
  }
}
function resetButton() {
  button.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Start
  `;
  isRunning = false;
}

//+-btn.js
document.addEventListener("DOMContentLoaded", function() {
  var maxAccountsInput = document.getElementById("max-accounts-input");
  var throttlingDelayInput = document.getElementById("throttling-delay-input");

  document.querySelector(".increase-max-accounts").addEventListener("click", function() {
    maxAccountsInput.stepUp();
  });

  document.querySelector(".decrease-max-accounts").addEventListener("click", function() {
    maxAccountsInput.stepDown();
    if (maxAccountsInput.value <= 0) {
      maxAccountsInput.value = '';
    }
  });

  document.querySelector(".increase-throttling-delay").addEventListener("click", function() {
    throttlingDelayInput.stepUp();
  });

  document.querySelector(".decrease-throttling-delay").addEventListener("click", function() {
    throttlingDelayInput.stepDown();
    if (throttlingDelayInput.value <= 0) {
      throttlingDelayInput.value = '';
    }
  });
});