let amigo = {nome:'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Ta gordo hein pqp vai se tratar')
    amigo.peso += p
}
}
amigo.engordar()
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)