const songs = [
    "assets/songs/nana-song1.mp3",
    "assets/songs/nana-song2.mp3",
    "assets/songs/nana-song3.mp3",
    "assets/songs/nana-song4.mp3",
    "assets/songs/nana-song5.mp3"
];

const audio = document.getElementById("bg-music");
const enterBtn = document.getElementById("enter-btn");
const overlay = document.getElementById("overlay");

enterBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    audio.src = songs[randomIndex];
    audio.play();
    audio.loop = false;

    overlay.style.display = "none";
});

audio.addEventListener("ended", () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    audio.src = songs[randomIndex];
    audio.play();
});

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(el => observer.observe(el));