const express = require('express');
const router = express.Router();

router.post('/userbalance', (req, res) => {
  res.json({
    "Data": {
      "uname": "demo_qgxklt2bz6",
      "money": "10000.00",
      "is_new_user": 0
    },
    "ErrorCode": 1,
    "ErrorMsg": "成功"
  });
  res.end();
});

router.post('/message', (req, res) => {
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "OK",
    "Page": "1",
    "Pagenum": "10",
    "Pagecount": 0,
    "Recordcount": 0,
    "Data": []
  });
  res.end();
});

router.post('/notice', (req, res) => {
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "OK",
    "Page": "1",
    "Pagenum": "10",
    "Pagecount": 1,
    "Recordcount": "3",
    "Data": [{
        "id": "16",
        "title": "新增彩种",
        "content": "本站新增彩种 广西十一选五、福建十一选五、极速十一选五、湖南快乐十分、极速快乐十分，欢迎体验！更多精彩敬请期待！",
        "type": "0",
        "line_id": "",
        "addtime": "1521269019",
        "status": "1",
        "remark": "",
        "agent_id": "",
        "agent_type": "",
        "adddate": "2018-03-17 14:43:39"
      },
      {
        "id": "15",
        "title": "新增彩种",
        "content": "本站新增彩种东京快乐8 、 新加坡快乐8、东京28、新加坡28，欢迎体验！更多精彩敬请期待！",
        "type": "0",
        "line_id": "",
        "addtime": "1520826749",
        "status": "1",
        "remark": "",
        "agent_id": "",
        "agent_type": "",
        "adddate": "2018-03-12 11:52:29"
      },
      {
        "id": "12",
        "title": "新彩种发布",
        "content": "增加新彩种：分分彩、两分彩、俄罗斯1.5分彩、东京1.5分彩、极速六合彩等高频彩，欢迎试玩，更多精彩敬请期待",
        "type": "0",
        "line_id": "",
        "addtime": "1516784825",
        "status": "1",
        "remark": "不要乱搞公告",
        "agent_id": "",
        "agent_type": "",
        "adddate": "2018-01-24 17:07:05"
      }
    ]
  });
  res.end();
});

router.post('/report', (req, res) => {
  const sendData = {
    "week": "this",
    "page": "2",
    "token": "1d105919cd37dbec9babbcaa5eddf5c9",
  }
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "OK",
    "Total": {
      "bet": 0,
      "valid_bet": 0,
      "win": 0,
    },
    "Data": []
  });
  res.end();
});

