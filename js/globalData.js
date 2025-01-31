export let globalData = {
  botToken: '',
  chatId: '-4566719816',

  mainLang: 'ru',
  currencySymbol: '$',
  googleLink: 'https://maps.app.goo.gl/StkHhp6WBcwhrJUTA',
  version: 'pro',//pro o basik

  fotmAction: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSePk5-qlP6l6Ued7pi8q5A3RfSUIcY4vqUwjYi1TlIDEM-BqA/formResponse",
  inputNames: {
    inputOrderId: "entry.1753983149",
    inputLangOrderTable: "entry.868338239",
    inputTableNumberOrderTable: "entry.814736468",
    inputVisitorTypeOrderTable: "entry.1357817951",
    inputDishesOrderTable: "entry.993484371",
    inputTotolCostOrderTable: "entry.728135158",
    inputType: "entry.968086505",
    
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