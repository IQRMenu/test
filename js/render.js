// Получаем меню
import { fetchDishesList } from "./getDishesList.js";
fetchDishesList()
  .then(dishesList => {
    storeData = dishesList;
    renderDishesCategoryList(storeData);
    setTimeout(() => {
      document.querySelector('.loader').classList.add('loader_hide');
    }, 500);
  })
  .catch(error => {
    console.error('Ошибка при получении списка блюд:', error);
  });


//Выбор версии
const VersionPro = true
const sendOrderButton = document.getElementById('sendOrder');
if (VersionPro == false) {
  sendOrderButton.disabled = true;
  document.getElementById('sendOrder').classList.add('display_none');
} else {
  sendOrderButton.disabled = false;
  document.querySelector('.annonce-block').classList.add('displayNone');
  document.querySelector('body').classList.remove('event_none');
}

//функция для скрытия предупреждения
document.querySelector('#annonce-block-clouse').onclick = function () {
  document.querySelector('.annonce-block').classList.add('displayNone');
  document.querySelector('body').classList.remove('event_none');
}

//Глобальные переменные
const lang = document.documentElement.lang;
const mainLang = 'ru';
const currencySymbol = '$';
const tel = '';
const address = 'Arévalo 1506 Buenos Aires';
const addressLink = 'https://maps.app.goo.gl/StkHhp6WBcwhrJUTA';
const addressLinkA = document.querySelector('#address-link');
addressLinkA.setAttribute('href', addressLink);
addressLinkA.querySelector('span').innerText = address

let botToken = '';
// const chatId = "";
document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', './js/info.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      var a = response.trim(); // Убираем возможные лишние пробелы и переносы строки
      botToken = a;
    }
  };
  xhr.send();
});

// const botToken = "7722475036:AAHXV-qTFP3eOTxmg_3fiRv28xLa8DkK7E8";


// тестовый бот
// const botToken = "6787781737:AAGpLJ84BHUon0i6p9mxa3EecA-GPrDTgL4";
const chatId = "-4566719816";


const words = {
  ru: {
    portion: 'порция',
    cost: 'стоимость',
    pieces: 'штуки',


    totalCost: 'Итого: ',
    yourOrder: 'Ваш заказ:',
    sendOrder: 'Отправить заказ',

    announcement: '',
    announcementText: 'Выберете желаемые блюда, затем пригласите официанта и покажите ему корзину',
    menu: 'МЕНЮ',
    leaveReviewLink: 'Оставьте отзыв',
    deletePortionMessage: 'Удалить порцию?',

    leaveReview: 'Оставить отзыв',
    thankYou: 'Спасибо! Ваш отзыв отправлен!',
    food: 'Еда:',
    service: 'Обслуживание:',
    comment: 'Ваш комментарий',
    send: 'Отправить',

    textSendOrder: 'Заказ успешно отправлен!',
    textErrorSendOrder: 'Ошибка при отправке заказа. Пожалуйста, попробуйте еще раз или принласите официанта',
    textAskTableNumber: 'Пожалуйста укажите номер стола за которым вы ожидаете',

    tableNumber: 'Стол № ',
    newOrderMessage: `‼️🔴 Новый заказ!\n`,
    updateOrderMessage: `‼️🟢 Обновление заказа\n`,

    IQRMenuLink: 'Заказать меню',
  },
  en: {
    portion: 'portion',
    cost: 'cost',
    pieces: 'pieces',

    totalCost: 'total cost',
    yourOrder: 'Your order:',
    sendOrder: 'Send order',

    announcement: '',
    announcementText: 'Select the desired dishes, then invite the waiter and show him the basket',
    menu: 'MENU',
    leaveReviewLink: 'Leave a review',
    deletePortionMessage: 'Delete portion?',

    leaveReview: 'Leave a review',
    thankYou: 'Thank you! Your review has been sent!',
    food: 'Food:',
    service: 'Service:',
    comment: 'Your comment',
    send: 'Send',

    textSendOrder: 'Order successfully sent!',
    textErrorSendOrder: 'Error sending order. Please try again or call the waiter',
    textAskTableNumber: 'Please indicate the table number you are waiting at.',

    tableNumber: 'Table № ',
    orderMessage: '⚡⚡New order!\nList of dishes:\n',

    IQRMenuLink: 'Order menu',
  },
  es: {
    portion: 'porción',
    cost: 'costo',
    pieces: 'piezas',

    totalCost: 'Сosto total:',
    yourOrder: 'Tu pedido:',
    sendOrder: 'Enviar pedido',

    announcement: '',
    announcementText: 'Selecciona los platos deseados, luego invita al camarero y muéstrale la cesta',
    menu: 'MENÚ',
    leaveReviewLink: 'Dejar una reseña',

    leaveReview: 'Dejar una reseña',
    thankYou: '¡Gracias! Tu reseña ha sido enviada!',
    food: 'Comida:',
    service: 'Servicio:',
    comment: 'Tu comentario',
    send: 'Enviar',

    textSendOrder: '¡Pedido enviado con éxito!',
    textErrorSendOrder: 'Error al enviar el pedido. Por favor, inténtalo de nuevo o llama al camarero',
    textAskTableNumber: 'Por favor indica el número de mesa en la que estás esperando.',

    tableNumber: 'Tabla nro. ',
    orderMessage: '⚡⚡¡Nuevo pedido!\nLista de platos:\n',

    IQRMenuLink: 'Menú de pedidos',
  },
  pt: {
    portion: 'porção',
    cost: 'custo',
    pieces: 'peças',

    totalCost: 'Custo total:',
    yourOrder: 'Seu pedido:',
    sendOrder: 'Enviar pedido',

    announcement: '',
    announcementText: 'Selecione os pratos desejados, em seguida, chame o garçom e mostre a cesta',
    menu: 'MENU',
    leaveReviewLink: 'Deixar uma avaliação',
    deletePortionMessage: 'Excluir porção?',

    leaveReview: 'Deixar uma avaliação',
    thankYou: 'Obrigado! Sua avaliação foi enviada!',
    food: 'Comida:',
    service: 'Serviço:',
    comment: 'Seu comentário',
    send: 'Enviar',

    textSendOrder: 'Pedido enviado com sucesso!',
    textErrorSendOrder: 'Erro ao enviar o pedido. Por favor, tente novamente ou chame o garçom',
    textAskTableNumber: 'Por favor indique o número da mesa em que você está esperando',

    tableNumber: 'Tabela nº. ',
    orderMessage: '⚡⚡Novo pedido!\nLista de pratos:\n',


    IQRMenuLink: 'Menu de pedidos',
  }
}

