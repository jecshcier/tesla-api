const express = require('express');
const router = express.Router();
const sql = require('./assets/sql/sql')
const moment = require('moment')
const crypto = require('crypto')
const config = require('../config')

let system_key = crypto.createHash('sha1').update(config.system_key).digest('hex')

router.use((req, res, next) => {
  let token = req.body.token
  if (token === system_key || req.url === '/') {
    next()
    return
  }
  res.send({
    flag: false,
    message: '不正确的token',
    data: null
  })
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('api', {title: 'Express'});
});

//获取所有项目组
router.post('/getWholeProjectTeam', (req, res, next) => {
  sql.getWholeProjectTeam().then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
//获取某用户的项目组
router.post('/getUserGroups', (req, res, next) => {
  let userID = req.body.userID
  sql.getUserGroups(userID).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
//从某项目组中增加用户
router.post('/addUserInGroup', (req, res, next) => {
  console.log(req.body)
  let data = JSON.parse(req.body.data)
  sql.addUserInGroup(data).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
//从某项目组中删除用户
router.post('/deleteUserInGroup', (req, res, next) => {
  let userID = req.body.userID
  let groupID = req.body.groupID
  sql.deleteUserInGroup(userID, groupID).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
//创建新项目组
router.post('/createGroup', (req, res, next) => {
  let userID = req.body.userID
  let groupID = req.body.groupID
  let groupName = req.body.groupName
  sql.createGroup(groupID, groupName, userID).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
//获取某项目组中的所有用户
router.post('/getUsersInGroup', (req, res, next) => {
  let groupID = req.body.groupID
  sql.getUsersInGroup(groupID).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
//储存用户消息
router.post('/saveMessages', (req, res, next) => {
  console.log(req.body.userData)
  let userData = JSON.parse(req.body.userData)
  userData.updateTime = moment().format('YYYY-MM-DD HH:mm:ss')
  sql.saveMessages(userData).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
//获取项目组内消息队列 - 10条/页
router.post('/getGroupMessages', (req, res, next) => {
  let groupID = req.body.groupID
  let page = req.body.page
  sql.getGroupMessages(groupID, page).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
//获取用户日志
router.post('/getUserDaily', (req, res, next) => {

})
// 更新用户信息
router.post('/updateUser', (req, res, next) => {
  let user = req.body
  sql.updateUser(user).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})

// 获取所有用户
router.post('/getWholeUser', (req, res, next) => {
  sql.getWholeUser().then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})
// 更新用户最后登录时间
router.post('/saveUserUpdateTime', (req, res, next) => {
  let userID = req.body.userID
  sql.saveUserUpdateTime(userID).then((data) => {
    res.send(data)
  }, (data) => {
    console.log("错误 ------->")
    console.log(data)
    res.send(data)
  })
})

module.exports = router;
