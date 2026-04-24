import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros (req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarLivroPorId (req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  };

  static async cadastrarLivro (req, res) {
      const novoLivro = req.body;
    try {
        const autorEncontrado = await autor.findById(novoLivro.autor);
        const livroComAutor = { ...novoLivro, autor: { ...autorEncontrado._doc} };
        const livroExistente = await livro.create(livroComAutor);
        if (livroExistente) {
            return res.status(400).json({ message: "Livro já cadastrado" });
        }  
        const criadoLivro = new livro(livroComAutor);
        await criadoLivro.save();   
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

  static async atualizarLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };

  static async listarLivroPorEditora (req, res) {
    try {
      const editora = req.query.editora;
      const livrosEncontradosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosEncontradosPorEditora);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição por editora` });
    }
  }; 
};

export default LivroController;