//Функция регдера страницы на нужном языке
function renderPage() {
  for (let key in words[lang]) {
    if (document.querySelector(`#${key}`)) {
      document.querySelector(`#${key}`).textContent = words[lang][key];
    }
  }
}
renderPage();

//изменяемые переменные необходимые для работы с меню
let currentCategory = '';
let storeData = [];
let basketList = [];
let ordersList = [];
let tableNumber = localStorage.getItem("table");
let orderId = '';

//Функция рендера раздела категории
function renderDishesCategoryList(dishesList) {
  const dishesCategoryListContainer = document.getElementById('dishesCategoryList');
  const addedCategories = new Set(); // Создаем множество для отслеживания добавенных категорий

  dishesList.forEach(dishitem => {
    if (dishitem.inStore == 'yes') {
      const category = dishitem[`${lang}Category`]; // Получаем категорию блюда

      // Проверяем, была ли категория уже добавлена
      if (!addedCategories.has(category)) {
        const dishCategoryButton = document.createElement('button');
        dishCategoryButton.innerHTML = `
              ${category}
          `;
        dishCategoryButton.addEventListener('click', () => {
          dishesCategoryListContainer.querySelector('button.button_active').classList.remove('button_active');
          dishCategoryButton.classList.add('button_active');
          renderDishesList(category);
        });
        dishesCategoryListContainer.appendChild(dishCategoryButton);
        addedCategories.add(category); // Добавляем категорию в множество
      }
    }

  });
  dishesCategoryListContainer.querySelector('button').classList.add('button_active');
  renderDishesList(storeData[0][`${lang}Category`]);
}