router.post('/bets', (req, res) => {
  const sendData = {
    "starttime": '2019 - 3 - 13',
    "endtime": '2019 - 3 - 14',
    "fc_type":'',
    "wind":'',
    "page": '1',
    "pagenum": '10',
    "token": '1d105919cd37dbec9babbcaa5eddf5c9',
  }
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "OK",
    "Page": "1",
    "Pagenum": "10",
    "Pagecount": 1,
    "Recordcount": "7",
    "Data": [{
        "id": "575108",
        "line_id": "zzz",
        "at_id": "4129",
        "ua_id": "4128",
        "sh_id": "5000423",
        "at_username": "shiwan_dl",
        "uid": "736904",
        "uname": "demo_tzsa9nfch4",
        "order_num": "324326319724687385",
        "bet": "24.00",
        "valid_bet": "24.00",
        "balance": "9820.00",
        "assets": "9844.00",
        "fc_type": "jsliuhecai",
        "odds": "47.500",
        "periods": "20190313439",
        "win": "未结算",
        "result": "0.00",
        "handicap": "1",
        "addtime": "1552458941",
        "addday": "20190313",
        "updatetime": "1552458941",
        "updateday": "20190313",
        "bet_info": "Tema#17#^Tema#22#",
        "ptype": "2",
        "js": "1",
        "status": "1",
        "return_water": "0.00",
        "bet_ip": "1732879990",
        "play_id": "165",
        "is_shiwan": "2",
        "more_money": "12,12",
        "more_odds": "47.500,47.500",
        "bet_num": "2",
        "follow": "0",
        "is_goodroad": "1",
        "gameplayTxt": "特码",
        "input_nameTxt": "17 | 22 (共2注)",
        "fc_typeTxt": "极速六合彩",
        "adddate": "2019-03-13 14:35:41",
        "statusTxt": "未结算",
        "can_win": "1116.00"
      },
      {
        "id": "575107",
        "line_id": "zzz",
        "at_id": "4129",
        "ua_id": "4128",
        "sh_id": "5000423",
        "at_username": "shiwan_dl",
        "uid": "736904",
        "uname": "demo_tzsa9nfch4",
        "order_num": "324326319724687384",
        "bet": "36.00",
        "valid_bet": "36.00",
        "balance": "9844.00",
        "assets": "9880.00",
        "fc_type": "jsliuhecai",
        "odds": "47.500",
        "periods": "20190313438",
        "win": "未结算",
        "result": "0.00",
        "handicap": "1",
        "addtime": "1552458929",
        "addday": "20190313",
        "updatetime": "1552458929",
        "updateday": "20190313",
        "bet_info": "Tema#8#^Tema#17#^Tema#20#",
        "ptype": "2",
        "js": "1",
        "status": "1",
        "return_water": "0.00",
        "bet_ip": "1732879990",
        "play_id": "165",
        "is_shiwan": "2",
        "more_money": "12,12,12",
        "more_odds": "47.500,47.500,47.500",
        "bet_num": "3",
        "follow": "0",
        "is_goodroad": "1",
        "gameplayTxt": "特码",
        "input_nameTxt": "8 | 17 | 20 (共3注)",
        "fc_typeTxt": "极速六合彩",
        "adddate": "2019-03-13 14:35:29",
        "statusTxt": "未结算",
        "can_win": "1674.00"
      },
      {
        "id": "575106",
        "line_id": "zzz",
        "at_id": "4129",
        "ua_id": "4128",
        "sh_id": "5000423",
        "at_username": "shiwan_dl",
        "uid": "736904",
        "uname": "demo_tzsa9nfch4",
        "order_num": "324326319724687383",
        "bet": "24.00",
        "valid_bet": "24.00",
        "balance": "9880.00",
        "assets": "9904.00",
        "fc_type": "nm_11",
        "odds": "10.500",
        "periods": "19031338",
        "win": "未结算",
        "result": "0.00",
        "handicap": "1",
        "addtime": "1552458259",
        "addday": "20190313",
        "updatetime": "1552458259",
        "updateday": "20190313",
        "bet_info": "first_ball#single#^first_ball#5#",
        "ptype": "2",
        "js": "1",
        "status": "1",
        "return_water": "0.00",
        "bet_ip": "1732879990",
        "play_id": "110",
        "is_shiwan": "2",
        "more_money": "12,12",
        "more_odds": "1.930,10.500",
        "bet_num": "2",
        "follow": "5",
        "is_goodroad": "1",
        "gameplayTxt": "第一球",
        "input_nameTxt": "单 | 5 (共2注)",
        "fc_typeTxt": "内蒙11选5",
        "adddate": "2019-03-13 14:24:19",
        "statusTxt": "未结算",
        "can_win": "228.00"
      },
      {
        "id": "575105",
        "line_id": "zzz",
        "at_id": "4129",
        "ua_id": "4128",
        "sh_id": "5000423",
        "at_username": "shiwan_dl",
        "uid": "736904",
        "uname": "demo_tzsa9nfch4",
        "order_num": "324326319724687382",
        "bet": "24.00",
        "valid_bet": "24.00",
        "balance": "9904.00",
        "assets": "9928.00",
        "fc_type": "nm_11",
        "odds": "10.500",
        "periods": "19031337",
        "win": "未结算",
        "result": "0.00",
        "handicap": "1",
        "addtime": "1552458259",
        "addday": "20190313",
        "updatetime": "1552458259",
        "updateday": "20190313",
        "bet_info": "first_ball#single#^first_ball#5#",
        "ptype": "2",
        "js": "1",
        "status": "1",
        "return_water": "0.00",
        "bet_ip": "1732879990",
        "play_id": "110",
        "is_shiwan": "2",
        "more_money": "12,12",
        "more_odds": "1.930,10.500",
        "bet_num": "2",
        "follow": "5",
        "is_goodroad": "1",
        "gameplayTxt": "第一球",
        "input_nameTxt": "单 | 5 (共2注)",
        "fc_typeTxt": "内蒙11选5",
        "adddate": "2019-03-13 14:24:19",
        "statusTxt": "未结算",
        "can_win": "228.00"
      },
      {
        "id": "575104",
        "line_id": "zzz",
        "at_id": "4129",
        "ua_id": "4128",
        "sh_id": "5000423",
        "at_username": "shiwan_dl",
        "uid": "736904",
        "uname": "demo_tzsa9nfch4",
        "order_num": "324326319724687381",
        "bet": "24.00",
        "valid_bet": "24.00",
        "balance": "9928.00",
        "assets": "9952.00",
        "fc_type": "nm_11",
        "odds": "10.500",
        "periods": "19031336",
        "win": "未结算",
        "result": "0.00",
        "handicap": "1",
        "addtime": "1552458259",
        "addday": "20190313",
        "updatetime": "1552458259",
        "updateday": "20190313",
        "bet_info": "first_ball#single#^first_ball#5#",
        "ptype": "2",
        "js": "1",
        "status": "1",
        "return_water": "0.00",
        "bet_ip": "1732879990",
        "play_id": "110",
        "is_shiwan": "2",
        "more_money": "12,12",
        "more_odds": "1.930,10.500",
        "bet_num": "2",
        "follow": "5",
        "is_goodroad": "1",
        "gameplayTxt": "第一球",
        "input_nameTxt": "单 | 5 (共2注)",
        "fc_typeTxt": "内蒙11选5",
        "adddate": "2019-03-13 14:24:19",
        "statusTxt": "未结算",
        "can_win": "228.00"
      },
      {
        "id": "575103",
        "line_id": "zzz",
        "at_id": "4129",
        "ua_id": "4128",
        "sh_id": "5000423",
        "at_username": "shiwan_dl",
        "uid": "736904",
        "uname": "demo_tzsa9nfch4",
        "order_num": "324326319724687380",
        "bet": "24.00",
        "valid_bet": "24.00",
        "balance": "9952.00",
        "assets": "9976.00",
        "fc_type": "nm_11",
        "odds": "10.500",
        "periods": "19031335",
        "win": "未结算",
        "result": "0.00",
        "handicap": "1",
        "addtime": "1552458259",
        "addday": "20190313",
        "updatetime": "1552458259",
        "updateday": "20190313",
        "bet_info": "first_ball#single#^first_ball#5#",
        "ptype": "2",
        "js": "1",
        "status": "1",
        "return_water": "0.00",
        "bet_ip": "1732879990",
        "play_id": "110",
        "is_shiwan": "2",
        "more_money": "12,12",
        "more_odds": "1.930,10.500",
        "bet_num": "2",
        "follow": "5",
        "is_goodroad": "1",
        "gameplayTxt": "第一球",
        "input_nameTxt": "单 | 5 (共2注)",
        "fc_typeTxt": "内蒙11选5",
        "adddate": "2019-03-13 14:24:19",
        "statusTxt": "未结算",
        "can_win": "228.00"
      },
      {
        "id": "575102",
        "line_id": "zzz",
        "at_id": "4129",
        "ua_id": "4128",
        "sh_id": "5000423",
        "at_username": "shiwan_dl",
        "uid": "736904",
        "uname": "demo_tzsa9nfch4",
        "order_num": "324326319724687379",
        "bet": "24.00",
        "valid_bet": "24.00",
        "balance": "9976.00",
        "assets": "10000.00",
        "fc_type": "nm_11",
        "odds": "10.500",
        "periods": "19031334",
        "win": "未结算",
        "result": "0.00",
        "handicap": "1",
        "addtime": "1552458259",
        "addday": "20190313",
        "updatetime": "1552458259",
        "updateday": "20190313",
        "bet_info": "first_ball#single#^first_ball#5#",
        "ptype": "2",
        "js": "1",
        "status": "1",
        "return_water": "0.00",
        "bet_ip": "1732879990",
        "play_id": "110",
        "is_shiwan": "2",
        "more_money": "12,12",
        "more_odds": "1.930,10.500",
        "bet_num": "2",
        "follow": "5",
        "is_goodroad": "1",
        "gameplayTxt": "第一球",
        "input_nameTxt": "单 | 5 (共2注)",
        "fc_typeTxt": "内蒙11选5",
        "adddate": "2019-03-13 14:24:19",
        "statusTxt": "未结算",
        "can_win": "228.00"
      }
    ],
    "Subtotal": {
      "bet": "180.00",
      "can_win": "3930.00",
      "win": 0
    },
    "Total": {
      "bet": "180.00",
      "can_win": "3930.00",
      "win": "0.00",
      "js_win": "0.00"
    },
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
    ]
  });
  res.end();
});

