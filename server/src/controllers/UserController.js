const { Op } = require("sequelize");
const User = require("../models/User");
module.exports = {
    //get
    async indexAll(req, res){
        try{
            const users = await User.findAll({
                where: { 
                    id: {
                        [Op.ne]: req.params.id
                    } 
                },
                attributes: ['id', 'username', 'profile_picture']
            });
            return res.status(200).json(users);
        }catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
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