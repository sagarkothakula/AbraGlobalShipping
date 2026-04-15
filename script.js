// Show popup automatically after page load
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("abraPopupOverlay").style.display = "flex";
  }, 1500); // 1.5 seconds delay (can change)
});

// Close popup
document.getElementById("abraClosePopup").onclick = function () {
  document.getElementById("abraPopupOverlay").style.display = "none";
};

// Form submit
document.getElementById("abraForm").addEventListener("submit", function(e){
  e.preventDefault();

  alert("Thank you! Your details have been submitted.");

  document.getElementById("abraPopupOverlay").style.display = "none";
});