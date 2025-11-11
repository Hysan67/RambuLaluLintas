let finish = false;
let intervalLampu = null;
let intervalMobil = null;
let berjalan = false;
let PMT = -104;
let PMB = -104;
let PMU = -104;
let PMS = 612;
let kecepatan = 3;
const lampu = ["barat", "utara", "timur", "selatan"];
const mobil = ["mobil-barat", "mobil-timur", "mobil-utara", "mobil-selatan"];
let i = 0;
let durasi = 4;

function Esimulasi() {
   finish = true;
   if (intervalMobil) clearInterval(intervalMobil);
   if (intervalLampu) clearInterval(intervalLampu);
   document.getElementById("timer").textContent = 0;
   lampu.forEach((r) => (document.getElementById(r).src = "Red.svg"));
   berjalan = false;
   PMB = PMT = PMU = -104;
   PMS = 612;
   document.getElementById(mobil[0]).style.left = PMB + "px";   
   document.getElementById(mobil[1]).style.right = PMT + "px";
   document.getElementById(mobil[2]).style.top = PMU + "px";
   document.getElementById(mobil[3]).style.top = PMS + "px";
}

function simulasi() {
   if (berjalan) return;
   berjalan = true;
   finish = false;
   i = 0;
   durasi = 4;

   intervalLampu = setInterval(() => {
      document.getElementById("timer").textContent = durasi;
      lampu.forEach((r) => (document.getElementById(r).src = "Red.svg"));
      
      if (durasi > 1) {
         document.getElementById(lampu[i]).src = "Green.svg";
      } else if (durasi == 1) {
         document.getElementById(lampu[i]).src = "Yellow.svg";
      }
      
      durasi--;
      if (durasi < 0) {
         durasi = 5;
         i = (i + 1) % lampu.length;
      }
      
      if (finish) clearInterval(intervalLampu);
   }, 1000);
   
   intervalMobil = setInterval(() => {
      if (PMB == 478 && document.getElementById(lampu[0]).src.includes("Red.svg")) {
         PMB += 0;
      } else {
         PMB += kecepatan;
      }
      
      if (PMT == 478 && document.getElementById(lampu[2]).src.includes("Red.svg")) {
         PMT += 0;
      } else {
         PMT += kecepatan;
      }
      
      if (PMU == 133 && document.getElementById(lampu[1]).src.includes("Red.svg")) {
         PMU += 0;
      } else {
         PMU += kecepatan;
      }
      
      if (PMS == 501 && document.getElementById(lampu[3]).src.includes("Red.svg")) {
         PMS -= 0;
      } else {
         PMS -= kecepatan;
      }
      
      document.getElementById(mobil[0]).style.left = PMB + "px";
      document.getElementById(mobil[1]).style.right = PMT + "px";
      document.getElementById(mobil[2]).style.top = PMU + "px";
      document.getElementById(mobil[3]).style.top = PMS + "px";
      
      
      if (PMB == 1921) PMB = -104;
      if (PMT > window.innerHeight * 3) PMT = -104;
      if (PMU > window.innerWidth) PMU = -104;
      if (PMS == -351) PMS = 612;

      if (finish) clearInterval(intervalMobil);
   }, 30);
}