//Функция рендера блюд выбранной категории
function renderDishesList(category) {
  currentCategory = category;
  const dishesListContainer = document.getElementById('dishesList');
  dishesListContainer.classList.add('dishes-list_loading');
  setTimeout(() => {
    dishesListContainer.innerHTML = '';
    storeData.forEach(dishitem => {
      if (dishitem[`${lang}Category`] === category && dishitem.inStore == 'yes') {
        const dishCard = document.createElement('div');
        dishCard.dataset.id = dishitem.id;
        dishCard.classList.add('dishes-card');
        dishCard.innerHTML = `
          <img src="${dishitem.img}" alt="">
          <div class="dishes-card__info">
            <div class="dishes-card__description">
              <h2>${dishitem[`${lang}DishesName`]}</h2>
              <p class="dishes-card__description-text">${dishitem[`${lang}DishesDescription`]}</p>  
            </div>
          </div>
        `;

        // Порции
        const portionsContainer = document.createElement('div');
        portionsContainer.classList.add('dishes-card__portions');
        const portionNames = [dishitem.portionName1, dishitem.portionName2, dishitem.portionName3, dishitem.portionName4, dishitem.portionName5];
        portionNames.forEach((portionName, index) => {
          if (portionName) { // Проверяем, что название порции не пустое
            const portionNumber = basketList.find(item => item.dishId === `${dishitem.id}-${portionName}`)?.portionNumber || 0;
            if (portionNumber != 0) {
              dishCard.classList.add('dishes-card_active');
            }
            const portionCost = dishitem[`portionCost${index + 1}`];
            const portionElement = document.createElement('div');
            portionElement.classList.add('portion-item');
            portionElement.innerHTML = `
                  <p class="portion-item__text"><span><span class="portion-name">${portionName}</span> - </span><span> <span class="portion-cost">${portionCost}${currencySymbol}</span></span></p>
                  <div class="portion-item__buttons">
                    <button class="portion-minus"><i class="fa-solid fa-minus"></i></button>
                    <span class="portion-number">${portionNumber}</span>
                    <button class="portion-plus"><i class="fa-solid fa-plus"></i></button>
                  </div>
              `;
            const buttonPortionPlus = portionElement.querySelector('.portion-plus');
            buttonPortionPlus.addEventListener('click', () => {
              dishCard.classList.add('dishes-card_active');
              basketUpdate('plus', dishitem.id, dishitem[`${lang}DishesName`], dishitem[`${mainLang}DishesName`], portionName, portionCost, dishitem.img, portionElement.querySelector('.portion-number'));
            });
            const buttonPortionMinus = portionElement.querySelector('.portion-minus');
            buttonPortionMinus.addEventListener('click', () => {
              if (portionElement.querySelector('.portion-number').textContent == 1) {
                dishCard.classList.remove('dishes-card_active');
              }
              basketUpdate('minus', dishitem.id, dishitem[`${lang}DishesName`], dishitem[`${mainLang}DishesName`], portionName, portionCost, dishitem.img, portionElement.querySelector('.portion-number'));
            });
            portionsContainer.appendChild(portionElement);
          }
        });
        dishCard.appendChild(portionsContainer);
        // Порции закончились

        dishesListContainer.appendChild(dishCard);
      }
    });
    dishesListContainer.scrollLeft = 0;
    dishesListContainer.classList.remove('dishes-list_loading');
  }, 500);

}

//Функция обновления корзины
function basketUpdate(action, dishId, dishName, dishNameMainLang, portionName, portionCost, dishImg, portionNumberSpan) {
  if (action === 'plus') {
    basketButtonOpen.classList.add('basket_have');
    portionNumberSpan.textContent = parseInt(portionNumberSpan.textContent) + 1;
    if (basketList.find(item => item.dishId === `${dishId}-${portionName}`)) {
      ;
      basketList = basketList.map(item => item.dishId === `${dishId}-${portionName}` ? { ...item, portionNumber: parseInt(portionNumberSpan.textContent), totalCost: portionCost * parseInt(portionNumberSpan.textContent) } : item);
    } else {
      basketList.push({
        dishId: `${dishId}-${portionName}`,
        dishName: dishName,
        dishNameMainLang: dishNameMainLang,
        portionName: portionName,
        portionCost: portionCost,
        dishImg: dishImg,
        portionNumber: parseInt(portionNumberSpan.textContent),
        totalCost: portionCost,
      });
    }
    sendOrderButton.disabled = false;
    sendOrderButton.classList.remove('_display_none');
  } else if (action === 'minus') {
    if (parseInt(portionNumberSpan.textContent) > 0) {
      portionNumberSpan.textContent = parseInt(portionNumberSpan.textContent) - 1;
      if (parseInt(portionNumberSpan.textContent) === 0) {
        if (confirm(`${words[lang].deletePortionMessage}`)) {
          basketList = basketList.filter(item => item.dishId !== `${dishId}-${portionName}`);
          if (basketList.length === 0) {
            basketButtonOpen.classList.remove('basket_have');
            sendOrderButton.disabled = true;
            sendOrderButton.classList.add('_display_none');
          }
        }
      } else {
        basketList = basketList.map(item => item.dishId === `${dishId}-${portionName}` ? { ...item, portionNumber: parseInt(portionNumberSpan.textContent), totalCost: portionCost * parseInt(portionNumberSpan.textContent) } : item);
      }
    }

  }
  renderBasketList();
}

