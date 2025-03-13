import cidadao from "../models/cidadao.js";
class CidadaoController {
    static async listarCidadaos(req, res) {
        try {
            const listaCidadaos = await cidadao.find({});
            res.status(200).json(listaCidadaos);
        }
        catch (error) {
            res.status(500).json({ message: `${error.message} falha na requisição` });
        }
    }
    static async listarCidadaoPorCpf(req, res) {
        try {
            const cpf = req.params.cpf;
            const cidadaoEncontrado = await cidadao.findOne({ "documentos.CPF.numero": cpf });
            res.status(200).json(cidadaoEncontrado);
        }
        catch (error) {
            res.status(500).json({ message: `${error.message} falha na requisição do cidadão` });
        }
    }
    static async atualizarCidadao(req, res) {
        try {
            const cpf = req.params.cpf;
            await cidadao.findOneAndReplace({ "documentos.CPF.numero": cpf }, req.body, { new: true, runValidators: true });
            res.status(200).json("Cidadão atualizado");
        }
        catch (error) {
            res.status(500).json({ message: `${error.message} falha na atualização do cidadão` });
        }
    }
    static async cadastrarCidadao(req, res) {
        try {
            const novoCidadao = await cidadao.create(req.body);
            res.status(201).json({ message: "Cidadão criado com sucesso!", cidadao: novoCidadao });
        }
        catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar cidadão` });
        }
    }
    static async excluirCidadão(req, res) {
        try {
            const cpf = req.params.cpf;
            await cidadao.findOneAndDelete({ "documentos.CPF.numero": cpf }, req.body);
            res.status(200).json("Cidadão deletado");
        }
        catch (error) {
            res.status(500).json({ message: `${error.message} falha na deleção do cidadão` });
        }
    }
}
export default CidadaoController;
