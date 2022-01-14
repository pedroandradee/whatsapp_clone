const Conversations = require("../models/Conversations");
const sequelize = require("sequelize");

module.exports = {
    //create
    async store(req, res){
        try{
            const conversation = await Conversations.create(req.body,{
                include: [
                    {
                        association: 'participants'
                    },
                    {
                        association: 'messages'
                    }
                ]
            });
            if(conversation){
                return res.status(200).json({
                    Status: "Conversa criada",
                    conversation
                })
            }
            return res.status(200).json({
                Status: "Não foi possível criar a conversa"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //read one(id por params é o id da conversa)
    async index(req, res){
        try{
            const conversation = await Conversations.findByPk(req.params.id, {
                include: [
                    {
                        association: 'participants',
                        attributes: ['id', 'is_admin'],
                        include: {
                            association: 'user',
                            attributes: ['id', 'username']
                        }
                    },
                    {
                        association: 'messages',
                        include: {
                            association: 'own',
                            attributes: ['user_id'],
                            include: {
                                association: 'user',
                                attributes: ['id', 'username']
                            }
                        }
                    }
                ]
            });
            if(conversation){
                return res.status(200).json({
                    Status: "Conversa encontrada!",
                    conversation
                })
            }
            return res.status(200).json({
                Status: "Conversa não encontrada!"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //read all(id do params é o id do usuário)
    async indexAll(req, res){
        try{
            /*const conversations = await Conversations.findAll({
                include: [
                    {
                        association: 'participants',
                        where: { user_id: req.params.id },
                        attributes: ['id', 'is_admin', 'user_id']
                    },{
                        association: 'messages',
                        attributes: ['id', 'text', 'own_id', 'created_at'],
                        include: {
                            association: 'own',
                            attributes: ['id', 'is_admin', 'user_id'],
                            include: {
                                association: 'user',
                                attributes: ['username', 'profile_picture']
                            }
                        }
                    }
                ],
                attributes: ['id', 'description', 'own_id']
            })*/

            const search = await Conversations.findAll({
                attributes: ['id'],
                include: {
                    association: 'participants',
                    where: { user_id: req.params.id },
                    attributes: []
                }
            });
            let values = [];
            search.map(s=>(values.push(s.id)));
            const conversations = await Conversations.findAll({
                attributes: ['id', 'description', 'own_id'],
                where: { id : values},
                include: [
                    {
                        association: 'participants',
                        attributes: ['id', 'is_admin', 'user_id'],
                        include: {
                            association: 'user',
                            attributes: ['username', 'profile_picture']
                        }
                    },{
                        association: 'messages',
                        attributes: ['id', 'text', 'own_id', 'created_at'],
                        include: {
                            association: 'own',
                            attributes: ['id', 'is_admin', 'user_id'],
                            
                        }
                    }
                ],
            })
            if(conversations){
                return res.status(200).json(conversations)
            }
            return res.status(200).json({
                Status: "Nenhuma mensagem encontrada!"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //update
    async delete(req, res){
        try{
            const conversation = await Conversations.findByPk(req.params);
            if(conversation){
                await Conversations.destroy();
                return res.status(200).json({
                    Status: "Conversa encerrada!"
                })
            }
            return res.status(200).json({
                Status: "Conversa não encontrada!"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
}