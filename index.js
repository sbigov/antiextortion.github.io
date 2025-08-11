

function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function hidePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

function togglePopup(id) {
  const popup = document.getElementById(id);
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

function addPopupListeners(popupId, closeBtnClass, okBtnClass) {
  const popup = document.getElementById(popupId);
  try {
    const closeBtn = popup.querySelector(`button.${closeBtnClass}`);
    if (!closeBtn) throw new Error("Close button not found");
    closeBtn.addEventListener("click", () => hidePopup(popupId));
  } catch(e) {
    console.error(`Error adding close listener for ${popupId}:`, e);
  }
  try {
    const okBtn = popup.querySelector(`button.${okBtnClass}`);
    if (!okBtn) throw new Error("OK button not found");
    okBtn.addEventListener("click", () => hidePopup(popupId));
  } catch(e) {
    console.error(`Error adding OK listener for ${popupId}:`, e);
  }
}






document.addEventListener("DOMContentLoaded", function () {
  addPopupListeners("PopUpSpeculate", "SpeculateClose", "SpeculateOK");
  addPopupListeners("PopUpTaylor", "TaylorClose", "TaylorOK");
  addPopupListeners("PopUpPai", "PaiClose", "PaiOK");
  addPopupListeners("PopUpHarmless", "HarmlessClose", "HarmlessOK");
  addPopupListeners("PopUpConvict", "ConvictClose", "ConvictOK");
  addPopupListeners("PopUpAboutUs", "AboutUsClose", "AboutUsOK");
});

let date = new Date();

setInterval(function(){
    document.querySelector('.time').innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
  let audio = document.getElementById("audio");
  let range = document.getElementById("range26");
  range.addEventListener("input", function() {
    audio.volume = range.value / 50;
  });
});

if (window.matchMedia("(max-width: 767px)").matches) {
  console.log("This is a mobile device, the code will not run");
} else {
  document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('.start-button');
    let counter = 0;
    let desktop = document.querySelector('#desktop');

    button.addEventListener('click', function() {
      counter++;
      if (counter % 3 === 0) {
        desktop.style.backgroundImage = 'url(./images/deface.jpg)';
      } else if (counter % 2 === 1) {
        desktop.style.backgroundImage = 'url(./images/retard.png)';
      } else {
        desktop.style.backgroundImage = 'url(./images/girl.jpg)';
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {

  $(document).ready(function(){
    $('.window-action-button.main').click(function(){
        $('#enter').hide();
        $('#main').show();
        $('#audio')[0].play();
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById("mobile-notice").innerHTML = "(View on PC for a better experience)";
  }
});

