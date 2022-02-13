let refreshbBtn = document.querySelector('button');

let title = document.querySelector('.match');

let heart = document.querySelector('.heart');

const selectRandomProfile = async function () {
  const rank = generateRandomNumber();
  console.log(rank);
  let profilePhotos = document.querySelectorAll('img');

  profilePhotos.forEach(async (profile, i) => {
    profile.setAttribute(`src`, `/images/icon.svg`);

    profile.setAttribute(`src`, `images/boy (${rank[i]}).jpg`);
    title.innerHTML = 'Please wait...🤞';

    heart.innerHTML = '⬜';
  });

  await profilePhotos[0].decode();
  await profilePhotos[1].decode();

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

const generateRandomNumber = function () {
  let rank = [];
  for (let i = 0; i < 2; i++) {
    const randomNumber = Math.floor(Math.random() * 22);
    rank.push(randomNumber);
  }
  return rank;
};
refreshbBtn.addEventListener('click', selectRandomProfile);
