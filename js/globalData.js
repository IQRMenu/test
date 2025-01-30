export let globalData = {
  botToken: '',
  chatId: '-4566719816',

  mainLang: 'ru',
  currencySymbol: '$',
  googleLink: 'https://maps.app.goo.gl/StkHhp6WBcwhrJUTA',
  version: 'pro',//pro o basik

  fotmAction: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeeB1nBthuaUehbN_1XHBKwR3yMKWh6FGzjsEL9NwbttBKfog/formResponse",
  inputNames: {
    langOrderTable: "entry.1316586027",
    visitorTypeOrderTable: "entry.1007692396",
    tableNumberOrderTable: "entry.2046839169",
    dishesOrderTable: "entry.1908326377",
    totolCostOrderTable: "entry.1796550809",
  }

}

document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', './js/info.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      var a = response.trim(); // Убираем возможные лишние пробелы и переносы строки
      globalData.botToken = a;
    }
  };
  xhr.send();
});