var $ = function(id) {
    return document.getElementById(id);
    };
  
  function Calculate() {
    var amount = $("amount-received").value - $("amount-due").value 
  
      var cents = amount * 100;
      if (isNaN (cents) || cents < 0 || cents > 99999 ) {
          alert ("Must be a number between 0 and 999.99");
          cents = 0;
      }
      $("dollars-output").innerHTML = Math.floor(cents/100);     cents = cents % 100;
      $("quarters-output").innerHTML = Math.floor(cents/25);     cents = cents % 25;
      $("dimes-output").innerHTML = Math.floor(cents/10);        cents = cents % 10;
      $("nickels-output").innerHTML = Math.floor(cents/5);
      $("pennies-output").innerHTML = Math.ceil(cents % 5);
  }