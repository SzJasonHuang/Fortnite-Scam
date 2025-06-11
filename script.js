function showLoading(event) {
    event.preventDefault();
    document.querySelector(".phish-box").style.display = "none";
  
    const loadingDiv = document.getElementById("loading");
    loadingDiv.style.display = "block";
  
    const progressBar = document.getElementById("progress-bar");
    let progress = 0;
  
    const interval = setInterval(() => {
      progress += 2;
      progressBar.style.width = progress + "%";
  
      if (progress >= 100) {
        clearInterval(interval);
        loadingDiv.style.display = "none";
        document.getElementById("warning").style.display = "block";
      }
    }, 50); 
  }
  