const openBtn = document.querySelector("button");
const closeBtn = document.querySelector("#close");
const model = document.querySelector(".model");
const form = document.querySelector("form");

//OPEN MODEL
openBtn.addEventListener("click", openModel);

function openModel() {
	model.style.display = "grid";
}

//CLOSE MODEL
closeBtn.addEventListener("click", closeModel);

function closeModel() {
	model.classList.add("close-model-animation");
	setTimeout(() => {
		model.style.display = "none";
		model.classList.remove("close-model-animation");
	}, 1000);
}

//CLOSES IF CLICK OUTSIDE MODEL
model.addEventListener("click", function (e) {
	if (e.target.classList.contains("model")) {
		closeModel();
	}
});

//THANK YOU MSG
form.addEventListener("submit", submitForm);

function submitForm() {
	const card = document.querySelector(".card");
	card.innerHTML = "<h2>Thank you for signing up!</h2>";
	setTimeout(() => {
		closeModel();
	}, 2000);
}
