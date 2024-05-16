const foodArray = [];
let foodTypes = [];
let active = "everything";
const itemsContainer = document.getElementById("items-container");
const btns = document.querySelectorAll(".btn");

const addItemToMenu = (name, img, price, desc) => {
  const items = document.createElement("div");
  items.classList.add("items");
  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");
  
  const foodDesc = document.createElement("div");
  foodDesc.classList.add("food-desc");
  
  const foodImgDiv = document.createElement("div");
  const foodImg = document.createElement("img");
  foodImg.classList.add("food-img");
  foodImg.src = img;
  foodImgDiv.append(foodImg);
  
  const foodNameDiv = document.createElement("div");
  foodNameDiv.classList.add("food-name");
  const foodNameParagraph = document.createElement("p");
  const foodNameText = document.createTextNode(name);
  foodNameParagraph.appendChild(foodNameText);
  foodNameDiv.appendChild(foodNameParagraph);
  
  const foodPriceDiv = document.createElement("div");
  foodPriceDiv.classList.add("price");
  const foodPriceParagraph = document.createElement("p");
  const foodPriceText = document.createTextNode(price);
  foodPriceParagraph.appendChild(foodPriceText);
  foodPriceDiv.appendChild(foodPriceParagraph);
  
  const foodTextDiv = document.createElement("div");
  foodTextDiv.classList.add("food-text");
  const foodTextParagraph = document.createElement("p");
  const foodTextText = document.createTextNode(desc);
  foodTextParagraph.appendChild(foodTextText);
  foodTextDiv.appendChild(foodTextParagraph);
  
  const foodHeadline = document.createElement("div");
  foodHeadline.classList.add("headline");
  foodHeadline.style.display = 'flex';
  foodHeadline.style.justifyContent = 'space-between';
  foodHeadline.appendChild(foodNameDiv);
  foodHeadline.appendChild(foodPriceDiv);
  
  foodDesc.appendChild(foodHeadline);
  foodDesc.appendChild(foodTextDiv);
  
  foodItem.appendChild(foodImgDiv);
  foodItem.appendChild(foodDesc);
  
  items.appendChild(foodItem);
  
  itemsContainer.append(items);
}

class Food {
  constructor(type, name, img, price, desc, tags) {
    this.type = type;
    this.name = name;
    this.img = img;
    this.price = price;
    this.desc = desc;
    this.tags = tags;
  }
};

const addFood = (type, name, img, price, desc, tags) => {
  let food = new Food (type, name, img, price, desc, tags);
  foodArray.push(food);
};

const fillSite = (arr) => {
  arr.forEach(food => {
    addItemToMenu(food["name"], food["img"], food["price"], food["desc"])
  });
};

const getTag = (tag) => {
  itemsContainer.innerHTML = "";
  let filtered = foodArray.filter(item => {return item["tags"].includes(tag)});
  getTypes(filtered, filtered);
};

btns.forEach(btn => {
  btn.addEventListener("click", function (e) {
    const name = e.currentTarget.id;
    getTag(name);
  })
})

const getTypes = (arr, secondArr = foodArray) => {
  let filteredArr = []
  let sortingArr = [];
  arr.forEach(food => {
    sortingArr.push(food["type"]);
  });
  foodTypes = [...new Set(sortingArr)];
  foodTypes.forEach(type => {
    filteredArr = secondArr.filter(food => {return food.type === type})
    const typeOfFood = document.createElement("div");
    const typeOfFoodHeadline = document.createElement("h1");
    const typeOfFoodHeadlineText = document.createTextNode(type);
    typeOfFoodHeadline.appendChild(typeOfFoodHeadlineText);
    typeOfFood.appendChild(typeOfFoodHeadline);
    typeOfFood.classList.add("food-heading");
    itemsContainer.appendChild(typeOfFood);
    fillSite(filteredArr);
  });
};


