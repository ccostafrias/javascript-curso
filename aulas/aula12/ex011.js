var idade = 42
if (idade < 16){
    console.log('Não vota')
}else{
    if (idade < 18 || idade > 65){
        console.log('Opcional')
    }
    else{
        console.log('Vota')
    }
}