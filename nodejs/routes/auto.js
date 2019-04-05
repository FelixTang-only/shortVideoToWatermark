const express = require('express');
const router = express.Router();

router.post('/history', (req, res) => {
  const sendData = {
    "fc_type": "liuhecai",
    "starttime": '',
    "endtime": '',
    "page": "1",
    "pagenum": "50",
    "token": "1d105919cd37dbec9babbcaa5eddf5c9",
  }
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "OK",
    "Page": 1,
    "Pagenum": 30,
    "Pagecount": 2,
    "Recordcount": "35",
    "type_list": [{
        "label": "十分赛车",
        "value": "shf_10"
      },
      {
        "label": "PK极速六合彩",
        "value": "pkliuhecai"
      },
      {
        "label": "澳洲pk拾",
        "value": "az_10"
      },
      {
        "label": "幸运飞艇",
        "value": "xyft"
      },
      {
        "label": "五分赛车",
        "value": "wf_10"
      },
      {
        "label": "鱼虾蟹骰宝",
        "value": "yxxsb"
      },
      {
        "label": "福彩3D",
        "value": "fc_3d"
      },
      {
        "label": "极速六合彩",
        "value": "jsliuhecai"
      },
      {
        "label": "东京28",
        "value": "dj_28"
      },
      {
        "label": "极速赛车",
        "value": "jsfc"
      },
      {
        "label": "分分彩",
        "value": "ffc_o"
      },
      {
        "label": "东京快乐8",
        "value": "dj_kl8"
      },
      {
        "label": "新加坡快乐8",
        "value": "xjp_kl8"
      },
      {
        "label": "新加坡28",
        "value": "xjp_28"
      },
      {
        "label": "五分快3",
        "value": "wf_k3"
      },
      {
        "label": "十分快3",
        "value": "shf_k3"
      },
      {
        "label": "十分时时彩",
        "value": "shf_ssc"
      },
      {
        "label": "一分快3",
        "value": "yf_k3"
      },
      {
        "label": "五分时时彩",
        "value": "wf_ssc"
      },
      {
        "label": "PK快乐五分",
        "value": "wf_ten"
      },
      {
        "label": "三分时时彩",
        "value": "sf_ssc"
      },
      {
        "label": "PK快乐十分",
        "value": "shf_ten"
      },
      {
        "label": "三分快3",
        "value": "sf_k3"
      },
      {
        "label": "极速快三",
        "value": "jsk3"
      },
      {
        "label": "吉林快三",
        "value": "jl_k3"
      },
      {
        "label": "内蒙快三",
        "value": "nm_k3"
      },
      {
        "label": "河北快三",
        "value": "hb_k3"
      },
      {
        "label": "吉林11选5",
        "value": "jl_11"
      },
      {
        "label": "内蒙11选5",
        "value": "nm_11"
      },
      {
        "label": "河北11选5",
        "value": "hb_11"
      },
      {
        "label": "幸运大转盘",
        "value": "xydzp"
      },
      {
        "label": "夺包奇兵",
        "value": "dbqb"
      },
      {
        "label": "生肖转乐",
        "value": "sxzl"
      },
      {
        "label": "豪车风云",
        "value": "hcfy"
      },
      {
        "label": "排列三",
        "value": "pl_3"
      },
      {
        "label": "六合彩",
        "value": "liuhecai"
      },
      {
        "label": "重庆时时彩",
        "value": "cq_ssc"
      },
      {
        "label": "天津时时彩",
        "value": "tj_ssc"
      },
      {
        "label": "新疆时时彩",
        "value": "xj_ssc"
      },
      {
        "label": "北京赛车pk拾",
        "value": "bj_10"
      },
      {
        "label": "安徽快3",
        "value": "ah_k3"
      },
      {
        "label": "广西快3",
        "value": "gx_k3"
      },
      {
        "label": "江苏快3",
        "value": "js_k3"
      },
      {
        "label": "广东快乐十分",
        "value": "gd_ten"
      },
      {
        "label": "重庆快乐十分",
        "value": "cq_ten"
      },
      {
        "label": "广东11选5",
        "value": "gd_11"
      },
      {
        "label": "山东11选5",
        "value": "sd_11"
      },
      {
        "label": "PK北京28",
        "value": "bj_28"
      },
      {
        "label": "江西11选5",
        "value": "jx_11"
      },
      {
        "label": "北京快乐8",
        "value": "bj_kl8"
      },
      {
        "label": "丹麦快乐彩",
        "value": "dm_klc"
      },
      {
        "label": "PC蛋蛋",
        "value": "pc_28"
      },
      {
        "label": "丹麦28",
        "value": "dm_28"
      },
      {
        "label": "五分六合彩",
        "value": "wfliuhecai"
      },
      {
        "label": "极速快乐十分",
        "value": "js_ten"
      },
      {
        "label": "湖南快乐十分",
        "value": "hn_ten"
      },
      {
        "label": "福建11选5",
        "value": "fj_11"
      },
      {
        "label": "广西11选5",
        "value": "gx_11"
      },
      {
        "label": "极速11选5",
        "value": "js_11"
      },
      {
        "label": "美国45秒彩",
        "value": "mg_o"
      },
      {
        "label": "东京1.5分彩",
        "value": "dj_o"
      },
      {
        "label": "俄罗斯1.5分彩",
        "value": "els_o"
      },
      {
        "label": "两分彩",
        "value": "lfc_o"
      }
    ],
    "Data": [{
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2019034",
        "adddate": "2019-03-09 00:00:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "08",
            "color": "six-red",
            "animal": "龙"
          },
          {
            "num": "18",
            "color": "six-red",
            "animal": "马"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2019033",
        "adddate": "2019-03-09 19:00:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "07",
            "color": "six-red",
            "animal": "蛇"
          },
          {
            "num": "12",
            "color": "six-red",
            "animal": "鼠"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2019023",
        "adddate": "2019-03-09 21:40:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "40",
            "color": "six-red",
            "animal": "猴"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2019022",
        "adddate": "2019-02-15 19:20:39",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "49",
            "color": "six-green",
            "animal": "猪"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2019021",
        "adddate": "2019-02-15 00:00:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "39",
            "color": "six-green",
            "animal": "鸡"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2019015",
        "adddate": "2019-02-04 00:00:00",
        "balls": [{
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "35",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "13",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "34",
            "color": "six-red",
            "animal": "虎"
          },
          {
            "num": "19",
            "color": "six-red",
            "animal": "蛇"
          },
          {
            "num": "39",
            "color": "six-green",
            "animal": "鸡"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2019014",
        "adddate": "2019-02-04 00:00:00",
        "balls": [{
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "35",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "13",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "34",
            "color": "six-red",
            "animal": "虎"
          },
          {
            "num": "19",
            "color": "six-red",
            "animal": "蛇"
          },
          {
            "num": "39",
            "color": "six-green",
            "animal": "鸡"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2019013",
        "adddate": "2019-01-04 00:00:00",
        "balls": [{
            "num": "22",
            "color": "six-green",
            "animal": "虎"
          },
          {
            "num": "26",
            "color": "six-blue",
            "animal": "狗"
          },
          {
            "num": "31",
            "color": "six-blue",
            "animal": "蛇"
          },
          {
            "num": "33",
            "color": "six-green",
            "animal": "兔"
          },
          {
            "num": "41",
            "color": "six-blue",
            "animal": "羊"
          },
          {
            "num": "18",
            "color": "six-red",
            "animal": "马"
          },
          {
            "num": "27",
            "color": "six-green",
            "animal": "鸡"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018678",
        "adddate": "2018-06-18 00:00:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "07",
            "color": "six-red",
            "animal": "蛇"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018138",
        "adddate": "2018-12-04 21:35:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "07",
            "color": "six-red",
            "animal": "蛇"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018047",
        "adddate": "2018-05-02 00:00:00",
        "balls": [{
            "num": "21",
            "color": "six-green",
            "animal": "兔"
          },
          {
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "33",
            "color": "six-green",
            "animal": "兔"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "07",
            "color": "six-red",
            "animal": "蛇"
          },
          {
            "num": "45",
            "color": "six-red",
            "animal": "兔"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018045",
        "adddate": "2018-04-28 00:00:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "07",
            "color": "six-red",
            "animal": "蛇"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018044",
        "adddate": "2018-04-26 00:00:00",
        "balls": [{
            "num": "20",
            "color": "six-blue",
            "animal": "龙"
          },
          {
            "num": "15",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "08",
            "color": "six-red",
            "animal": "龙"
          },
          {
            "num": "35",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "12",
            "color": "six-red",
            "animal": "鼠"
          },
          {
            "num": "30",
            "color": "six-red",
            "animal": "马"
          },
          {
            "num": "42",
            "color": "six-blue",
            "animal": "马"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018039",
        "adddate": "2018-04-14 21:35:00",
        "balls": [{
            "num": "40",
            "color": "six-red",
            "animal": "猴"
          },
          {
            "num": "12",
            "color": "six-red",
            "animal": "鼠"
          },
          {
            "num": "14",
            "color": "six-blue",
            "animal": "狗"
          },
          {
            "num": "36",
            "color": "six-blue",
            "animal": "鼠"
          },
          {
            "num": "38",
            "color": "six-green",
            "animal": "狗"
          },
          {
            "num": "15",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "42",
            "color": "six-blue",
            "animal": "马"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018033",
        "adddate": "2018-03-28 00:00:00",
        "balls": [{
            "num": "28",
            "color": "six-green",
            "animal": "猴"
          },
          {
            "num": "18",
            "color": "six-red",
            "animal": "马"
          },
          {
            "num": "08",
            "color": "six-red",
            "animal": "龙"
          },
          {
            "num": "49",
            "color": "six-green",
            "animal": "猪"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "10",
            "color": "six-blue",
            "animal": "虎"
          },
          {
            "num": "12",
            "color": "six-red",
            "animal": "鼠"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018030",
        "adddate": "2018-03-23 00:00:00",
        "balls": [{
            "num": "18",
            "color": "six-red",
            "animal": "马"
          },
          {
            "num": "46",
            "color": "six-red",
            "animal": "虎"
          },
          {
            "num": "21",
            "color": "six-green",
            "animal": "兔"
          },
          {
            "num": "10",
            "color": "six-blue",
            "animal": "虎"
          },
          {
            "num": "33",
            "color": "six-green",
            "animal": "兔"
          },
          {
            "num": "29",
            "color": "six-red",
            "animal": "羊"
          },
          {
            "num": "36",
            "color": "six-blue",
            "animal": "鼠"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018028",
        "adddate": "2018-03-20 00:00:00",
        "balls": [{
            "num": "33",
            "color": "six-green",
            "animal": "兔"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "47",
            "color": "six-blue",
            "animal": "牛"
          },
          {
            "num": "40",
            "color": "six-red",
            "animal": "猴"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "23",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "30",
            "color": "six-red",
            "animal": "马"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018027",
        "adddate": "2018-03-16 00:00:00",
        "balls": [{
            "num": "35",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "25",
            "color": "six-blue",
            "animal": "猪"
          },
          {
            "num": "16",
            "color": "six-green",
            "animal": "猴"
          },
          {
            "num": "38",
            "color": "six-green",
            "animal": "狗"
          },
          {
            "num": "13",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "49",
            "color": "six-green",
            "animal": "猪"
          },
          {
            "num": "33",
            "color": "six-green",
            "animal": "兔"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018024",
        "adddate": "2018-03-06 00:00:00",
        "balls": [{
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "35",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "40",
            "color": "six-red",
            "animal": "猴"
          },
          {
            "num": "17",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "09",
            "color": "six-blue",
            "animal": "兔"
          },
          {
            "num": "44",
            "color": "six-green",
            "animal": "龙"
          },
          {
            "num": "49",
            "color": "six-green",
            "animal": "猪"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018023",
        "adddate": "2018-03-05 00:00:00",
        "balls": [{
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "23",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "34",
            "color": "six-red",
            "animal": "虎"
          },
          {
            "num": "07",
            "color": "six-red",
            "animal": "蛇"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018022",
        "adddate": "2018-03-03 00:00:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "09",
            "color": "six-blue",
            "animal": "兔"
          },
          {
            "num": "12",
            "color": "six-red",
            "animal": "鼠"
          },
          {
            "num": "23",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "34",
            "color": "six-red",
            "animal": "虎"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018015",
        "adddate": "2018-02-10 00:00:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "15",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "07",
            "color": "six-red",
            "animal": "蛇"
          },
          {
            "num": "29",
            "color": "six-red",
            "animal": "羊"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "33",
            "color": "six-green",
            "animal": "兔"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018014",
        "adddate": "2018-02-09 00:00:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "22",
            "color": "six-green",
            "animal": "虎"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "14",
            "color": "six-blue",
            "animal": "狗"
          },
          {
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "06",
            "color": "six-green",
            "animal": "马"
          },
          {
            "num": "37",
            "color": "six-blue",
            "animal": "猪"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018007",
        "adddate": "2018-01-25 21:35:00",
        "balls": [{
            "num": "47",
            "color": "six-blue",
            "animal": "牛"
          },
          {
            "num": "14",
            "color": "six-blue",
            "animal": "狗"
          },
          {
            "num": "40",
            "color": "six-red",
            "animal": "猴"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "36",
            "color": "six-blue",
            "animal": "鼠"
          },
          {
            "num": "23",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "20",
            "color": "six-blue",
            "animal": "龙"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018006",
        "adddate": "2018-01-23 21:35:00",
        "balls": [{
            "num": "41",
            "color": "six-blue",
            "animal": "羊"
          },
          {
            "num": "27",
            "color": "six-green",
            "animal": "鸡"
          },
          {
            "num": "32",
            "color": "six-green",
            "animal": "龙"
          },
          {
            "num": "37",
            "color": "six-blue",
            "animal": "猪"
          },
          {
            "num": "20",
            "color": "six-blue",
            "animal": "龙"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "44",
            "color": "six-green",
            "animal": "龙"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018005",
        "adddate": "2018-01-20 21:35:00",
        "balls": [{
            "num": "05",
            "color": "six-green",
            "animal": "羊"
          },
          {
            "num": "23",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "27",
            "color": "six-green",
            "animal": "鸡"
          },
          {
            "num": "24",
            "color": "six-red",
            "animal": "鼠"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "34",
            "color": "six-red",
            "animal": "虎"
          },
          {
            "num": "08",
            "color": "six-red",
            "animal": "龙"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018004",
        "adddate": "2018-01-16 21:35:00",
        "balls": [{
            "num": "27",
            "color": "six-green",
            "animal": "鸡"
          },
          {
            "num": "37",
            "color": "six-blue",
            "animal": "猪"
          },
          {
            "num": "02",
            "color": "six-red",
            "animal": "狗"
          },
          {
            "num": "36",
            "color": "six-blue",
            "animal": "鼠"
          },
          {
            "num": "21",
            "color": "six-green",
            "animal": "兔"
          },
          {
            "num": "30",
            "color": "six-red",
            "animal": "马"
          },
          {
            "num": "04",
            "color": "six-blue",
            "animal": "猴"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018003",
        "adddate": "2018-01-11 21:35:00",
        "balls": [{
            "num": "47",
            "color": "six-blue",
            "animal": "牛"
          },
          {
            "num": "49",
            "color": "six-green",
            "animal": "猪"
          },
          {
            "num": "31",
            "color": "six-blue",
            "animal": "蛇"
          },
          {
            "num": "29",
            "color": "six-red",
            "animal": "羊"
          },
          {
            "num": "03",
            "color": "six-blue",
            "animal": "鸡"
          },
          {
            "num": "43",
            "color": "six-green",
            "animal": "蛇"
          },
          {
            "num": "19",
            "color": "six-red",
            "animal": "蛇"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018002",
        "adddate": "2018-01-06 21:35:00",
        "balls": [{
            "num": "01",
            "color": "six-red",
            "animal": "猪"
          },
          {
            "num": "36",
            "color": "six-blue",
            "animal": "鼠"
          },
          {
            "num": "31",
            "color": "six-blue",
            "animal": "蛇"
          },
          {
            "num": "49",
            "color": "six-green",
            "animal": "猪"
          },
          {
            "num": "12",
            "color": "six-red",
            "animal": "鼠"
          },
          {
            "num": "21",
            "color": "six-green",
            "animal": "兔"
          },
          {
            "num": "23",
            "color": "six-red",
            "animal": "牛"
          }
        ]
      },
      {
        "type": "liuhecai",
        "name": "六合彩",
        "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
        "qishu": "2018001",
        "adddate": "2018-01-02 21:35:00",
        "balls": [{
            "num": "28",
            "color": "six-green",
            "animal": "猴"
          },
          {
            "num": "42",
            "color": "six-blue",
            "animal": "马"
          },
          {
            "num": "18",
            "color": "six-red",
            "animal": "马"
          },
          {
            "num": "39",
            "color": "six-green",
            "animal": "鸡"
          },
          {
            "num": "12",
            "color": "six-red",
            "animal": "鼠"
          },
          {
            "num": "35",
            "color": "six-red",
            "animal": "牛"
          },
          {
            "num": "36",
            "color": "six-blue",
            "animal": "鼠"
          }
        ]
      }
    ]
  });
  res.end();
});

router.post('/list', (req, res) => {
  const sendData = {
    "fc_type": "nm_11m",
    "token": "09386f5d619a2d1dd22a9bac4ed375b9",
  }
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "OK",
    "Data": [{
        "qishu": "19031315",
        "ball": "7,2,8,5,9"
      },
      {
        "qishu": "19031314",
        "ball": "8,2,5,3,1"
      },
      {
        "qishu": "19031313",
        "ball": "3,4,1,9,11"
      },
      {
        "qishu": "19031312",
        "ball": "9,3,6,8,7"
      },
      {
        "qishu": "19031311",
        "ball": "1,11,7,4,2"
      },
      {
        "qishu": "19031310",
        "ball": "11,1,2,9,3"
      },
      {
        "qishu": "19031309",
        "ball": "5,7,9,1,4"
      },
      {
        "qishu": "19031308",
        "ball": "11,9,8,6,7"
      },
      {
        "qishu": "19031307",
        "ball": "1,8,9,7,3"
      },
      {
        "qishu": "19031306",
        "ball": "8,5,10,3,1"
      },
      {
        "qishu": "19031305",
        "ball": "11,10,3,1,2"
      },
      {
        "qishu": "19031304",
        "ball": "3,6,2,9,8"
      },
      {
        "qishu": "19031303",
        "ball": "10,5,3,6,1"
      },
      {
        "qishu": "19031302",
        "ball": "2,3,9,10,5"
      },
      {
        "qishu": "19031301",
        "ball": "4,3,6,7,2"
      },
      {
        "qishu": "19031242",
        "ball": "8,4,7,6,3"
      },
      {
        "qishu": "19031241",
        "ball": "1,7,11,8,6"
      },
      {
        "qishu": "19031240",
        "ball": "5,4,10,1,11"
      },
      {
        "qishu": "19031239",
        "ball": "5,10,2,4,7"
      },
      {
        "qishu": "19031238",
        "ball": "10,4,5,7,11"
      },
      {
        "qishu": "19031237",
        "ball": "9,10,5,3,2"
      },
      {
        "qishu": "19031236",
        "ball": "4,11,5,8,3"
      },
      {
        "qishu": "19031235",
        "ball": "5,2,10,1,8"
      },
      {
        "qishu": "19031234",
        "ball": "8,3,4,2,7"
      },
      {
        "qishu": "19031233",
        "ball": "5,9,10,11,6"
      },
      {
        "qishu": "19031232",
        "ball": "1,3,10,8,2"
      },
      {
        "qishu": "19031231",
        "ball": "10,5,7,3,6"
      },
      {
        "qishu": "19031230",
        "ball": "6,10,5,7,2"
      },
      {
        "qishu": "19031229",
        "ball": "1,5,6,9,2"
      },
      {
        "qishu": "19031228",
        "ball": "4,6,7,1,2"
      },
      {
        "qishu": "19031227",
        "ball": "11,10,3,7,8"
      },
      {
        "qishu": "19031226",
        "ball": "10,9,8,7,5"
      },
      {
        "qishu": "19031225",
        "ball": "3,6,11,2,1"
      },
      {
        "qishu": "19031224",
        "ball": "1,8,5,3,9"
      },
      {
        "qishu": "19031223",
        "ball": "4,7,8,2,3"
      },
      {
        "qishu": "19031222",
        "ball": "4,5,3,8,9"
      },
      {
        "qishu": "19031221",
        "ball": "10,11,3,2,6"
      },
      {
        "qishu": "19031220",
        "ball": "7,9,10,4,11"
      },
      {
        "qishu": "19031219",
        "ball": "6,4,8,9,11"
      },
      {
        "qishu": "19031218",
        "ball": "9,1,10,2,6"
      },
      {
        "qishu": "19031217",
        "ball": "6,1,9,5,3"
      },
      {
        "qishu": "19031216",
        "ball": "8,2,6,7,9"
      },
      {
        "qishu": "19031215",
        "ball": "7,6,10,9,3"
      },
      {
        "qishu": "19031214",
        "ball": "7,3,10,1,6"
      },
      {
        "qishu": "19031213",
        "ball": "5,7,8,2,10"
      },
      {
        "qishu": "19031212",
        "ball": "11,10,1,4,8"
      },
      {
        "qishu": "19031211",
        "ball": "3,10,9,6,7"
      },
      {
        "qishu": "19031210",
        "ball": "5,9,8,3,7"
      },
      {
        "qishu": "19031209",
        "ball": "4,10,1,3,6"
      },
      {
        "qishu": "19031208",
        "ball": "9,3,1,4,11"
      }
    ]
  });
  res.end();
})

module.exports = router;
