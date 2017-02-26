
//引入mongoose库
import mongoose from 'mongoose'
import dbConfig from './db.config'
import env from './env.config'

console.log('数据库连接=' + dbConfig[env].host, env)

//mongodb连接地址，hyoa为数据库名称
//默认mongodb连接不需要密码
mongoose.connect('mongodb://' + dbConfig[env].host + ':' + dbConfig[env].port + '/' + dbConfig[env].database, {
	user: dbConfig[env].username,
	pass: dbConfig[env].password
})

export default mongoose