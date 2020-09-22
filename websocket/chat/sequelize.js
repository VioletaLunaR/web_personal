const {Sequelize} = require('sequelize');

const sequelize =new Sequelize('database', '','',
{
  dialect:'sqlite',
  storage: './database/dabase.sqlite',  
});

 
sequelize.authenticate().then(()=>{
    console.log('Conexión exitosa');
});

module.exports=sequelize;