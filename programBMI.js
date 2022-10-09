var 
	tinggi,
	berat,
	keterangan,
	bmi;

function hitung() {
	tinggi = parseFloat(document.getElementById("ipt_t").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("ipt_b").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi >= 30) {
		keterangan = "menderita obesitas.";
	} else if ((bmi >= 25) & (bmi <= 29.9)){
		keterangan = "kelebihan berat badan.";
	} else if ((bmi >= 18.5) & (bmi <= 24.9)){
		keterangan = "normal.";
	} else if ((bmi >= 0) & (bmi <= 18.5)){
		keterangan = "kekurangan berat badan.";
	}

	console.log('ini bmi', bmi)
	
	if (isNaN(bmi)){
		document.getElementById('bmi').innerHTML = "Isi data terlebih dahulu.";
	} else {
		document.getElementById('bmi').innerHTML = "BMI anda adalah " + bmi.toFixed(1) + " yang artinya anda " + keterangan;
	}
}