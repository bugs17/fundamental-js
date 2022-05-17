let data1;
let data;
data = data1 ?? "nilai default";
document.writeln(data);

// kalo ko su cek file yg html karna autocomplete yg bikin error jdi 
// sa tulis dalam file js disini. karna ekstensi js jadi autocomplete de tra rubah nullish operatornya
// kalo extensi html de langsung kasih jarak di antara tanda tanya ? ? kaya bgni makanya error
