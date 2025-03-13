import mongoose from "mongoose";

const contatosSchema = new mongoose.Schema({
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: {
        rua: { type: String, required: true },
        logradouro: { type: String},
        numero: { type: Number, required: true },
        bairro: { type: String},
        CEP: { type: Number, required: true },
    }
},{ _id: false })

export default contatosSchema