//Функция рендера корзины
function renderBasketList() {
  const basketListContainer = document.getElementById('basketList');
  basketListContainer.innerHTML = '';
  let totalCost = 0;
  basketList.forEach(item => {
    const basketItem = document.createElement('div');
    basketItem.classList.add('basket-item');
    basketItem.dataset.id = item.dishId;
    basketItem.innerHTML = `
    <div class="basket-item__img">
      <img src="${item.dishImg}" alt="">
      <div class="basket-item__manage">
        <div class="basket-item__buttons">
          <button class="portion-minus"><i class="fa-solid fa-minus"></i></button>
          <span class="portion-number">${item.portionNumber}</span>
          <button class="portion-plus"><i class="fa-solid fa-plus"></i></button>
        </div>
        <p class="basket-item__total-cost">${item.totalCost}${currencySymbol}</p>
      </div>
    </div>
    <div class="basket-item__info">
      <h3>${item.dishName}</h3>
      <h4>${item.dishNameMainLang}</h4>
      <p><span>${words[lang].portion}<span class="portion-name">${item.portionName}</span> - </span><span> <span class="portion-cost">${item.portionCost}${currencySymbol}</span></span></p>
      
    </div>
    `;
    const buttonPortionPlus = basketItem.querySelector('.portion-plus');
    buttonPortionPlus.addEventListener('click', () => {
      basketUpdate('plus', item.dishId.split('-')[0], item.dishName, item.dishNameMainLang, item.portionName, item.portionCost, item.dishImg, basketItem.querySelector('.portion-number'));
      renderDishesList(currentCategory);
    });
    const buttonPortionMinus = basketItem.querySelector('.portion-minus');
    buttonPortionMinus.addEventListener('click', () => {
      basketUpdate('minus', item.dishId.split('-')[0], item.dishName, item.dishNameMainLang, item.portionName, item.portionCost, item.dishImg, basketItem.querySelector('.portion-number'));
      renderDishesList(currentCategory);
    });
    basketListContainer.appendChild(basketItem);
    totalCost += item.totalCost;
  });
  document.getElementById('totalCost').textContent = `${words[lang].totalCost} ${totalCost}${currencySymbol}`;
}


// открытие и закрытие корзины
function basketBoxOpenClouse() {
  basketButtonOpen.classList.toggle('button_moveLeft');
  basketButtonClouse.classList.toggle('basket-clouse_active');
  basketBox.classList.toggle('basket-box_open');
}
const basketButtonOpen = document.querySelector('.basket');
const basketButtonClouse = document.querySelector('.basket-clouse');
const basketBox = document.querySelector('.basket-box');

basketButtonOpen.onclick = function () {
  basketBoxOpenClouse()
}
basketButtonClouse.onclick = function () {
  basketBoxOpenClouse()
}


//Отправка Заказа с сайта
sendOrderButton.onclick = function () {
  sendOrderButton.disabled = true;

  if (tableNumber == 'null') {
    tableNumber = prompt(`${words[lang].textAskTableNumber}`);
    if (tableNumber === null) {
      sendOrderButton.disabled = false;
      return
    }
  }
  if (orderId == ''){
    orderId = createOrderId();
  }
  let totalCostMessage = 0;
  let orderMessage = `${lang}\n${words[mainLang].tableNumber}${tableNumber}\n\n${words[mainLang].newOrderMessage}\n#️⃣ Номер закза\n${orderId}\n`;
  let portionNumberMessage = 0;
  if (ordersList.length > 0) {
    orderMessage = `${lang}\n${words[mainLang].tableNumber}${tableNumber}\n\n${words[mainLang].updateOrderMessage}\n#️⃣ Номер закза\n${orderId}\n`;
    orderMessage += `\n\n🟨 Прошлые блюда:\n`;
    ordersList.forEach(item => {
      portionNumberMessage += 1;
      // document.querySelector('#dishesOrderTable').value += `${portionNumberMessage}. ${item.dishName}    `;
      orderMessage += `\n${portionNumberMessage}. ${item.dishName} - ${item.portionName}x${item.portionNumber} - ${item.totalCost}${currencySymbol}\n${item.dishNameMainLang}\n`;
      totalCostMessage += item.totalCost;
    });
    orderMessage += `\n ------------------- \n`;
    orderMessage += `\n 🟩 Новые блюда:\n`;
  }else{
    orderMessage += `\n📃 Список блюда:\n`;
  }
  
  basketList.forEach(item => {
    portionNumberMessage += 1;
    // document.querySelector('#dishesOrderTable').value += `${portionNumberMessage}. ${item.dishName}    `;
    orderMessage += `\n${portionNumberMessage}. ${item.dishName} - ${item.portionName}x${item.portionNumber} - ${item.totalCost}${currencySymbol}\n${item.dishNameMainLang}\n`;
    totalCostMessage += item.totalCost;
  });
  orderMessage += `\n\n💰 ${words[mainLang].totalCost}  ${totalCostMessage}${currencySymbol}`;

  // document.querySelector('#langOrderTable').value = lang;
  // document.querySelector('#visitorTypeOrderTable').value = 'Новый';
  // document.querySelector('#tableNumberOrderTable').value = tableNumber;
  // document.querySelector('#totolCostOrderTable').value = totalCostMessage;

  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: orderMessage,
    }),
  })

    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert(words[lang].textSendOrder);
        // formSendOrderTable = document.getElementById('sendOrderTable').submit();// отправка заказа в гугол таблицу

      } else {
        alert(words[lang].textErrorSendOrder);
      }
    })
  sendOrderButton.disabled = false;
  fixOrder();
}



