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
        naturalidade:{ type:String},
        },
    CNH: {
        numero: { type: Number, required: true },
        data_de_emissao: { type: Date, required: true },
        categoria: { type: String, required: true }
        },
    Certidao_de_nascimento:{
        numero: { type: Number, required: true },
        data: { type: Date, required: true },
        hora: { type: String },
        naturalidade: { type: String },
        sexo: { type: String },
    }
},{ _id: false })

const cidadaoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required: true },
    gênero:{type: String, required: true },
    propriedade: {
        Tipo_de_bem: { type: String, required: true },
        Estado: { type: String, required: true },
        Valor: { type: Number, required: true },
        Legitimidade: { type: String, required: true }
    },
    contato: contatosSchema,
    documentos: documentosSchema
}, {versionKey : false});

const cidadao = mongoose.model('cidadaos-data', cidadaoSchema);

export default cidadao;