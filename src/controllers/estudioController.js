const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

const getAll = async (req, res) => {
    const estudios = await Estudio.find()
    res.status(200).json(estudios)
}

const createEstudio = async (req, res) => {
    const estudio = new Estudio({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm
    })

    const estudioJaExiste = await Estudio.findOne({ nome: req.body.nome })
    if (estudioJaExiste){
        return res.status(409).json({error:'Estudio já cadastrado!'})
    }
    try{
        const novoEstudio = await estudio.save()
        res.status(201).json(novoEstudio)

    } catch(err){
        res.status(400).json({message: err.message})
    }
}

const updateOne = async(req, res) => {
  
    try {
      const estudio = await Estudio.findById(req.params.id)
      if (estudio == null) {
        return res.status(404).json({message: "Estudio não encontrado!"})
      }
      if (req.body.nome != null) {
        estudio.nome = req.body.nome
      }
      const estudioAtualizado = await estudio.save()
      res.status(200).json(estudioAtualizado)
  
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  const deleteEstudio = async (req, res) => { 
    const idEstudio = req.params.id

    const validaEstudio = await Estudio.findOne({ _id: idEstudio})
    if(!validaEstudio) {
        res.status(404).json({ "message": "Estudio não referenciado por este id." })
    }
    else{
      try{
            Estudio.remove({ _id:idStudio} , function (err){
                if(!err) {
                    res.status(200).json( "Estudio deletado com sucesso!")
                }
                else{
                    res.status(400).json({ message: err.message })
                }
            })
        }
        catch (err){
            res.status(400).json({ message: err.message })
        }
    }
    
}
module.exports = {
    getAll, 
    createEstudio,
    updateOne,
    deleteEstudio
}
