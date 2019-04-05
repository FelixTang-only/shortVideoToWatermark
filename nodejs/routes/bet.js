const express = require('express');
const router = express.Router();

router.post('/alltype', (req, res) => {
  res.json({
    "Data": [{
        "type": "shf_10",
        "name": "十分赛车",
        "is_hot": "2",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_10.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "pkliuhecai",
        "name": "PK极速六合彩",
        "is_hot": "2",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/pkliuhecai.png",
        "ltype": "yb",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "az_10",
        "name": "澳洲pk拾",
        "is_hot": "2",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/az_10.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "xyft",
        "name": "幸运飞艇",
        "is_hot": "2",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/xyft.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "wf_10",
        "name": "五分赛车",
        "is_hot": "2",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_10.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "yxxsb",
        "name": "鱼虾蟹骰宝",
        "is_hot": "2",
        "order_by": "107",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/yxxsb.png",
        "ltype": "xyx",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "fc_3d",
        "name": "福彩3D",
        "is_hot": "2",
        "order_by": "101",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/fc3d.png",
        "ltype": "yb",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "jsliuhecai",
        "name": "极速六合彩",
        "is_hot": "2",
        "order_by": "86",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/jsliuhecai.png",
        "ltype": "yb",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "dj_28",
        "name": "东京28",
        "is_hot": "2",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/dj_28.png",
        "ltype": "xy",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "jsfc",
        "name": "极速赛车",
        "is_hot": "2",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/jsfc.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "ffc_o",
        "name": "分分彩",
        "is_hot": "2",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/ffc_o.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "dj_kl8",
        "name": "东京快乐8",
        "is_hot": "2",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/dj_kl8.png",
        "ltype": "klc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "xjp_kl8",
        "name": "新加坡快乐8",
        "is_hot": "2",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/xjp_kl8.png",
        "ltype": "klc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "xjp_28",
        "name": "新加坡28",
        "is_hot": "2",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/xjp_28.png",
        "ltype": "xy",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "wf_k3",
        "name": "五分快3",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_k3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "shf_k3",
        "name": "十分快3",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_k3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "shf_ssc",
        "name": "十分时时彩",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_ssc.png",
        "ltype": "ssc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "yf_k3",
        "name": "一分快3",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/yf_k3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "wf_ssc",
        "name": "五分时时彩",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_ssc.png",
        "ltype": "ssc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "wf_ten",
        "name": "PK快乐五分",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_ten.png",
        "ltype": "sf",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "sf_ssc",
        "name": "三分时时彩",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/sf_ssc.png",
        "ltype": "ssc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "shf_ten",
        "name": "PK快乐十分",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_ten.png",
        "ltype": "sf",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "sf_k3",
        "name": "三分快3",
        "is_hot": "1",
        "order_by": "115",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/sf_k3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "jsk3",
        "name": "极速快三",
        "is_hot": "1",
        "order_by": "113",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/jsk3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "jl_k3",
        "name": "吉林快三",
        "is_hot": "1",
        "order_by": "113",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/jl_k3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "nm_k3",
        "name": "内蒙快三",
        "is_hot": "1",
        "order_by": "113",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/nm_k3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "hb_k3",
        "name": "河北快三",
        "is_hot": "1",
        "order_by": "113",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/hb_k3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "jl_11",
        "name": "吉林11选5",
        "is_hot": "1",
        "order_by": "111",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/jl_11.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "nm_11",
        "name": "内蒙11选5",
        "is_hot": "1",
        "order_by": "111",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/nm_11.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "hb_11",
        "name": "河北11选5",
        "is_hot": "1",
        "order_by": "111",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/hb_11.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "xydzp",
        "name": "幸运大转盘",
        "is_hot": "1",
        "order_by": "109",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/xydzp.png",
        "ltype": "xyx",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "dbqb",
        "name": "夺包奇兵",
        "is_hot": "1",
        "order_by": "105",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/dbqb.png",
        "ltype": "xyx",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "sxzl",
        "name": "生肖转乐",
        "is_hot": "1",
        "order_by": "103",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/sxzl.png",
        "ltype": "xyx",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "hcfy",
        "name": "豪车风云",
        "is_hot": "1",
        "order_by": "102",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/hcfy.png",
        "ltype": "xyx",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "pl_3",
        "name": "排列三",
        "is_hot": "1",
        "order_by": "99",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/pl3.png",
        "ltype": "yb",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "is_hot": "1",
        "order_by": "98",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "ltype": "yb",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "cq_ssc",
        "name": "重庆时时彩",
        "is_hot": "1",
        "order_by": "97",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/cqssc.png",
        "ltype": "ssc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "tj_ssc",
        "name": "天津时时彩",
        "is_hot": "1",
        "order_by": "96",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/tjssc.png",
        "ltype": "ssc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "xj_ssc",
        "name": "新疆时时彩",
        "is_hot": "1",
        "order_by": "95",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/xjssc.png",
        "ltype": "ssc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "bj_10",
        "name": "北京赛车pk拾",
        "is_hot": "1",
        "order_by": "94",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/bjpks.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "ah_k3",
        "name": "安徽快3",
        "is_hot": "1",
        "order_by": "93",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/ahk3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "gx_k3",
        "name": "广西快3",
        "is_hot": "1",
        "order_by": "91",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/gxks.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "js_k3",
        "name": "江苏快3",
        "is_hot": "1",
        "order_by": "90",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/js_k3.png",
        "ltype": "k3",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "gd_ten",
        "name": "广东快乐十分",
        "is_hot": "1",
        "order_by": "89",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/gdklsf.png",
        "ltype": "sf",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "cq_ten",
        "name": "重庆快乐十分",
        "is_hot": "1",
        "order_by": "88",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/cqklsf.png",
        "ltype": "sf",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "gd_11",
        "name": "广东11选5",
        "is_hot": "1",
        "order_by": "87",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/gdsyx5.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "sd_11",
        "name": "山东11选5",
        "is_hot": "1",
        "order_by": "86",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/sdsyx5.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "bj_28",
        "name": "PK北京28",
        "is_hot": "1",
        "order_by": "86",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/pk28.png",
        "ltype": "xy",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "jx_11",
        "name": "江西11选5",
        "is_hot": "1",
        "order_by": "85",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/jxsyx5.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "bj_kl8",
        "name": "北京快乐8",
        "is_hot": "1",
        "order_by": "84",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/bjkl8.png",
        "ltype": "klc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "dm_klc",
        "name": "丹麦快乐彩",
        "is_hot": "1",
        "order_by": "82",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/dmklc.png",
        "ltype": "klc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "pc_28",
        "name": "PC蛋蛋",
        "is_hot": "1",
        "order_by": "80",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/pcdd.png",
        "ltype": "xy",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "dm_28",
        "name": "丹麦28",
        "is_hot": "1",
        "order_by": "78",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/dm28.png",
        "ltype": "xy",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "wfliuhecai",
        "name": "五分六合彩",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/wfliuhecai.png",
        "ltype": "yb",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "js_ten",
        "name": "极速快乐十分",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/js_ten.png",
        "ltype": "sf",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "hn_ten",
        "name": "湖南快乐十分",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/hn_ten.png",
        "ltype": "sf",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "fj_11",
        "name": "福建11选5",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/fj_11.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "gx_11",
        "name": "广西11选5",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/gx_11.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "js_11",
        "name": "极速11选5",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/js_11.png",
        "ltype": "11",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "mg_o",
        "name": "美国45秒彩",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/mg_o.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "dj_o",
        "name": "东京1.5分彩",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/dj_o.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "els_o",
        "name": "俄罗斯1.5分彩",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/els_o.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      },
      {
        "type": "lfc_o",
        "name": "两分彩",
        "is_hot": "1",
        "order_by": "0",
        "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/lfc_o.png",
        "ltype": "gpc",
        "is_wh": 1,
        "wh_content": "",
        "is_like": 1
      }
    ],
    "ErrorCode": 1,
    "ErrorMsg": "获取数据成功"
  });
  res.end();
});

