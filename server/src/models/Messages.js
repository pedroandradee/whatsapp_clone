const { Model, Sequelize } = require('sequelize');

class Messages extends Model{
    static Init(sequelize){
        super.init({
            text: {
                type: Sequelize.STRING,
                allowNull: false,
            }
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models.Conversations, { foreignKey: 'conversation_id', as: 'chat' });
        this.belongsTo(models.Participant, { foreignKey: 'own_id', as: 'own' });
    }
}

module.exports = Messages;