var hTimeInterval = 0; //配牌用タイマー
var hTimeInterval2 = 0; //回答待ち用タイマー
var hai = new Array(15); //配牌
var haisave = new Array(15); //配牌セーブ
var ron = new Array(9); //待ち牌
var machitable = new Array(9); //待ち数
var ans = -1; //回答
var haic = 0; //配色 0:マンズ 1:ピンズ 2:ソーズ
var q = 1; //問題番号
var sc = 0; //SCORE
var hsc = parseInt(getCookie("hsc2")); //HI-SCORE
if (hsc == false) {
  hsc = 0;
}
var yaku = ""; //役
var han = 6; //翻数
var hanmax = 0; //翻数or点数
var hanmax1 = 0; //翻数or点数
var hanmin = 100000; //点数
var yakumax = "";
var yakumax1 = "";
var agarikei = new Array(9); //雀頭、先頭牌１、２、３、４、0:暗刻or1:順子、0:暗刻or1:順子、0:暗刻or1:順子、0:暗刻or1:順子
var agarihai = 0;
var kirihai = 0;
var qmode = 0; //0:待ちの広さ 1:高目の点数
if (isNaN(hsc)) {
  hsc = 0;
}
var count = 300;
function _getEle(a) {
  return document.getElementById ? document.getElementById(a) : null;
}
function _h() {
  var i = 0;
  var j = 0;
  var k = 0;
  var tehai = new Array();
  if (q == 1) {
    sc = 0;
  }
  ans = -1;
  han = 0;
  yaku = "";
  yakumax = "";
  _getEle("score").innerHTML = "SCORE: " + sc + "点";
  _getEle("qnum").innerHTML = "第" + q + "問";
  haic = parseInt(Math.random() * 3);
  for (i = 0; i < 9; i++) {
    _getEle("a" + i).innerHTML = "<img src='images/ura.gif'>";
  }
  do {
    //テンパイ作成
    for (i = 0; i < 9; i++) {
      hai[i] = 0;
    }
    i = 0;
    while (i < 13) {
      j = parseInt(Math.random() * 9);
      if (hai[j] < 4) {
        hai[j]++;
        i++;
      }
    }
    machisu = getMachi(0);
  } while (machisu <= 2 || machisu > 7);

  for (i = 0; i < 9; i++) {
    haisave[i] = hai[i];
  } //テンパイ形退避
  do {
    //問題作成
    for (i = 0; i < 9; i++) {
      hai[i] = haisave[i];
    } //テンパイ形復帰
    do {
      j = parseInt(Math.random() * 9);
    } while (haisave[j] == 4);
    hai[j]++;
  } while (checkTumo(0));

  var haipai = "";
  for (i = 0, k = 0; i < 9; i++) {
    for (j = 0; j < hai[i]; j++) {
      tehai[k] = i + 9 * haic;
      k++;
    }
  }
  //答え作成
  machiMax = 0;
  hanmax = 0;
  hanmin = 100000;
  for (i = 0; i < 9; i++) {
    haisave[i] = hai[i];
  } //問題退避
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      hai[j] = haisave[j];
    } //問題復帰
    if (hai[i] > 0) {
      hai[i]--;
    } else {
      machitable[i] = 0;
      continue;
    }
    kirihai = i;
    machitable[i] = getMachi(1); //待ち＆高目の点数を取得
    if (machiMax < machitable[i]) {
      machiMax = machitable[i];
    }
    if (qmode == 1) {
      machitable[i] = hanmax1;
    }
  }
  for (j = 0; j < 9; j++) {
    hai[j] = haisave[j];
  } //問題復帰

  if (hTimeInterval > 0) {
    clearInterval(hTimeInterval);
  }
  i = 0;
  hTimeInterval = setInterval(function () {
    var hair = tehai[i];
    haipai += "<img src='images/" + hair + ".gif'>";
    _getEle("hai").innerHTML = haipai;
    if (i >= 13) {
      clearInterval(hTimeInterval);
      hTimeInterval = 0;
      _t();
    }
    i++;
  }, 100);
}
function _t() {
  if (hTimeInterval2 > 0) {
    clearInterval(hTimeInterval2);
  }
  _getEle("start").style.display = "none";
  _getEle("answer").style.display = "";
  _getEle("mes2").innerHTML = "";
  _getEle("mes3").innerHTML = "";
  var timedisp = _getEle("timer");
  count = 300;
  var sec = count / 10;
  hTimeInterval2 = setInterval(function () {
    if (count % 10 == 0) {
      sec = count / 10;
      timedisp.innerHTML = sec + "秒";
    }
    if (count <= 0) {
      _a();
    }
    count--;
  }, 100);
}
function _a() {
  var work = "";
  clearInterval(hTimeInterval2);
  hTimeInterval2 = 0;
  if (checkAns() == 0) {
    if (qmode == 1) {
      work = yakumax;
    } else {
      for (k = 0; k < 9; k++) {
        if (machitable[k] > 0) {
          j = k + 9 * haic;
          if (machitable[k] == machiMax) {
            work += "<b><font color='#FFFF00'>";
          }
          work += "<img src='images/" + j + ".gif'>切り　";
          hai[k]--;
          machisu = getMachi(0);
          for (i = 0; i < 9; i++) {
            if (ron[i] == 1) {
              j = i + 9 * haic;
              work += "<img src='images/" + j + ".gif'>";
            }
          }
          hai[k]++;
          work += "　" + machisu + "面待ち<br>";
          if (machitable[k] == machiMax) {
            work += "</font></b>";
          }
        }
      }
    }
    _getEle("mes2").style.color = "#ff0000";
    _getEle("mes2").innerHTML = "不正解!";
    _getEle("mes3").innerHTML = work;
    _end();
  } else {
    _getEle("mes2").style.color = "#0000ff";
    _getEle("mes2").innerHTML = "正解!";
    sc = sc + count;
    if (q < 50) {
      q++;
      _h();
    } else {
      _getEle("mes2").innerHTML = "パーフェクト!";
      _end();
    }
  }
}
function _r() {
  sc = 0;
  _getEle("hai").innerHTML = "ここに問題が表示されます";
  _getEle("timer").innerHTML = "30秒";
  _getEle("mes2").innerHTML = "";
  _getEle("mes3").innerHTML = "";
  _getEle("jvsc").style.display = "none";
  _end();
}
function _end() {
  if (hTimeInterval > 0) {
    clearInterval(hTimeInterval);
  }
  if (hTimeInterval2 > 0) {
    clearInterval(hTimeInterval2);
  }
  if (hsc < sc) {
    hsc = sc;
    setCookie("hsc2", hsc, 365);
  }
  if (sc > 0) {
    var work =
      "<form action='./rank.php' method='POST' style='width:500px;background-color:#285c00;'><b>ランキング登録</b>（10文字以内。超えた分は削除されます）<br><input type='text' name='n' size='30' maxlength='10'><input type='hidden' name='s' value='" +
      sc +
      "'><input type='hidden' name='l' value='" +
      qmode +
      "'><br><input type='submit' value='この名前で登録する'></form>";
    _getEle("rank").innerHTML = work;
    _getEle("rank").style.display = "";
  }
  _getEle("start").style.display = "";
  _getEle("answer").style.display = "none";
  _getEle("score").innerHTML = "SCORE: " + sc + "点";
  _getEle("hisc").innerHTML = "HI-SCORE: " + hsc + "点";
  q = 1;
  sc = 0;
}
function _p(num) {
  var num2 = 0;
  for (i = 0; i < 9; i++) {
    _getEle("a" + i).innerHTML = "<img src='images/ura.gif'>";
  }
  ans = num;
  num2 = num + 9 * haic;
  _getEle("a" + num).innerHTML = "<img src='images/" + num2 + ".gif'>";
}
function getMachi(doscore) {
  var tenpai = 0;
  var tumo = 0;
  var i = 0;
  haisave1 = new Array();
  for (i = 0; i < 9; i++) {
    haisave1[i] = hai[i];
  } //手牌退避
  hanmax1 = 0;
  for (tumo = 0; tumo < 9; tumo++) {
    // すべてのツモについてあがりチェック
    ron[tumo] = 0;
    if (hai[tumo] == 4) {
      // ４枚持ちの場合つもるわけない
      continue;
    } else {
      hai[tumo]++;
      agarihai = tumo;
      if (checkTumo(doscore) == 1) {
        tenpai++;
        ron[tumo] = 1;
      }
      for (i = 0; i < 9; i++) {
        hai[i] = haisave1[i];
      } // 手牌復帰
    }
  }
  if (doscore == 1 && tenpai > 0) {
    if (hanmax1 < hanmin) {
      hanmin = hanmax1;
    }
    if (hanmax1 > hanmax) {
      hanmax = hanmax1;
      yakumax = yakumax1;
    }
  }
  return tenpai;
}
function checkTumo(doscore) {
  var agari = 0;
  var head = 0;
  var chi = 0;
  var mentsu = 0;
  var men = 0;
  var haisave2 = new Array();
  for (i = 0; i < 9; i++) {
    haisave2[i] = hai[i];
  } // つもり形退避
  chi = 0;
  for (head = 0; head < 9; head++) {
    if (hai[head] >= 2) {
      if (hai[head] == 2) {
        chi++;
      } //チートイ面子
      hai[head] = hai[head] - 2;
      mentsu = 0;
      agarikei[0] = head;
      a = 1;
      for (men = 0; men < 4; men++) {
        // 最大４メンツ分loop
        for (i = 0; i < 7; i++) {
          // シュンツサーチ
          if (hai[i] * hai[i + 1] * hai[i + 2] != 0 && hai[i] != 3) {
            // アンコは残す
            hai[i]--;
            hai[i + 1]--;
            hai[i + 2]--;
            mentsu++;
            agarikei[a] = i;
            agarikei[a + 4] = 1;
            a++;
            break;
          }
        }
      }
      for (i = 0; i < 9; i++) {
        // アンコサーチ
        if (hai[i] == 3) {
          hai[i] = 0;
          mentsu++;
          agarikei[a] = i;
          agarikei[a + 4] = 0;
          a++;
        }
      }
      if (mentsu == 4) {
        // ４メンツそろえばあがり
        agari = 1;
        if (doscore == 1) {
          for (i = 0; i < 9; i++) {
            hai[i] = haisave2[i];
          } // つもり形復帰
          getScore();
          if (han > hanmax1) {
            hanmax1 = han;
            yakumax1 = yaku;
          }
        }
      }
      for (i = 0; i < 9; i++) {
        hai[i] = haisave2[i];
      } // つもり形復帰
    }
  }
  if (chi == 7 && agari != 1) {
    //チートイ
    agari = 1;
    han = 16000;
    j = kirihai + 9 * haic;
    yaku = "<img src='images/" + j + ".gif'>切り　";
    //*************************あがり形************************************
    hai[agarihai]--;
    for (i = 0; i < 9; i++) {
      j = i + 9 * haic;
      for (k = 0; k < hai[i]; k++) {
        yaku += "<img src='images/" + j + ".gif'>";
      }
    }
    j = agarihai + 9 * haic;
    yaku += "　<img src='images/" + j + ".gif'>ロン<br>　<br>";
    yaku +=
      "<b>清一色 6翻<br>七対子 2翻<br><font color='#ffff00'>倍満 16000点</font></b>";
    if (han > hanmax1) {
      hanmax1 = han;
      yakumax1 = yaku;
    }
  }
  return agari;
}
function checkAns() {
  var answerf = 0;
  if (ans >= 0) {
    if (qmode == 0) {
      if (machitable[ans] == machiMax) {
        answerf = 1;
      }
    } else {
      if (machitable[ans] == hanmax) {
        answerf = 1;
      }
    }
  }
  return answerf;
}
function setCookie(theName, theValue, theDay) {
  if (theName != null && theValue != null) {
    expDay = "Wed, 01 Jan 2020 18:56:35 GMT";
    if (theDay != null) {
      theDay = eval(theDay);
      setDay = new Date();
      setDay.setTime(setDay.getTime() + theDay * 1000 * 60 * 60 * 24);
      expDay = setDay.toGMTString();
    }
    document.cookie = theName + "=" + escape(theValue) + ";expires=" + expDay;
    return true;
  }
  return false;
}
function getCookie(theName) {
  theName += "=";
  theCookie = document.cookie + ";";
  start = theCookie.indexOf(theName);
  if (start != -1) {
    end = theCookie.indexOf(";", start);
    return unescape(theCookie.substring(start + theName.length, end));
  }
  return false;
}