router.post('/quotas', (req, res) => {
  const sendData = {
    "fc_type": "fc_3d",
    "token": "1d105919cd37dbec9babbcaa5eddf5c9",
  }
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "获取数据成功",
    "Data": [{
        "id": "1",
        "fc_type": "fc_3d",
        "fc_name": "福彩3D",
        "gameplay": "first_ball",
        "name": "第一球",
        "limit_min": "1",
        "single_field_max": "50000",
        "single_note_max": "50000",
        "status": "1",
        "sort": "2",
        "iscustom": 0,
        "rakeback": "0.00%"
      },
      {
        "id": "2",
        "fc_type": "fc_3d",
        "fc_name": "福彩3D",
        "gameplay": "second_ball",
        "name": "第二球",
        "limit_min": "1",
        "single_field_max": "50000",
        "single_note_max": "50000",
        "status": "1",
        "sort": "4",
        "iscustom": 0,
        "rakeback": "0.00%"
      },
      {
        "id": "3",
        "fc_type": "fc_3d",
        "fc_name": "福彩3D",
        "gameplay": "third_ball",
        "name": "第三球",
        "limit_min": "1",
        "single_field_max": "50000",
        "single_note_max": "50000",
        "status": "1",
        "sort": "6",
        "iscustom": 0,
        "rakeback": "0.00%"
      },
      {
        "id": "6",
        "fc_type": "fc_3d",
        "fc_name": "福彩3D",
        "gameplay": "gallbladder_ball",
        "name": "独胆",
        "limit_min": "1",
        "single_field_max": "50000",
        "single_note_max": "50000",
        "status": "1",
        "sort": "8",
        "iscustom": 0,
        "rakeback": "0.00%"
      },
      {
        "id": "4",
        "fc_type": "fc_3d",
        "fc_name": "福彩3D",
        "gameplay": "span_ball",
        "name": "跨度",
        "limit_min": "1",
        "single_field_max": "50000",
        "single_note_max": "50000",
        "status": "1",
        "sort": "10",
        "iscustom": 0,
        "rakeback": "0.00%"
      },
      {
        "id": "7",
        "fc_type": "fc_3d",
        "fc_name": "福彩3D",
        "gameplay": "tiger_ball",
        "name": "總和,龍虎",
        "limit_min": "1",
        "single_field_max": "50000",
        "single_note_max": "50000",
        "status": "1",
        "sort": "12",
        "iscustom": 0,
        "rakeback": "0.00%"
      },
      {
        "id": "5",
        "fc_type": "fc_3d",
        "fc_name": "福彩3D",
        "gameplay": "triple_ball",
        "name": "3连",
        "limit_min": "1",
        "single_field_max": "50000",
        "single_note_max": "50000",
        "status": "1",
        "sort": "14",
        "iscustom": 0,
        "rakeback": "0.00%"
      }
    ]
  });
  res.end();
})

