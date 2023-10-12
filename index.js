/*
-----------------------------------------------------------------
Author..: Macedo, G. Diniz - Desenvolvedor Full Stack
Projeto.: Calculadora de Partidas Rankeadas
Fonte...: DIO.me - 
Objetivo: Usar os conhecimento em estruturas condicionais e 
          funções para criar um algoritmo decisivo.
Docente.: Felipe Aguiar - Tech Educator
-----------------------------------------------------------------
*/
// const nrsltdClclra = fnctn_KlcldrDPrtdasRnkds(15, 3);     //= 12 deve retornar Bronze
// const nrsltdClclra = fnctn_KlcldrDPrtdasRnkds(16, 4);     //= 11 deve retornar Bronze
// const nrsltdClclra = fnctn_KlcldrDPrtdasRnkds(56, 3);     //= 53 deve retornar Ouro
// const nrsltdClclra = fnctn_KlcldrDPrtdasRnkds(36, 7);     //= 29 deve retornar Prata
// const nrsltdClclra = fnctn_KlcldrDPrtdasRnkds(18, 9);     //= 09 deve retornar Ferro
// const nrsltdClclra = fnctn_KlcldrDPrtdasRnkds(92, 4);     //= 88 deve retornar Diamante
// const nrsltdClclra = fnctn_KlcldrDPrtdasRnkds(98, 5);     //= 93 deve retornar Lendário
const nrsltdClclra = fnctn_KlcldrDPrtdasRnkds(106, 2);     //= 104 deve retornar Imortal

console.log(nrsltdClclra)

function fnctn_KlcldrDPrtdasRnkds(cVtras, nDrrtas) {
    let nRsltdo = cVtras - nDrrtas;
    let cNvl;

    switch (true) {
        case nRsltdo <= 10: 
            cNvl = "Ferro";
            break;
        case nRsltdo <= 20: 
            cNvl = "Bronze"
            break;
        case nRsltdo <= 50:
            cNvl = "Prata";
            break;
        case nRsltdo <= 80:
            cNvl = "Ouro";
            break;
        case nRsltdo <= 90:
            cNvl = "Diamante";
            break;
        case nRsltdo <= 100:
            cNvl = "Lendário";
            break;
        case nRsltdo >= 101:
            cNvl = "Imortal";
            break;
    }
    const cFrse = `O Herói tem de saldo de ${nRsltdo} está no nível de ${cNvl}`;
    return cFrse;
}