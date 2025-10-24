document.addEventListener('DOMContentLoaded', () => {
  const AllBtn = document.getElementById('AllBtn');
  const popBtn = document.getElementById('popBtn');
  const hipPopBtn = document.getElementById('hipPopBtn');
  const jazzBtn = document.getElementById('jazzBtn');
  const afroBtn = document.getElementById('afroBtn');
  const rockBtn = document.getElementById('rockBtn');

  // Example: GET request to your API
  let spotifyMusicList = [];
  let musicBank = [];
  fetch('https://bulk-sms-be.onrender.com/api/v1/messaging/music-list')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((res) => {
      console.log('✅ API Response:', res);
      spotifyMusicList = res.data;
      musicBank = res.data;
      handleCard();
    })
    .catch((error) => {
      console.error('❌ API Error:', error);
    });

  const buttons = [AllBtn, popBtn, hipPopBtn, jazzBtn, afroBtn, rockBtn];

  function handleCard() {
    const cardsContainer = document.getElementById('cardsContainer');

    // ✅ Clear previous cards before adding new ones
    cardsContainer.innerHTML = '';

    spotifyMusicList.forEach((music) => {
      const card = document.createElement('div');
      card.classList.add('songCard');
      card.innerHTML = `
      <h5 class="top-title">${music.artist}</h5>
      <div class="middle-title">
        <h5>${music.artist}</h5>
        <h5>${music.title}</h5>
      </div>
      <div class="footer-title">
        <h5>${music.genre}</h5>
        <h5>${music.totalPlays}</h5>
      </div>`;
      card.style.backgroundImage = `url("${music.image}")`;
      cardsContainer.appendChild(card);
    });
  }

  function setActiveButton(activeBtn) {
    spotifyMusicList = musicBank.filter((music) => {
      if (activeBtn.id === 'jazzBtn') {
        return music.genre.toLowerCase() === 'jazz';
      }
      if (activeBtn.id === 'popBtn') {
        return music.genre.toLowerCase() === 'pop';
      }
      if (activeBtn.id === 'hipPopBtn') {
        return music.genre.toLowerCase() === 'hip-hop';
      }
      if (activeBtn.id === 'rockBtn') {
        return music.genre.toLowerCase() === 'rock';
      }
      if (activeBtn.id === 'afroBtn') {
        return music.genre.toLowerCase() === 'r&b';
      }
      if (activeBtn.id === 'AllBtn') {
        return true;
      }
    });
    handleCard();

    buttons.forEach((btn) => {
      if (btn === activeBtn) {
        btn.classList.add('active');
        btn.classList.remove('inactive');
      } else {
        btn.classList.remove('active');
        btn.classList.add('inactive');
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => setActiveButton(btn));
  });
});
