



var para = document.querySelector('#result');
var image = document.querySelector('#image');

function toss(coin){
    // console.log(coin)
    var tossResult = Math.floor(Math.random()*2)
    // console.log(tossResult)
    var result = ''
    if(tossResult == 0){
        result = 'masjid'
    }else{
        result = 'chand'
    }
    if(coin == result){
        para.innerHTML = "Congrats! You win the Toss"
    }else{
        para.innerHTML ='Sorry! better luck next time'
    }
    if(result == "masjid"){
        image.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
    }else{
        image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
    }
}