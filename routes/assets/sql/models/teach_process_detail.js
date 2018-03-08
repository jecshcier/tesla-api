/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teach_process_detail', {
    detail_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    process_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    detail_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    resource_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    file_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    file_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    file_ext_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    file_download_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    need_trans: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    trans_file_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trans_file_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trans_file_ext_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trans_file_download_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    detail_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    detail_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    detail_note: {
      type: DataTypes.STRING(500),
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
    }
  }, {
    tableName: 'teach_process_detail'
  });
};
