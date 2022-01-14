const User = require("../models/User");

module.exports = {
    //register
    async store(req, res){
        try{
            const user = await User.create(req.body);
            if(user){
                return res.status(200).json(user);
            }
            return res.status(200).json({
                Status: "Não foi possível criar o usuário!"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    },
    //login
    async login(req, res){
        try{
            const user = await User.findOne({
                where: {
                    email: req.body.email
                },
                attributes: ['id', 'username', 'profile_picture', 'password']
            });
            if(user){
                if(user.password === req.body.password){
                    return res.status(200).json({
                        id: user.id, 
                        username: user.username, 
                        profile_picture: user.profile_picture
                    });
                }
                return res.status(200).json({
                    Status: "Senha incorreta!"
                })
            }
            return res.status(200).json({
                Status: "Usuário não cadastrado!"
            })
        } catch(err){
            return res.status(200).json({
                Status: "Erro interno, " + err
            })
        }
    }
}