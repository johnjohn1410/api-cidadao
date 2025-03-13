import cidadao from "../models/cidadao.js";
import { Request, Response } from 'express';

class CidadaoController {

    static async listarCidadaos(req: Request, res: Response) {
        try {
            const listaCidadaos = await cidadao.find({});
            res.status(200).json(listaCidadaos)
        } catch (error: any) {
            res.status(500).json({message: `${error.message} falha na requisição`})
        }
    }
    static async listarCidadaoPorCpf(req: Request, res: Response) {
        try {
            const cpf = req.params.cpf;
            const cidadaoEncontrado = await cidadao.findOne({"documentos.CPF.numero":cpf});
            res.status(200).json(cidadaoEncontrado)
        } catch (error: any) {
            res.status(500).json({message: `${error.message} falha na requisição do cidadão`})
        }
    }

    static async atualizarCidadao(req: Request, res: Response) {
        try {
            const cpf = req.params.cpf;
            await cidadao.findOneAndReplace({"documentos.CPF.numero":cpf}, req.body, {new: true, runValidators: true })
            res.status(200).json("Cidadão atualizado")
        } catch (error: any) {
            res.status(500).json({message: `${error.message} falha na atualização do cidadão`})
        }
    }

    static async cadastrarCidadao(req: Request, res: Response) {
        try{
            const novoCidadao = await cidadao.create(req.body);
            res.status(201).json({message: "Cidadão criado com sucesso!", cidadao: novoCidadao})
        }catch(error: any){
            res.status(500).json({message:`${error.message} - falha ao cadastrar cidadão`})
        }
    }

    static async excluirCidadão(req: Request, res: Response) {
        try {
            const cpf = req.params.cpf;
            await cidadao.findOneAndDelete({"documentos.CPF.numero":cpf}, req.body)
            res.status(200).json("Cidadão deletado")
        } catch (error: any) {
            res.status(500).json({message: `${error.message} falha na deleção do cidadão`})
        }
        
    }
    
}

export default CidadaoController;