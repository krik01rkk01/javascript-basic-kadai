let num = 15 ;

console.log(num);

//変数numが3と5の倍数の場合、3と5の倍数ですと出力する
if (num % 3 == 0 && num % 5 == 0)  {
    console.log('3と5の倍数です');
}

//変数numが3の倍数の場合、3の倍数ですと出力する
else if (num % 3 == 0) {
    console.log('3の倍数です');
}
//変数numが5の倍数の場合、5の倍数ですと出力する
else if (num % 5 == 0) {
    console.log('5の倍数です');
}

//それ以外場合、変数numを出力する
else  {
    console.log(num);
}

    