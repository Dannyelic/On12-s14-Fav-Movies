const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getAllPixar = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
  res.json(titulosFiltrados)
}

const getAllGhibli = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Studio Ghibli")
  res.json(titulosFiltrados)
}

const getAllMarvel = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
  res.json(titulosFiltrados)
}

const getAll = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    res.status(200).json(titulos)
  }

const createTittle = async (req, res) => {
    const titulo = new Titulo({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      genero: req.body.genero,
      descricao: req.body.descricao,
      estudio: req.body.estudio,
      criadoEm: req.body.criadoEm
    })

const tituloJaExiste = await Titulo.findOne({ nome: req.body.nome})
    if(tituloJaExiste){
        return res.status(409).json({ error: "Titulo já existe!"})
    }
    try{
        const novoTitulo = await titulo.save()
        res.status(201).json(novoTitulo)
    } catch(err) {
        res.status(404).json({ message: err.message})
    }
}

const updateTitulo = async (req, res) => {
  try{
      const titulo =  await Titulo.findById(req.params.id)
      if(titulo == null){
          return res.status(404).json({ message: "Titulo não encontrado!"})
      }
      
      if( req.body.nome != null) {
          titulo.nome = req.body.nome
      }
      if( req.body.genero != null){
          titulo.genero = req.body.genero
      }
 
      const novoTitulo = await titulo.save()
      res.status(200).json(novoTitulo)
  }
  catch (err) {
      res.status(500).json({ message: err.message})
  }
}

const deleteTitulo = async (req, res) => {
  const idTitulo = req.params.id 
  const validaTitulo = await Titulo.findOne({ _id: idTitulo})
  if(!validaTitulo) {
      res.status(404).json({ message: "Titulo não referenciado por este id." })
  }
  else{
      try{
          Titulo.remove({ _id:idTitulo} , function (err){
              if(!err){
                  res.status(200).json( "Titulo deletado com sucesso!")
              }
              else{
                  res.status(400).json({ message: err.message })
              }
          })
      }catch (err){
          res.status(500).json({ message: err.message })
      }
  }
}

module.exports = {
    getAllPixar,
    getAllMarvel,
    getAllGhibli,
    getAll,
    createTittle,
    updateTitulo,
    deleteTitulo
}