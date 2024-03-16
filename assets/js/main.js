document.addEventListener("DOMContentLoaded", function (event) {
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "in",
  });

  document.getElementById("info").addEventListener("click", openInfo);
  document.getElementById("overlay").addEventListener("click", closeInfo);

});

function openInfo() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("info-section").style.display = "flex";
}

function closeInfo() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("info-section").style.display = "none";
}

function openchat() {
  const countrycode = document.querySelector(".iti__selected-dial-code").innerText;
  const phonenumber = document.getElementById("phone").value;
  window.open(`https://wa.me/${refactor(countrycode)}${phonenumber}`, '_blank').focus();
}

function numberHandler(e) {

  if(e.value.length < 10) {
    document.getElementById("chat-btn").classList.add("disabled");
  }

  if(e.value.length == 10) {
    document.getElementById("chat-btn").classList.remove("disabled");
  }

  if(e.value.length > 10) {
    e.value = e.value.slice(0,10);
  }
  // validate value
  e.value = e.value.replace(/[^0-9]/g, '');


}

function refactor(code) {
  return code.replace(/[^0-9]/g, '');
}