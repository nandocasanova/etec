const db = [
  {
    nome: "Camila Soares",
    descricao: "descrição padrao",
    imagem: "./imagens/imagem1.jpg",
  },
  {
    nome: "Camila 2",
    descricao: "descrição padrao",
    imagem: "./imagens/imagem2.jpg",
  },
  {
    nome: "Camila 3",
    descricao: "descrição padrao",
    imagem: "./imagens/imagem4.jpg",
  },
  {
    nome: "Camila 4",
    descricao: "descrição padrao",
    imagem: "./imagens/imagem5jpg.jpg",
  },
  {
    nome: "Camila 5",
    descricao: "descrição padrao",
    imagem: "./imagens/imagem6jpg.jpg",
  },
]

class criaAvaliacao {
  static dom(obj) {
    const { nome, descricao, imagem } = obj

    const avaliacao = document.querySelector(".avaliacao")
    const card = document.createElement("div")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const nomeSpan = document.createElement("span")
    const descricaoSpan = document.createElement("span")

    avaliacao.appendChild(card)
    card.appendChild(figure)
    figure.appendChild(img)
    card.appendChild(nomeSpan)
    card.appendChild(descricaoSpan)

    nomeSpan.innerText = nome
    descricaoSpan.innerText = descricao

    img.setAttribute("src", imagem)
  }
}

class Avaliacao {
  constructor({ nome, descricao, imagem }) {
    this.nome = nome
    this.descricao = descricao
    this.imagem = imagem
  }
}

function dbAvaliacao() {
  db.forEach((element) => {
    const newClass = new Avaliacao(element)
    criaAvaliacao.dom(newClass)
  })
}

dbAvaliacao()

export { db, Avaliacao }
