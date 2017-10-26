  
document.getElementById("output").style.visibility = 'hidden';

  document.getElementById("lbsInput").addEventListener('input', function(e){
  document.getElementById("output").style.visibility = 'visible';
  let pounds = e.target.value;
  document.getElementById("gramsOutput").innerHTML=(pounds/0.002345).toFixed(2);
  document.getElementById("kgOutput").innerHTML=(pounds/2.2046).toFixed(2);
  document.getElementById("ozOutput").innerHTML=(pounds*16).toFixed(2);
  
})

