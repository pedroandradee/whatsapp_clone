const { Model, Sequelize } = require('sequelize');

class Conversations extends Model{
    static Init(sequelize){
        super.init({
            description: {
                type: Sequelize.STRING,
                allowNull: true
            }
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'own_id', as: 'own'});
        this.hasMany(models.Participant, { foreignKey: 'conversation_id', as: 'participants' });
        this.hasMany(models.Messages, { foreignKey: 'conversation_id', as: 'messages' });
    }
}

module.exports = Conversations;