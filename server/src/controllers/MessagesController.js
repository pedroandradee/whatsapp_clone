const Messages = require("../models/Messages");

module.exports = {
    //create
    async store(req, res){
        try{
            const message = await Messages.create(req.body);
            if(message){
                return res.status(200).json({
                    Status: "Mensagem criada",
                    message
                })
            }
            return res.status(200).json({
                Status: "Não foi possível criar a mensagem"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
}