addFood("ГАРНІРИ", "ОВОЧІ ГРИЛЬ", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-02.49.40-copy-2-1.jpg", "₴210", "Баклажани | Кабачки | Перець | Цибуля | Томати | Гриби | Оливкова олія | Сіль | Чорний перець", ["", "everything"]);
addFood("ГАРНІРИ", "КАРТОПЛЯ ФРІ", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-10.02.02-copy-1.jpg", "₴155", "Картопля | Олія | Сіль | Перецьㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "everything"]);
addFood("ГАРНІРИ", "КАРТОПЛЯНИЙ ГРАТЕН", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-02.49.50-copy-2-1.jpg", "₴170", "Картопля | Сир | Часник | Молоко | Сметана | Сіль | Перецьㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "everything"]);
addFood("ГАРНІРИ", "СМАЖЕНИЙ РИС З ЯЙЦЕМ", "https://base.ua/wp-content/uploads/2024/02/2024-02-16-15.52.10.jpg", "₴155", "Рис | Яйця | Цибуля | Морква | Часник | Соєвий соус | Олія | Сіль | Перецьㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "everything"]);
addFood("ПІЦА", "ЛОСОСЬ | ЧЕРВОНА ІКРА", "https://base.ua/wp-content/uploads/2023/07/image-2024-03-17-233127.jpg", "₴400", "Лосось | Червона ікраㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["breakfast", "breakfast"]);
addFood("ПІЦА", "КУРКА ТЕРІЯКІ", "https://base.ua/wp-content/uploads/2024/03/image-2024-03-17-232156.jpg", "₴300", "Куряче філе | Соус теріякі | Сир моцарелла | Помідори | Перець | Гриби | Перець чилі | Зелена цибуляㅤㅤㅤㅤㅤ", ["breakfast", "breakfast"]);
addFood("ПІЦА", "ШИНКА | ГРИБИ", "https://base.ua/wp-content/uploads/2023/07/image-2024-03-17-233049.jpg", "₴295", "Шинка | Грибиㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["breakfast", "breakfast"]);
addFood("ПІЦА", "4 СИРИ", "https://base.ua/wp-content/uploads/2023/07/image-2024-03-17-233014.jpg", "₴310", "Моцарелла | Чеддер | Гауда | Пармезанㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["breakfast", "breakfast"]);
addFood("ПІЦА", "ЧОРІЗО", "https://base.ua/wp-content/uploads/2023/07/image-2024-03-18-152250.jpg", "₴270", "ЧОРІЗОㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["breakfast", "breakfast"]);
addFood("ПІЦА", "МАРГАРИТА", "https://base.ua/wp-content/uploads/2023/07/image-2024-03-18-151155.jpg", "₴255", "Соус томатний | Сир моцарелла | Базилік | Помідориㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["breakfast", "breakfast"]);
addFood("СУПИ", "ГРИБНИЙ КРЕМ-СУП", "https://base.ua/wp-content/uploads/2023/07/dsc09503.jpg", "₴210", "Гриби | Бульйон | Цибуля | Часник | Сметана | Петрушкаㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "lunch"]);
addFood("СУПИ", "БУЛЬОН З КУРЯЧОЮ ГРУДКОЮ", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-09.04.56-copy-1.jpg", "₴195", "Куряча грудка | Бульйон | Морква | Цибуля | Сіль | Перець | Базилік | Лавровий листㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "lunch"]);
addFood("СУПИ", "ФО БО", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-09.03.47-copy-1.jpg", "₴250", "Рисова локшина | Бульйон | Телятина | Коріандр | Кінза | М'ята | Лайм | Цибуля | Чилі | Соєвий соус | Черний перець | Червоний перець | Боби мунг | Зелена цибуля | Лимонна трава", ["", "lunch"]);
addFood("СУПИ", "ТОМ ЯМ", "https://base.ua/wp-content/uploads/2023/11/dsc07077-1.jpg", "₴450", "Кокосове молоко | Томати | Лемонграс | Лайм | Листя лайма | Чилі | Галангал | Цибуля | Часник | Гриби | Креветки | Рибний соус | Цукрова пальма | Коріандр | М'ята", ["", "lunch"]);
addFood("СУПИ", "ОКРОШКА З ЛОСОСЕМ", "https://base.ua/wp-content/uploads/2024/04/image-2024-05-03-140048.jpg", "₴285", "Квас | Лосось | Огірок | Редис | Редька | Зелена цибуля | Яйце | Картопля | Зелень | Сметана | Лимонㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "lunch"]);
addFood("САЛАТИ", "АВОКАДО З ЛОСОСЕМ", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-09.42.50-1-1.jpeg", "₴370", "Креветки | Авокадо | Лососьㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "dinner"]);
addFood("САЛАТИ", "МОЦАРЕЛА | ТОМАТИ", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-09.42.52-1.jpeg", "₴295", "соус пестоㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "dinner"]);
addFood("САЛАТИ", "ЛОСОСЬ | АВОКАДО", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-09.42.48-1.jpeg", "₴410", "мікс салатуㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "dinner"]);
addFood("САЛАТИ", "РОСТБІФ | ПЕЧЕНІ ОВОЧІ", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-09.42.46-1.jpeg", "₴435", "руколаㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "dinner"]);
addFood("САЛАТИ", "КУРЧА | АВОКАДО", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-13.08.43-copy.jpg", "₴340", "соус цезарㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "dinner"]);
addFood("САЛАТИ", "АВОКАДО | МІКС САЛАТУ", "https://base.ua/wp-content/uploads/2023/07/photo_2023-08-05-09.43.02-1.jpeg", "₴325", "пармезанㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "dinner"]);
addFood("МІНІКЕЙКИ", "CHOCO CRACKER", "https://base.ua/wp-content/uploads/2023/08/dsc07870-copy-scaled-1-e1691400029981.jpg", "₴200", "шоколадний бісквит | крамбл | шоколадна панна котта | меренгамㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "drink"]);
addFood("МІНІКЕЙКИ", "BIG BERRY MINI CAKE", "https://base.ua/wp-content/uploads/2023/08/dsc07834-1.jpg", "₴220", "ягоди | полунична панна котта | ягідний бісквітㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "drinkㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"]);
addFood("МІНІКЕЙКИ", "ВИШНЕВИЙ ЛЮКС", "https://base.ua/wp-content/uploads/2023/08/photo_2023-08-05-10.36.23-1.jpeg", "₴205", "вишня | ягідний крем | шоколадний бісквіт без борошнаㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "drink"]);
addFood("МІНІКЕЙКИ", "ПОЛУНИЦЯ", "https://base.ua/wp-content/uploads/2023/08/dsc06853-copy-scaled.jpg", "₴205", "полуниця | маскарпоне | шоколадний бісквіт без борошнаㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "drink"]);
addFood("ЧІЗКЕЙКИ", "МАНГО", "https://base.ua/wp-content/uploads/2023/08/zmi_3455-copy-scaled-1.jpg", "₴220", "манго | маракуйя-манго чізкейк | галетна крихтаㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "drink"]);
addFood("ЧІЗКЕЙКИ", "ЯГІДНИЙ", "https://base.ua/wp-content/uploads/2023/08/dsc01093-1.jpg", "₴220", "ягідний чізкейк | смородиновий кердㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "drinkㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"]);
addFood("ЧІЗКЕЙКИ", "СНІКЕРС", "https://base.ua/wp-content/uploads/2023/08/photo_2023-08-05-12.42.17-copy-1.jpg", "₴200", "арахісовий чізкейк | карамель | арахісㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ", ["", "drink"]);

window.onload = getTypes(foodArray);