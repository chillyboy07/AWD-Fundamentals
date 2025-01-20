document.getElementById('summoner-form').addEventListener('submit', function(event) {//executes when form is submitted
    event.preventDefault();  // prevents to send data to server

    const summonerName = document.getElementById("summoner-name").value;//entered by user

    const champions = [
        "Ahri!", "Yasuo!", "Ezreal!", "Lux!", "Lee Sin!",
        "Aatrox!", "Thresh!", "Kai'Sa!", "Zed!", "Jinx!",
        "Irelia!", "Vi!", "Milio!"
    ];

    for (let i = 0; i < champions.length; i++) {
        console.log(champions[i]);  //executes all champs in array
    }
                      //makes it int /random float
    const randomIndex = Math.floor(Math.random() * champions.length);  //random index

    const randomChampion = champions[randomIndex];  //access array

//store data on browser    key              value
    localStorage.setItem('randomChampion', randomChampion);

    window.location.href = "/pages/page1/index.html";
});