function fixOrder() {
  console.log(ordersList);
  console.log(basketList);
  basketList.forEach(item => {
    console.log(item);

    ordersList.unshift(item);
  });
  console.log(ordersList);
  let totalCost = 0;
  const orderListDiv = document.querySelector('.order-list');
  orderListDiv.innerHTML = '';
  ordersList.forEach(item => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('basket-item');
    cardItem.dataset.id = item.dishId;
    cardItem.innerHTML = `
      <div class="basket-item__img">
        <img src="${item.dishImg}" alt="">
        <div class="basket-item__manage">
          <div class="basket-item__buttons">
            <span class="portion-number">${item.portionNumber}</span>
          </div>
          <p class="basket-item__total-cost">${item.totalCost}${currencySymbol}</p>
        </div>
      </div>
      <div class="basket-item__info">
        <h3>${item.dishName}</h3>
        <h4>${item.dishNameMainLang}</h4>
        <p><span>${words[lang].portion}<span class="portion-name">${item.portionName}</span> - </span><span> <span class="portion-cost">${item.portionCost}${currencySymbol}</span></span></p>
        
      </div>
      `;
    totalCost += item.totalCost;
    orderListDiv.appendChild(cardItem);
  });
  document.querySelector('.totalCost-order').innerText = `${words[lang].totalCost} ${totalCost} ${currencySymbol}`;

  basketList = [];
  renderBasketList();
  document.querySelector('.button_active').classList.remove('button_active');
  document.getElementById('dishesCategoryList').querySelector('button').classList.add('button_active');
  renderDishesList(storeData[0][`${lang}Category`]);
  basketButtonOpen.classList.remove('basket_have');
  sendOrderButton.disabled = true;
  sendOrderButton.classList.add('_display_none');
  sendOrderButton.innerText = 'Добавть к заказу';
  document.getElementById('yourOrder').classList.add('_active');
  console.log(ordersList);


}




document.getElementById('yourOrder').addEventListener('click', () => {
  console.log('ok');

  document.querySelector('.order-box').classList.add('_show');
})

document.getElementById('orderListClouse').addEventListener('click', () => {
  document.querySelector('.order-box').classList.remove('_show');
})



function createOrderId() {
  const now = new Date();

  // Форматируем значения
  const day = String(now.getDate()).padStart(2, '0'); // День
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяц
  const year = now.getFullYear(); // Год
  const hours = String(now.getHours()).padStart(2, '0'); // Часы
  const minutes = String(now.getMinutes()).padStart(2, '0'); // Минуты
  const seconds = String(now.getSeconds()).padStart(2, '0'); // Секунды

  // Объединяем результат
  const result = `${day}.${month}.${year} ${hours}:${minutes} - ${tableNumber}`;
  return result

}


//Функция уведомления об открытии сайта
// function onVisit() {
//   const chatId = '396606827';
//   const messageText = `⚡Новый визи на сайт CIAO CACAO Язык ${lang}`;

//   const url = `https://api.telegram.org/bot6787781737:AAGpLJ84BHUon0i6p9mxa3EecA-GPrDTgL4/sendMessage`;
//   const params = {
//     chat_id: chatId,
//     text: messageText,
//   };
//   axios.post(url, params)
//     .then(response => {

//     })
//     .catch(error => {

//     });
//   return false
// }
// setTimeout(() => {
//   onVisit()
// }, 1000);