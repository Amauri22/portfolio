"use strict"

class CustomElement {
	constructor(elementId) {
		this.element = this.getElById(elementId);

		this.handleClick(this.element);
	}


	getElById(elementId) {
		return document.getElementById(elementId);
	}

	handleClick(element) {
		return element.addEventListener("click", () => {
			console.log("clicked")
		})
	}
}

const logo = new CustomElement("logo");



