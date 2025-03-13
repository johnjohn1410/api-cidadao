import mongoose from "mongoose";
import contatosSchema from "./contatos.js";
import documentosSchema from "./documentos.js";
const cidadaoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    gênero: { type: String, required: true },
    propriedade: {
        Tipo_de_bem: { type: String, required: true },
        Estado: { type: String, required: true },
        Valor: { type: Number, required: true },
        Legitimidade: { type: String, required: true }
    },
    contato: contatosSchema,
    documentos: documentosSchema
}, { versionKey: false });
const cidadao = mongoose.model('cidadaos-data', cidadaoSchema);
export default cidadao;
