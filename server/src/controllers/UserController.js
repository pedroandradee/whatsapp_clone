const User = require("../models/User");

module.exports = {
    //update
    async update(req, res){
        try{
            const user = await User.findByPk(req.params.id);
            if(user){
                await user.update(req.body);
                return res.status(200).json({
                    Status: "Usuário alterado!"
                })
            }
            return res.status(200).json({
                Status: "Usuário não encontrado!"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //delete
    async delete(req, res){
        try{
            const user = await User.findByPk(req.params.id);
            if(user){
                await user.destroy();
                return res.status(200).json({
                    Status: "Usuário deletado"
                })
            }
            return res.status(200).json({
                Status: "Usuário não encontrado!"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
}