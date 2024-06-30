function randomDateWithinOneMonth() {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0);

    // Calculate a random timestamp within the month
    const randomTimestamp = startOfMonth.getTime() + Math.random() * (endOfMonth.getTime() - startOfMonth.getTime());

    // Create a Date object from the timestamp
    const randomDate = new Date(randomTimestamp);

    return randomDate;
}

const randomDate = randomDateWithinOneMonth();
console.log(randomDate.toDateString()); // Output: e.g., "Thu Jun 16 2024"

const items = [
    {
        id: '001',
        image: 'https://m.media-amazon.com/images/I/71vjp8FqE1L._SX679_.jpg',
        item_name: 'Ant Esports Elite 1100 Mid-Tower Computer Case/Gaming Cabinet - Black ',
        price: '2401' ,
        delivery_date: randomDate.toDateString(),
        return_days : '7 Days'
    },
    {
        id: '002',
        image: 'https://m.media-amazon.com/images/I/710ZcpHUpkL._SX569_.jpg',
        item_name: 'HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, 4GB RTX 3050 GPU',
        price: '67600',
        delivery_date: randomDate.toDateString(),
        return_days : '14 Days'

    },
    {
        id: '003',
        image: 'https://m.media-amazon.com/images/I/71OFKtclW4L._SX679_.jpg',
        item_name: 'GIGABYTE NVIDIA GeForce RTX 3060 12GB GDDR6 Graphics Card',
        price: '26999',
        delivery_date: randomDate.toDateString(),
        return_days : '5 Days'
    },
    {
        id: '004',
        image: 'https://m.media-amazon.com/images/I/71Inv9RA9CL._SX679_.jpg',
        item_name: 'GIGABYTE B450M DS3H V2 AMD Ryzen AM4/Micro ATX motherboard',
        price: '5719',
        delivery_date: randomDate.toDateString(),
        return_days : 'Not Available'
    },
    {
        id: '005',
        image: 'https://m.media-amazon.com/images/I/71+6UG0Ce6L._SX569_.jpg',
        item_name: 'Acer ED270R S3 27 Inch (68.58 Cm) Full HD 1500 R Curved Gaming LCD Monitor',
        price: '12699',
        delivery_date: randomDate.toDateString(),
        return_days : '10 Days'
    },
    {
        id: '006',
        image: 'https://m.media-amazon.com/images/I/81grtcmxsyL._SX679_.jpg',
        item_name: 'Zebronics Zeb-Warrior 2.0 Multimedia Speaker With Aux Connectivity',
        price: '699',
        delivery_date: randomDate.toDateString(),
        return_days : '7 Days'
    },
    {
        id: '007',
        image: 'https://m.media-amazon.com/images/I/71Cjl1cfGpL._SX679_.jpg',
        item_name: 'EvoFox Katana Pro Mechanical Keyboard with Silent Outemu Red Switches',
        price: '2278',
        delivery_date:randomDate.toDateString(),
        return_days : '10 Days'
    },
    {
        id: '008',
        image: 'https://m.media-amazon.com/images/I/51-QCuKPAnL._SX679_.jpg',
        item_name: 'EvoFox Spectre USB Wired Gaming Mouse with Upto 3600 DPI',
        price: '399',
        delivery_date: randomDate.toDateString(),
        return_days : '3 Days'
    },
    {
        id: '009',
        image: 'https://m.media-amazon.com/images/I/612M3P4aJML._SY450_.jpg',
        item_name: 'Intel Core I5 12400F 12 Gen Generation Desktop Pc Processor 6 CPU',
        price: '11294',
        delivery_date: randomDate.toDateString(),
        return_days : '15 Days'
    },
    {
        id: '010',
        image: 'https://m.media-amazon.com/images/I/61MHpEmD3jL._SX679_.jpg',
        item_name: 'Ant Esports VS700L Non Modular High Efficiency Gaming Power Supply/PSU',
        price: '2700',
        delivery_date: randomDate.toDateString(),
        return_days : '15 Days'
    },
    {
        id: '011',
        image: 'https://m.media-amazon.com/images/I/71-t8VAs90L._SX679_.jpg',
        item_name: 'XPG ADATA GAMMIX D30 DDR4 8GB (1x8GB) 3200MHz U-DIMM Desktop RAM',
        price: '2029',
        delivery_date: randomDate.toDateString(),
        return_days : '15 Days'
    },
    {
        id: '012',
        image: 'https://m.media-amazon.com/images/I/71lPze2lobL._SX679_.jpg',
        item_name: 'Ant Esports 690 Neo Pro M.2 NVME 256GB Internal Solid State Drive/SSD',
        price: '2233',
        delivery_date: randomDate.toDateString(),
        return_days : '15 Days'
    }
];

