let refreshbBtn = document.querySelector('button');

let result = document.querySelector('.result');

let heart = document.querySelector('.heart');

const selectRandomProfile = async function () {
  const rank = generateRandomNumber();
  console.log(rank);
  let profilePhotos = document.querySelectorAll('.img');

  await profilePhotos[0].setAttribute(`src`, `/images/icon.svg`);
  await profilePhotos[1].setAttribute(`src`, `/images/icon.svg`);
  profilePhotos.forEach(async (profile, i) => {
    profile.setAttribute(`src`, `images/boy (${rank[i]}).jpg`);
    profile.classList.remove('animate-this-element');
    heart.classList.remove('animate-this-element');
    result.classList.remove('animat-this-element');

    result.innerHTML = 'Please wait...🤞';
    heart.innerHTML = '⬜';
  });

  await profilePhotos[0].decode();
  profilePhotos[0].classList.add('animate-this-element');

  await profilePhotos[1].decode();
  profilePhotos[1].classList.add('animate-this-element');

  heart.classList.add('animat-this-element');
  result.classList.add('animat-this-element');

  if (rank[0] === rank[1]) {
    result.innerHTML = 'You Choose Yourself! 😉';
    heart.innerHTML = '🤍';
  } else if (rank[0] > 10 && rank[1] > 10) {
    result.innerHTML = "It's a Bestie match! 👩‍❤️‍💋‍👩";
    heart.innerHTML = '❤️';
  } else if (rank[0] < 11 && rank[1] < 11) {
    result.innerHTML = 'Its a Friend match! 👨‍❤️‍👨';
    heart.innerHTML = '💙';
  } else {
    result.innerHTML = 'Congratulations..🎉 Its a gf/bf match! 👫';
    heart.innerHTML = '💕';
  }
};

const generateRandomNumber = function () {
  let rank = [];
  for (let i = 0; i < 2; i++) {
    const randomNumber = Math.floor(Math.random() * 22);
    rank.push(randomNumber);
  }
  return rank;
};
refreshbBtn.addEventListener('click', selectRandomProfile);
