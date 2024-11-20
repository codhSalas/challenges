const items =[
  {
    icone: "../templates/Logo/Jedi.svg",
    titre : "Le retour du Jedi",
    content : "Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l'Alliance rebelle.",
    year :'1983'
  },{
    icone : "../templates/Logo/Empire.svg",
    titre : "L’empire contre-attaque",
    content :"La guerre entre le maléfique Empire galactique et son antagoniste, l’Alliance rebelle, bat son plein.",
    year : "1980"
  },{
    icone: "../templates/Logo/Resistance.svg",
    titre : "Un nouvel espoir",
    content: "C'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l'ordre chronologique de l'histoire.",
    year :"1977"
  }
];
let index = 0;

const befor = document.querySelector('#bf');
const after = document.querySelector('#af');
const allpic = document.querySelector('#allpic');

const setValue = (i , pos) =>{
  const mainimg = document.querySelector('#maindesc img');
  const mainh1 =document.querySelector('#maindesc h1');
  const mainp = document.querySelector('#maindesc p');
  const yearh1 = document.querySelector('#year h1');

  mainimg.style.animation = 'none';
  mainh1.style.animation = 'none';
  mainp.style.animation = 'none';
  
  mainimg.setAttribute(`src`,items[i].icone);
  mainh1.innerText = items[i].titre;
  mainp.innerText = items[i].content;
  mainimg.offsetWidth;
  mainh1.offsetWidth;
  mainp.offsetWidth;
  
  yearh1.innerText = items[i].year;

  mainimg.style.animation = `${pos} 1s`;
  mainh1.style.animation = `${pos} 1.2s`;
  mainp.style.animation = `${pos} 1.4s`;
}

befor.addEventListener('click',() => {
  const dots = document.querySelectorAll('.progresse:not(:last-child)');
  if (index > 0) {
    dots[index].classList.remove('activeA');
    index--;
    allpic.style.transform = `translateX(${(-100 * index)}%)`;
    setValue(index,`mainar`);
    dots[index].classList.add('reverse');
    
  }
});

after.addEventListener('click',() => {

  const dots = document.querySelectorAll('.progresse:not(:last-child)');
  if (index < items.length-1) {
    dots[index].classList.remove('reverse');
    dots[index].classList.add('animateit');
    index++;
    allpic.style.transform = `translateX(${(-100 * (index))}%)`;
    setValue(index,`mainav`);
    dots[index].classList.add('activeA');
  }
});