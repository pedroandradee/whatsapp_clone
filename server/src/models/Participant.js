const { Model, Sequelize } = require('sequelize');

class Participant extends Model{
    static Init(sequelize){
        super.init({
            is_admin: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            }
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.Conversations, { foreignKey: 'conversation_id', as: 'chat' });
        this.hasMany(models.Messages, { foreignKey: 'own_id', as: 'messages'});
    }
}

module.exports = Participant;