router.post('/getgameindex', (req, res) => {
  const sendData = {
    "fc_type": "liuhecai",
    "gameplay": "165",
    "pankou": "A",
    "token": "1d105919cd37dbec9babbcaa5eddf5c9",
  }
  res.json(
    {
      "Data": {
        "odds": [{
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "1",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#1",
            "mingxi": "",
            "sort": "2",
            "id": 0,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "2",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#2",
            "mingxi": "",
            "sort": "4",
            "id": 1,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "3",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#3",
            "mingxi": "",
            "sort": "6",
            "id": 2,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "4",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#4",
            "mingxi": "",
            "sort": "8",
            "id": 3,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "5",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#5",
            "mingxi": "",
            "sort": "10",
            "id": 4,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "6",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#6",
            "mingxi": "",
            "sort": "12",
            "id": 5,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "7",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#7",
            "mingxi": "",
            "sort": "14",
            "id": 6,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "8",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#8",
            "mingxi": "",
            "sort": "16",
            "id": 7,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "9",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#9",
            "mingxi": "",
            "sort": "18",
            "id": 8,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "10",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#10",
            "mingxi": "",
            "sort": "20",
            "id": 9,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "11",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#11",
            "mingxi": "",
            "sort": "22",
            "id": 10,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "12",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#12",
            "mingxi": "",
            "sort": "24",
            "id": 11,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "13",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#13",
            "mingxi": "",
            "sort": "26",
            "id": 12,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "14",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#14",
            "mingxi": "",
            "sort": "28",
            "id": 13,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "15",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#15",
            "mingxi": "",
            "sort": "30",
            "id": 14,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "16",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#16",
            "mingxi": "",
            "sort": "32",
            "id": 15,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "17",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#17",
            "mingxi": "",
            "sort": "34",
            "id": 16,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "18",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#18",
            "mingxi": "",
            "sort": "36",
            "id": 17,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "19",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#19",
            "mingxi": "",
            "sort": "38",
            "id": 18,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "20",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#20",
            "mingxi": "",
            "sort": "40",
            "id": 19,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "21",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#21",
            "mingxi": "",
            "sort": "42",
            "id": 20,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "22",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#22",
            "mingxi": "",
            "sort": "44",
            "id": 21,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "23",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#23",
            "mingxi": "",
            "sort": "46",
            "id": 22,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "24",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#24",
            "mingxi": "",
            "sort": "48",
            "id": 23,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "25",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#25",
            "mingxi": "",
            "sort": "50",
            "id": 24,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "26",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#26",
            "mingxi": "",
            "sort": "52",
            "id": 25,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "27",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#27",
            "mingxi": "",
            "sort": "54",
            "id": 26,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "28",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#28",
            "mingxi": "",
            "sort": "56",
            "id": 27,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "29",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#29",
            "mingxi": "",
            "sort": "58",
            "id": 28,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "30",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#30",
            "mingxi": "",
            "sort": "60",
            "id": 29,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "31",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#31",
            "mingxi": "",
            "sort": "62",
            "id": 30,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "32",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#32",
            "mingxi": "",
            "sort": "64",
            "id": 31,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "33",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#33",
            "mingxi": "",
            "sort": "66",
            "id": 32,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "34",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#34",
            "mingxi": "",
            "sort": "68",
            "id": 33,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "35",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#35",
            "mingxi": "",
            "sort": "70",
            "id": 34,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "36",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#36",
            "mingxi": "",
            "sort": "72",
            "id": 35,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "37",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#37",
            "mingxi": "",
            "sort": "74",
            "id": 36,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "38",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#38",
            "mingxi": "",
            "sort": "76",
            "id": 37,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "39",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#39",
            "mingxi": "",
            "sort": "78",
            "id": 38,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "40",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#40",
            "mingxi": "",
            "sort": "80",
            "id": 39,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "41",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#41",
            "mingxi": "",
            "sort": "82",
            "id": 40,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "42",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#42",
            "mingxi": "",
            "sort": "84",
            "id": 41,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "43",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#43",
            "mingxi": "",
            "sort": "86",
            "id": 42,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "44",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#44",
            "mingxi": "",
            "sort": "88",
            "id": 43,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "45",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#45",
            "mingxi": "",
            "sort": "90",
            "id": 44,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "46",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#46",
            "mingxi": "",
            "sort": "92",
            "id": 45,
            "money": "",
            "color": "red"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "47",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#47",
            "mingxi": "",
            "sort": "94",
            "id": 46,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "48",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#48",
            "mingxi": "",
            "sort": "96",
            "id": 47,
            "money": "",
            "color": "blue"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "49",
            "odd": "47.500",
            "pankou": "A",
            "remark": "特码#49",
            "mingxi": "",
            "sort": "98",
            "id": 48,
            "money": "",
            "color": "green"
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "1-10",
            "odd": "4.500",
            "pankou": "A",
            "remark": "特码#1-10",
            "mingxi": "",
            "sort": "100",
            "id": 49,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "11-20",
            "odd": "4.500",
            "pankou": "A",
            "remark": "特码#11-20",
            "mingxi": "",
            "sort": "102",
            "id": 50,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "21-30",
            "odd": "4.500",
            "pankou": "A",
            "remark": "特码#21-30",
            "mingxi": "",
            "sort": "104",
            "id": 51,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "31-40",
            "odd": "4.500",
            "pankou": "A",
            "remark": "特码#31-40",
            "mingxi": "",
            "sort": "106",
            "id": 52,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "41-49",
            "odd": "4.800",
            "pankou": "A",
            "remark": "特码#41-49",
            "mingxi": "",
            "sort": "108",
            "id": 53,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "big",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#大",
            "mingxi": "",
            "sort": "110",
            "id": 54,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "small",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#小",
            "mingxi": "",
            "sort": "112",
            "id": 55,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "single",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#单",
            "mingxi": "",
            "sort": "114",
            "id": 56,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "double",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#双",
            "mingxi": "",
            "sort": "116",
            "id": 57,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "big_single",
            "odd": "3.800",
            "pankou": "A",
            "remark": "特码#大单",
            "mingxi": "",
            "sort": "118",
            "id": 58,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "small_single",
            "odd": "3.800",
            "pankou": "A",
            "remark": "特码#小单",
            "mingxi": "",
            "sort": "120",
            "id": 59,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "big_double",
            "odd": "3.800",
            "pankou": "A",
            "remark": "特码#大双",
            "mingxi": "",
            "sort": "122",
            "id": 60,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "small_double",
            "odd": "3.800",
            "pankou": "A",
            "remark": "特码#小双",
            "mingxi": "",
            "sort": "124",
            "id": 61,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "sum_big",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#合大",
            "mingxi": "",
            "sort": "126",
            "id": 62,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "sum_small",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#合小",
            "mingxi": "",
            "sort": "128",
            "id": 63,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "sum_single",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#合单",
            "mingxi": "",
            "sort": "130",
            "id": 64,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "sum_double",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#合双",
            "mingxi": "",
            "sort": "132",
            "id": 65,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "end_big",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#尾大",
            "mingxi": "",
            "sort": "134",
            "id": 66,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "end_small",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#尾小",
            "mingxi": "",
            "sort": "136",
            "id": 67,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "Poultry",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#家禽",
            "mingxi": "",
            "sort": "138",
            "id": 68,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "wild_animals",
            "odd": "1.930",
            "pankou": "A",
            "remark": "特码#野兽",
            "mingxi": "",
            "sort": "140",
            "id": 69,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "red_wave",
            "odd": "2.700",
            "pankou": "A",
            "remark": "特码#红波",
            "mingxi": "",
            "sort": "142",
            "id": 70,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "green_wave",
            "odd": "2.800",
            "pankou": "A",
            "remark": "特码#绿波",
            "mingxi": "",
            "sort": "144",
            "id": 71,
            "money": ""
          },
          {
            "fc_type": "pkliuhecai",
            "gameplay": "Tema",
            "input_name": "blue_wave",
            "odd": "2.800",
            "pankou": "A",
            "remark": "特码#蓝波",
            "mingxi": "",
            "sort": "146",
            "id": 72,
            "money": ""
          }
        ],
        "c_data": {
          "fc_name": "PK极速六合彩",
          "qishu": "20190313427",
          "img_path": "http://pkfrontenddemo.pk1358.com/cdn/images/lotterytype/pkliuhecai.png"
        },
        "closetime": {
          "kaipan": 1552457520,
          "fengpan": 1552457610,
          "kaijiang": 1552457640,
          "now_time": 1552457539
        },
        "auto": {
          "qishu": "20190313425",
          "type": "pkliuhecai",
          "datetime": "2019-03-13 14:10:51",
          "ball": [{
              "animal": "马",
              "number": 42,
              "color": "blue_wave"
            },
            {
              "animal": "龙",
              "number": 8,
              "color": "red_wave"
            },
            {
              "animal": "羊",
              "number": 17,
              "color": "green_wave"
            },
            {
              "animal": "羊",
              "number": 29,
              "color": "red_wave"
            },
            {
              "animal": "猴",
              "number": 40,
              "color": "red_wave"
            },
            {
              "animal": "猪",
              "number": 49,
              "color": "green_wave"
            },
            {
              "animal": "蛇",
              "number": 7,
              "color": "red_wave"
            }
          ]
        },
        "lastAuto": [{
            "qishu": "20190313425",
            "type": "pkliuhecai",
            "datetime": "2019-03-13 14:10:51",
            "ball": [{
                "animal": "马",
                "number": 42,
                "color": "blue_wave"
              },
              {
                "animal": "龙",
                "number": 8,
                "color": "red_wave"
              },
              {
                "animal": "羊",
                "number": 17,
                "color": "green_wave"
              },
              {
                "animal": "羊",
                "number": 29,
                "color": "red_wave"
              },
              {
                "animal": "猴",
                "number": 40,
                "color": "red_wave"
              },
              {
                "animal": "猪",
                "number": 49,
                "color": "green_wave"
              },
              {
                "animal": "蛇",
                "number": 7,
                "color": "red_wave"
              }
            ]
          },
          {
            "qishu": "20190313424",
            "type": "pkliuhecai",
            "datetime": "2019-03-13 14:08:51",
            "ball": [{
                "animal": "牛",
                "number": 47,
                "color": "blue_wave"
              },
              {
                "animal": "猴",
                "number": 16,
                "color": "green_wave"
              },
              {
                "animal": "羊",
                "number": 29,
                "color": "red_wave"
              },
              {
                "animal": "狗",
                "number": 14,
                "color": "blue_wave"
              },
              {
                "animal": "兔",
                "number": 21,
                "color": "green_wave"
              },
              {
                "animal": "猴",
                "number": 4,
                "color": "blue_wave"
              },
              {
                "animal": "猪",
                "number": 1,
                "color": "red_wave"
              }
            ]
          },
          {
            "qishu": "20190313423",
            "type": "pkliuhecai",
            "datetime": "2019-03-13 14:06:51",
            "ball": [{
                "animal": "兔",
                "number": 21,
                "color": "green_wave"
              },
              {
                "animal": "猪",
                "number": 1,
                "color": "red_wave"
              },
              {
                "animal": "兔",
                "number": 9,
                "color": "blue_wave"
              },
              {
                "animal": "马",
                "number": 18,
                "color": "red_wave"
              },
              {
                "animal": "龙",
                "number": 32,
                "color": "green_wave"
              },
              {
                "animal": "羊",
                "number": 17,
                "color": "green_wave"
              },
              {
                "animal": "羊",
                "number": 5,
                "color": "green_wave"
              }
            ]
          },
          {
            "qishu": "20190313422",
            "type": "pkliuhecai",
            "datetime": "2019-03-13 14:04:51",
            "ball": [{
                "animal": "猴",
                "number": 40,
                "color": "red_wave"
              },
              {
                "animal": "兔",
                "number": 45,
                "color": "red_wave"
              },
              {
                "animal": "鸡",
                "number": 27,
                "color": "green_wave"
              },
              {
                "animal": "鼠",
                "number": 24,
                "color": "red_wave"
              },
              {
                "animal": "兔",
                "number": 9,
                "color": "blue_wave"
              },
              {
                "animal": "马",
                "number": 42,
                "color": "blue_wave"
              },
              {
                "animal": "蛇",
                "number": 31,
                "color": "blue_wave"
              }
            ]
          },
          {
            "qishu": "20190313421",
            "type": "pkliuhecai",
            "datetime": "2019-03-13 14:02:51",
            "ball": [{
                "animal": "鼠",
                "number": 24,
                "color": "red_wave"
              },
              {
                "animal": "猪",
                "number": 13,
                "color": "red_wave"
              },
              {
                "animal": "虎",
                "number": 34,
                "color": "red_wave"
              },
              {
                "animal": "龙",
                "number": 8,
                "color": "red_wave"
              },
              {
                "animal": "龙",
                "number": 20,
                "color": "blue_wave"
              },
              {
                "animal": "鸡",
                "number": 27,
                "color": "green_wave"
              },
              {
                "animal": "猴",
                "number": 4,
                "color": "blue_wave"
              }
            ]
          }
        ]
      },
      "ErrorCode": 1,
      "is_wh": 1,
      "wh_content": "",
      "ErrorMsg": "获取数据成功",
      "shengxiao": {
        "pig": [
          1,
          13,
          25,
          37,
          49
        ],
        "dog": [
          2,
          14,
          26,
          38
        ],
        "chicken": [
          3,
          15,
          27,
          39
        ],
        "monkey": [
          4,
          16,
          28,
          40
        ],
        "sheep": [
          5,
          17,
          29,
          41
        ],
        "horse": [
          6,
          18,
          30,
          42
        ],
        "snake": [
          7,
          19,
          31,
          43
        ],
        "dragon": [
          8,
          20,
          32,
          44
        ],
        "rabbit": [
          9,
          21,
          33,
          45
        ],
        "tiger": [
          10,
          22,
          34,
          46
        ],
        "cattle": [
          11,
          23,
          35,
          47
        ],
        "mouse": [
          12,
          24,
          36,
          48
        ]
      }
    }
  );
})

module.exports = router;