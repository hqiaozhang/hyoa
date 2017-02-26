
import express from 'express'
import md5 from 'md5'
import path from 'path'
import fs from 'fs'
import formidable from 'formidable'
import RestResult from '../RestResult'
import { getEntity } from '../models/dbHandle'
import { readExcelFile } from '../util'
import { getChartData, items, getUser, getItem, navs, noticeList } from './mockApi'
let router = express.Router()

export default function(io) {
    /**
   * 注册用户
   */
  router.post('/api/register', function(req, res) {
    let restResult = new RestResult()
    let userName = req.body.username
    let password = req.body.password
    let entity = getEntity('users')
    entity.findOne({ userName: userName }, '_id', function(err, user) {
      if(err) {
        restResult.code = RestResult.SERVER_EXCEPTION_ERROR_CODE
        restResult.msg = '服务器异常'
        return res.send(restResult)
      }
      console.log('用户名密码', userName, password)
      const newUser = {
        userName: userName,
        //真实情况需要使用md5加密
        password: password
      };
      entity.create(newUser, function(err, doc) {
          console.log('注册成功', doc)
          restResult.code = RestResult.NO_ERROR
          restResult.msg = doc
          return res.send(restResult)
      });
    })
  })

  router.post('/api/login', function(req, res) {
    let restResult = new RestResult()
    let userName = req.body.username
    let password = req.body.password
    console.log('加密密码：', password, md5(password))
    
    let entity = getEntity('users')
    console.log('query 对象',entity)
    entity.findOne({userName, password}, {password: 0}, function(err, user) {
      console.log('登录结果1', err, user)
      if(err) {
        restResult.code = RestResult.SERVER_EXCEPTION_ERROR_CODE
        restResult.msg = '服务器异常'
        res.send(restResult)
        return
      }
      if(!user) {
        restResult.code = RestResult.BUSINESS_ERROR_CODE
        restResult.msg = '用户名或密码错误'
        res.send(restResult)
        return
      }
      io.emit('login success', {online: user})
      // io.on('connection', function(socket) {
      //   online++
      //   socket.broadcast.emit('login success', {online: online})

      //   socket.on('disconnect', function() {
      //     online--
      //     socket.broadcast.emit('login success', {online: online})
      //   })
      // })

      //登录成功后存储在cookie中的token
      restResult.token = user._id
      restResult.result = user
      res.send(restResult)

      //更新最后登录时间
      entity.update({_id: user._id}, {$set: {
        lastLoginTime: new Date()
      }}).exec()
    })
  })

  // mock apis
  router.get('/api/charts', (req, res)=> {
    res.send(getChartData())
  })

  router.get('/api/newsList', (req, res)=> {
    res.send(items);
  })

   router.get('/api/noticeList', (req, res)=> {
    res.send(noticeList);
  })

  router.get('/api/navs/:id', (req, res)=> {
    res.send(navs());
  })

  router.get('/api/users/:id', (req, res)=> {
    res.send(getUser(req.params.id))
  })

  router.get('/api/newdetail/:id', (req, res)=> {
    res.send(getItem(req.params.id))
  })

  router.post('/api/uploaduserinfo', (req, res) => {
    console.log('文件信息', req.body, req.files, req.file)
    let form = new formidable.IncomingForm()
    let files = []
    let fields = []
    form.uploadDir = path.join(__dirname, '../../../files')
    console.log('上传目录：', path.join(__dirname, '../../../files'))
    form.keepExtensions = true
    form.on('filed', function(field, value) {
      console.log('filed')
      files.push([field, value])
    })
    .on('file', function(field, file) {
      console.log('files')
      files.push([field, file])
    })
    .on('end', function() {
      console.log('上传成功')
    })
    console.log('我擦')
    form.parse(req, function(err, fields, files) {
      console.log('解析File对象', fields, files)

      readExcelFile(files.file.path, function(data) {
        console.log('解析的数据', data)
        //将上传的用户信息插入用户表中
      })
    })
  })
  return router
}