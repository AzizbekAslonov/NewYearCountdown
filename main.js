
function secure() {
   document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
   });

   document.onkeydown = function (e) {
      if (e.keyCode == 123) {
         return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
         return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
         return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
         return false;
      }
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
         return false;
      }
      if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
         return false;
      }
   }
}





function calculateBmi() {
   const name = document.getElementById("name").value;
   const weightVal = document.getElementById("weight");
   const heightVal = document.getElementById("height");
   const result = document.getElementById("result");
   const img = document.getElementById("img");

   const weight = parseFloat(weightVal.value);
   const height = parseFloat(heightVal.value);

   let bmi = (weight / (height * height)).toFixed(2);

   if (bmi < 18.5) {
      result.innerHTML = `${name}'ning BMI javobi <span class="text-danger font-weight-bold"> ${bmi} </span> ga teng. Siz ozg'insiz!`;
      img.innerHTML = `<img src="https://c8.alamy.com/comp/W3WRDG/illustration-of-an-underweight-man-in-skin-and-bones-W3WRDG.jpg" alt="Photo" class="result_img">`

   } else if (bmi >= 18.5 && bmi < 25) {
      result.innerHTML = `${name}'ning BMI javobi <span class="text-danger font-weight-bold"> ${bmi} </span> ga teng. Sizning vazningiz normal holda.`;
      img.innerHTML = ` <img src="https://thumbs.dreamstime.com/b/characterizing-male-silhouette-normal-weight-stage-body-mass-index-characterizing-male-silhouette-normal-weight-stage-160201788.jpg" alt="" class="result_img"></img>  `

   } else if (bmi > 24 && bmi <= 29.9) {
      result.innerHTML = `${name}'ning BMI javobi <span class="text-danger font-weight-bold"> ${bmi} </span> ga teng. Sizning og'irligingiz normal emas. Sport bilan shug'ullaning!`;
      img.innerHTML = ` <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiPiSdne-wGcIWp32Amnswilyt4Av0g4wCog&usqp=CAU" alt="" class="result_img"> `

   } else if (bmi >= 30) {
      result.innerHTML = `${name}'ning BMI javobi <span class="text-danger font-weight-bold"> ${bmi} </span> ga teng. Siz juda semizsiz. Ko'proq sport bilan shug'ullanishni maslahat beramiz!`;
      img.innerHTML = ` <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYDRONijJyiosIIub8zWixxJTfVzxSMDCYfw&usqp=CAU" alt="" class="result_img"> `
   }
   else {
      result.innerHTML = `So'ralgan malumotlarni to'g'ri kiriting!`;
      img.innerHTML = `<img src="https://cdn2.vectorstock.com/i/1000x1000/59/56/404-error-emoticon-isolated-vector-24935956.jpg" alt="Photo" class="result_img"></img>`
   }
}

// DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! 
// DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! DOOM ! 


// Creating elements

// let div = document.createElement('div');

// Set attribute
// div.setAttribute('title', 'newDiv')

// Add class
// div.className = 'text-danger';

// Add id
// div.id = 'test'

// Create textNode
// textNode = document.createTextNode('Hello world, I am here !');

// Add text to div
// div.appendChild(textNode);

// let cnt = document.querySelector('.second .container'),
//    h1 = document.querySelector('.second .container .list-group')

// cnt.appendChild(div)

// e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! 
// e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! 
// e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! e !!! 

// let box = document.querySelector('.box');
// let button = document.querySelector('.button');
// button.addEventListener('click', BtnClick);
// button.addEventListener('dblclick', testing);
// button.addEventListener('mousedown', testing);
// button.addEventListener('mouseup', testing);

// Faqat mishka kirganda yoki chiqganda 1 marta✌
// box.addEventListener('mouseenter', testing);
// box.addEventListener('mouseleave', testing);
// -------------------------------------------

// Blockni ichidagi elementlarda ham ishlaydi, sensitive
// box.addEventListener('mouseover', testing);
// box.addEventListener('mouseout', testing);
// -----------------------------------------------------


// box.addEventListener('mousemove', testing);

// function testing(e) {
//    e.preventDefault();

//    document.body.style.backgroundColor = `rgb(${e.clientX},${e.clientY},40)`;

// console.log('Working...' + '   ' + e.type);
// }

// function BtnClick(e) {
//    e.preventDefault();
// console.log(e);
// console.log(e.target.className);


// e.target.Classlist => return Array
// console.log(e.target.classList);

// Bosilgan elementning ichidagi masofasini olish
// console.log('X ' + e.offsetX);
// console.log('Y ' + e.offsetY);

// Hodisaning turini return  qiladi :)
// console.log(e.type);

// Bosilgan elementning tashqaridan masofasini olish
// console.log(e.clientX);
// console.log(e.clientY);
// }

// Key events

// let inp = document.querySelector('.inp');
// Qo'yib yuborishni kutmaydi
// inp.addEventListener('keydown', onKey)

// Qo'yib yuborishni kutadi
// inp.addEventListener('keyup', onKey)

// Faqat harflarni bosganda ishlaydi
// inp.addEventListener('keypress', onKey)

// function onKey(e) {
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target.value);
// }
// Input events
// inp.addEventListener('keypress', onKey)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Project part

