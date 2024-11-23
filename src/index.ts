import Arma from "./classes/Arma";
import Personagem from "./classes/Personagem";

const repulsor = new Arma('Repulsor', 'repulsores de energia do Iron Man', 30)
const martelo = new Arma('Mjolnir', 'martelo do Thor', 50)
const escudo = new Arma('Escudo', 'escudo do Capitão América', 20)

const tony = new Personagem('Tony Stark', 100, 10)
const steve = new Personagem('Steve Rogers', 100, 20)
const thor = new Personagem('Thor', 100, 30)

tony.equiparArma(repulsor)
steve.equiparArma(escudo)
thor.equiparArma(martelo)


