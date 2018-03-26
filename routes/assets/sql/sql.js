const config = require('../../../config');
const moment = require('moment');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config['db_config'].databaseName, config['db_config'].username, config['db_config'].password, config['db_config'].options);
const USER_GROUP = require('./models/tesla_user_group')(sequelize, Sequelize);
const USER_GROUP_CONTENT = require('./models/tesla_group_content')(sequelize, Sequelize);
const USER = require('./models/tesla_user')(sequelize, Sequelize);
const GROUP = require('./models/tesla_group')(sequelize, Sequelize);
const uuid = require('node-uuid');
moment.locale('zh-cn');
console.log(sequelize.fn('NOW'));

const callbackModel = () => {
  return {
    flag: false,
    message: '',
    data: null
  }
}

module.exports = {
  updateUser: function(user) {
    console.log('user------>', user)
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      USER.findOne({
        attributes: [
          'user_id'
        ],
        where: {
          'user_id': user.userID
        }
      }).then((result) => {
        if (result) {
          return USER.update({
            'login_name': user.loginName,
            'nick_name': user.nickName,
            'role_type': user.identity,
            'power_id': user.powerID
          }, {
            where: {
              'user_id': user.userID
            }
          })
        } else {
          return USER.create({
            'user_id': user.userID,
            'login_name': user.loginName,
            'nick_name': user.nickName,
            'role_type': user.identity,
            'power_id': user.powerID,
            'create_time': moment().format('YYYY-MM-DD HH:mm:ss'),
            'update_time': moment().format('YYYY-MM-DD HH:mm:ss')
          })
        }
      }).then((result) => {
        return USER_GROUP.update({
          'userName': user.nickName
        }, {
          where: {
            'userID': user.userID
          }
        })
      }).then((result) => {
        info.flag = true
        info.message = "更新成功"
        resolve(info)
      }).catch((err) => {
        console.log(err)
        info.flag = false
        info.message = err
        reject(info)
      })
    })
  },

  // 获取所有用户
  getWholeUser: () => {
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      USER.findAll({
        attributes: ['user_id', 'login_name', 'nick_name']
      }).then(function(result) {
        if (result) {
          info.flag = true
          info.data = JSON.parse(JSON.stringify(result))
          info.message = '获取用户成功'
          resolve(info)
        } else {
          info.flag = false
          info.data = null
          info.message = "暂无数据"
          reject(info)
        }
      }).catch((err) => {
        console.log(err)
        info.flag = false
        info.data = null
        info.message = "数据库查找失败"
        reject(info)
      })
    })
  },
  // 更新用户最后登录时间
  saveUserUpdateTime: (userID) => {
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      USER.update({
        'update_time': moment().format('YYYY-MM-DD HH:mm:ss')
      }, {
        where: {
          'user_id': userID
        }
      }).then((result) => {
        info.flag = true
        info.message = "更新成功"
        resolve(info)
      }).catch((err) => {
        info.flag = false
        info.message = err
        resolve(info)
      })
    })
  },
  //获取所有项目组
  getWholeProjectTeam: function() {
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      GROUP.findAll().then((result) => {
        if (result) {
          info.flag = true
          info.message = "获取项目组成功"
          info.data = JSON.parse(JSON.stringify(result))
          resolve(info)
        } else {
          info.message = "获取项目组失败"
          reject(info);
        }
      })
    })
  },
  //获取某用户的项目组
  getUserGroups: function(userID) {
    console.log('userid ---> ' + userID)
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      USER_GROUP.findAll({
        attributes: [
          'groupName', 'groupID'
        ],
        where: {
          'userID': userID
        }
      }).then((result) => {
        if (result) {
          info.flag = true
          info.message = "获取项目组成功"
          info.data = JSON.parse(JSON.stringify(result))
          resolve(info)
        } else {
          info.message = "获取项目组失败"
          reject(info);
        }
      })
    })

  },
  //从某项目组中增加用户
  addUserInGroup: function(data) {
    console.log(data)
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      USER_GROUP.create({
        'userID': data.userID,
        'userName': data.userName,
        'groupID': data.groupID,
        'groupName': data.groupName
      }).then((result) => {
        let flag = JSON.stringify(result)
        if (flag) {
          info.flag = true
          info.message = "新增用户成功"
          info.data = JSON.parse(JSON.stringify(result))
          resolve(info)
        } else {
          info.message = "新增用户失败"
          reject(info);
        }
      }, (err) => {
        console.log(err)
        info.message = "新增用户失败"
        reject(info);
      });
    })
  },
  //从某项目组中删除用户
  deleteUserInGroup: function(userID, groupID) {
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      USER_GROUP.destroy({
        where: {
          'userID': userID,
          'groupID': groupID
        }
      }).then(function(result) {
        if (result) {
          info.flag = true
          info.message = "删除用户成功"
          info.data = JSON.parse(JSON.stringify(result))
          resolve(info)
        } else {
          info.message = "删除用户失败"
          reject(info);
        }
      })
    })

  },
  //创建新项目组
  createGroup: function(groupID, groupName, userID) {
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      GROUP.create({
        'groupID': groupID,
        'groupName': groupName,
        'createUser': userID
      }).then((result) => {
        console.log(result)
        if (result) {
          info.flag = true
          info.message = "创建新项目组成功"
          info.data = JSON.parse(JSON.stringify(result))
          resolve(info)
        } else {
          info.message = "创建新项目组失败"
          reject(info);
        }
      }, (err) => {
        console.log(err)
        info.message = "创建新项目组失败"
        reject(info);
      });
    })

  },
  //获取某项目组中的所有用户
  getUsersInGroup: function(groupID) {
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      USER_GROUP.findAll({
        attributes: [
          'userID', 'userName'
        ],
        where: {
          'groupID': groupID
        }
      }).then((result) => {
        if (result) {
          info.flag = true
          info.message = "获取用户成功"
          info.data = JSON.parse(JSON.stringify(result))
          resolve(info)
        } else {
          info.message = "获取用户失败"
          reject(info);
        }
      })
    })

  },
  //储存用户消息
  saveMessages: function(userData) {
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      USER_GROUP_CONTENT.create({
        'contentID': uuid.v1(),
        'groupID': userData.projectTeam["groupID"],
        'groupName': userData.projectTeam["groupName"],
        'userID': userData.userID,
        'userName': userData.userName,
        'message': userData.message,
        'updateTime': userData.updateTime
      }).then((result) => {
        if (result) {
          info.flag = true
          info.message = "储存消息成功"
          info.data = JSON.parse(JSON.stringify(result))
          resolve(info)
        } else {
          info.message = "储存消息失败"
          reject(info);
        }
      }, (err) => {
        console.log(err)
        info.message = "储存消息失败"
        reject(info);
      })
    })

  },
  //获取项目组内消息队列 - 10条/页
  getGroupMessages: function(groupID, page, messNum, callback) {
    let info = callbackModel()
    return new Promise((resolve, reject) => {
      page = parseInt(page) * parseInt(messNum);
      USER_GROUP_CONTENT.findAll({
        attributes: [
          'groupID', 'userID', 'userName', 'message', 'updateTime'
        ],
        order: 'updateTime DESC',
        where: {
          'groupID': groupID
        },
        offset: page,
        limit: parseInt(messNum)
      }).then((result) => {
        if (result) {
          let data = JSON.parse(JSON.stringify(result));
          console.log('长度:' + data.length);
          for (let i = data.length - 1; i >= 0; i--) {
            data[i].updateTime = moment(data[i].updateTime).format('YYYY-MM-DD HH:mm:ss');
          }
          info.flag = true
          info.message = "获取消息成功"
          info.data = data
          resolve(info)
        } else {
          info.message = "获取消息失败"
          reject(info);
        }
      })
    })

  },
  //获取用户日志
  getUserDaily: (flag) => {
    return new Promise(function(resolve, reject) {
      let info = callbackModel()
      let latestTime = ''
      if (flag === 'latest') {
        USER_GROUP_CONTENT.findOne({
          attributes: [
            'updateTime'
          ],
          where: {
            'groupID': 'ca803f69b8f5b77586d9a0c9d81215a1'
          },
          order: 'updateTime DESC'
        }).then((result) => {
          if (result) {
            let dataArr = JSON.parse(JSON.stringify(result))
            let nowTime = dataArr.updateTime
            latestTime = dataArr.updateTime
            let lTime = moment(nowTime).subtract(1, 'w').format('YYYY-MM-DD HH:mm:ss')
            return USER_GROUP_CONTENT.findAll({
              attributes: [
                'groupID', 'userID', 'userName', 'message', 'updateTime'
              ],
              order: 'updateTime ASC,userName ASC',
              where: {
                'groupID': 'ca803f69b8f5b77586d9a0c9d81215a1',
                'updateTime': {
                  $lte: nowTime,
                  $gte: lTime
                }
              }
            })
          } else {
            info.message = "暂无数据"
            info.data = null
            resolve(info)
            return false
          }
        }, (err) => {
          info.message = "数据库查询失败" + err
          reject(info)
          return false
        }).then((result) => {
          if (result) {
            let dataArr = JSON.parse(JSON.stringify(result))
            let data = {}
            dataArr.forEach((el, index) => {
              let date = moment(el.updateTime).format('YYYY-MM-DD-dddd')
              if (!data.hasOwnProperty(date)) {
                data[date] = {}
              }
              if (!data[date].hasOwnProperty(el.userName)) {
                let obj = data[date]
                  // 获取当天0点的秒数
                let atime = moment(el.updateTime).format('YYYY-MM-DD')
                atime = moment(atime).unix()
                  // 获取当天的时间
                let btime = moment(el.updateTime).unix()
                  // 计算差值，即获得了当天的时间换算成的秒数
                obj[el.userName] = {
                  time: btime - atime,
                  mess: el.message
                }
              }
            })
            console.log(data)
            info.latestTime = moment(latestTime).format('YYYY-MM-DD HH:mm:ss')
            info.flag = true
            info.message = "获取成功"
            info.data = data
            resolve(info)
          } else {
            info.flag = false
            info.message = "没有数据"
            info.data = null
            resolve(info)
          }
        }, (err) => {
          info.message = '数据库连接错误' + err
          reject(info)
        })
      } else {

      }
    })
  }
}