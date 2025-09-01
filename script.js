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
			previewImage: "https://i.scdn.co/image/ab67616d0000b273example1",
			duration: "3:22",
		},
		{
			id: 2,
			title: "Levitating",
			artist: "Dua Lipa",
			genre: "Pop/Dance",
			totalPlays: 1245678934,
			previewImage: "https://i.scdn.co/image/ab67616d0000b273example2",
			duration: "3:24",
		},
		{
			id: 3,
			title: "Shape of You",
			artist: "Ed Sheeran",
			genre: "Pop",
			totalPlays: 3102345678,
			previewImage: "https://i.scdn.co/image/ab67616d0000b273example3",
			duration: "4:23",
		},
		{
			id: 4,
			title: "Lose Yourself",
			artist: "Eminem",
			genre: "Hip-Hop/Rap",
			totalPlays: 980234567,
			previewImage: "https://i.scdn.co/image/ab67616d0000b273example4",
			duration: "5:20",
		},
		{
			id: 5,
			title: "Peaches",
			artist: "Justin Bieber ft. Daniel Caesar, Giveon",
			genre: "R&B/Pop",
			totalPlays: 765432109,
			previewImage: "https://i.scdn.co/image/ab67616d0000b273example5",
			duration: "3:18",
		},
		{
			id: 6,
			title: "Smells Like Teen Spirit",
			artist: "Nirvana",
			genre: "Rock/Grunge",
			totalPlays: 876543210,
			previewImage: "https://i.scdn.co/image/ab67616d0000b273example6",
			duration: "5:01",
		},
	];
	const cardsContainer = document.getElementById("cardsContainer");

	spotifyMusicList.forEach((song) => {
		const card = document.createElement("div");
		card.classList.add("songCard");
		card.innerHTML = `
    <img src="${song.previewImage}" alt="${song.title}">
    <h3>Artist: ${song.artist}</h3>
    <p>Genre: ${song.genre}</p>
    <p>Duration: ${song.duration}</p>
    <p>Total Plays: ${song.totalPlays.toLocaleString()}</p>`;
		cardsContainer.appendChild(card);
	});
});
