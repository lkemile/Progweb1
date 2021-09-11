
  window.onload = function() {
      var elementh1 = document.querySelector('h1');
      var elementBtnIncreaseFont = document.getElementById('aumenta-f');
      var elementBtnDecreaseFont = document.getElementById('diminui-f');
      var fontSize = 100;
      var increaseDecrease = 10;

      elementBtnIncreaseFont.addEventListener('click', function(event) {
          fontSize = fontSize + increaseDecrease;
          elementh1.style.fontSize = fontSize + '%';
      });

      elementBtnDecreaseFont.addEventListener('click', function(event) {
          fontSize = fontSize - increaseDecrease;
          elementh1.style.fontSize = fontSize + '%';
      });
  }