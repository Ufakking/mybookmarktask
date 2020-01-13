// js for tabs
let linkOne = document.querySelector('#linkOne');
let linkTwo = document.querySelector('#linkTwo');
let linkThree = document.querySelector('#linkThree');

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');

linkOne.addEventListener('click',  function(){
  if(one.classList.contains('hide')){
    one.classList.remove('hide');
    one.classList.add('show');
  }

  if(two.classList.contains('show')){
    two.classList.remove('show');
    two.classList.add('hide');
  }

  if(three.classList.contains('show')){
    three.classList.remove('show');
    three.classList.add('hide');
  }
});

linkTwo.addEventListener('click',function(){
  if(one.classList.contains('show')){
    one.classList.remove('show');
    one.classList.add('hide');
  }

  if(two.classList.contains('hide')){
    two.classList.remove('hide');
    two.classList.add('show');
  }

  if(three.classList.contains('show')){
    three.classList.remove('show');
    three.classList.add('hide');
  }
});

linkThree.addEventListener('click',function(){
  if(one.classList.contains('show')){
    one.classList.remove('show');
    one.classList.add('hide');
  }

  if(two.classList.contains('show')){
    two.classList.remove('show');
    two.classList.add('hide');
  }

  if(three.classList.contains('hide')){
    three.classList.remove('hide');
    three.classList.add('show');
  }
});

(function() {
  const accordion = document.getElementsByClassName("accordion");
  let current = -1;

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
      if (i !== current && current !== -1) {
        accordion[current].classList.remove('active');
        accordion[current].nextElementSibling.classList.remove('panel-open');
      }
        this.nextElementSibling.classList.toggle('panel-open');
        current = this.classList.toggle('active') ? i : -1;
    });
  };
})();

let email = document.querySelector('input');
let submit = document.querySelector('.submit');
submit.addEventListener('click',function(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        alert('congrats your email has been sent!')
    }else{
        alert('Sorry! This email is not valid')
    }``
})
