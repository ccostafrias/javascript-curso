var agora = new Date()
var diaSemNum = agora.getDay()
var diaSem = ''
switch (diaSemNum){
    case 0:
        diaSem = 'Domingo'
        break
    case 1:
        diaSem = 'Segunda'
        break
    case 2:
        diaSem = 'Terça'
        break
    case 3:
        diaSem = 'Quarta'
        break         
    case 4:
        diaSem = 'Quinta'
        break
    case 5:
        diaSem = 'Sexta'
        break
    case 6:
        diaSem = 'Sábado'
        break  
}
console.log(`Hoje é ${diaSem}`)