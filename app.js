//QUOTES Logic
function showQuotes() {
    const dadsQuotes = [
        ' "Always remember that I am your father and i will always want the best for you." ',
        ' "It is because i love you i correct you." ',
        ' "When you wake up in the morning, remember to say \"Thank you Jesus\"." ',
        ' "In Life there are 3 Keys to success - Pay attention, Pay attention and Pay attention." ',
        ' "No matter the mistake you make outside, come back home, we\'ll clean it up." ',
        ' "Never rely on Knowledge that hasn\'t produced anything for you." ',
        ' "Never become a victim of religion, Christianity is not a religion" ',
        ' "Never forget your identity! Remember whose child you are!" ',
        ' "My Job as a parent is to train you and direct you to your Heavenly father " ',
        ' "I Love You" '
    ]
    let display = document.getElementById('quotes');

    let randomNumber = Math.floor(Math.random() * dadsQuotes.length);
    display.innerHTML = dadsQuotes[randomNumber];

    setTimeout(showQuotes, 5000);
}
showQuotes();

function showBirthdayWishes() {
    const birthdayWishes = [
        ' "HAPPY BIRTHDAY DAD, I LOVE YOU SO MUCH. THANKS FOR BEING MY FATHER,COACH, MENTOR AND FRIEND. I PRAY GOD CONTINUES TO ELEVATE YOU" <br> - GREAT',
        ' "HAPPY BIRTHDAY CHAIRMAN, I LOVE YOU" <br> - ISAAC ',
        ' "HAPPY" BIRTHDAY DADDY, A.K.A BEST DAD EVER. LOVE YOU WITH ALL MY HEART, LONG LIFE AND PROSPERITY. HOPE YOU HAVE A FANTABULOUS DAY" <br> - PRECIOUS',
        ' "HAPPY BIRTHDAY DADDY, I WISH YOU LONG LIFE AND PROSPERITY, LOVE YOU!" <br> - PRINCESS',
        ' "HAPPY BIRTHDAY SIR, I WISH YOU MANY MORE YEARS. LOVE YOU" <br> - ELIZABETH ',
        ' "HAPPY BIRTHDAY TEMI, I LOVE YOU SO VERY MUCH " <br> - TEMI'
    ]

    let wishes = document.getElementById('birthday-wishes');

    let randomNumber = Math.floor(Math.random() * birthdayWishes.length);
    wishes.innerHTML = birthdayWishes[randomNumber];

    setTimeout(showBirthdayWishes, 5000);

}
showBirthdayWishes();

// Shey you're seeing it?? guy
//yeah
//save changes 
//abeg put it on auto save


//I don save am
//the liders should work now, let me resize it and all, so when yo have the images just replace them
//Yeah.. do bout 7 tho 
//okay

// And how did you do it.. the code i mean.. lol'
//copy and paste baba, no time
// LMAO... cos you know this is our next project.. this sl

//so confused right now
// YOU??


//slider
var slideIndex = 0;
showSlides();


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000); // Change image every  seconds
}

var string = "Happy Birthday Dad !!! Have An Amazing Day ❤️"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();