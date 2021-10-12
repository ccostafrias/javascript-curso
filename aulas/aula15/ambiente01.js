let n = [2,135,4,12,5,7]
n.sort() 
var txt = 'Array:'
for (c=0;c<n.length;c++){
    txt += ` ${ n[c]},`
}
txt += ' FIM'
console.log(txt)