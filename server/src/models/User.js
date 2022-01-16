const { Model, Sequelize } = require('sequelize');

class User extends Model{
    static Init(sequelize){
        super.init({
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "name",
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            profile_picture: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "noAvatar.png",
            }
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        //this.hasMany(models.Conversations, { foreignKey: 'own_id', as: 'conversations' });
        this.hasMany(models.Participant, { foreignKey: 'user_id', as: 'conversations' });
    }
}

module.exports = User;