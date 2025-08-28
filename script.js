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
});
