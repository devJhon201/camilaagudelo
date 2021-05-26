// Header usa el espacio completo de la ventana

if (window.matchMedia("(max-width: 768px)").matches) {
	/* The viewport is less than, or equal to, 700 pixels wide */
	const headerStyle = document.getElementById("header");
	headerStyle.style.height = window.innerHeight + "px";
} else {
	/* The viewport is greater than 700 pixels wide */
}