router.post('/chases', (req, res) => {
  const sendData = {
    "starttime": '',
    "endtime": '',
    "fc_type": "all",
    "page": "1",
    "pagenum": "10",
    "token": "09386f5d619a2d1dd22a9bac4ed375b9",
  }
  res.json(
    {
      "ErrorCode": 1,
      "ErrorMsg": "OK",
      "Page": "1",
      "Pagenum": "10",
      "Pagecount": 1,
      "Recordcount": "5",
      "Data": [{
          "fc_type": "nm_11",
          "periods": "19031338",
          "order_num": "324326319724687383",
          "bet_info": "first_ball#single#^first_ball#5#",
          "odds": "10.500",
          "bet": "24.00",
          "win": "149.16",
          "js": "1",
          "status": "1",
          "bet_num": "2",
          "follow": "5",
          "addtime": "1552458259",
          "addday": "20190313",
          "trans_bet_info": "第一球:单 | 第一球:5",
          "adddate": "2019-03-13 14:24:19"
        },
        {
          "fc_type": "nm_11",
          "periods": "19031337",
          "order_num": "324326319724687382",
          "bet_info": "first_ball#single#^first_ball#5#",
          "odds": "10.500",
          "bet": "24.00",
          "win": "149.16",
          "js": "1",
          "status": "1",
          "bet_num": "2",
          "follow": "5",
          "addtime": "1552458259",
          "addday": "20190313",
          "trans_bet_info": "第一球:单 | 第一球:5",
          "adddate": "2019-03-13 14:24:19"
        },
        {
          "fc_type": "nm_11",
          "periods": "19031336",
          "order_num": "324326319724687381",
          "bet_info": "first_ball#single#^first_ball#5#",
          "odds": "10.500",
          "bet": "24.00",
          "win": "149.16",
          "js": "1",
          "status": "1",
          "bet_num": "2",
          "follow": "5",
          "addtime": "1552458259",
          "addday": "20190313",
          "trans_bet_info": "第一球:单 | 第一球:5",
          "adddate": "2019-03-13 14:24:19"
        },
        {
          "fc_type": "nm_11",
          "periods": "19031335",
          "order_num": "324326319724687380",
          "bet_info": "first_ball#single#^first_ball#5#",
          "odds": "10.500",
          "bet": "24.00",
          "win": "149.16",
          "js": "1",
          "status": "1",
          "bet_num": "2",
          "follow": "5",
          "addtime": "1552458259",
          "addday": "20190313",
          "trans_bet_info": "第一球:单 | 第一球:5",
          "adddate": "2019-03-13 14:24:19"
        },
        {
          "fc_type": "nm_11",
          "periods": "19031334",
          "order_num": "324326319724687379",
          "bet_info": "first_ball#single#^first_ball#5#",
          "odds": "10.500",
          "bet": "24.00",
          "win": "149.16",
          "js": "1",
          "status": "1",
          "bet_num": "2",
          "follow": "5",
          "addtime": "1552458259",
          "addday": "20190313",
          "trans_bet_info": "第一球:单 | 第一球:5",
          "adddate": "2019-03-13 14:24:19"
        }
      ]
    }
  )
  res.end();
});

