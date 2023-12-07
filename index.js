function calcularNivel(vitorias, derrotas) {
    var saldo = vitorias - derrotas;
    var nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    console.log("O Herói tem de saldo de " + saldo + " está no nível de " + nivel);
    return [saldo, nivel];
}
calcularNivel(40, 10)
