// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

//---pohyb panďuláka---
document.onkeydown = detectKey;
function detectKey(e) {
    let LevaPozice = document.getElementById('panacek').offsetLeft;
    let TopPozice = document.getElementById('panacek').offsetTop;

	let audioElement = document.querySelector('#hudba');
    audioElement.play();

    e = e || window.event;
    if (e.keyCode == '38') { // nahoru
		if (TopPozice < 0) {return}
        document.getElementById('panacek').style.marginTop  = (TopPozice-10)+"px";
		document.getElementById("panacek").src = "obrazky/panacek-nahoru.png";
    }
    else if (e.keyCode == '40') { // dolu
		if (TopPozice > window.innerHeight) {return}
        document.getElementById('panacek').style.marginTop  = (TopPozice+10)+"px";
		document.getElementById("panacek").src = "obrazky/panacek.png";
    }
    else if (e.keyCode == '37') { // doleva
		if (LevaPozice < 0) {return}
        document.getElementById('panacek').style.marginLeft  = (LevaPozice-10)+"px";
		document.getElementById("panacek").src = "obrazky/panacek-vlevo.png";
    }
    else if (e.keyCode == '39') { // doprava
		if (LevaPozice > window.innerWidth) {return}
        document.getElementById('panacek').style.marginLeft  = (LevaPozice+10)+"px";
		document.getElementById("panacek").src = "obrazky/panacek-vpravo.png";
    }


	//---navyseni skóre---
	let panacekX = document.getElementById('panacek').offsetLeft;
	let panacekY = document.getElementById('panacek').offsetTop;
	let panacekSirka = 64;
	let panacekVyska = 70;

	let minceX = document.getElementById('mince').offsetLeft;
	let minceY = document.getElementById('mince').offsetTop;
	let minceSirka = 36;
	let minceVyska = 36;

	let skore = document.getElementById('score').innerHTML;
	skore = parseInt(skore); //přepsání skóre z textového řetězce na číslo

	//podmínka pro připsání skóre
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		skore = skore + 1;

		//vypsání skóre
		document.getElementById("score").innerHTML = skore;

		//výtězné skóre
		if (skore == 5) {
			let zvukfanfara = document.querySelector('#zvukfanfara');
    		zvukfanfara.play();
			NahodnaPoziceMince();
			alert("Gratuluji, vyhrál jsi!");
			return;
		}

		//zvuk mince
		let zvukMince = document.querySelector('#zvukmince');
    	zvukMince.play();

		//posun mince na novou pozici
		NahodnaPoziceMince();
	}else{
		return;
	}
}


//---nahodna pozice mince---
//při načtení stránky
window.onload = NahodnaPoziceMince;
function NahodnaPoziceMince() {
	let mince = document.getElementById('mince');
	let randomX = Math.floor(Math.random()*window.innerHeight) - 36;
	//aby obrázek nevylézal nahoře z obrazovky
	if (randomX < 36) {
		randomX = 0;
	}
	let randomY = Math.floor(Math.random()*window.innerWidth) - 36;
	if (randomY < 36) {
		randomY = 0;
	}
	mince.style.top = randomX + 'px';
	mince.style.left = randomY + 'px';
}