let item = document.querySelectorAll('.list-group-item');
let proUl = document.querySelector('#proUl');
let proForm = document.querySelector('#proForm');
let filter = document.querySelector('#filter');

proForm.addEventListener('submit', addItem);
filter.addEventListener('keyup', filtering);
let dels = document.querySelectorAll('.delete')

for (let i = 0; i < dels.length; i++) {
   dels[i].addEventListener('click', removeItem)
}

function removeItem(e) {
   if (e.target.classList.contains('delete')) {
      let info = document.querySelector('#info');
      let removed = e.target.parentElement;


      setTimeout(() => {
         info.classList.add('del');
         let delItem = removed.firstChild.textContent;
         info.textContent = `${delItem} is deleted!`
         setTimeout(() => {
            info.classList.remove('del');
         }, 1200);
         proUl.removeChild(removed);
      }, 800)
   }
}

function filtering(e) {
   let text = e.target.value.toLowerCase().trim();
   // console.log(text);

   // Get 'li's to ul
   let items = proUl.querySelectorAll('li');

   // Convert to array
   let arr = Array.from(items);

   arr.forEach(function (item) {
      let itemName = item.firstChild.textContent;

      if (itemName.toLowerCase().indexOf(text) != -1 && text.length > 0) {
         item.classList.remove('no')
         item.classList.add('has', 'bg-primary')
      } else {
         item.classList.remove('has')
         item.classList.add('no')
      }

      // console.log(itemName);
   })
   // console.log(arr);
}

function addItem(e) {
   // Variables
   let proInp, li;
   e.preventDefault();

   // Get input value
   proInp = document.querySelector('#proInp');

   // Create new li element
   li = document.createElement('li');

   // Add class
   li.classList.add('list-group-item');

   // Add text node with input value
   if (proInp.value.length > 0) {
      li.appendChild(document.createTextNode(proInp.value));

      // Create del button element, append textNode and adding classes
      let button = document.createElement('button');
      button.className = 'btn btn-danger btn-sm float-right delete';
      button.appendChild(document.createTextNode('X'))

      // Append button to li
      li.appendChild(button)

      // Append it to list
      proUl.appendChild(li);


      // Add remove function 

      button.addEventListener('click', removeItem);
   }

}

// New Project
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
let time = document.getElementById('time'),
   greeting = document.getElementById('greeting'),
   focus = document.getElementById('focus'),
   nameHere = document.getElementById('nameHere');
// clientName = prompt('Enter Your Name');

// nameHere.textContent = clientName;

function showTime() {
   let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

   // Set AM PM
   const apPm = hour < 18 ? '<i class="fas fa-sun ml-2"></i>' : '<i class="far fa-moon ml-3"></i>';

   // 12 hr format
   // hour = hour % 12 || 12;

   time.innerHTML = `${hour}</span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${apPm}`

   setTimeout(showTime, 1000);
}

function addZero(n) {
   return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBg() {
   let today = new Date(),
      hour = today.getHours(),
      timeBg = document.querySelector('.time-fullscr');

   if (hour < 12) {
      // Morning
      timeBg.classList.add('morning');
      greeting.textContent = 'Good Morning';
      // console.log(`morning`);
   } else if (hour < 18) {
      // Afternoon
      timeBg.classList.add('afternoon');
      greeting.textContent = 'Good Afternoon';
      console.log(`afternoon`);
   } else {
      // Night
      timeBg.classList.add('night');
      greeting.textContent = 'Good Evening';
      console.log(`night`);
   }
}

// !!! // Localstorage proces !!!

nameHere.addEventListener('keypress', setName);
nameHere.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Getting name and focus
function getName() {
   if (localStorage.getItem('name') === null) {
      nameHere.textContent = '[Enter Name]';
   } else {
      nameHere.textContent = localStorage.getItem('name');
   }
}
function getFocus() {
   if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter focus]';
   } else {
      focus.textContent = localStorage.getItem('focus');
   }
}

getName();
getFocus();

// Save in localstorage name and focus 

function setName(e) {
   if (e.type === 'keypress') {

      // Make sure enter is pressed

      if (e.which === 13 || e.keyCode === 13) {
         localStorage.setItem('name', e.target.textContent);
         nameHere.blur();
      }

   } else {
      console.log('blur');
      localStorage.setItem('name', e.target.textContent);
   }
}

function setFocus(e) {
   if (e.type === 'keypress') {

      // Make sure enter is pressed

      if (e.which === 13 || e.keyCode === 13) {
         localStorage.setItem('focus', e.target.textContent);
         focus.blur();
      }

   } else {
      localStorage.setItem('focus', e.target.textContent);
   }
}

// RUN :)
showTime();
setBg();

// Scroll animation

function scrollTo(elem) {
   window.scroll({
      left: 0,
      top: elem.offsetTop,
      behavior: 'smooth'
   });
}

document.querySelector('.arrow_1').addEventListener('click', () => {
   scrollTo(document.querySelector('.second-part'));
})
document.querySelector('.arrow_2').addEventListener('click', () => {
   scrollTo(document.querySelector('.third'));
})
document.querySelector('.arrow_3').addEventListener('click', () => {
   scrollTo(document.querySelector('.footer-part'));
})












