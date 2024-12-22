// Fungsi utama Quick Sort
function quickSort(arr) {
    // Jika array kosong atau hanya memiliki satu elemen, langsung kembalikan
    if (arr.length <= 1) {
        return arr;
    }
    
    // Memilih pivot (dalam hal ini elemen untuk jadi patokan)
    const pivot = arr[arr.length - 1];
    
    // Array untuk menyimpan elemen yang lebih kecil dari pivot
    const leftArr = [];
    
    // Array untuk menyimpan elemen yang lebih besar dari pivot
    const rightArr = [];
    
    // Iterasi array kecuali pivot
    for (let i = 0; i < arr.length - 1; i++) {
        // Jika elemen lebih kecil dari pivot, masukkan ke leftArr
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        }
        // Jika elemen lebih besar dari pivot, masukkan ke rightArr
        else {
            rightArr.push(arr[i]);
        }
    }
    
    // Menggabungkan hasil pengurutan secara rekursif
    // 1. Urutkan leftArr secara rekursif
    // 2. Tambahkan pivot
    // 3. Urutkan rightArr secara rekursif
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Fungsi untuk menampilkan hasil pengurutan
function tampilkanHasil(arr) {
    console.log("Array sebelum diurutkan:", arr);
    const hasilUrut = quickSort(arr);
    console.log("Array setelah diurutkan:", hasilUrut);
    return hasilUrut;
}

// Implementasi
const arrayAcak = [64, 34, 25, 12, 22, 11, 90, 80, 15, 70];
tampilkanHasil(arrayAcak);
