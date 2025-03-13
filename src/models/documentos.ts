import mongoose from "mongoose";

const documentosSchema = new mongoose.Schema({
    CPF: {
        _id:false,
        numero: {type: Number, required: true, unique:true },
        data_de_emissao: { type: Date, required: true },
        expedidor: { type: String, required: true }
    },
    RG: {
        numero: { type: Number, required: true },
        data_de_emissao: { type: Date, required: true },
        expedidor: { type: String, required: true },
        naturalidade:{ type:String, required: true },
        },
    CNH: {
        numero: { type: Number, required: true },
        data_de_emissao: { type: Date, required: true },
        categoria: { type: String, required: true }
        },
    Certidao_de_nascimento:{
        numero: { type: Number, required: true },
        data: { type: Date, required: true },
        hora: { type: String, required: true },
        naturalidade: { type: String, required: true },
        sexo: { type: String, required: true },
    }
},{ _id: false })

export default documentosSchema