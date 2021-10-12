let n = [2,8,4,1,5,7]
n.sort()
let pos = n.indexOf(10)
let txt = 'Array:'
for(let c in n){
    txt += ` ${ n[c]},`
}
txt += ' FIM'
console.log(txt)
if(pos == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor 4 está na posição ${pos}`)
}
