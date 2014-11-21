var data = [
    {
        type: 'Первые блюда',
        name: 'Борщ',
        calories: 61.6,
        proteins: 3.8,
        fat: 2.9,
        carbohydrates: 5.4,
        img: 'img/borsch.jpg',
        components: ['Свекла', 'Морковь', 'Лук репчатый', 'Картофель', 'Свинина', 'Томатная паста', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп гороховый',
        calories: 54.3,
        proteins: 2.2,
        fat: 3,
        carbohydrates: 5,
        img: 'img/gorohoviy.jpg',
        components: ['Морковь', 'Лук репчатый', 'Картофель', 'Свинина', 'Горох', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп грибной',
        calories: 50.9,
        proteins: 0.8,
        fat: 3.4,
        carbohydrates: 4.6,
        img: 'img/gribnoy.jpg',
        components: ['Морковь', 'Лук репчатый', 'Картофель', 'Грибы', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп куриный с вермишелью',
        calories: 59.7,
        proteins: 4.5,
        fat: 3.3,
        carbohydrates: 3.1,
        img: 'img/kuriniy.jpg',
        components: ['Морковь', 'Лук репчатый', 'Картофель', 'Курица', 'Вермишель', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Рассольник',
        calories: 40.4,
        proteins: 0.9,
        fat: 1.6,
        carbohydrates: 5.9,
        img: 'img/rassolnik.jpg',
        components: ['Морковь', 'Лук репчатый', 'Картофель', 'Курица', 'Рис', 'Огрурец соленый', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп молочный с вермишелью',
        calories: 64.6,
        proteins: 2.8,
        fat: 2.7,
        carbohydrates: 7.7,
        img: 'img/molochiny.jpg',
        components: ['Молоко', 'Вермишель', 'Сахар', 'Масло сливочное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп сырный',
        calories: 93.4,
        proteins: 4.7,
        fat: 6.9,
        carbohydrates: 3.2,
        img: 'img/sirniy.jpg',
        components: ['Молоко', 'Сыр плавленный', 'Картофель', 'Лук репчатый', 'Масло сливочное']
    },
    {
        type: 'Первые блюда',
        name: 'Уха',
        calories: 66.7,
        proteins: 8.5,
        fat: 1.9,
        carbohydrates: 4.3,
        img: 'img/uha.jpg',
        components: ['Рыба', 'Морковь', 'Картофель', 'Лук репчатый', 'Масло сливочное']
    },
    {
        type: 'Первые блюда',
        name: 'Щи из кислой капусты',
        calories: 37.2,
        proteins: 2,
        fat: 2.8,
        carbohydrates: 1,
        img: 'img/schi.jpg',
        components: ['Капуста квашеная', 'Морковь', 'Картофель', 'Лук репчатый', 'Курица', 'Масло подсолнечное']
    },
    {
        type: 'Первые блюда',
        name: 'Суп харчо',
        calories: 43.9,
        proteins: 2.2,
        fat: 2.1,
        carbohydrates: 4.3,
        img: 'img/harcho.jpg',
        components: ['Рис', 'Морковь', 'Картофель', 'Лук репчатый', 'Свинина', 'Масло подсолнечное', 'Томатная паста']
    },
    {
        type: 'Вторые блюда',
        name: 'Каша гречневая',
        calories: 98.7,
        proteins: 3.6,
        fat: 2.2,
        carbohydrates: 17.1,
        img: 'img/grecka.jpg',
        components: ['Крупа гречневая', 'Масло сливочное']
    },
    {
        type: 'Вторые блюда',
        name: 'Каша манная',
        calories: 162.1,
        proteins: 5.3,
        fat: 6,
        carbohydrates: 23.2,
        img: 'img/manka.jpg',
        components: ['Крупа манная', 'Масло сливочное']
    },
    {
        type: 'Вторые блюда',
        name: 'Каша ячневая',
        calories: 48.6,
        proteins: 1.8,
        fat: 1,
        carbohydrates: 8.7,
        img: 'img/yachka.jpg',
        components: ['Крупа ячневая', 'Масло сливочное']
    },
    {
        type: 'Вторые блюда',
        name: 'Котлеты свинные',
        calories: 438.2,
        proteins: 29,
        fat: 35.8,
        carbohydrates: 0.4,
        img: 'img/kotleti.jpg',
        components: ['Свинина', 'Лук репчатый', 'Молоко', 'Мука', 'Масло подсолнечное']
    },
    {
        type: 'Вторые блюда',
        name: 'Жаркое из свинины',
        calories: 233.2,
        proteins: 10.6,
        fat: 20.8,
        carbohydrates: 0.7,
        img: 'img/zharkoe.jpg',
        components: ['Свинина', 'Лук репчатый', 'Морковь', 'Картофель', 'Масло подсолнечное', 'Масло подсолнечное', 'Томатная паста', 'Чеснок']
    },
    {
        type: 'Вторые блюда',
        name: 'Рыба жаренная в тесте',
        calories: 227,
        proteins: 15.4,
        fat: 12.3,
        carbohydrates: 14.7,
        img: 'img/riba.jpg',
        components: ['Рыба', 'Яйца', 'Мука', 'Масло подсолнечное']
    },
    {
        type: 'Вторые блюда',
        name: 'Яичница глазунья',
        calories: 240.8,
        proteins: 15.9,
        fat: 19.3,
        carbohydrates: 1,
        img: 'img/glazunia.jpg',
        components: ['Яйца', 'Масло подсолнечное']
    },
    {
        type: 'Вторые блюда',
        name: 'Омлет',
        calories: 221.8,
        proteins: 12.2,
        fat: 18.4,
        carbohydrates: 1.9,
        img: 'img/omlet.jpg',
        components: ['Яйца', 'Мука', 'Молоко', 'Масло подсолнечное']
    },
    {
        type: 'Вторые блюда',
        name: 'Картофель молодой в сметане',
        calories: 161.6,
        proteins: 2.1,
        fat: 14,
        carbohydrates: 7.2,
        img: 'img/molodoy.jpg',
        components: ['Картофель', 'Сметана', 'Укроп']
    },
    {
        type: 'Вторые блюда',
        name: 'Картофель жареный',
        calories: 203.3,
        proteins: 3.7,
        fat: 10.6,
        carbohydrates: 4.8,
        img: 'img/zareniy.jpg',
        components: ['Картофель', 'Масло подсолнечное', 'Лук репчатый']
    },
    {
        type: 'Вторые блюда',
        name: 'Картофельное пюре',
        calories: 81.7,
        proteins: 2.1,
        fat: 4.6,
        carbohydrates: 8.5,
        img: 'img/pure.jpg',
        components: ['Картофель', 'Масло сливочное', 'Молоко']
    },
    {
        type: 'Салаты',
        name: 'Салат из моркови и капусты',
        calories: 140.7,
        proteins: 1.7,
        fat: 11,
        carbohydrates: 9.2,
        img: 'img/salat_kap.jpg',
        components: ['Капуста', 'Масло подсолнечное', 'Морковь']
    },
    {
        type: 'Салаты',
        name: 'Салат из помидоров и огурцов',
        calories: 130,
        proteins: 2,
        fat: 10,
        carbohydrates: 8.3,
        img: 'img/salat_og.jpg',
        components: ['Огурец', 'Помидор', 'Масло подсолнечное', 'Лук репчатый']
    },
    {
        type: 'Салаты',
        name: 'Салат из свеклы и чернослива',
        calories: 117.7,
        proteins: 1.7,
        fat: 8.8,
        carbohydrates: 8.5,
        img: 'img/salat_bur.jpg',
        components: ['Свекла', 'Чернослив', 'Орехи грецкие', 'Сметана']
    },
    {
        type: 'Десерты',
        name: 'Блины',
        calories: 218,
        proteins: 9.3,
        fat: 8.7,
        carbohydrates: 27.2,
        img: 'img/blini.jpg',
        components: ['Молоко', 'Мука', 'Яйца', 'Масло подсолнечное']
    },
    {
        type: 'Десерты',
        name: 'Желе из сливок',
        calories: 218,
        proteins: 9.3,
        fat: 8.7,
        carbohydrates: 27.2,
        img: 'img/zhele.jpg',
        components: ['Сливки', 'Яйца', 'Сахар', 'Желатин']
    },
    {
        type: 'Десерты',
        name: 'Сырники',
        calories: 248,
        proteins: 9.6,
        fat: 14.1,
        carbohydrates: 22.1,
        img: 'img/sirniki.jpg',
        components: ['Творог', 'Яйца', 'Сахар', 'Мука']
    },
    {
        type: 'Напитки',
        name: 'Кисель молочный',
        calories: 33.5,
        proteins: 0.9,
        fat: 1,
        carbohydrates: 5.5,
        img: 'img/kisel.jpg',
        components: ['Сахар', 'Молоко', 'Крахмал', 'Ванилин']
    },
    {
        type: 'Напитки',
        name: 'Компот из вишни',
        calories: 53.5,
        proteins: 0.3,
        fat: 0.05,
        carbohydrates: 13.7,
        img: 'img/kompot.jpg',
        components: ['Сахар', 'Вишня']
    },
    {
        type: 'Напитки',
        name: 'Чай с лимоном',
        calories: 41.4,
        proteins: 0.2,
        fat: 0.05,
        carbohydrates: 5.5,
        img: 'img/chai_lim.jpg',
        components: ['Сахар', 'Лимон', 'Чай']
    },
    {
        type: 'Напитки',
        name: 'Чай с молоком',
        calories: 52.5,
        proteins: 0.9,
        fat: 0.8,
        carbohydrates: 10.5,
        img: 'img/chai_mol.jpg',
        components: ['Сахар', 'Молоко', 'Чай']
    }

];