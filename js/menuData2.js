let menuData = {
    "breakfast": {
        "title": "Cніданки",
        "items": [
            ["Омлет Фритатта з моцареллою, шинкою і томатами/300г", "48"],
            ["Яйця пашот з міксом салату та грінками з гуакамоле/230г", "46"],
            ["Пишний омлет Пуляр з тостами/200г", "75"],
            ["Скрембл з креветкою та авокадо/230г", "75"],
            ["Вівсяна каша з полуницею та чорницею на молоці або на воді /280г", "42"],
            ["Вівсяна каша з полуницею та чорницею на кокосовому або мигдалевому молоці /200г", "54"],
        ]
    },
    "baguette": {
        "title": "Брускетти",
        "items": [
            ["Брускетта з маринованим лососем на подушці з лимонної Філадельфії /60г", "35" ],
            ["Брускетта з пармською шинкою на подушці з гуакамоле /75г", "37" ],
            ["Дегустаційний сет брускетт/210г", "88"],
        ]
    },
    "bowl": {
        "title": "Боули",
        "items": [
            ["Боул з лососем, чорним рисом та авокадо /300г", "89"],
            ["Боул з креветками, кус-кусом та грибами /300г.", "89"],
            ["Боул з тунцем, кіноа та авокадо/300г", "89"],
        ]
    },
    "snacks": {
        "title": "Закуски",
        "items": [
            ["Слабосолоний лосось з каперсами та маслинами /100г", "85"],
            ["Креветки Паприччо з соусом тартар /200г", "94"],
            ["Жюльєн із курки з грибами /100г", "48"],
            ["Жюльєн з лососем /100г", "85"],
            ["Груша з блакитним сиром, запечена в беконі /200г", "77"],
            ["Паштет за фірмовими рецептами з курячої печінки /100г", "47"],
            ["Паштет за фірмовими рецептами з курча /100г", "49"],
            ["Паштет за фірмовими рецептами з сьомги /100г", "89"],
        ]
    },
    "salads": {
        "title": "Cалати",
        "items": [
            ["Салат Цезар з куркою / з сьомгою/300г", "74"],
            ["Салат Цезар з сьомгою/300г", "93"],
            ["Салат Парма /230г", "85"],
            ["Теплий салат з телятиною – гриль та апельсиновм дрессингом /300г", "89"],
            ["Теплий салат с курячою печінкою та грибами в пряному соусі/250г", "62"],
            ["Теплий салат Атлантитда/250г", "105"],
            ["Салат зі свіжих овочів з м’яким сиром/200г", "49"],
            ["Мікс салатів з томатами, солодким перцем та авокадо з соусом песто/200г", "58"],
        ]
    },
    "soup": {
        "title": "Cупи",
        "items": [
            ["Курячий бульйон з Польпетте /350г", "35"],
            ["Томатний суп з сьомгою та мідіями /350г", "78"],
            ["Крем-суп грибний /300г", "42"],
            ["Угорський гуляш - суп /350г", "68"],
            ["Скандинавський рибний суп /350г", "87"],
        ]
    },
    "meat": {
        "title": "М’ясо",
        "items": [
            ["Пряне філе свинини, запечене у травах з крем-соусом з тунця /300г", "128"],
            ["Віденський шніцель із свинини з теплим картопляним салатом /400г", "87"],
            ["Стейк курячий Ді Поло з картоплею по-крєольські з часниковим соусом", "82"],
            ["Медова курка у соусі «теріякі» з кус-кусом/350г", "86"],
            ["Страчетті з телятини з мусом із броколі/400г", "115"],
            ["Cтейк Риб-Ай з соусом BBQ та овочами-гриль /300г", "140"],
        ]
    },
    "fish": {
        "title": "Риба",
        "items": [
            ["Стейк Ді Сальмоне – Лосось на подушці зі стручкової квасолі з соусом Сitrone", "145"],
            ["Морський окунь з припущеними овочами у соусі з білого вина/300г", "139"],
            ["Дорадо на грилі з сирно-вершковим соусом Лассе/ ціна за 100г", "50"],
        ]
    },
    "food": {
        "title": "Гарніри",
        "items": [
            ["Картопля по-креольскі з прованськими травами, грибами та цибулею /250г", "40"],
            ["Картопляне пюре з пармезаном /200г", "35"],
            ["Шпинат, припущений у вершковому соусі /150г", "46"],
            ["Овочі на грилі /300г", "47"],
        ]
    },
    "pasta": {
        "title": "Паста",
        "items": [
            ["Спагетті Карбонара /300г.", "64"],
            ["Паста Кон ді Манзо з телятиною на грилі /300г.", "67"],
            ["Тальятелле Фрутті ді Маре /300г.", "105"],
            ["Кольорові конкільйоні з ніжними кабачками та песто /300г.", "62"],
            ["Паста Болоньєзе /300г.", "57"],
        ]
    },
    "pizza": {
        "title": "Піцца",
        "items": [
            ["Піцца Маргарита/450г.", "50"],
            ["Піцца чотыри сира/420г.", "88"],
            ["Піцца Пепероні/460г. ", "89"],
            ["Піцца Карбонара/430г.", "76"],
            ["Піцца Парма/420г.", "92"],
            ["Піцца Маре-Неро/500г.", "132"],
            ["Піцца Вегетаріана/480г.", "57"],
        ]
    },
    "bread": {
        "title": "Cвіжоспечений хліб",
        "items": [
            ["Багет французький /250г.", "25"],
            ["Багет Фітнес", "28"],
            ["Багет з цибулею та сиром /250г.", "35"],
            ["Хліб цільнозерновий /400г. ", "35"],
            ["Корзина свіжоспеченого хліба /120г.", "8/15"],
        ]
    },
    "cakes": {
        "title": "Десерти",
        "items": [
            ["круасан з вершковим кремом /100г.", "30"],
            ["Круасан з шоколадним кремом /100г.", "45"],
            ["Крем-брюле /120г.", "40"],
            ["Тірамісу /120г.", "45"],
            ["Шоколадний фондан з морозивом /125г.", "55"],
            ["Чізкейк /150г.", "45"],
            ["Торт «Три шоколаду» /150г.", "50"],
            ["Морозиво в асортименті /150г.", "60"],
        ]
    },
    "coffee": {
        "title": "Кава",
        "items": [
            ["ESPRESSO/30мл.", "25"],
            ["DOPPIO /60мл.", "35"],
            ["AMERICANO /200мл. ", "25"],
            ["CAPPUCCINO /200мл./340мл.", "35/45"],
            ["CAPPUCCINO КЕДРОВИЙ /340мл.", "60"],
            ["COFFE LATTE /340мл.", "40"],
            ["MATCHA LATTE /250мл.", "45"],
            ["COFFE FLAT WHITE /200мл.", "45"],
            ["RAF COFFE /250мл.", "45"],
            ["COFFE ГЛЯССЕ /250мл.", "50"],
            ["КАКАО /340мл.", "35"],
            ["КАКАО З МАРШМЕЛЛОУ /340мл.", "40"],
        ]
    },
    "tea": {
        "title": "Чай",
        "items": [
            ["Чорний Англійський сніданок /500мл", "55"],
            ["Чорний з бергамотом/ 500мл.", "55"],
            ["Зелений /500мл.", "55"],
            ["Зелений з жасміном /500мл.", "55"],
            ["Iмбирний з малиною /600мл", "55"],
            ["Смородина з м‘ятою /600мл", "55"],
            ["Травяний Альпiйський луг з медом та лимоном /500мл.", "55"],
        ]
    },
    "juice": {
        "title": "Фрэшi",
        "items": [
            ["Яблучний /200мл.", "45"],
            ["Морквяний /200мл.", "40"],
            ["Апельсиновий /200мл.", "50"],
            ["Грейпфрутовий /200мл.", "60"],
        ]
    },
    "smoothie": {
        "title": "Cмузі",
        "items": [
            ["Полуниця, банан, апельсин, смородина /350мл.", "60"],
            ["Малина, банан, грейпфрут /350мл.", "60"],
            ["Авокадо, банан, шпинат /350мл.", "75"],
        ]
    }
    , "milk_shakes": {
        "title": "Молочні коктейлі",
        "items": [
            ["Класичний /350мл", "75"],
        ]
    }
    , "cocktails": {
        "title": "Коктейлi безалкогольнi",
        "items": [
            ["Імбирний лимонад /350мл.", "50"],
            ["Огiрково-бозилiковий лимонад /350мл.", "50"],
            ["Мохіто /350мл.", "50"],
            ["Полуничний мохіто /350мл.", "55"],
            ["Піно-Колада /350мл.", "55"],
            ["Грушевий лимонад /350мл.", "55"],
        ]
    }
    , "drinks": {
        "title": "Інші напої",
        "items": [
            ["Вода Боржомі 0,33л./0,5л.", "35/45"],
            ["Вода Моршинська (скло) 0,33л./0,5л.", "30/40"],
            ["Pepsi/Pepsi zero /0.5л.", "25"],
            ["Evervess Tonic/0,5л.", "30"],
            ["Red Bull/0,25л.", "60"],
            ["Морс/0,25л./1л.", "25/80"],
            ["Узвар/0,25л./1л.", "25/80"],
            ["Сік Sandora/0,25л./1л.", "30/90"],
            ["Stella Artois N/A/0,5л. ", "45"],
            ["Hoegaarden White N/A/0,33л.", "60"],
        ]
    },
}


const createHeader = (value) => {
    return `<h2>${value}</h2>`;
}

const createFoodItem = (foodName, price) => {
    return `<div class="food-item">
                <div>${foodName}</div>
                <div>${price} гр</div>
            </div>`;
}

const addMenuItems = (data) => {
    let items = [];
    items.push(createHeader(data.title));

    data.items.forEach((value) => {
        items.push(createFoodItem(value[0], value[1]));
    })
    return items.join("");
}

const addDOMItems = () => {

    console.log();

    document.querySelector('.food-menu-container').innerHTML = addMenuItems(menuData[window.location.hash.slice(1)]);
}

addDOMItems();
