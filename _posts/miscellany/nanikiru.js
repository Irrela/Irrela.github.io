var hTimeInterval = 0; //配牌用タイマー
var hTimeInterval2 = 0; //回答待ち用タイマー
var hai = new Array(14); //配牌
var ron = new Array(9); //待ち牌
var ans = new Array(9); //回答
var haic = 0; //配色 0:マンズ 1:ピンズ 2:ソーズ
var q = 1; //問題番号
var sc = 0; //SCORE
var hsc = parseInt(getCookie("hsc")); //HI-SCORE
if (hsc == false) {
  hsc = 0;
}
var level = 1; //LEVEL
var chaipai;
if (isNaN(hsc)) {
  hsc = 0;
}
var count = 200;
for (m = 0; m < 9; m++) {
  ans[m] = 0;
}
function _getEle(a) {
  return document.getElementById ? document.getElementById(a) : null;
}
function _h() {
  var i = 0;
  var j = 0;
  var k = 0;
  var tehai = new Array();
  var machisu = 0;
  if (q == 1) {
    sc = 0;
    _st();
  }
  if (level == 1) {
    machisu = 0;
  } else if (level == 2) {
    if (Math.random() > 0.8) {
      //ノーテンが多すぎないように調整。
      machisu = -1;
    } else {
      machisu = 0;
    }
  } else {
    machisu = 2;
  }
  _getEle("rank").style.display = "none";
  _getEle("score").innerHTML = "SCORE: " + sc + "点";
  _getEle("qnum").innerHTML = "第" + q + "問";
  haic = parseInt(Math.random() * 3);
  for (i = 0; i < 9; i++) {
    ron[i] = 0;
    ans[i] = 0;
    _getEle("a" + i).innerHTML = "<img src='images/ura.gif'>";
  }
  do {
    //問題作成
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
  } while (getMachi() <= machisu);

  if (hTimeInterval > 0) {
    clearInterval(hTimeInterval);
  }
  var haipai = "";
  chaipai = "";
  for (i = 0, k = 0; i < 9; i++) {
    ii = i + 1;
    for (j = 0; j < hai[i]; j++) {
      tehai[k] = i + 9 * haic;
      k++;
      chaipai += ii;
    }
  }
  if (level == 4) {
    //手牌かきまぜ
    for (i = 0; i < 9; i++) {
      aa = parseInt(Math.random() * 13);
      bb = parseInt(Math.random() * 13);
      cc = tehai[aa];
      tehai[aa] = tehai[bb];
      tehai[bb] = cc;
    }
  }
  i = 0;
  hTimeInterval = setInterval(function () {
    var hair = tehai[i];
    if (hair == 4 || hair == 13 || hair == 22) {
      if (Math.random() > 0.95) {
        //まれに赤５
        hair += "r";
      }
    }
    haipai += "<img src='images/" + hair + ".gif'>";
    _getEle("hai").innerHTML = haipai;
    if (i >= 12) {
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
  count = 200;
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
  var i = 0;
  var j = 0;
  clearInterval(hTimeInterval2);
  hTimeInterval2 = 0;
  if (checkAns() == 1) {
    for (i = 0; i < 9; i++) {
      if (ron[i] == 1) {
        j = i + 9 * haic;
        work += "<img src='images/" + j + ".gif'>";
      }
    }
    if (work == "") {
      work = "ノーテンです";
    } else {
      work += "待ちです";
    }
    _getEle("mes2").style.color = "#ff0000";
    _getEle("mes2").innerHTML = "チョンボ!";
    _getEle("mes3").innerHTML = work;
    _end();
  } else {
    _getEle("mes2").style.color = "#0000ff";
    _getEle("mes2").innerHTML = "正解!";
    if (level == 4) {
      sc = sc + count * 3;
    } else if (level == 3) {
      sc = sc + count * 2;
    } else {
      sc = sc + count;
    }
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
  _getEle("timer").innerHTML = "20秒";
  _getEle("mes2").innerHTML = "";
  _getEle("mes3").innerHTML = "";
  _getEle("rank").style.display = "none";
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
    setCookie("hsc", hsc, 365);
  }
  if (sc > 0) {
    _ed();
    if (q >= 50) {
      chaipai = "0000000000000";
    }
    var work =
      "<form action='./rank.php' method='POST' style='width:500px;background-color:#285c00;'><b>ランキング登録</b>（10文字以内。超えた分は削除されます）<br><input type='text' name='n' size='30' maxlength='10'><input type='hidden' name='p' value='" +
      chaipai +
      "'><input type='hidden' name='s' value='" +
      sc +
      "'><input type='hidden' name='l' value='" +
      level +
      "'> <br><input type='submit' value='この名前で登録する'></form>";
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
  if (ans[num] == 0) {
    num2 = num + 9 * haic;
    ans[num] = 1;
    _getEle("a" + num).innerHTML = "<img src='images/" + num2 + ".gif'>";
  } else {
    ans[num] = 0;
    _getEle("a" + num).innerHTML = "<img src='images/ura.gif'>";
  }
}
function getMachi() {
  var tenpai = 0;
  var tumo = 0;
  var i = 0;
  haisave1 = new Array();
  for (i = 0; i < 9; i++) {
    haisave1[i] = hai[i];
  } //手牌退避
  for (tumo = 0; tumo < 9; tumo++) {
    // すべてのツモについてあがりチェック
    ron[tumo] = 0;
    if (hai[tumo] == 4) {
      // ４枚持ちの場合つもるわけない
      continue;
    } else {
      hai[tumo]++;
      if (checkTumo() == 1) {
        tenpai++;
        ron[tumo] = 1;
      }
      for (i = 0; i < 9; i++) {
        hai[i] = haisave1[i];
      } // 手牌復帰
    }
  }
  return tenpai;
}
function checkTumo() {
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
            break;
          }
        }
      }
      for (i = 0; i < 9; i++) {
        // アンコサーチ
        if (hai[i] == 3) {
          hai[i] = 0;
          mentsu++;
        }
      }
      if (mentsu == 4) {
        // ４メンツそろえばあがり
        agari = 1;
      }
      for (i = 0; i < 9; i++) {
        hai[i] = haisave2[i];
      } // つもり形復帰
    }
  }
  if (chi == 7) {
    //チートイ
    agari = 1;
  }
  return agari;
}
function checkAns() {
  var i = 0;
  var answerf = 0;
  for (i = 0; i < 9; i++) {
    if (ron[i] != ans[i]) {
      answerf = 1;
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
function _lv() {
  if (level >= 4) {
    level = 1;
  } else {
    level++;
  }
  if (level == 1) {
    _getEle("level").innerHTML =
      "＜＜　<span style='font-weight:bold;'>ＬＥＶＥＬ１</span>（ノーマル）　＞＞";
  } else if (level == 2) {
    _getEle("level").innerHTML =
      "＜＜　<span style='font-weight:bold;'>ＬＥＶＥＬ２</span>（ノーテンあり）　＞＞";
  } else if (level == 3) {
    _getEle("level").innerHTML =
      "＜＜　<span style='font-weight:bold;'>ＬＥＶＥＬ３</span>（全問多面待ち:得点２倍）　＞＞";
  } else if (level == 4) {
    _getEle("level").innerHTML =
      "＜＜　<span style='font-weight:bold;'>ＬＥＶＥＬ４</span>（理牌無し:得点３倍）　＞＞";
  }
}

function _st() {
  $.ajax({
    url: "https://hinakin.main.jp/mckonweb/start.php",
    type: "GET",
    dataType: "text",
    async: false,
  });
}

function _ed() {
  $.ajax({
    url: "https://hinakin.main.jp/mckonweb/end.php",
    type: "GET",
    dataType: "text",
    async: false,
  });
}

function _xml() {
  $.ajax({
    url: "https://hinakin.main.jp/mckonweb/rank2.php",
    type: "GET",
    dataType: "xml",
  }).done(function (xml) {
    var data = "";
    var i = 0;
    data +=
      '<center><span style="font-size:18px;font-weight:bold;color:#ffee00;">最近20人のランキング</span><br><table>';
    $(xml)
      .find("rank")
      .each(function () {
        data +=
          '<tr><td align="right" style="font-weight:bold;">' +
          (i + 1) +
          '位</td><td align="left" style="font-weight:bold;">' +
          $(this).find("name").text() +
          '</td><td align="right" style="font-weight:bold;">' +
          $(this).find("score").text() +
          '点</td><td align="left">　LEVEL ' +
          $(this).find("mode").text() +
          "</td></tr>";
        i = i + 1;
      });
    data += "</table></center>";
    $("#ranking").html(data);
    data =
      "<span style='cursor:pointer;border:solid 1px;' onclick='_xmlall();return false;'>年間ランキング表示</span>";
    $("#rankselect").html(data);
  });
}

function _xmlall() {
  $.ajax({
    url: "https://hinakin.main.jp/mckonweb/rank3.php",
    type: "GET",
    dataType: "xml",
  }).done(function (xml) {
    var data = "";
    var i = 0;
    data +=
      '<center><span style="font-size:18px;font-weight:bold;color:#ffee00;">年間ランキング</span><br><table>';
    $(xml)
      .find("rank")
      .each(function () {
        data +=
          '<tr><td align="right" style="font-weight:bold;">' +
          (i + 1) +
          '位</td><td align="left" style="font-weight:bold;">' +
          $(this).find("name").text() +
          '</td><td align="right" style="font-weight:bold;">' +
          $(this).find("score").text() +
          '点</td><td align="left">　LEVEL ' +
          $(this).find("mode").text() +
          "</td></tr>";
        i = i + 1;
      });
    data += "</table></center>";
    $("#ranking").html(data);
    data =
      "<span style='cursor:pointer;border:solid 1px;' onclick='_xml();return false;'>最近20人のランキング表示</span>";
    $("#rankselect").html(data);
  });
}
