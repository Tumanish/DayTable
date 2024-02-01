let arrColor = ["white", "blue", "red", "green", "yellow", "striped"];
let t = document.querySelectorAll(".item").forEach((item) => {
	item.addEventListener("click", () => {
		/* white blue red green yellow striped */
		let noColorTest = true;
		let colorClassFinded = [];
		for (let i = 0; i < arrColor.length; i++) {
			if (item.classList.contains(arrColor[i])) {
				colorClassFinded.push(arrColor[i]);
				noColorTest = false;
				item.classList.remove(arrColor[i]);
				if (i == arrColor.length - 1) {
					item.classList.add(arrColor[0]);
					break;
				} else {
					item.classList.add(arrColor[i + 1]);
					break;
				}
			}
		}
		// проверка цветов/сброс
		if (colorClassFinded.length > 1) {
			console.log("Классов цвета больще 2-х, где-то ошибка цвета сброшены");
			for (let i = 0; i < colorClassFinded.length; i++) {
				item.classList.remove(colorClassFinded[i]);
			}
		}
		// Если нет ни одного, один добавить 
		if (noColorTest) {
			item.classList.add(arrColor[1]);
		}

	})
})

