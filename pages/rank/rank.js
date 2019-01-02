 const util = require('../../utils/util.js')
// pages/title/title.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // rank_item: [{
    //   rank: '1',
    //   name: '杨嘉煜',
    //   score: '得分：133'
    // }, {
    //   rank: '2',
    //   name: '罗小玲',
    //   score: '得分：133'
    // }, {
    //   rank: '3',
    //   name: '田荟',
    //   score: '得分：133'
    // }, {
    //   rank: '4',
    //   name: '海燕儿',
    //   score: '得分：133'
    // }, {
    //   rank: '5',
    //   name: '周占峰',
    //   score: '得分：132'
    // }, {
    //   rank: '6',
    //   name: '田玉莲',
    //   score: '得分：132'
    // }, {
    //   rank: '7',
    //   name: '田平',
    //   score: '得分：132'
    // }, {
    //   rank: '8',
    //   name: '海鸿',
    //   score: '得分：131'

    // }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onload: function(options) {
    var userName = option.userName;
    var mobile = option.mobile;
    var defen = option.defen;
    this.setData({
      userName: userName,
      defen: defen
    })
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.nannanwj.top/php/api.php',
      data: {
        action: 'get_rank',
        action: 'save_user',
        name: string,
        grade: number
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          get_rank: res.data,
          save_user: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

