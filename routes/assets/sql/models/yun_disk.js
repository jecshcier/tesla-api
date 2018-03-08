/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yun_disk', {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    dir_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    pub_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    parent_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    file_ext_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    file_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    size: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tag_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    search_word: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    order_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '999999'
    },
    snap_file_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    preview_file_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    h5media_file_id: {
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
      allowNull: true,
      defaultValue: '0'
    },
    md5: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'yun_disk'
  });
};
