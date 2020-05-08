'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: '会员资料自增id',
        type: Sequelize.INTEGER
      },
      email:{
        allowNull: false,
        comment: '会员邮箱',
        type: Sequelize.STRING
      },
      userName:{
        allowNull: false,
        comment: '用户账号',
        type: Sequelize.STRING
      },
      password:{
        allowNull: false,
        comment: '用户密码',
        type: Sequelize.STRING
      },
      question:{
        allowNull: false,
        comment: '安全问题答案',
        type: Sequelize.STRING
      },
      answer:{
        allowNull: false,
        comment: '安全答案',
        type: Sequelize.STRING
      },
      sex:{
        allowNull: false,
        comment: '性别，0，保密；1，男；2，女',
        type: Sequelize.BOOLEAN
      },
      birthday:{
        allowNull: false,
        defaultValue: '0000-00-00',
        comment: '生日日期',
        type: Sequelize.STRING
      },
      userMoney:{
        allowNull: false,
        defaultValue: '0.00',
        comment: '用户现有资金',
        type: Sequelize.DECIMAL(10, 2)
      },
      frozenMoney:{
        allowNull: false,
        defaultValue: '0.00',
        comment: '用户冻结资金',
        type: Sequelize.DECIMAL(10, 2)
      },
      payPoints:{
        allowNull: false,
        defaultValue: '0',
        comment: '消费积分',
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      rankPoints:{
        allowNull: false,
        defaultValue: '0',
        comment: '会员等级积分',
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      addressId:{
        allowNull: false,
        defaultValue: '0',
        comment: '收货信息id，取值表ecs_user_address',
        references: {
          model: 'user-address', // name of Target model
          key: 'id', // key in Target model that we're referencing
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      regTime:{
        allowNull: false,
        defaultValue: '0',
        comment: '注册时间',
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      lastLogin:{
        allowNull: false,
        defaultValue: '0',
        comment: '最后一次登录时间',
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      lastIp:{
        allowNull: false,
        comment: '最后一次登录ip',
        type: Sequelize.STRING
      },
      // userRank:{
      //   allowNull: false,
      //   defaultValue: '0',
      //   comment: '会员等级id，取值ecs_user_rank',
      //   references: {
      //     model: 'userRank', // name of Target model
      //     key: 'id', // key in Target model that we're referencing
      //     onUpdate: 'CASCADE',
      //     onDelete: 'CASCADE',
      //   },
      //   type: Sequelize.INTEGER(3)
      // },
      parentId:{
        allowNull: false,
        defaultValue: '0',
        comment: '推荐人会员id，',
        type: Sequelize.INTEGER
      },
      aliasName:{
        allowNull: false,
        comment: '昵称',
        type: Sequelize.STRING
      },
      mobilePhone:{
        allowNull: false,
        comment: '手机',
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      underscored: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
