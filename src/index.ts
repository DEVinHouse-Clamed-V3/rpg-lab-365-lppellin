import Arma from "./classes/Arma";
import Inimigo from "./classes/Inimigo";
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

const caveira = new Inimigo('Caveira Vermelha', 100, 20)
const thanos = new Inimigo('Thanos', 100, 30)
const loki = new Inimigo('Loki', 100, 20)

const espada = new Arma('Espada', 'espada de Thanos', 40)
const cetro = new Arma('Cetro', 'cetro de Loki', 30)
const manopla = new Arma('Manopla', 'manopla do infinito', 100)

const armas = [espada, cetro, manopla]
thanos.equiparArma(armas[Math.floor(Math.random() * armas.length)])
console.log(thanos.getArma())

// thanos.equiparArma(manopla)
thanos.atacar(tony)

tony.equiparArma(manopla)
tony.atacar(thanos)

loki.equiparArma(cetro)
loki.atacar(thor)

thor.atacar(caveira)

steve.equiparArma(escudo)
steve.atacar(caveira)


const spiderman = new Personagem('Peter Parker', 100, 20)
const lancadorTeia = new Arma('Lançador de teias', 'Lança teias variadas, tecnologia Stark', 20)

const lagarto = new Inimigo('Lagarto', 100, 27)

spiderman.equiparArma(lancadorTeia)

spiderman.atacar(lagarto)    