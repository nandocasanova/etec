const db = [
  {
    nome: "Camila 1",
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

const imagens = [
  "./imagens/imagem1.jpg",
  "./imagens/imagem2.jpg",
  "./imagens/imagem4.jpg",
  "./imagens/imagem5jpg.jpg",
  "./imagens/imagem6jpg.jpg",
]

const nomes = [
  "Emanuel Costela",
  "Caio Rezende",
  "Fernanda das Neves",
  "Levi da Costa",
  "Stella Teixeira",
]

class criaAvaliacao {
  static dom(obj) {
    const { nome, descricao, imagem } = obj

    const avaliacao = document.querySelector(".avaliacao")
    // avaliacao.innerHTML = ""
    const card = document.createElement("div")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const nomeSpan = document.createElement("span")
    const descricaoSpan = document.createElement("span")

    avaliacao?.appendChild(card)
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

function dbAvaliacao(array) {
  array.forEach((element) => {
    const newClass = new Avaliacao(element)
    criaAvaliacao.dom(newClass)
  })
}

dbAvaliacao(db)

const novaAvaliacao = (evt) => {
  //   // const inputValue = document.getElementById("descricao")
  //   // console.log(input)
  const inputValue = ""
  const numerosAleatorios = Math.floor(Math.random() * 4)
  const obj = {
    nome: nomes[numerosAleatorios],
    descricao: inputValue,
    imagem: imagens[numerosAleatorios],
  }
  const avaliacao = new Avaliacao(obj)
  db.shift()
  db.push(avaliacao)
  console.log(db)

  dbAvaliacao(db)
}

console.log(db)
const botaoAvaliacao = () => {
  const form = document.querySelector(".form")
  const botao = document.createElement("button")
  botao.classList.add("botaoEnviar")
  botao.innerText = "Enviar"
  form?.appendChild(botao)
  botao.addEventListener("click", novaAvaliacao)

  return botao
}

botaoAvaliacao()
