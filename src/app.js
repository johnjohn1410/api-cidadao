import express from 'express';
const app = express();
app.use(express.json())

const cidadao = [
    {
        "nome": "João",
        "idade": 25,
        "endereco": "Rua 1"
    }, 
    {
        "nome": "Maria",
        "idade": 30,
        "endereco": "Rua 2"
    }
]

function buscaPessoa(nome){
    return cidadao.findIndex(pessoa =>{
        return  pessoa.nome === nome
    })
}

app.get("/", (req, res) => {
    res.status(200).send("curso de node.js")
});
app.get("/cidadaos", (req, res) => {
    res.status(200).json(cidadao)
});
app.get("/cidadaos/:nome", (req, res) => {
    const index = buscaPessoa(req.params.nome)
    res.status(200).json(cidadao[index])
})
app.post("/cidadaos", (req, res) => {
    cidadao.push(req.body)
    res.status(201).send("Cidadão cadastrado")
})
app.put("/cidadaos/:nome", (req, res) => {
    const index = buscaPessoa(req.params.nome)
    cidadao[index] = req.body
    res.status(200).json(cidadao)
})
app.delete("/cidadaos/:nome", (req, res) => {
    const index = buscaPessoa(req.params.nome)
    cidadao.splice(index, 1)
    res.status(204).json(cidadao)
})

export default app

// mongodb+srv://<db_username>:<db_password>@cluster0.uk4ul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0