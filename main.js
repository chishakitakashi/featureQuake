const display = document.getElementById("display");
const idoElement = document.getElementById("ido");
const keidoElement = document.getElementById("keido");
const addButton = document.getElementById("add-button");

addButton.onclick = function () {
  console.log(`${idoElement.value}`);
  console.log(`${keidoElement.value}`);
  url = `https://www.j-shis.bosai.go.jp/map/api/pshm/Y2010/AVR/TTL_MTTL/meshinfo.geojson?position=${idoElement.value},${keidoElement.value}&epsg=4612&attr=T30_I45_PS`;
  console.log(`${url}`);
  fetch(`${url}`)
    .then((res) => {
      return res.json(); // 結果を json として読み込む
    })
    .then((data) => {
      display.textContent = data.features[0].properties.T30_I45_PS;
      console.log(`${display.textContent}`);
    });

  // 入力欄を空にする
  keidoElement.value = "";
  idoElement.value = "";
};
