'use strict';


let divContener = document.getElementById('divimage')
let leftimagelemant = document.getElementById('leftimg');
let centerimagelemant = document.getElementById('centerimg');
let rightimagelemant = document.getElementById('rightimg');

let maxtime = 25;
let mintime = 0;

let leftimagenumber;
let centerimagenumber;
let rightimagenumber;
let nameForChart = [];
let votsForChart = [];
let showForChart = [];

function Productmall(name, path) {
  this.name = name;
  this.sorce = path;
  this.votes = 0;
  this.show = 0;
  Productmall.all.push(this);
  nameForChart.push(this.name);



}

Productmall.all = [];





function VoteandShowStor() {

  
  for (let i = 0; i < Productmall.all.length; i++) {
    let stringarray = JSON.stringify(Productmall.all);
  console.log(stringarray);
    localStorage.setItem('result', stringarray);
  }
}

function gitthesorage() {

  let storage=localStorage.getItem('result')
console.log(storage);
let parsstorage=JSON.parse(storage)
if (parsstorage!==null){
Productmall.all=parsstorage;}

  

}




console.log(Productmall.all);
new Productmall('bag', 'img/bag.jpg');
new Productmall('banana', 'img/banana.jpg');
new Productmall('bathroom', 'img/bathroom.jpg');
new Productmall('boots', 'img/boots.jpg');
new Productmall('breakfast', 'img/breakfast.jpg');
new Productmall('bubblegum', 'img/bubblegum.jpg');
new Productmall('chair', 'img/chair.jpg');
new Productmall('cthulhu', 'img/cthulhu.jpg');
new Productmall('dog-duck', 'img/dog-duck.jpg');
new Productmall('dragon', 'img/dragon.jpg');
new Productmall('pen', 'img/pen.jpg');
new Productmall('pet-sweep', 'img/pet-sweep.jpg');
new Productmall('scissors', 'img/scissors.jpg');
new Productmall('shark', 'img/shark.jpg');
new Productmall('sweep', 'img/sweep.png');
new Productmall('tauntaun', 'img/tauntaun.jpg');
new Productmall('unicorn', 'img/unicorn.jpg');
new Productmall('water-can', 'img/water-can.jpg');
new Productmall('wine-glass', 'img/wine-glass.jpg');

console.log(Productmall.all);
// console.log(nameForChart);


function randompruduct() {

  return Math.floor(Math.random() * Productmall.all.length);
}

console.log(randompruduct());

















let repetedNumber = [];
function renderPruduct() {
  leftimagenumber = randompruduct()
  centerimagenumber = randompruduct()
  rightimagenumber = randompruduct()



  while (leftimagenumber === centerimagenumber || leftimagenumber === rightimagenumber || centerimagenumber === rightimagenumber || repetedNumber.includes(leftimagenumber) || repetedNumber.includes(centerimagenumber) || repetedNumber.includes(rightimagenumber)) {

    leftimagenumber = randompruduct()
    rightimagenumber = randompruduct()
    centerimagenumber = randompruduct()
  }
  repetedNumber = [leftimagenumber, centerimagenumber, rightimagenumber]
  console.log(repetedNumber);


  // while (repetedNumber===repetedNumber++) {
  //     leftimagenumber = randompruduct()
  //     rightimagenumber = randompruduct()
  //     centerimagenumber = randompruduct()
  // }

  leftimagelemant.src = Productmall.all[leftimagenumber].sorce
  centerimagelemant.src = Productmall.all[centerimagenumber].sorce

  rightimagelemant.src = Productmall.all[rightimagenumber].sorce
  Productmall.all[leftimagenumber].show++
  Productmall.all[centerimagenumber].show++
  Productmall.all[rightimagenumber].show++

}
renderPruduct()

console.log(renderPruduct());


// divContener.addEventListener('click', theClikes);
leftimagelemant.addEventListener('click', theClikes);
centerimagelemant.addEventListener('click', theClikes);
rightimagelemant.addEventListener('click', theClikes);

function theClikes(event) {



  if (mintime < maxtime) {

    if (event.target.id === 'leftimg') {
      Productmall.all[leftimagenumber].votes++
    }
    else if (event.target.id === 'centerimg') {
      Productmall.all[centerimagenumber].votes++
    }
    else if (event.target.id === 'rightimg') {
      Productmall.all[rightimagenumber].votes++
    }
    else {

      alert('pleas press on the picture ')

    }


    renderPruduct();
      }


  else {
    let thebutton = document.getElementById('pressresult')
    thebutton.addEventListener('click', preesing)

    function preesing(event) {


      let listforresult = document.getElementById('listresult')
      for (let i = 0; i < Productmall.all.length; i++) {
        let child = document.createElement('li')
        listforresult.appendChild(child)

        child.textContent = `${Productmall.all[i].name} votes ${Productmall.all[i].votes} and seen ${Productmall.all[i].show} times `

      }
      thebutton.removeEventListener('click', preesing)

    }
    for (let i = 0; i < Productmall.all.length; i++) {
      votsForChart.push(Productmall.all[i].votes)
      showForChart.push(Productmall.all[i].show)

    }
    VoteandShowStor();


    // divContener.removeEventListener('click', theClikes);
    leftimagelemant.removeEventListener('click',theClikes);
    centerimagelemant.removeEventListener('click', theClikes);
    rightimagelemant.removeEventListener('click', theClikes);

    chartshow()

  }

  mintime++;
}


function chartshow() {


  const data = {
    labels: nameForChart,
    datasets: [{
      label: 'votetimes',
      data: votsForChart,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],

      borderWidth: 1

    },
    {
      label: 'showtimes',
      data: showForChart,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],

      borderWidth: 1

    }]

  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}





gitthesorage()