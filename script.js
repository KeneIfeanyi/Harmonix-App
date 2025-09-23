document.addEventListener("DOMContentLoaded", () => {
	const AllBtn = document.getElementById("AllBtn");
	const popBtn = document.getElementById("popBtn");
	const hipPopBtn = document.getElementById("hipPopBtn");
	const jazzBtn = document.getElementById("jazzBtn");
	const afroBtn = document.getElementById("afroBtn");
	const rockBtn = document.getElementById("rockBtn");

	const buttons = [AllBtn, popBtn, hipPopBtn, jazzBtn, afroBtn, rockBtn];

	function setActiveButton(activeBtn) {
		buttons.forEach((btn) => {
			if (btn === activeBtn) {
				btn.classList.add("active");
				btn.classList.remove("inactive");
			} else {
				btn.classList.remove("active");
				btn.classList.add("inactive");
			}
		});
	}

	buttons.forEach((btn) => {
		btn.addEventListener("click", () => setActiveButton(btn));
	});

	const spotifyMusicList = [
		{
			id: 1,
			title: "Blinding Lights",
			artist: "The Weeknd",
			genre: "Pop",
			totalPlays: 1876543210,
			previewImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOL3s9WXFy47F2-sujwyBkjuL5RjUFB7yeA&s",
			duration: "3:22",
		},
		{
			id: 2,
			title: "Levitating",
			artist: "Dua Lipa",
			genre: "Pop/Dance",
			totalPlays: 1245678934,
			previewImage:
				"https://previews.123rf.com/images/violin/violin1106/violin110600004/9681613-gramophone-on-old-sheet-music-retro-art-background.jpg",
			duration: "3:24",
		},
		{
			id: 3,
			title: "Shape of You",
			artist: "Ed Sheeran",
			genre: "Pop",
			totalPlays: 3102345678,
			previewImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeh6LGFXDkBBkp0WBJZZ4pe8tKGTdBOU99Q&s",
			duration: "4:23",
		},
		{
			id: 4,
			title: "Lose Yourself",
			artist: "Eminem",
			genre: "Hip-Hop/Rap",
			totalPlays: 980234567,
			previewImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh41cYgumRIjY9Hpa2dTmquRs6_EDkRo3HcA&s",
			duration: "5:20",
		},
		{
			id: 5,
			title: "Peaches",
			artist: "Justin Bieber ft. Daniel Caesar, Giveon",
			genre: "R&B/Pop",
			totalPlays: 765432109,
			previewImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Apu1JPEhQk5HgxHA4jqlmFMVPVfl6ji1RQ&s",
			duration: "3:18",
		},
		{
			id: 6,
			title: "Smells Like Teen Spirit",
			artist: "Nirvana",
			genre: "Rock/Grunge",
			totalPlays: 876543210,
			previewImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7348IChQ_7BJPolS3SyA_kT7nEJvuCa73WA&s",
			duration: "5:01",
		},
	];
	const cardsContainer = document.getElementById("cardsContainer");
	spotifyMusicList.forEach((song) => {
		const card = document.createElement("div");
		card.classList.add("songCard");
		card.innerHTML = `<h5 class="top-title">${song.artist}</h5>
					<div class="middle-title">
						<h5>${song.artist}</h5>
						<h5>${song.title}</h5>
					</div>
					<div class="footer-title">
						<h5>${song.genre}</h5>
						<h5>${song.totalPlays}</h5>
					</div>`;
		card.style.backgroundImage = `url("${song.previewImage}")`;
		cardsContainer.appendChild(card);
	});
});
