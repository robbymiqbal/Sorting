// Fungsi utama untuk Radix Sort
function radixSort(arr) {
    // Cari angka terbesar untuk menentukan jumlah digit maksimal
    const maxNum = Math.max(...arr);
    const maxDigits = Math.floor(Math.log10(maxNum)) + 1;

    // Proses sorting berdasarkan digit (mulai dari digit satuan, puluhan, dst.)
    for (let digit = 0; digit < maxDigits; digit++) {
        // Inisialisasi "bucket" (array untuk setiap digit 0-9)
        const buckets = Array.from({ length: 10 }, () => []);

        // Distribusikan angka ke dalam bucket berdasarkan digit saat ini
        for (let num of arr) {
            const digitValue = Math.floor(num / Math.pow(10, digit)) % 10;
            buckets[digitValue].push(num);
        }

        // Gabungkan angka dari semua bucket untuk pembaruan array utama
        arr = [].concat(...buckets);
    }

    return arr;
}

// Implwmwntasi:
const arrayAcak = [64, 34, 25, 12, 22, 11, 90, 80, 15, 70];
const hasilUrut = radixSort(arrayAcak);

console.log("Array sebelum diurutkan:", arrayAcak);
console.log("Array setelah diurutkan:", hasilUrut);
