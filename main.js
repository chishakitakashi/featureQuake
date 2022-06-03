const idoElement = document.getElementById("ido");
const keidoElement = document.getElementById("keido");
const addButton = document.getElementById("add-button");
const container = document.getElementById("container");
// const probabilityElement0 = document.getElementById("probability0");
// const probabilityElement1 = document.getElementById("probability1");
// const probabilityElement2 = document.getElementById("probability2");
// const probabilityElement3 = document.getElementById("probability3");
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
  container.textContent = "";
  for (let i = 0; i < choices.length; i++) {
    url = "";
    // 入力された緯度経度をURLに代入
    url = `https://www.j-shis.bosai.go.jp/map/api/pshm/Y2010/AVR/TTL_MTTL/meshinfo.geojson?position=${idoElement.value},${keidoElement.value}&epsg=4301&attr=${choices[i].value}`;

    // console.log(`${url}`);

    fetch(`${url}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(choices[i].value);

        // card を作成
        const card = document.createElement("div");
        card.className = "card";

        // title（地震の名前）を作成
        const title = document.createElement("div");
        title.className = "title";
        title.textContent = choices[i].text;
        console.log(`${title.textContent}`);

        // todo（確率) を作成
        const todo = document.createElement("div");
        todo.className = "todo";
        todo.textContent = data.features[0].properties[choices[i].value];
        console.log(`${todo.textContent}`);

        // title（地震の名前）を card の中に追加する
        card.append(title);
        // todo（確率) を card の中に追加する
        card.append(todo);

        // card を container の中に追加する
        container.append(card);
      });
  }
  keidoElement.value = "";
  idoElement.value = "";
};
