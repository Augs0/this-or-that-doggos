
const leftImg = document.getElementById("left");
const rightImg = document.getElementById("right");
const thisBtn = document.getElementById("this");
const thatBtn = document.getElementById("that");

thisBtn.addEventListener('click', fetchDogs);
thatBtn.addEventListener('click', fetchDogs);

async function fetchDogs() {
  let res = await fetch("https://dog.ceo/api/breeds/image/random");

  let data = await res.json();
	
	let url = data.message;
	
	rightImg.src = url
	
	let res2 = await fetch("https://dog.ceo/api/breeds/image/random");

  let data2 = await res2.json();
	
	let url2 = data2.message;
	
	leftImg.src = url2
}