router.post('/cashs', (req, res) => {
  const sendData = {
    "starttime": '',
    "endtime": '',
    "page": "1",
    "pagenum": "10",
    "token": "09386f5d619a2d1dd22a9bac4ed375b9",
  }
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "OK",
    "Page": "1",
    "Pagenum": "20",
    "Pagecount": 1,
    "Recordcount": "2",
    "Data": [{
        "id": "1330105",
        "uid": "736904",
        "line_id": "zzz",
        "agent_id": "4129",
        "cash_type": "2",
        "cash_do_type": "1",
        "dids": "324326319724687379,324326319724687380,324326319724687381,324326319724687382,324326319724687383",
        "cash_num": "120.00",
        "cash_balance": "9880.00",
        "remark": "订单号：324326319724687379~324326319724687383 , 彩种:内蒙11选5,共计:5单",
        "ptype": "2",
        "addtime": "1552458259",
        "addday": "20190313",
        "uname": "demo_tzsa9nfch4",
        "fc_type": "nm_11",
        "periods": "19031338",
        "is_shiwan": "2",
        "cash_typeTxt": "取出",
        "cash_do_typeTxt": "彩票下注(内蒙11选5)",
        "adddate": "2019-03-13 14:24:19"
      },
      {
        "id": "1330104",
        "uid": "736904",
        "line_id": "zzz",
        "agent_id": "4129",
        "cash_type": "1",
        "cash_do_type": "4",
        "dids": null,
        "cash_num": "10000.00",
        "cash_balance": "10000.00",
        "remark": "试玩账号分配额度10000",
        "ptype": "2",
        "addtime": "1552458161",
        "addday": "20190313",
        "uname": "demo_tzsa9nfch4",
        "fc_type": null,
        "periods": null,
        "is_shiwan": "2",
        "cash_typeTxt": "存入",
        "cash_do_typeTxt": "api转入",
        "adddate": "2019-03-13 14:22:41"
      }
    ]
  });
  res.end();
});

router.post('/updateloves', (req, res) => {
  const sendData = {
    "fc_type": "yxxsb",
    "token": "b78ceba3b74625a22c22417731f1a1f1",
  }
  res.json(
    {
      Data:[],
      ErrorCode: 1,
      ErrorMsg: '收藏成功！',
    }
  )
})

module.exports = router;
