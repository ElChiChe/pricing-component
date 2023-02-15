const btn_toggle = document.querySelector(".btn-radio");
const btn_toggle_container = document.querySelector(".btn-toggle");
const month_price = document.querySelectorAll(".month-price");
const year_price = document.querySelectorAll(".year-price");

const changeState = () => {
	btn_toggle.classList.toggle("active");

	updateYear(year_price);
	updateMonth(month_price);
}

const updateYear = year_price => {
	year_price.forEach(year => year.classList.toggle("disabled"));
}

const updateMonth = month_price => {
	month_price.forEach(month => month.classList.toggle("enabled"));
}


btn_toggle_container.addEventListener("click", changeState);
