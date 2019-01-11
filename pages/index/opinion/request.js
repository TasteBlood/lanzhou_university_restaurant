const http = require('../../../utils/http.js');

/**
 * 发表意见
 * @param content 内容 
 * @param type 类型 1 菜品  2 工作人员
 * @param id id
 */
const addOpinion = async(content,type,id)=>{
  try{
    return await http.post('/weixin/saveOpinion',{content:content,type:type,objectId:id});
  }catch(e){
    return null;
  }
};

/**
 * 获取全部的意见列表
 */
const getOpinions = async(pageNum,pageSize)=>{
  try{
    return await http.post('/weixin/getOpinion',{pageNum:pageNum,pageSize:pageSize});
  }catch(e){
    return null;
  }
};

module.exports = { addOpinion, getOpinions};