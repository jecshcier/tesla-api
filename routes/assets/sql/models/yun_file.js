/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yun_file', {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    file_name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    md5: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ext_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    file_size: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    snap_file_id: {
      type: DataTypes.STRING(50),
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
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'yun_file'
  });
};