function getScore() {
  han = 6; //チンイツ
  j = kirihai + 9 * haic;
  yaku = "<img src='images/" + j + ".gif'>切り　";
  //*************************九蓮宝燈************************************
  flag2 = 1;
  if (hai[0] >= 3 && hai[8] >= 3) {
    for (i = 1; i < 8; i++) {
      if (hai[i] == 0) {
        flag2 = 0;
      }
    }
  } else {
    flag2 = 0;
  }
  //*************************緑一色************************************
  if (flag2 == 0) {
    if (haic == 2 && hai[0] == 0 && hai[4] == 0 && hai[6] == 0 && hai[8] == 0) {
      flag2 = 2;
    }
  }
  //*************************四暗刻************************************
  if (flag2 == 0) {
    if (agarikei[5] + agarikei[6] + agarikei[7] + agarikei[8] == 0) {
      flag2 = 3;
    }
  }
  //*************************平和************************************
  flag = 0;
  if (agarikei[5] + agarikei[6] + agarikei[7] + agarikei[8] == 4) {
    for (i = 1; i < 4; i++) {
      if (agarihai == agarikei[i] || agarihai == agarikei[i] + 2) {
        flag = 1;
      }
    }
  }
  //*************************あがり形************************************
  hai[agarihai]--;
  for (i = 0; i < 9; i++) {
    j = i + 9 * haic;
    for (k = 0; k < hai[i]; k++) {
      yaku += "<img src='images/" + j + ".gif'>";
    }
  }
  j = agarihai + 9 * haic;
  yaku += "　<img src='images/" + j + ".gif'>";
  if (flag == 1) {
    yaku += "ロン<br>　<br>";
  } else {
    yaku += "ツモ<br>　<br>";
  }
  //*************************役満************************************
  if (flag2 == 1) {
    yaku += "<b>九蓮宝燈<br><font color='#ffff00'>役満 32000点</font></b>";
    han = 32000;
    return;
  } else if (flag2 == 2) {
    yaku += "<b>緑一色<br><font color='#ffff00'>役満 32000点</font></b>";
    han = 32000;
    return;
  } else if (flag2 == 3) {
    yaku += "<b>四暗刻<br><font color='#ffff00'>役満 32000点</font></b>";
    han = 32000;
    return;
  }
  //*************************通常あがり************************************
  yaku += "<b>清一色 6翻<br>";
  if (flag == 1) {
    han += 1;
    yaku += "平和 1翻<br>";
  } else {
    han += 1;
    yaku += "門前清自摸和 1翻<br>";
  }
  //*************************タンヤオ************************************
  flag = 1;
  if (agarikei[0] == 0 || agarikei[0] == 8) {
    flag = 0;
  }
  for (i = 1; i <= 4; i++) {
    if (
      agarikei[i] == 0 ||
      agarikei[i] == 8 ||
      (agarikei[i] == 6 && agarikei[i + 4] == 1)
    ) {
      flag = 0;
    }
  }
  if (flag == 1) {
    han += 1;
    yaku += "タンヤオ 1翻<br>";
  }
  //*************************純チャン************************************
  flag = 1;
  if (agarikei[0] != 0 && agarikei[0] != 8) {
    flag = 0;
  }
  for (i = 1; i <= 4; i++) {
    if (
      agarikei[i] != 0 &&
      agarikei[i] != 8 &&
      !(agarikei[i] == 6 && agarikei[i + 4] == 1)
    ) {
      flag = 0;
    }
  }
  if (flag == 1) {
    han += 3;
    yaku += "純チャン 3翻<br>";
  }
  //*************************一盃口************************************
  flag = 0;
  for (i = 1; i <= 3; i++) {
    if (
      agarikei[i] == agarikei[i + 1] &&
      agarikei[i + 4] == 1 &&
      agarikei[i + 5] == 1
    ) {
      flag++;
    }
  }
  if (flag == 1) {
    han += 1;
    yaku += "一盃口 1翻<br>";
  } else if (flag == 2) {
    han += 3;
    yaku += "二盃口 3翻<br>";
  }
  //*************************一通************************************
  flag = 0;
  for (i = 1; i <= 4; i++) {
    if (agarikei[i] == 0 && agarikei[i + 4] == 1) {
      flag++;
      break;
    }
  }
  for (i = 1; i <= 4; i++) {
    if (agarikei[i] == 3 && agarikei[i + 4] == 1) {
      if (flag == 1) {
        flag++;
        break;
      }
    }
  }
  for (i = 1; i <= 4; i++) {
    if (agarikei[i] == 6 && agarikei[i + 4] == 1) {
      if (flag == 2) {
        han += 2;
        yaku += "一気通貫 2翻<br>";
        break;
      }
    }
  }
  //*************************三暗刻、三連刻************************************
  for (i = 1, j = 0, k = 0, pre = 10; i <= 4; i++) {
    if (agarikei[i + 4] == 0) {
      j++;
      if (pre == agarikei[i] - 1) {
        k++;
      } else {
        k = 0;
      }
      pre = agarikei[i];
    }
  }
  if (j == 3) {
    han += 2;
    yaku += "三暗刻 2翻<br>";
    if (k == 2) {
      han += 2;
      yaku += "三連刻 2翻<br>";
    }
  }

  if (han >= 13) {
    yaku += "<font color='#ffff00'>数え役満 32000点</font><br>";
    han = 32000;
  } else if (han >= 11) {
    yaku += "<font color='#ffff00'>三倍満 24000点</font><br>";
    han = 24000;
  } else if (han >= 8) {
    yaku += "<font color='#ffff00'>倍満 16000点</font><br>";
    han = 16000;
  } else if (han >= 6) {
    yaku += "<font color='#ffff00'>跳満 12000点</font><br>";
    han = 12000;
  }
  yaku += "</b>";
}
function _qmode() {
  if (hTimeInterval == 0 && hTimeInterval2 == 0) {
    if (qmode == 0) {
      qmode = 1;
      _getEle("question").innerHTML =
        "点数を優先してください（クリックで変更）";
    } else {
      qmode = 0;
      _getEle("question").innerHTML =
        "待ちの広さを優先してください（クリックで変更）";
    }
  }
}
