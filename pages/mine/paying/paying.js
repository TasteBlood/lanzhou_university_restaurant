// pages/mine/paying/paying.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalFee:0.00,
    totalFeeFen:0,
    orderNum:'',
    orderId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      totalFee: options.totalFee,
      totalFeeFen: Number.parseInt(options.totalFee*100),
      orderNum: options.orderNum,
      orderId: options.orderId
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  async buy(){

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