
var body = document.querySelector('body')
// var visas = document.getElementById('visas');
 var btn = document.querySelector('.btn')

btn.addEventListener('click', function(event){
    event.preventDefault();
    var aukstis = document.querySelector('.aukstis').value;
    var plotis = document.querySelector('.plotis').value;
    var spalvos = document.getElementById('spalvos').value;
   
    var divas = document.createElement('div');
    var konteineris = document.querySelector('.konteineris');
    console.log(divas);
    divas.style.width = plotis + "px";
    divas.style.height = aukstis + "px";
    divas.style.backgroundColor = spalvos;
    konteineris.appendChild(divas);

// lalalalalalallalal
    // divas.innerHtml;
//    konteineris.innerHTML;
// var mygtukas = document.getElementsByClassName('konteineris');
// mygtukas.addEventListener('click', function(){
//     // jeigu yra klase - ja nuima, jeigu nera klases - uzdeda
//     div.style.opasity = '0.1';
  
// });



});
 
var elementas = document.gete
elementas.classList.add('kubelis');
