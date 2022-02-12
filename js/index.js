let btn = document.querySelector('button');

let title = document.querySelector('.match');

let heart = document.querySelector('.heart');

const selectRandomProfile = function () {
  let rank = [];
  for (let i = 0; i < 2; i++) {
    var randomNumber1 = Math.floor(Math.random() * 22);
    rank.push(randomNumber1);
    var male = document.querySelectorAll('img');
    var imageSourse = 'images/boy (' + randomNumber1 + ').jpg';
    male[i].setAttribute('src', imageSourse);
  }
  if (rank[0] === rank[1]) {
    title.innerHTML = 'You Choose Yourself! 😎';
    heart.innerHTML = '🤍';
  } else if (rank[0] > 10 && rank[1] > 10) {
    title.innerHTML = "It's a Bestie match! 👩‍❤️‍💋‍👩";
    heart.innerHTML = '❤️';
  } else if (rank[0] < 11 && rank[1] < 11) {
    title.innerHTML = 'Its a Friend match! 👨‍❤️‍👨';
    heart.innerHTML = '💙';
  } else {
    title.innerHTML = 'Congrats..🎉 Its a gf/bf match! 👫';
    heart.innerHTML = '💕';
  }
};

btn.addEventListener('click', selectRandomProfile);
