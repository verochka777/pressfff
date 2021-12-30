const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  serviePercentPrice: 0,
  service1: '',
  service2: '',
  start: function () {
    appData.asking()
    appData.allServicePrices = appData.getAllServicePrices()
    appData.fullPrice = appData.getFullPrice()
    appData.serviePercentPrice = appData.getServicePercentPrices()
    appData.title = appData.getTitle()
    
    appData.logger()
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')
    
    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 50000)
    } while (!appData.isNumber(appData.screenPrice))
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  getAllServicePrices: function () {
    let sum = 0
  
    for (let i = 0; i < 2; i++) {
      let price = 0
  
      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Модальное окно')
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Счётчик')
      }
      
      do {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price))

      sum += +price
    }

    return sum
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },
  getTitle: function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
  },
  getRollbackMessage: function(price) {
    if (price >= 30000) {
      return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена"
    } else {
      return "Что-то пошло не так"
    }
  },
  logger: function () {
    console.log("allServicePrices", appData.allServicePrices);

    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log("title",typeof appData.title);
    console.log("screenPrice",typeof appData.screenPrice);
    console.log("adaptive",typeof appData.adaptive);

    console.log("screens",appData.screens.length);
    console.log("serviePercentPrice",appData.serviePercentPrice);

    console.log("Стоимость верстки экранов " + appData.screenPrice + " гривен и Стоимость разработки сайта " + appData.fullPrice + " гривен.");
    console.log(" ");
    console.log("↓ Свойства и методы appData ↓");
    console.log(" ");
    for (var key in appData) {
      console.log( "Ключ: " + key + " Значение: " + appData[key] );
    }
  }
}

appData.start()