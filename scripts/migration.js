const fs = require('fs');

// zh-CN
let shangJing = ["乾", "坤", "屯", "蒙", "需", "讼", "师", "比", "小畜", "履", "泰", "否", "同人", "大有", "谦", "豫", "随", "蛊", "临", "观", "噬嗑", "贲", "剥", "复", "无妄", "大畜", "颐", "大过", "坎", "离"];
let xiaJing = ["咸", "恒", "遯", "大壮", "晋", "明夷", "家人", "睽", "蹇", "解", "损", "益", "夬", "姤", "萃", "升", "困", "井", "革", "鼎", "震", "艮", "渐", "归妹", "丰", "旅", "巽", "兑", "涣", "节", "中孚", "小过", "既济", "未济"];
let guas = require('./zh-CN/64-gua-tmp.json')
let hm = Object.keys(guas).reduce((pre, key) => {
  const val = guas[key];
  pre[val.name] = {
    id: key,
    name: val.name,
    gua_ci: val.guaci,
    tuan_ci: val.tuan,
    da_xiang: val.xiang[0],
    yao_ci: val.yaoci,
    xiao_xiang: val.xiang.slice(1)
  };
  return pre;
}, {});

let result = shangJing.concat(xiaJing).map(key => hm[key]);
fs.writeFileSync('./zh-CN/64gua.json', JSON.stringify(result, null, 2));

// zh-TW
shangJing = ["乾", "坤", "屯", "蒙", "需", "訟", "師", "比", "小畜", "履", "泰", "否", "同人", "大有", "謙", "豫", "隨", "蠱", "臨", "觀", "噬嗑", "賁", "剝", "復", "無妄", "大畜", "頤", "大過", "坎", "離"];
xiaJing = ["鹹", "恒", "遯", "大壯", "晉", "明夷", "家人", "睽", "蹇", "解", "損", "益", "夬", "姤", "萃", "升", "困", "井", "革", "鼎", "震", "艮", "漸", "歸妹", "豐", "旅", "巽", "兌", "渙", "節", "中孚", "小過", "既濟", "未濟"];

guas = require('./zh-TW/64-gua-tmp.json')
hm = Object.keys(guas).reduce((pre, key) => {
  const val = guas[key];
  pre[val.name] = {
    id: key,
    name: val.name,
    gua_ci: val.guaci,
    tuan_ci: val.tuan,
    da_xiang: val.daxiang,
    yao_ci: val.yaoci,
    xiao_xiang: val.xiang
  };
  return pre;
}, {});

result = shangJing.concat(xiaJing).map(key => hm[key]);
fs.writeFileSync('./zh-TW/64gua.json', JSON.stringify(result, null, 2));
