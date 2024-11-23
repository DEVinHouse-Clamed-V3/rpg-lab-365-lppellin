import Personagem from "./Personagem";

export default class Inimigo extends Personagem {
    atacar(personagem: Personagem) {
        const chanceAcerto = Math.random()
        if (chanceAcerto < 0.5) {
            console.log('Ataque falhou')
        } else {
            personagem.receberDano(this.causarDano())
        }
    }

    comportamentoAleatorio(jogador: Personagem) {
        const acao = Math.random()
        if (acao < 0.5) {
            this.atacar(jogador)
        } else {
            console.log('Inimigo está esperando')
        }
    }

}