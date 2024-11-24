let profession = "bombeiro"
console.log('Profissão: ' + profession)

switch (profession) {
    case 'fiscal':
        console.log('Sua camisa será VERDE')
    break

    case 'policial':
        console.log('Sua camisa será AZUL')
    break

    case 'bombeiro':
        console.log('Sua camisa será VERMELHA')
    break

    default:
        console.log('Sua camisa será PRETA')
}