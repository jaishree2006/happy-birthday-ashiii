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

`
🎉 HAPPY 20TH BIRTHDAY ASHIII ❤️<br><br>

You are an amazing son 💙<br>
A caring brother 🤝<br>
A loyal friend 😊<br>
And my favorite human ❤️<br><br>

May all your dreams come true ✨<br><br>

Love You Forever Baby Boi 🫶
`;

}
setInterval(() => {

let heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.fontSize =
(Math.random() * 20 + 15) + "px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},500);
