function showWarning(event) {
    event.preventDefault();
    document.querySelector(".phish-box").style.display = "none";
    document.getElementById("warning").style.display = "block";
  }
  