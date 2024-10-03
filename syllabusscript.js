document.getElementById('btech').onclick = function() {
  document.getElementById('btech-popup').style.display = 'block';
}

document.getElementById('bsc').onclick = function() {
  document.getElementById('bsc-popup').style.display = 'block';
}

document.querySelectorAll('.close').forEach(function(closeBtn) {
  closeBtn.onclick = function() {
      this.parentElement.parentElement.style.display = 'none';
  }
});

document.querySelectorAll('.stream-btn').forEach(function(btn) {
  btn.onclick = function() {
      document.querySelector('.popup').style.display = 'none';
      document.getElementById('semester-popup').style.display = 'block';
  }
});

document.querySelectorAll('.sem-btn').forEach(function(btn) {
  btn.onclick = function() {
      document.getElementById('semester-popup').style.display = 'none';
      document.getElementById('section-popup').style.display = 'block';
  }
});

document.querySelectorAll('.sec-btn').forEach(function(btn) {
  btn.onclick = function() {
      document.getElementById('section-popup').style.display = 'none';
      document.getElementById('download-popup').style.display = 'block';
  }
});

document.querySelectorAll('.stream-btn[data-stream="Nursing"]').forEach(function(btn) {
  btn.onclick = function() {
      document.getElementById('bsc-popup').style.display = 'none';
      document.getElementById('semester-popup').style.display = 'block';
  }
});
