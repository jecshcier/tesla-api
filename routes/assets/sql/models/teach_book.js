/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teach_book', {
    book_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    book_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    book_eep_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_isbn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_publisher: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    book_page_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    book_cover1_img_fileid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_cover2_img_fileid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_cover3_img_fileid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_pub_state: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    book_pub_user: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_pub_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    book_close_user: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_close_time: {
      type: DataTypes.DATE,
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
    tableName: 'teach_book'
  });
};
