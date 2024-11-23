import Arma from "./Arma";
import Inimigo from "./Inimigo";

export default class Personagem {
    private nome: string = ''
    private vida: number = 100
    private forca: number = 10
    private arma: Arma | null = null

    constructor(nome: string, vida: number = 100, forca: number = 10) {
        this.nome = nome
        this.vida = vida
        this.forca = forca
    }

    getNome() { return this.nome }
    getVida() { return this.vida }
    getForca() { return this.forca }
    getArma() { return this.arma }

    setNome(nome: string) { this.nome = nome }
    setVida(vida: number) { this.vida = vida }
    setForca(forca: number) { this.forca = forca }
    setArma(arma: Arma) { this.arma = arma }


    receberDano(dano: number) {
        this.vida = this.vida - dano
        if (this.vida <= 0) {
            console.log('Personagem ficou sem vida')
        } else {
            console.log(`${this.nome} recebeu ${dano} de dano e ficou com ${this.vida} de vida`)
        }
    }

    equiparArma(arma: Arma) {
        this.arma = arma
        // console.log(this.nome + ": " + this.arma.getNome() + ' Equipado')
    }

    protected causarDano() {
        if (this.arma === null) {
            return this.forca
        } else {
            return this.forca + this.arma.getDano()
        }
    }

    private calcularDano(): number {
        return this.forca + (this.arma ? this.arma.getDano() : 0);
    }

    atacar(personagem: Inimigo) {
        const chanceAcerto = Math.random()
        if (chanceAcerto < 0.5) {
            console.log('Ataque falhou')
        } else {
            personagem.receberDano(this.causarDano())
        }
    }

}
