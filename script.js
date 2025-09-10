document.addEventListener("DOMContentLoaded", () => {
	const AllBtn = document.getElementById("AllBtn");
	const popBtn = document.getElementById("popBtn");
	const hipPopBtn = document.getElementById("hipPopBtn");
	const jazzBtn = document.getElementById("jazzBtn");
	const afroBtn = document.getElementById("afroBtn");
	const rockBtn = document.getElementById("rockBtn");

	// ALL BUTTON
	AllBtn.addEventListener("click", () => {
		AllBtn.classList.add("active");
		AllBtn.classList.remove("inactive");

		popBtn.classList.remove("active");
		popBtn.classList.add("inactive");

		hipPopBtn.classList.remove("active");
		hipPopBtn.classList.add("inactive");

		jazzBtn.classList.remove("active");
		jazzBtn.classList.add("inactive");

		afroBtn.classList.remove("active");
		afroBtn.classList.add("inactive");

		rockBtn.classList.remove("active");
		rockBtn.classList.add("inactive");
	});

	// POP BUTTON
	popBtn.addEventListener("click", () => {
		popBtn.classList.add("active");
		popBtn.classList.remove("inactive");

		AllBtn.classList.remove("active");
		AllBtn.classList.add("inactive");

		hipPopBtn.classList.remove("active");
		hipPopBtn.classList.add("inactive");

		jazzBtn.classList.remove("active");
		jazzBtn.classList.add("inactive");

		afroBtn.classList.remove("active");
		afroBtn.classList.add("inactive");

		rockBtn.classList.remove("active");
		rockBtn.classList.add("inactive");
	});

	// HIPPOP BUTTON
	hipPopBtn.addEventListener("click", () => {
		hipPopBtn.classList.add("active");
		hipPopBtn.classList.remove("inactive");

		AllBtn.classList.remove("active");
		AllBtn.classList.add("inactive");

		popBtn.classList.remove("active");
		popBtn.classList.add("inactive");

		jazzBtn.classList.remove("active");
		jazzBtn.classList.add("inactive");

		afroBtn.classList.remove("active");
		afroBtn.classList.add("inactive");

		rockBtn.classList.remove("active");
		rockBtn.classList.add("inactive");
	});

	// JAZZ BUTTON
	jazzBtn.addEventListener("click", () => {
		jazzBtn.classList.add("active");
		jazzBtn.classList.remove("inactive");

		AllBtn.classList.remove("active");
		AllBtn.classList.add("inactive");

		popBtn.classList.remove("active");
		popBtn.classList.add("inactive");

		hipPopBtn.classList.remove("active");
		hipPopBtn.classList.add("inactive");

		afroBtn.classList.remove("active");
		afroBtn.classList.add("inactive");

		rockBtn.classList.remove("active");
		rockBtn.classList.add("inactive");
	});

	// AFROBEAT BUTTON
	afroBtn.addEventListener("click", () => {
		afroBtn.classList.add("active");
		afroBtn.classList.remove("inactive");

		AllBtn.classList.remove("active");
		AllBtn.classList.add("inactive");

		popBtn.classList.remove("active");
		popBtn.classList.add("inactive");

		hipPopBtn.classList.remove("active");
		hipPopBtn.classList.add("inactive");

		jazzBtn.classList.remove("active");
		jazzBtn.classList.add("inactive");

		rockBtn.classList.remove("active");
		rockBtn.classList.add("inactive");
	});

	rockBtn.addEventListener("click", () => {
		rockBtn.classList.add("active");
		rockBtn.classList.remove("inactive");

		AllBtn.classList.remove("active");
		AllBtn.classList.add("inactive");

		popBtn.classList.remove("active");
		popBtn.classList.add("inactive");

		hipPopBtn.classList.remove("active");
		hipPopBtn.classList.add("inactive");

		jazzBtn.classList.remove("active");
		jazzBtn.classList.add("inactive");

		afroBtn.classList.remove("active");
		afroBtn.classList.add("inactive");
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
		card.innerHTML = `
    		<h5 class='songtitle'>${song.title}</h5>
			<h5 class="songtitle2">${song.title}</h5>
			<h5 class="songtitle3">${song.artist}</h5>
			<div class="genre-Plays">
				<h6>${song.genre}</h6>
				<h6>${song.totalPlays.toLocaleString()} plays</h6>
			</div>`;
		card.style.backgroundImage = `url("${song.previewImage}")`;
		cardsContainer.appendChild(card);
	});
});
