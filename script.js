// File names (must match EXACTLY your folder)
let currentAudio = null;
let soundFiles = [
    "abba",
    "address",
    "ade",
    "adiripoley",
    "ahhaa",
    "ahokka",
    "aipoyy",
    "akkadaspace",
    "ammababoii",
    "apara",
    "areyhooo",
    "auto",
    "babu",
    "babuuu",
    "bagundi",
    "basic",
    "bob",
    "bobb",
    "bobbb",
    "businessman",
    "chadukondi",
    "chiichii",
    "chiiwaste",
    "cutout",
    "darling",
    "dubai",
    "dukudu",
    "edhoo",
    "emchesthunv",
    "emira",
    "entibabu",
    "fahhh",
    "firebrami",
    "flashman",
    "Hororr",
    "horror",
    "imadhyabob",
    "induvadhana",
    "intrest",
    "jaibalaya",
    "joke",
    "kabali",
    "khaleja",
    "lethem",
    "mellega",
    "manasule",
    "nadikuda",
    "nakuadi",
    "norumuyii",
    "nuvvugod",
    "okkachance",
    "pakkalei",
    "partyledha",
    "patapadu",
    "pavam",
    "podhune",
    "prabhas",
    "pushpa",
    "rathri",
    "sairam",
    "samantaa",
    "sampethey",
    "saripoyaru",
    "sorrychepa",
    "sunillaugh",
    "svsc",
    "thagalapettandi",
    "thalaiva",
    "thanksdarlings",
    "thedaga",
    "thinama",
    "thuthu",
    "tolme",
    "yerababji"
];

// Display names (what user sees)
let memeNames = [
    "Abba 😩",
    "Address 📍",
    "Ade 😐",
    "Adiripoley 🔥",
    "Ahhaa 😄",
    "Ahokka 😲",
    "Aipoyy 😵",
    "Akkada Space 🚀",
    "Ammababoii 😱",
    "Apara 😎",
    "Arey Hooo 😮",
    "Auto 🚗",
    "Babu 👶",
    "Babuuu 😂",
    "Bagundi 👍",
    "Basic 😌",
    "Bob 😎",
    "Bobb 😂",
    "Bobbb 🤣",
    "Businessman 💼",
    "Chadukondi 📚",
    "Chii Chii 😖",
    "Chii Waste 🚫",
    "Cutout 🎬",
    "Darling ❤️",
    "Dubai ✈️",
    "Dukudu 💥",
    "Edhoo 🤔",
    "Em Chesthunv 😅",
    "Emira 😡",
    "Enti Babu 🤨",
    "Fahhh 😤",
    "Fire Brahmi 🔥😂",
    "Flash Man ⚡",
    "Horror 👻",
    "Horror 2 😨",
    "Imadhya Bob 😎",
    "Induvadana 🎶",
    "Interest 💭",
    "Jai Balaya 🔥",
    "Joke 😂",
    "Kabali 😎",
    "Khaleja 💥",
    "Let Them 😏",
    "Mellega 😌",
    "Manasule ❤️",
    "Naadi Kuda 😢",
    "Naku Adi 😅",
    "Noru Muyyi 🤐",
    "Nuvvu God 🙏",
    "Okka Chance 😎",
    "Pakkalei 😏",
    "Party Ledha 🎉",
    "Pata Padu 🎵",
    "Pavam 😢",
    "Podhune 🌅",
    "Prabhas 😎",
    "Pushpa 🔥",
    "Rathri 🌙",
    "Sai Ram 🙏",
    "Samantaa ❤️",
    "Sampethey 💀",
    "Saripoyaru 😑",
    "Sorry Chepa 🙏",
    "Sunil Laugh 😂",
    "SVSC 🎬",
    "Thagalapettandi 🔥",
    "Thalaiva 😎",
    "Thanks Darlings ❤️",
    "Thedaga 🤔",
    "Thinama 🍽️",
    "Thuthu 😆",
    "Tol Me 😅",
    "Yera Babji 😂"
];

// Container
let container = document.getElementById("soundContainer");

// Generate buttons
for (let i = 0; i < soundFiles.length; i++) {
    let button = document.createElement("button");

    button.innerText = memeNames[i];

    button.onclick = function () {
        playSound("sounds/" + soundFiles[i] + ".mp3");
    };

    container.appendChild(button);
}

// Play sound
function playSound(sound) {

    // Stop previous sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play new sound
    currentAudio = new Audio(sound);
    currentAudio.play();
}
