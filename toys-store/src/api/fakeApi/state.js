export const categories = [
    { id: 1, title: 'Для мальчиков' },
    { id: 2, title: 'Для младенцев' },
    { id: 3, title: 'Для девочек' },
    { id: 4, title: 'Канцелярия' }
]

export const toys = [
    {
        id: 1,
        name: "Робот", 
        price: "12", 
        category: categories[0], 
        img: require("../../../assets/robot.jpeg")
    },
    {
        id:2,
        name: "Подвесная игрушка уточка",
        price: "8", 
        category: categories[1], 
        img: "../../../assets/podvesnay1.jpeg"
    },
    {
        id:3, 
        name: "Подвесная игрушка зайка", 
        price: "8", 
        category: categories[1], 
        img: "../../../assets/podvesnay2.jpeg"
      },
    {
        id:4, 
        name: "Подвесная игрушка пчелка", 
        price: "8", 
        category: categories[1],
        img: "../../../assets/podvesnay3.jpeg"
    },
    {
        id:5, 
        name: "Медицинский комплект розовый", 
        price: "25", 
        category: categories[2], 
        img: "../../../assets/medicina1.jpg"
    },
    {
        id:6, 
        name: "Медицинский комплект синий", 
        price: "25", 
        category: categories[2], 
        img: "../../../assets/medicina2.jpg"
    },
    {
        id:7, 
        name: "Робот красный", 
        price: "19", 
        category: categories[0], 
        img: "../../../assets/robotkr.jpg"
    },
    {
        id:8, 
        name: "Робот синий", 
        price: "19", 
        category: categories[0], 
        img: "../../../assets/robotsn.jpg"
    },
    {
        id:9, 
        name: "Робот оранжевый", 
        price: "19", 
        category: categories[0], 
        img:"../../../assets/robotor.jpg"
    },
    {
        id:10, 
        name: "Кубик развивающий для детей", 
        price: "6", 
        category: categories[1], 
        img: "../../../assets/kubik.jpg"},
    {
        id:11, 
        name: "Набор цветных ручек", 
        price: "5", 
        category: categories[3], 
        img:"../../../assets/k1.jpg"
    },
    {
        id:12, 
        name: "Набор цветных маркеров", 
        price: "7", 
        category: categories[3], 
        img: "../../../assets/k36.jpg"
    },
    {
        id:13, 
        name: "Игра молоток", 
        price: "10", 
        category: categories[1], 
        img: "../../../assets/molotok.jpeg"
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(toys);
        }, 500);
    });

export default fetchAll;