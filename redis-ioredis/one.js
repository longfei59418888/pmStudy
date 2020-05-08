const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    // username:'root',
    // password:'root',
    // database:'test',
    dialect: 'mysql', //方言
    // dialect:'mysql', //方言库
    // dialectModulePath:'mysql', //方言库路径
    // dialectOptions:'mysql', //方言参数
    // define:', //定义 model 模型属性
    // query:', //定义 query 属性
    // schema:', //定义协议
    // schema:', //定义协议
})
const person = sequelize.define('person', {
    name: Sequelize.STRING

})
const term = sequelize.define('term', {
    name: Sequelize.STRING,
    port: {
        type:Sequelize.STRING,
        unique:true,
    },
})
person.belongsTo(term,{
    targetKey:'port',
    foreignKey: 'fk_port',
})
sequelize.sync({
    force: true
})
























