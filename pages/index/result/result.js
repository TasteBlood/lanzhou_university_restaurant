// pages/index/result/result.js
const $request = require('../request.js');
const $likeRequest = require('../../index/like/request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishList:[]
  },
  keyWords:'',
  data2:{
    currentPage:1,
    noMore:false,
    load:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.keyWords = options.keyWords;
    //this.keyWords = "猪头";
    this.loadData(this.data2.currentPage);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //点击反馈
  adviceClick(e){
    console.log(e);
    let type = 1;
    let did = e.currentTarget.dataset.did;

    wx.navigateTo({
      url: `../opinion/opinion?type=${type}&id=${did}`,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function () {  
    
  },
  async loadData(pageNum){
    if (this.data2.load)
      return;
    this.data2.load = true;
    let res = await $request.getDishesByName(this.keyWords, pageNum);
    console.log(res);
    if (res && res.data) {
      if(res.data.isLastPage){
        this.data2.noMore = true;
      }else{
        this.data2.currentPage ++;
      }
      this.setData({
        dishList: pageNum===1?res.data.list:this.data.dishList.concat(res.data.list)
      });
    }
    this.data2.load = false;
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 当菜品点赞时
   */
  async onClickNum(e) {
    console.log(e)
    let item = e.target.dataset.item;
    let id = e.target.dataset.did;
    let type = e.target.dataset.type;
    let index = e.target.dataset.index;
    let click = item.organDishesDomains[0].click_num
    let res = await $likeRequest.clickNum(id, type);
    if (res) {
      if (res.code === 1) {
        wx.showToast({
          title: '点赞成功',
          icon: 'none'
        })
        let ele = `dishList[${index}].organDishesDomains[0].click_num`;
        this.setData({
          [ele]:click+=1
        })
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: '点赞失败',
        icon: 'none'
      })
    }
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
    this.loadData(this.data2.currentPage);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})