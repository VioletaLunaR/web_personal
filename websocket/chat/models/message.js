const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

class Message extends Model { }

Message.init(
    {
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        ts:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        sequelize,
        modeloName: 'message',
    }
);

Message.sync()

module.exports=Message;