/**
 * 数据表结构
 * @author baizn
 * @date 2017-02-07
 */

export default {
  /**
   * 人员信息表
   * serialNumber：序号
   * userName：用户名
   * name：真实姓名
   * gender：性别
   * jobNumber：工号
   * entryDate：入职日期
   * positiveDate：转正日期
   * contractExpired：合约到期
   * lenOfService：工龄
   * position: 职位
   * mobile：联系方式，填手机号码
   * email：电子邮箱
   * cardID: 身份证号码
   * birthday: 出生日期
   * banks: 开户行
   * bankCardNumber: 银行卡号
   * birthPlace: 籍贯
   * address: 现居住地址
   * accountLocation: 户口所在地
   * natureOfAccount: 户口性质
   * education: 学历
   * graduatedSchool: 毕业院校
   * profession: 专业
   * certificates: 所获证书
   * password：密码，需要采用MD5加密
   * department：部门/中心
   * role：角色
   * lastLoginTime：最后登录时间
   * createTime：录入用户信息时间
   */
  users: {
    serialNumber: String,
    userName: String,
    name: String,
    gender: String,
    jobNumber: String,
    entryDate: String,
    positiveDate: String,
    contractExpired: String,
    lenOfService: String,
    position: String,
    mobile: String,
    email: String,
    cardID: String,
    birthday: String,
    banks: String,
    bankCardNumber: String,
    birthPlace: String,
    address: String,
    accountLocation: String,
    natureOfAccount: String,
    education: String,
    graduatedSchool: String,
    profession: String,
    certificates: String,
    password: String,
    department: String,
    role: String,
    lastLoginTime: Date,
    createTime: {
      type: Date,
      default: Date.now
    }
  }
}