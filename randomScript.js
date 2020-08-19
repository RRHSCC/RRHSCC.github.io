let facts = [
	"Many of our members don't actually code.",
	"RRHS Code Club is not sponsored by Pepsi.",
	"Rust and its Cargo compiler will one day be the savior of humanity.",
	"RRHS Code Club may or may not be in the process of taking over the Tri-State Area."
];

window.onload = function new_fact() {
	document.getElementById("randomFact").innerHTML = facts[Math.floor(Math.random() * facts.length)];
}
