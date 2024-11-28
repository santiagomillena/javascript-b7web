function validar(usuario,senha){
    if (usuario === 'pedro' && senha ==='1234'){
        return true;
    } else {
        return false;
    }
}


let usuario = 'bonieky';
let senha = '1234';
let validacao = validar(usuario,senha);
if (validacao){
    console.log ('Acesso concedido.');
} else {
    console.log ('Acesso negado.');
}