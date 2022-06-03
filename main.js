const display = document.getElementById("display");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const choice4 = document.getElementById("choice-4");
const idoElement = document.getElementById("ido");
const keidoElement = document.getElementById("keido");
const addButton = document.getElementById("add-button");
// ​地震のコードと説明
const choices = [
  {
    value: "T30_I45_PS",
    text: "今後30年間で震度5弱以上となる確率",
  },
  {
    value: "T30_I50_PS",
    text: "今後30年間で震度5強以上となる確率",
  },
  {
    value: "T30_I55_PS",
    text: "今後30年間で震度6弱以上となる確率",
  },
  {
    value: "T30_I60_PS",
    text: "今後30年間で震度6強以上となる確率",
  },
];
// クリックしたら4回分の地震情報を出す。
addButton.onclick = function () {
  for (let i = 0; i < choices.length; i++) {
    url = "";
    // 入力された緯度経度をURLに代入
    url = `https://www.j-shis.bosai.go.jp/map/api/pshm/Y2010/AVR/TTL_MTTL/meshinfo.geojson?position=${idoElement.value},${keidoElement.value}&epsg=4301&attr=${choices[i].value}`;
    // 配列に記述してあるvalueをURLに足してfetchに使用するURLが完成
    // url = url + choices[i].value;
    // 確認用↓
    console.log(`${url}`);
    // console.log(choices[i].value);
    // console.log(choices[i].text);
    fetch(`${url}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(choices[i].value);
        display.textContent = data.features[0].properties[choices[i].value];
        console.log(display.textContent);
      });
  }
  keidoElement.value = "";
  idoElement.value = "";
};
