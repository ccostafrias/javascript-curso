let i = 'engordar'
let amigo = {nome:'José',
    sexo: 'M',
    peso: 85.4,
    engordar: function(p=0){
        this.peso += p
        let engordou = `${(this.peso).toLocaleString()}Kg bicho, ta gordinho, hein?!`
        return engordou
    }
}
console.log(amigo[0]())