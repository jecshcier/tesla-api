/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teach_process', {
    process_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    book_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    book_chapter_dir_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_chapter_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    book_chapter_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    book_section_dir_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_section_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    book_section_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    page_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    page_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    detail_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    process_name: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    process_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    process_note: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pos_x: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    pos_y: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
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
    tableName: 'teach_process'
  });
};
