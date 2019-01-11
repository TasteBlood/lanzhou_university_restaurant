// pages/index/opinion/history/history.js
const $request = require('../request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },
  data2:{
    noMore:false,
    load:false,
    currentPage:1
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    this.loadData(this.data2.currentPage)
  },
  async loadData(pageNum){
    if(this.data2.load)
      return;
    this.data2.load = true;
    let res = await $request.getOpinions(pageNum, 50);
    console.log(res)
    if (res&&res.data) {
      if(res.data.isLastPage){
        this.data2.noMore = true;
      }else{
        this.data2.currentPage ++;
      }
      this.setData({
        dataList: pageNum === 1 ? res.data.list : this.data.dataList.concat(res.data.list)
      });
    }
    this.data2.load = false;
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
    if(this.data2.noMore)
      return;
    this.loadData(this.currentPage);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})