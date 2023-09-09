// Fungsi untuk mengisi array dengan 100 nilai acak antara 1 hingga 50
function isiArrayRandom() {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 50) + 1);
  }
  return arr;
}

// Fungsi untuk memisahkan array menjadi array genap dan ganjil
function pisahkanGenapGanjil(arr) {
  const genap = [];
  const ganjil = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      genap.push(arr[i]);
    } else {
      ganjil.push(arr[i]);
    }
  }
  return { genap, ganjil };
}

// Fungsi untuk menghitung min
function hitungMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Fungsi untuk menghitung max
function hitungMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Fungsi untuk menghitung total
function hitungTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Fungsi untuk menghitung rata-rata
function hitungRataRata(arr) {
  const total = hitungTotal(arr);
  return total / arr.length;
}

const arrayRandom = isiArrayRandom();
const { genap, ganjil } = pisahkanGenapGanjil(arrayRandom);

const minGenap = hitungMin(genap);
const maxGenap = hitungMax(genap);
const totalGenap = hitungTotal(genap);
const rataRataGenap = hitungRataRata(genap);

const minGanjil = hitungMin(ganjil);
const maxGanjil = hitungMax(ganjil);
const totalGanjil = hitungTotal(ganjil);
const rataRataGanjil = hitungRataRata(ganjil);

// Perbandingan
const perbandinganMin = minGenap > minGanjil ? "Min lebih besar array genap" : minGenap < minGanjil ? "Min lebih besar array ganjil" : "Min sama pada kedua array";
const perbandinganMax = maxGenap > maxGanjil ? "Max lebih besar array genap" : maxGenap < maxGanjil ? "Max lebih besar array ganjil" : "Max sama pada kedua array";
const perbandinganTotal = totalGenap > totalGanjil ? "Total lebih besar array genap" : totalGenap < totalGanjil ? "Total lebih besar array ganjil" : "Total sama pada kedua array";
const perbandinganRataRata = rataRataGenap > rataRataGanjil ? "Rata-rata lebih besar array genap" : rataRataGenap < rataRataGanjil ? "Rata-rata lebih besar array ganjil" : "Rata-rata sama pada kedua array";

console.log("Array dengan jumlah index 100:", arrayRandom);
console.log("Array genap dengan jumlah index 50:", genap);
console.log("Array ganjil dengan jumlah index 50:", ganjil);
console.log("Min Genap:", minGenap);
console.log("Max Genap:", maxGenap);
console.log("Total Genap:", totalGenap);
console.log("Rata-rata Genap:", rataRataGenap);
console.log("Min Ganjil:", minGanjil);
console.log("Max Ganjil:", maxGanjil);
console.log("Total Ganjil:", totalGanjil);
console.log("Rata-rata Ganjil:", rataRataGanjil);
console.log(perbandinganMin);
console.log(perbandinganMax);
console.log(perbandinganTotal);
console.log(perbandinganRataRata);