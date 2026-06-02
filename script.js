function nextScreen(num){

document.querySelectorAll('.screen').forEach(screen=>{
screen.classList.add('hidden');
});

document.getElementById('screen'+num).classList.remove('hidden');
}

function wrongAnswer(){
document.getElementById("wrong").innerHTML =
"❌ Nice try Baby Boi 😂❤️";
}

let photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg"
];

let current = 0;

function nextPhoto(){

current++;

if(current >= photos.length){
current = 0;
}

document.getElementById("slideshow").src = photos[current];
}

function prevPhoto(){

current--;

if(current < 0){
current = photos.length - 1;
}

document.getElementById("slideshow").src = photos[current];
}

function birthdayWish(){

document.getElementById("wish").innerHTML =
"🎉 HAPPY 20TH BIRTHDAY ASHIII ❤️<br><br>Love You Forever Baby Boi 🫶✨";
}
