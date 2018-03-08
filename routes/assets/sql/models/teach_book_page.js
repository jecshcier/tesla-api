/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teach_book_page', {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    page_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    chapter_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    section_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    page_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'teach_book_page'
  });
};
