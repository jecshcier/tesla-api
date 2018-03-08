/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yun_user', {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    login_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    screen_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    real_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    role_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    gender: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password_salt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    province_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    district_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    school_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_verity: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    last_login_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_login_ip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ext_info1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ext_info2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ext_info3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ext_info4: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ext_info5: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    create_user: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    update_user: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    del_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    grade: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'yun_user'
  });
};
