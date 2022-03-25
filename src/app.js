console.log("Merhaba Kodlama.io")


//JS type safe değildir yani tip güvenliği yoktur başta ne tanımladıysan tip olarak öyle devam edilir
let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "9.20"

{

    let dolarDun = 9.10

}

console.log(dolarDun)
// const ile veri tanımlayınca o veriye yeni değer atanamaz
const euroDun = 11.2
// euroDun = 11 // bunu yapamıyoruz

console.log(euroDun)

//array
//camelCasing 
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i =0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")

}
console.log("</ul>")
{/*
    <ul>
        <li>Konut kredisi</li>
        <li>Emlak konut kredisi </li>
        <li>Kamu Konut Kredisi</li>

    </ul>
*/
}


console.log(konutKredileri)










