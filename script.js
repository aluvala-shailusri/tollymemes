let currentAudio = null;
let currentCard  = null;

const sounds = [
    { file: "abba",            name: "Abba"            },
    { file: "address",         name: "Address"          },
    { file: "ade",             name: "Ade"              },
    { file: "adiripoley",      name: "Adiripoley"       },
    { file: "ahhaa",           name: "Ahhaa"            },
    { file: "ahokka",          name: "Ahokka"           },
    { file: "aipoyy",          name: "Aipoyy"           },
    { file: "akkadaspace",     name: "Akkada Space"     },
    { file: "ammababoii",      name: "Ammababoii"       },
    { file: "apara",           name: "Apara"            },
    { file: "areyhooo",        name: "Arey Hooo"        },
    { file: "auto",            name: "Auto"             },
    { file: "babu",            name: "Babu"             },
    { file: "babuuu",          name: "Babuuu"           },
    { file: "bagundi",         name: "Bagundi"          },
    { file: "basic",           name: "Basic"            },
    { file: "bob",             name: "Bob"              },
    { file: "bobb",            name: "Bobb"             },
    { file: "bobbb",           name: "Bobbb"            },
    { file: "businessman",     name: "Businessman"      },
    { file: "chadukondi",      name: "Chadukondi"       },
    { file: "chiichii",        name: "Chii Chii"        },
    { file: "chiiwaste",       name: "Chii Waste"       },
    { file: "cutout",          name: "Cutout"           },
    { file: "darling",         name: "Darling"          },
    { file: "dubai",           name: "Dubai"            },
    { file: "dukudu",          name: "Dukudu"           },
    { file: "edhoo",           name: "Edhoo"            },
    { file: "emchesthuv",      name: "Em Chesthunv"     },
    { file: "emira",           name: "Emira"            },
    { file: "entibabu",        name: "Enti Babu"        },
    { file: "fahhh",           name: "Fahhh"            },
    { file: "firebrami",       name: "Fire Brahmi"      },
    { file: "flashman",        name: "Flash Man"        },
    { file: "Hororr",          name: "Horror"           },
    { file: "horror",          name: "Horror 2"         },
    { file: "imadhyabob",      name: "Imadhya Bob"      },
    { file: "induvadhana",     name: "Induvadana"       },
    { file: "intrest",         name: "Interest"         },
    { file: "jaibalaya",       name: "Jai Balaya"       },
    { file: "joke",            name: "Joke"             },
    { file: "kabali",          name: "Kabali"           },
    { file: "khaleja",         name: "Khaleja"          },
    { file: "lethem",          name: "Let Them"         },
    { file: "mellaga",         name: "Mellaga"          },
    { file: "manasule",        name: "Manasule"         },
    { file: "nadikuda",        name: "Naadi Kuda"       },
    { file: "nakuadi",         name: "Naku Adi"         },
    { file: "norumuyii",       name: "Noru Muyyi"       },
    { file: "nuvvugod",        name: "Nuvvu God"        },
    { file: "okkachance",      name: "Okka Chance"      },
    { file: "pakkalei",        name: "Pakkalei"         },
    { file: "partyledha",      name: "Party Ledha"      },
    { file: "patapadu",        name: "Pata Padu"        },
    { file: "pavam",           name: "Pavam"            },
    { file: "podhune",         name: "Podhune"          },
    { file: "prabhas",         name: "Prabhas"          },
    { file: "pushpa",          name: "Pushpa"           },
    { file: "rathri",          name: "Rathri"           },
    { file: "sairam",          name: "Sai Ram"          },
    { file: "samantaa",        name: "Samantaa"         },
    { file: "sampethey",       name: "Sampethey"        },
    { file: "saripoyaru",      name: "Saripoyaru"       },
    { file: "sorrychepa",      name: "Sorry Chepa"      },
    { file: "sunil laugh",     name: "Sunil Laugh"      },
    { file: "svsc",            name: "SVSC"             },
    { file: "thagalapettandi", name: "Thagalapettandi"  },
    { file: "thalaiva",        name: "Thalaiva"         },
    { file: "thanksdarlings",  name: "Thanks Darlings"  },
    { file: "thedaga",         name: "Thedaga"          },
    { file: "thinama",         name: "Thinama"          },
    { file: "thuthu",          name: "Thuthu"           },
    { file: "tolme",           name: "Tol Me"           },
    { file: "yerababji",       name: "Yera Babji"       },
];

const container = document.getElementById("soundContainer");
const noResults  = document.getElementById("noResults");
const clearBtn   = document.getElementById("clearBtn");

function buildCards(list) {
    container.innerHTML = "";
    list.forEach((sound, i) => {
        const card = document.createElement("div");
        card.className = "sound-card";
        card.dataset.search = sound.name.toLowerCase();
        card.style.animationDelay = `${i * 0.02}s`;

        card.innerHTML = `
            <div class="dome"></div>
            <div class="dome-label">${sound.name}</div>
        `;

        card.addEventListener("click", () => playSound(sound, card));
        container.appendChild(card);
    });
}

buildCards(sounds);

function playSound(sound, card) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    if (currentCard) currentCard.classList.remove("playing");

    if (currentCard === card) {
        currentCard = null;
        currentAudio = null;
        return;
    }

    currentAudio = new Audio("sounds/" + sound.file + ".mp3");
    currentAudio.play();
    currentCard = card;
    card.classList.add("playing");

    currentAudio.onended = () => {
        card.classList.remove("playing");
        currentCard = null;
        currentAudio = null;
    };
}

function searchSounds() {
    const q = document.getElementById("search").value.toLowerCase().trim();
    q ? clearBtn.classList.add("visible") : clearBtn.classList.remove("visible");

    const filtered = sounds.filter(s => s.name.toLowerCase().includes(q));
    buildCards(filtered);
    noResults.style.display = filtered.length === 0 ? "block" : "none";
}

function clearSearch() {
    document.getElementById("search").value = "";
    clearBtn.classList.remove("visible");
    noResults.style.display = "none";
    buildCards(sounds);
}
