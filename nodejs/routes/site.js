const express = require('express')
const router = express.Router();
// const select = require('../sql_connect.js');

router.post('/alltype', (req, res) => {
   res.json({
     "Data": {
       "all_type": [{
           "ltype": "xyx",
           "lname": "热门小游戏",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xyx.png",
           "order_by": "3",
           "types": [{
               "type": "yxxsb",
               "name": "鱼虾蟹骰宝",
               "ltype": "xyx",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/yxxsb.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "yxxsb",
               "order_by": "107",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [
                 "1",
                 "2",
                 "4"
               ]
             },
             {
               "type": "xydzp",
               "name": "幸运大转盘",
               "ltype": "xyx",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xydzp.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "xydzp",
               "order_by": "109",
               "auto_qishu": 0,
               "qishu": "1903130721",
               "auto": ""
             },
             {
               "type": "dbqb",
               "name": "夺包奇兵",
               "ltype": "xyx",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/dbqb.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "hcfy",
               "order_by": "105",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [
                 "6"
               ]
             },
             {
               "type": "sxzl",
               "name": "生肖转乐",
               "ltype": "xyx",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/sxzl.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "hcfy",
               "order_by": "103",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [
                 "5"
               ]
             },
             {
               "type": "hcfy",
               "name": "豪车风云",
               "ltype": "xyx",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/hcfy.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "hcfy",
               "order_by": "102",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [
                 "2"
               ]
             }
           ]
         },
         {
           "ltype": "yb",
           "lname": "一般彩",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/ybc.png",
           "order_by": "2",
           "types": [{
               "type": "pkliuhecai",
               "name": "PK极速六合彩",
               "ltype": "yb",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/pkliuhecai.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "liuhecai",
               "order_by": "115",
               "auto_qishu": "20190313360",
               "qishu": "20190313361",
               "auto": [{
                   "animal": "鸡",
                   "number": 3,
                   "color": "blue_wave"
                 },
                 {
                   "animal": "蛇",
                   "number": 7,
                   "color": "red_wave"
                 },
                 {
                   "animal": "虎",
                   "number": 22,
                   "color": "green_wave"
                 },
                 {
                   "animal": "虎",
                   "number": 10,
                   "color": "blue_wave"
                 },
                 {
                   "animal": "羊",
                   "number": 41,
                   "color": "blue_wave"
                 },
                 {
                   "animal": "龙",
                   "number": 8,
                   "color": "red_wave"
                 },
                 {
                   "animal": "狗",
                   "number": 2,
                   "color": "red_wave"
                 }
               ]
             },
             {
               "type": "fc_3d",
               "name": "福彩3D",
               "ltype": "yb",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/fc3d.png",
               "is_hot": "2",
               "is_recom": "2",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "pl_3",
               "order_by": "101",
               "auto_qishu": 2019064,
               "qishu": "2019065",
               "auto": [
                 "5",
                 "8",
                 "7"
               ]
             },
             {
               "type": "jsliuhecai",
               "name": "极速六合彩",
               "ltype": "yb",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/jsliuhecai.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "liuhecai",
               "order_by": "86",
               "auto_qishu": "20190313360",
               "qishu": "20190313361",
               "auto": [{
                   "animal": "马",
                   "number": 6,
                   "color": "green_wave"
                 },
                 {
                   "animal": "马",
                   "number": 30,
                   "color": "red_wave"
                 },
                 {
                   "animal": "猪",
                   "number": 1,
                   "color": "red_wave"
                 },
                 {
                   "animal": "龙",
                   "number": 8,
                   "color": "red_wave"
                 },
                 {
                   "animal": "牛",
                   "number": 47,
                   "color": "blue_wave"
                 },
                 {
                   "animal": "虎",
                   "number": 22,
                   "color": "green_wave"
                 },
                 {
                   "animal": "牛",
                   "number": 23,
                   "color": "red_wave"
                 }
               ]
             },
             {
               "type": "pl_3",
               "name": "排列三",
               "ltype": "yb",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/pl3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "pl_3",
               "order_by": "99",
               "auto_qishu": "19026",
               "qishu": "19065",
               "auto": [
                 "1",
                 "8",
                 "5"
               ]
             },
             {
               "type": "liuhecai",
               "name": "六合彩",
               "ltype": "yb",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lhc.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "liuhecai",
               "order_by": "98",
               "auto_qishu": 0,
               "qishu": "",
               "auto": ""
             },
             {
               "type": "wfliuhecai",
               "name": "五分六合彩",
               "ltype": "yb",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/wfliuhecai.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "liuhecai",
               "order_by": "0",
               "auto_qishu": "20190313144",
               "qishu": "20190313145",
               "auto": [{
                   "animal": "猴",
                   "number": 4,
                   "color": "blue_wave"
                 },
                 {
                   "animal": "羊",
                   "number": 17,
                   "color": "green_wave"
                 },
                 {
                   "animal": "猴",
                   "number": 28,
                   "color": "green_wave"
                 },
                 {
                   "animal": "鼠",
                   "number": 24,
                   "color": "red_wave"
                 },
                 {
                   "animal": "鸡",
                   "number": 15,
                   "color": "blue_wave"
                 },
                 {
                   "animal": "狗",
                   "number": 2,
                   "color": "red_wave"
                 },
                 {
                   "animal": "猪",
                   "number": 25,
                   "color": "blue_wave"
                 }
               ]
             }
           ]
         },
         {
           "ltype": "klc",
           "lname": "快乐彩",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/klc.png",
           "order_by": "2",
           "types": [{
               "type": "dj_kl8",
               "name": "东京快乐8",
               "ltype": "klc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/dj_kl8.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_kl8",
               "order_by": "0",
               "auto_qishu": "20190313480",
               "qishu": "20190313481",
               "auto": [
                 "1",
                 "23",
                 "69",
                 "43",
                 "58",
                 "10",
                 "55",
                 "40",
                 "48",
                 "30",
                 "39",
                 "70",
                 "72",
                 "15",
                 "64",
                 "56",
                 "38",
                 "45",
                 "77",
                 "18"
               ]
             },
             {
               "type": "xjp_kl8",
               "name": "新加坡快乐8",
               "ltype": "klc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xjp_kl8.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_kl8",
               "order_by": "0",
               "auto_qishu": 3168527,
               "qishu": 3168528,
               "auto": [
                 "03",
                 "04",
                 "06",
                 "10",
                 "14",
                 "16",
                 "20",
                 "22",
                 "29",
                 "33",
                 "39",
                 "42",
                 "46",
                 "48",
                 "53",
                 "57",
                 "63",
                 "70",
                 "72",
                 "78"
               ]
             },
             {
               "type": "bj_kl8",
               "name": "北京快乐8",
               "ltype": "klc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/bjkl8.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_kl8",
               "order_by": "84",
               "auto_qishu": 940773,
               "qishu": 940775,
               "auto": [
                 "05",
                 "07",
                 "10",
                 "12",
                 "19",
                 "26",
                 "28",
                 "29",
                 "31",
                 "32",
                 "44",
                 "49",
                 "51",
                 "52",
                 "57",
                 "67",
                 "68",
                 "69",
                 "72",
                 "77"
               ]
             },
             {
               "type": "dm_klc",
               "name": "丹麦快乐彩",
               "ltype": "klc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/dmklc.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_kl8",
               "order_by": "82",
               "auto_qishu": "2023849",
               "qishu": 2023850,
               "auto": [
                 "2",
                 "8",
                 "16",
                 "17",
                 "32",
                 "35",
                 "36",
                 "37",
                 "38",
                 "40",
                 "44",
                 "45",
                 "51",
                 "52",
                 "53",
                 "54",
                 "64",
                 "65",
                 "70",
                 "80"
               ]
             }
           ]
         },
         {
           "ltype": "gpc",
           "lname": "高频彩",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/gpc.png",
           "order_by": "0",
           "types": [{
               "type": "shf_10",
               "name": "十分赛车",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_10.png",
               "is_hot": "2",
               "is_recom": "2",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_10",
               "order_by": "115",
               "auto_qishu": "190313072",
               "qishu": "190313073",
               "auto": [{
                   "number": 9,
                   "color": "bj-brown"
                 },
                 {
                   "number": 3,
                   "color": "bj-black"
                 },
                 {
                   "number": 1,
                   "color": "bj-yellow"
                 },
                 {
                   "number": 4,
                   "color": "bj-orange"
                 },
                 {
                   "number": 2,
                   "color": "bj-blue"
                 },
                 {
                   "number": 6,
                   "color": "bj-deepblue"
                 },
                 {
                   "number": 10,
                   "color": "bj-green"
                 },
                 {
                   "number": 5,
                   "color": "bj-azure"
                 },
                 {
                   "number": 8,
                   "color": "bj-red"
                 },
                 {
                   "number": 7,
                   "color": "bj-silver"
                 }
               ]
             },
             {
               "type": "az_10",
               "name": "澳洲pk拾",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/az_10.png",
               "is_hot": "2",
               "is_recom": "2",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_10",
               "order_by": "115",
               "auto_qishu": "20568337",
               "qishu": 20569712,
               "auto": [{
                   "number": 4,
                   "color": "bj-orange"
                 },
                 {
                   "number": 5,
                   "color": "bj-azure"
                 },
                 {
                   "number": 7,
                   "color": "bj-silver"
                 },
                 {
                   "number": 10,
                   "color": "bj-green"
                 },
                 {
                   "number": 9,
                   "color": "bj-brown"
                 },
                 {
                   "number": 8,
                   "color": "bj-red"
                 },
                 {
                   "number": 6,
                   "color": "bj-deepblue"
                 },
                 {
                   "number": 3,
                   "color": "bj-black"
                 },
                 {
                   "number": 1,
                   "color": "bj-yellow"
                 },
                 {
                   "number": 2,
                   "color": "bj-blue"
                 }
               ]
             },
             {
               "type": "xyft",
               "name": "幸运飞艇",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xyft.png",
               "is_hot": "2",
               "is_recom": "2",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_10",
               "order_by": "115",
               "auto_qishu": 20190312180,
               "qishu": "20190313001",
               "auto": [{
                   "number": 7,
                   "color": "bj-silver"
                 },
                 {
                   "number": 4,
                   "color": "bj-orange"
                 },
                 {
                   "number": 5,
                   "color": "bj-azure"
                 },
                 {
                   "number": 1,
                   "color": "bj-yellow"
                 },
                 {
                   "number": 2,
                   "color": "bj-blue"
                 },
                 {
                   "number": 8,
                   "color": "bj-red"
                 },
                 {
                   "number": 10,
                   "color": "bj-green"
                 },
                 {
                   "number": 6,
                   "color": "bj-deepblue"
                 },
                 {
                   "number": 3,
                   "color": "bj-black"
                 },
                 {
                   "number": 9,
                   "color": "bj-brown"
                 }
               ]
             },
             {
               "type": "wf_10",
               "name": "五分赛车",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_10.png",
               "is_hot": "2",
               "is_recom": "2",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_10",
               "order_by": "115",
               "auto_qishu": "190313144",
               "qishu": "190313145",
               "auto": [{
                   "number": 3,
                   "color": "bj-black"
                 },
                 {
                   "number": 4,
                   "color": "bj-orange"
                 },
                 {
                   "number": 9,
                   "color": "bj-brown"
                 },
                 {
                   "number": 1,
                   "color": "bj-yellow"
                 },
                 {
                   "number": 2,
                   "color": "bj-blue"
                 },
                 {
                   "number": 8,
                   "color": "bj-red"
                 },
                 {
                   "number": 5,
                   "color": "bj-azure"
                 },
                 {
                   "number": 10,
                   "color": "bj-green"
                 },
                 {
                   "number": 7,
                   "color": "bj-silver"
                 },
                 {
                   "number": 6,
                   "color": "bj-deepblue"
                 }
               ]
             },
             {
               "type": "jsfc",
               "name": "极速赛车",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/jsfc.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_10",
               "order_by": "0",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [{
                   "number": 3,
                   "color": "bj-black"
                 },
                 {
                   "number": 5,
                   "color": "bj-azure"
                 },
                 {
                   "number": 2,
                   "color": "bj-blue"
                 },
                 {
                   "number": 8,
                   "color": "bj-red"
                 },
                 {
                   "number": 10,
                   "color": "bj-green"
                 },
                 {
                   "number": 4,
                   "color": "bj-orange"
                 },
                 {
                   "number": 6,
                   "color": "bj-deepblue"
                 },
                 {
                   "number": 7,
                   "color": "bj-silver"
                 },
                 {
                   "number": 9,
                   "color": "bj-brown"
                 },
                 {
                   "number": 1,
                   "color": "bj-yellow"
                 }
               ]
             },
             {
               "type": "ffc_o",
               "name": "分分彩",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/ffc_o.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "ffc_o",
               "order_by": "0",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [
                 "8",
                 "4",
                 "7",
                 "6",
                 "9"
               ]
             },
             {
               "type": "bj_10",
               "name": "北京赛车pk拾",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/bjpks.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_10",
               "order_by": "94",
               "auto_qishu": "730719",
               "qishu": 730720,
               "auto": [{
                   "number": 2,
                   "color": "bj-blue"
                 },
                 {
                   "number": 5,
                   "color": "bj-azure"
                 },
                 {
                   "number": 4,
                   "color": "bj-orange"
                 },
                 {
                   "number": 3,
                   "color": "bj-black"
                 },
                 {
                   "number": 10,
                   "color": "bj-green"
                 },
                 {
                   "number": 9,
                   "color": "bj-brown"
                 },
                 {
                   "number": 7,
                   "color": "bj-silver"
                 },
                 {
                   "number": 8,
                   "color": "bj-red"
                 },
                 {
                   "number": 1,
                   "color": "bj-yellow"
                 },
                 {
                   "number": 6,
                   "color": "bj-deepblue"
                 }
               ]
             },
             {
               "type": "mg_o",
               "name": "美国45秒彩",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/mg_o.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "ffc_o",
               "order_by": "0",
               "auto_qishu": "201903130961",
               "qishu": "201903130963",
               "auto": [
                 "1",
                 "6",
                 "6",
                 "9",
                 "2"
               ]
             },
             {
               "type": "dj_o",
               "name": "东京1.5分彩",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/dj_o.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "ffc_o",
               "order_by": "0",
               "auto_qishu": "20190313480",
               "qishu": "20190313481",
               "auto": [
                 "3",
                 "1",
                 "1",
                 "0",
                 "2"
               ]
             },
             {
               "type": "els_o",
               "name": "俄罗斯1.5分彩",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/els_o.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "ffc_o",
               "order_by": "0",
               "auto_qishu": 20190313480,
               "qishu": "20190313481",
               "auto": [
                 "9",
                 "5",
                 "7",
                 "1",
                 "1"
               ]
             },
             {
               "type": "lfc_o",
               "name": "两分彩",
               "ltype": "gpc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/lfc_o.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "ffc_o",
               "order_by": "0",
               "auto_qishu": "190313360",
               "qishu": "190313361",
               "auto": [
                 "4",
                 "7",
                 "0",
                 "6",
                 "3"
               ]
             }
           ]
         },
         {
           "ltype": "ssc",
           "lname": "时时彩",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/ssc.png",
           "order_by": "0",
           "types": [{
               "type": "shf_ssc",
               "name": "十分时时彩",
               "ltype": "ssc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_ssc.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "cq_ssc",
               "order_by": "115",
               "auto_qishu": "190313072",
               "qishu": "190313073",
               "auto": [
                 "4",
                 "9",
                 "8",
                 "6",
                 "2"
               ]
             },
             {
               "type": "wf_ssc",
               "name": "五分时时彩",
               "ltype": "ssc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_ssc.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "cq_ssc",
               "order_by": "115",
               "auto_qishu": "190313144",
               "qishu": "190313145",
               "auto": [
                 "5",
                 "1",
                 "5",
                 "7",
                 "3"
               ]
             },
             {
               "type": "sf_ssc",
               "name": "三分时时彩",
               "ltype": "ssc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/sf_ssc.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "cq_ssc",
               "order_by": "115",
               "auto_qishu": "190313240",
               "qishu": "190313241",
               "auto": [
                 "0",
                 "3",
                 "6",
                 "5",
                 "6"
               ]
             },
             {
               "type": "cq_ssc",
               "name": "重庆时时彩",
               "ltype": "ssc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/cqssc.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "cq_ssc",
               "order_by": "97",
               "auto_qishu": "20190313023",
               "qishu": "20190313024",
               "auto": [
                 "1",
                 "3",
                 "0",
                 "5",
                 "5"
               ]
             },
             {
               "type": "tj_ssc",
               "name": "天津时时彩",
               "ltype": "ssc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/tjssc.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "cq_ssc",
               "order_by": "96",
               "auto_qishu": 20190313008,
               "qishu": "20190313010",
               "auto": [
                 "0",
                 "7",
                 "7",
                 "6",
                 "5"
               ]
             },
             {
               "type": "xj_ssc",
               "name": "新疆时时彩",
               "ltype": "ssc",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xjssc.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "cq_ssc",
               "order_by": "95",
               "auto_qishu": "20190313006",
               "qishu": "20190313007",
               "auto": [
                 "2",
                 "1",
                 "7",
                 "8",
                 "8"
               ]
             }
           ]
         },
         {
           "ltype": "sf",
           "lname": "快乐十分",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/klsf.png",
           "order_by": "0",
           "types": [{
               "type": "wf_ten",
               "name": "PK快乐五分",
               "ltype": "sf",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_ten.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_ten",
               "order_by": "115",
               "auto_qishu": "190313144",
               "qishu": "190313145",
               "auto": [
                 "9",
                 "8",
                 "2",
                 "3",
                 "10",
                 "4",
                 "16",
                 "19"
               ]
             },
             {
               "type": "shf_ten",
               "name": "PK快乐十分",
               "ltype": "sf",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_ten.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_ten",
               "order_by": "115",
               "auto_qishu": "190313072",
               "qishu": "190313073",
               "auto": [
                 "14",
                 "7",
                 "8",
                 "6",
                 "2",
                 "11",
                 "5",
                 "15"
               ]
             },
             {
               "type": "gd_ten",
               "name": "广东快乐十分",
               "ltype": "sf",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/gdklsf.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_ten",
               "order_by": "89",
               "auto_qishu": 2019031308,
               "qishu": "2019031310",
               "auto": [
                 "17",
                 "14",
                 "20",
                 "04",
                 "11",
                 "10",
                 "03",
                 "07"
               ]
             },
             {
               "type": "cq_ten",
               "name": "重庆快乐十分",
               "ltype": "sf",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/cqklsf.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_ten",
               "order_by": "88",
               "auto_qishu": "190313024",
               "qishu": "190313025",
               "auto": [
                 "16",
                 "15",
                 "08",
                 "18",
                 "07",
                 "13",
                 "04",
                 "01"
               ]
             },
             {
               "type": "js_ten",
               "name": "极速快乐十分",
               "ltype": "sf",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/js_ten.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_ten",
               "order_by": "0",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [
                 "19",
                 "13",
                 "8",
                 "20",
                 "2",
                 "5",
                 "14",
                 "4"
               ]
             },
             {
               "type": "hn_ten",
               "name": "湖南快乐十分",
               "ltype": "sf",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/hn_ten.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_ten",
               "order_by": "0",
               "auto_qishu": 20190313009,
               "qishu": "20190313010",
               "auto": [
                 "20",
                 "07",
                 "15",
                 "02",
                 "18",
                 "12",
                 "05",
                 "13"
               ]
             }
           ]
         },
         {
           "ltype": "11",
           "lname": "十一选五",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/syx5.png",
           "order_by": "0",
           "types": [{
               "type": "jl_11",
               "name": "吉林11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/jl_11.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "111",
               "auto_qishu": 19031310,
               "qishu": "19031312",
               "auto": [
                 "01",
                 "05",
                 "08",
                 "06",
                 "09"
               ]
             },
             {
               "type": "nm_11",
               "name": "内蒙11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/nm_11.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "111",
               "auto_qishu": 19031308,
               "qishu": "19031319",
               "auto": [
                 "11",
                 "09",
                 "08",
                 "06",
                 "07"
               ]
             },
             {
               "type": "hb_11",
               "name": "河北11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/hb_11.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "111",
               "auto_qishu": 19031310,
               "qishu": "19031312",
               "auto": [
                 "11",
                 "06",
                 "01",
                 "04",
                 "08"
               ]
             },
             {
               "type": "gd_11",
               "name": "广东11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/gdsyx5.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "87",
               "auto_qishu": "2019031308",
               "qishu": "2019031309",
               "auto": [
                 "09",
                 "02",
                 "05",
                 "11",
                 "08"
               ]
             },
             {
               "type": "sd_11",
               "name": "山东11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/sdsyx5.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "86",
               "auto_qishu": "2019031309",
               "qishu": "2019031311",
               "auto": [
                 "9",
                 "5",
                 "6",
                 "3",
                 "11"
               ]
             },
             {
               "type": "jx_11",
               "name": "江西11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/jxsyx5.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "85",
               "auto_qishu": 2019031308,
               "qishu": "2019031310",
               "auto": [
                 "06",
                 "10",
                 "04",
                 "11",
                 "05"
               ]
             },
             {
               "type": "fj_11",
               "name": "福建11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/fj_11.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "0",
               "auto_qishu": "2019031311",
               "qishu": "2019031313",
               "auto": [
                 "06",
                 "04",
                 "02",
                 "01",
                 "07"
               ]
             },
             {
               "type": "gx_11",
               "name": "广西11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/gx_11.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "0",
               "auto_qishu": "2019031308",
               "qishu": "2019031310",
               "auto": [
                 "06",
                 "04",
                 "05",
                 "02",
                 "08"
               ]
             },
             {
               "type": "js_11",
               "name": "极速11选5",
               "ltype": "11",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/js_11.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gd_11",
               "order_by": "0",
               "auto_qishu": "20190313360",
               "qishu": "20190313361",
               "auto": [
                 "9",
                 "8",
                 "3",
                 "10",
                 "4"
               ]
             }
           ]
         },
         {
           "ltype": "k3",
           "lname": "快三",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/k3.png",
           "order_by": "0",
           "types": [{
               "type": "wf_k3",
               "name": "五分快3",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_k3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "115",
               "auto_qishu": "190313144",
               "qishu": "190313145",
               "auto": [
                 "1",
                 "2",
                 "6"
               ]
             },
             {
               "type": "shf_k3",
               "name": "十分快3",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_k3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "115",
               "auto_qishu": "190313072",
               "qishu": "190313073",
               "auto": [
                 "3",
                 "2",
                 "4"
               ]
             },
             {
               "type": "yf_k3",
               "name": "一分快3",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/yf_k3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "115",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [
                 "3",
                 "3",
                 "4"
               ]
             },
             {
               "type": "sf_k3",
               "name": "三分快3",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/sf_k3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "115",
               "auto_qishu": "190313240",
               "qishu": "190313241",
               "auto": [
                 "5",
                 "6",
                 "2"
               ]
             },
             {
               "type": "jsk3",
               "name": "极速快三",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/jsk3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "113",
               "auto_qishu": "1903130720",
               "qishu": "1903130721",
               "auto": [
                 "3",
                 "1",
                 "5"
               ]
             },
             {
               "type": "jl_k3",
               "name": "吉林快三",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/jl_k3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "113",
               "auto_qishu": 190313011,
               "qishu": "190313021",
               "auto": [
                 "1",
                 "1",
                 "3"
               ]
             },
             {
               "type": "nm_k3",
               "name": "内蒙快三",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/nm_k3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "113",
               "auto_qishu": 19031306,
               "qishu": "19031308",
               "auto": [
                 "1",
                 "3",
                 "6"
               ]
             },
             {
               "type": "hb_k3",
               "name": "河北快三",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/hb_k3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "113",
               "auto_qishu": 20190313010,
               "qishu": "20190313011",
               "auto": [
                 "1",
                 "5",
                 "5"
               ]
             },
             {
               "type": "ah_k3",
               "name": "安徽快3",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/ahk3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "93",
               "auto_qishu": 20190313010,
               "qishu": "20190313011",
               "auto": [
                 "1",
                 "4",
                 "5"
               ]
             },
             {
               "type": "gx_k3",
               "name": "广西快3",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/gxks.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "91",
               "auto_qishu": "20190313008",
               "qishu": "20190313009",
               "auto": [
                 "3",
                 "3",
                 "4"
               ]
             },
             {
               "type": "js_k3",
               "name": "江苏快3",
               "ltype": "k3",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/js_k3.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "gx_k3",
               "order_by": "90",
               "auto_qishu": "20190313010",
               "qishu": "20190313011",
               "auto": [
                 "1",
                 "4",
                 "6"
               ]
             }
           ]
         },
         {
           "ltype": "xy",
           "lname": "幸运彩",
           "lsrc": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xym.png",
           "order_by": "0",
           "types": [{
               "type": "dj_28",
               "name": "东京28",
               "ltype": "xy",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/dj_28.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "dm_28",
               "order_by": "0",
               "auto_qishu": "20190313480",
               "qishu": "20190313481",
               "auto": [
                 "7",
                 "3",
                 "2"
               ]
             },
             {
               "type": "xjp_28",
               "name": "新加坡28",
               "ltype": "xy",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xjp_28.png",
               "is_hot": "2",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "dm_28",
               "order_by": "0",
               "auto_qishu": 3168527,
               "qishu": 3168528,
               "auto": [
                 "3",
                 "5",
                 "7"
               ]
             },
             {
               "type": "bj_28",
               "name": "PK北京28",
               "ltype": "xy",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/pk28.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "bj_28",
               "order_by": "86",
               "auto_qishu": 940773,
               "qishu": 940775,
               "auto": [
                 "9",
                 "2",
                 "2"
               ]
             },
             {
               "type": "pc_28",
               "name": "PC蛋蛋",
               "ltype": "xy",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/pcdd.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "pc_28",
               "order_by": "80",
               "auto_qishu": 940773,
               "qishu": 940775,
               "auto": [
                 "9",
                 "3",
                 "4"
               ]
             },
             {
               "type": "dm_28",
               "name": "丹麦28",
               "ltype": "xy",
               "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/dm28.png",
               "is_hot": "1",
               "is_recom": "1",
               "is_like": 1,
               "is_wh": 1,
               "wh_content": "",
               "template": "dm_28",
               "order_by": "78",
               "auto_qishu": "2023849",
               "qishu": 2023850,
               "auto": [
                 "0",
                 "0",
                 "9"
               ]
             }
           ]
         }
       ],
       "hot": [{
           "type": "shf_10",
           "name": "十分赛车",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_10.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "pkliuhecai",
           "name": "PK极速六合彩",
           "ltype": "yb",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/pkliuhecai.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "liuhecai",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "az_10",
           "name": "澳洲pk拾",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/az_10.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "xyft",
           "name": "幸运飞艇",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xyft.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "wf_10",
           "name": "五分赛车",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_10.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "yxxsb",
           "name": "鱼虾蟹骰宝",
           "ltype": "xyx",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/yxxsb.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "yxxsb",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "107"
         },
         {
           "type": "fc_3d",
           "name": "福彩3D",
           "ltype": "yb",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/fc3d.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "pl_3",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "101"
         },
         {
           "type": "jsliuhecai",
           "name": "极速六合彩",
           "ltype": "yb",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/jsliuhecai.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "liuhecai",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "86"
         },
         {
           "type": "dj_28",
           "name": "东京28",
           "ltype": "xy",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/dj_28.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "dm_28",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "0"
         },
         {
           "type": "jsfc",
           "name": "极速赛车",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/jsfc.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "0"
         },
         {
           "type": "ffc_o",
           "name": "分分彩",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/ffc_o.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "ffc_o",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "0"
         },
         {
           "type": "dj_kl8",
           "name": "东京快乐8",
           "ltype": "klc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/dj_kl8.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_kl8",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "0"
         },
         {
           "type": "xjp_kl8",
           "name": "新加坡快乐8",
           "ltype": "klc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xjp_kl8.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_kl8",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "0"
         },
         {
           "type": "xjp_28",
           "name": "新加坡28",
           "ltype": "xy",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xjp_28.png",
           "is_hot": "2",
           "is_recom": "1",
           "is_like": 1,
           "is_wh": 1,
           "template": "dm_28",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "0"
         }
       ],
       "recommend": [{
           "type": "shf_10",
           "name": "十分赛车",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/shf_10.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "az_10",
           "name": "澳洲pk拾",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/az_10.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "xyft",
           "name": "幸运飞艇",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/xyft.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "wf_10",
           "name": "五分赛车",
           "ltype": "gpc",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/wf_10.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "bj_10",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "115"
         },
         {
           "type": "fc_3d",
           "name": "福彩3D",
           "ltype": "yb",
           "img_path": "http://llfrontenddemo.pk1358.com/cdn/images/lotterytype/fc3d.png",
           "is_hot": "2",
           "is_recom": "2",
           "is_like": 1,
           "is_wh": 1,
           "template": "pl_3",
           "wh_content": "",
           "wh_starttime": "",
           "wh_endtime": "",
           "order_by": "101"
         }
       ],
       "like": [

       ]
     },
     "ErrorCode": 1,
     "ErrorMsg": "获取成功"
   });
   res.end();
});

router.post('/notice', (req, res) => {
  res.json({
    "Data": [{
      "id": "16",
      "title": "新增彩种",
      "content": "本站新增彩种 广西十一选五、福建十一选五、极速十一选五、湖南快乐十分、极速快乐十分，欢迎体验！更多精彩敬请期待！",
      "addtime": "2018-03-17"
    }],
    "ErrorCode": 1,
    "Message": "执行成功"
  });
  res.end();
});

router.post('/slideimg', (req, res) => {
  res.json({
    "ErrorCode": 1,
    "ErrorMsg": "执行成功",
    "Data": [
      "http://pkfrontenddemo.pk1358.com/cdn/images/banner/banner1.png",
      "http://pkfrontenddemo.pk1358.com/cdn/images/banner/banner2.png",
      "http://pkfrontenddemo.pk1358.com/cdn/images/banner/banner3.png"
    ]
  });
  res.end();
})

module.exports = router;