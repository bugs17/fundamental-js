let data = {};

// contoh optional chaining kalo pake kaya bgni bisa cek dulu sebelum akses datanya
// jdi kalo data nullish program berikut tetap runing tanpa error
// tapi kalo tra cek dengan optional chaining bgni nanti kode error sampe di pengecekan dan kode perikut trakan di eksekusi
const city = data?.alamat?.kota; 
document.writeln(`<p>${city}</p>`);


// baris ini untuk membuktikan kalau program masih 
// berjalan sampai sini atau su berhenti
document.writeln("kode masih runing");



// memang kembalian dari pegecekan diatas akan undefined, karna object kosong tdk ada isi alias udefined