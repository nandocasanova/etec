import {db} from "./db"
class criaAvaliacao {
    constructor({nome, descricao, imagem}) {
        this.nome      = nome
        this.descricao = descricao
        this.imagem    = imagem
    }
}
function dbAvaliacao() {
    
    db.forEach(element => {
        const newClass = new criaAvaliacao(element)
        criaAvaliacao.dom(newClass)
    })}
    export {dbAvaliacao}