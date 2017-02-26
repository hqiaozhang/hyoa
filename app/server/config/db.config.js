/**
 * 数据库配置，包括连接数据库的URL和各个表名
 */
export default {
  dev: {
    host: 'localhost',
    port: '27017',
    username: '',
    password: '',
    database: 'hyoa'
  },
  production: {
    host: 'localhost',
    port: '27017',
    username: '',
    password: '',
    database: 'hyoa'
  },
  CONNECT_URL: 'mongodb://localhost:27017/hyoa',
  USER: 'users'
}