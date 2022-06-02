const display = document.getElementById("display");
const idoElement = document.getElementById("ido");
const keidoElement = document.getElementById("keido");
const addButton = document.getElementById("add-button");
let ganreSelect = document.getElementById("ganre");

addButton.onclick = function () {
  // console.log(`${idoElement.value}`);
  // console.log(`${keidoElement.value}`);
  console.log("選択されているのは " + ganreSelect.value + " です");
  // url = `https://www.j-shis.bosai.go.jp/map/api/pshm/Y2010/AVR/TTL_MTTL/meshinfo.geojson?position=${idoElement.value},${keidoElement.value}&epsg=4612&attr=T30_I45_PS`;
  url = `https://www.j-shis.bosai.go.jp/map/api/pshm/Y2010/AVR/TTL_MTTL/meshinfo.geojson?position=${idoElement.value},${keidoElement.value}&epsg=4612&attr=${ganreSelect.value}`;
  console.log(`${url}`);

  // fetch(`${url}`)
  //   .then((res) => {
  //     return res.json(); // 結果を json として読み込む
  //   })
  //   .then((data) => {
  //     display.textContent = data.features[0].properties.T30_I45_PS;
  //     console.log(`${display.textContent}`);
  //   });

  // 入力欄を空にする
  keidoElement.value = "";
  idoElement.value = "";
  // ganreSelect.options[2].selected = true;

  if (ganreSelect.value == "T30_I45_PS") {
    fetch(`${url}`)
      .then((res) => {
        return res.json(); // 結果を json として読み込む
      })
      .then((data) => {
        display.textContent = data.features[0].properties.T30_I45_PS;
        console.log("30年間で震度5弱以上となる確率");
        console.log(`${display.textContent}`);
      });
    // 入力欄を空にする
    keidoElement.value = "";
    idoElement.value = "";
    // ganreSelect.options[2].selected = true;
  } else if (ganreSelect.value == "T30_I50_PS") {
    fetch(`${url}`)
      .then((res) => {
        return res.json(); // 結果を json として読み込む
      })
      .then((data) => {
        display.textContent = data.features[0].properties.T30_I50_PS;
        console.log("30年間で震度5強以上となる確率");
        console.log(`${display.textContent}`);
      });

    // 入力欄を空にする
    keidoElement.value = "";
    idoElement.value = "";
    // ganreSelect.options[2].selected = true;
  } else if (ganreSelect.value == "T30_I55_PS") {
    fetch(`${url}`)
      .then((res) => {
        return res.json(); // 結果を json として読み込む
      })
      .then((data) => {
        display.textContent = data.features[0].properties.T30_I55_PS;
        console.log("30年間で震度6弱以上となる確率");
        console.log(`${display.textContent}`);
      });

    // 入力欄を空にする
    keidoElement.value = "";
    idoElement.value = "";
    ganreSelect.options[2].selected = true;
  } else if (ganreSelect.value == "T30_I60_PS") {
    fetch(`${url}`)
      .then((res) => {
        return res.json(); // 結果を json として読み込む
      })
      .then((data) => {
        display.textContent = data.features[0].properties.T30_I60_PS;
        console.log("30年間で震度6強以上となる確率");
        console.log(`${display.textContent}`);
      });

    // 入力欄を空にする
    keidoElement.value = "";
    idoElement.value = "";
    // ganreSelect.options[2].selected = true;
  } else if (ganreSelect.value == "NoSelect") {
    display.textContent = "地震の種類を選択してください";
    console.log("地震の種類を選択してください");

    // 入力欄を空にする
    keidoElement.value = "";
    idoElement.value = "";
    // ganreSelect.options[2].selected = true;
  } else {
    console.log("該当なし");
  }
  // ganreSelect.options[2].selected = true;
};
