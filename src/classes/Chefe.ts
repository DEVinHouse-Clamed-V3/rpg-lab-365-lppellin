import Inimigo from "./Inimigo";
import Personagem from "./Personagem";

export default class Chefe extends Inimigo {

    atacar(personagem: Personagem) {
        const chanceAcerto = Math.random()
        if (chanceAcerto < 0.5) {
            console.log('Ataque falhou')
        } else {
            personagem.receberDano(this.causarDano() * 2)
        }
    }

}