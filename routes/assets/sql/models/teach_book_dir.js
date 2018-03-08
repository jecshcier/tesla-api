/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teach_book_dir', {
    dir_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    book_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dir_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    parent_dir_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    yun_disk_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dir_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    page_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    start_page: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    end_page: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    insert_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '999999'
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
    tableName: 'teach_book_dir'
  });
};
