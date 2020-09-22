const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

class Message extends Model { }

Message.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modeloName: 'message',
    }
);

Message.sync()

module.exports=Message;