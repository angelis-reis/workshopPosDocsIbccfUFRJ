var play = document.getElementById("apresentacao_1");

var playFilm = document.getElementById("apresentacao_1-player");

var play2 = document.getElementById("requiem");

var play2Film = document.getElementById("requiem-player");

var play3 = document.getElementById("historias");

var play3Film = document.getElementById("historias-player");

var play4 = document.getElementById("zelito");

var play4Film = document.getElementById("zelito-player");

var play5 = document.getElementById("food");

var play5Film = document.getElementById("food-player");

var off = document.getElementsByTagName("BODY")[0];

let count=0;

let count2=0;

let count3=0;

let count4=0;

let count5=0;

play.addEventListener("click",

    function(){

        play.style.display = "none";

        playFilm.style.display= "inherit"

        console.log("clickLink");

        count=0;

        console.log(count);
    }
)

off.addEventListener("click",

                function(){                    

                    count=count+1;
                    console.log("clickBody");
                    console.log(count);

                    if (count==2){

                        if (playFilm.style.display == "inherit"){

                            playFilm.style.display = "none";

                            play.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=playFilm.getAttribute('src');

                            playFilm.setAttribute('src', '');

                            playFilm.setAttribute('src', videoSource);
                        }

                        count=0;
                    }
                }
)

