export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 4,
        title: "Calendar",
        url: "/calender",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://i.ndtvimg.com/i/2017-07/hrithik-roshan-instagram_640x480_41501501270.jpg",
    userName: "Priyanshu Rane",
    email: "priyanshu@example.com",
    amount: "9000",
  },
  {
    id: 2,
    img: "https://cdn.zeebiz.com/sites/default/files/2023/06/13/246845-news18-bl-zb.jpg",
    userName: "Himanshu Rane",
    email: "Himanshu@example.com",
    amount: "8500",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    userName: "Chandini Agrawal",
    email: "Chandini@example.com",
    amount: "8200",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRRwdLG7XpyDGpgQaJDdi6bIEXOEQtwwUNg&usqp=CAU",
    userName: "Prabal Pratap",
    email: "prabal@example.com",
    amount: "80000",
  },
  {
    id: 5,
    img: "https://i.ibb.co/pKrq8MR/jujutsu-kaisen-satoru-gojo-anime-boys-anime-girls-hd-wallpaper-preview.jpg",
    userName: "Rohan Saturo",
    email: "Rohan@example.com",
    amount: "98000",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    userName: "Akshita Mishra",
    email: "AK@example.com",
    amount: "7500",
  },
  {
    id: 7,
    img: "https://images.news18.com/ibnlive/uploads/2024/02/virat-kohli-deepfake-video-2024-02-9707b1ccbe7881fd6d7714ec6dc0383d.jpg?impolicy=website&width=640&height=480",
    userName: "Jayant Yadav ",
    email: "Jay@example.com",
    amount: "7300",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://i.ndtvimg.com/i/2017-07/hrithik-roshan-instagram_640x480_41501501270.jpg ",

    Name: "Hrithik Roshan",
    email: "hrithik@gmail.com",
    phone: "123 456 7891",
    createdAt: "01.02.2023",
    status: true,
    Age: 50,
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/b2/8d/0e/b28d0efa3f5a9bdbb5797c7dd53365a6.jpg",

    Name: "Kakashi Hatake",
    email: "kakashi@example.com",
    phone: "987 654 3210",
    createdAt: "02.03.2023",
    status: true,
    Age: 27,
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/32/32/6a/32326add6169e8f92ce30af564a8e59f.jpg ",

    Name: "Naruto Uzumaki",
    email: "naruto@example.com",
    phone: "567 890 1234",
    createdAt: "03.04.2023",
    status: true,
    Age: 17,
  },
  {
    id: 4,
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/hinata-wedding.jpg",

    Name: "Hinata Hyuga",
    email: "hinata@example.com",
    phone: "321 654 0987",
    createdAt: "04.05.2023",
    status: true,
    Age: 17,
  },
  {
    id: 5,
    img: "https://c4.wallpaperflare.com/wallpaper/370/127/644/uchiha-sasuke-rinnegan-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-preview.jpg",

    Name: "Sasuke Uchiha",
    email: "sasuke@example.com",
    phone: "789 012 3456",
    createdAt: "05.06.2023",
    status: true,
    Age: 17,
  },
  {
    id: 6,
    img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/z/u/a/medium-itachi-uchiha-anime-character-hd-matte-finish-poster-original-imaghf5yx9ts8xdv.jpeg?q=90&crop=false ",

    Name: "Itachi Uchiha",
    email: "itachi@example.com",
    phone: "456 789 0123",
    createdAt: "06.07.2023",
    status: true,
    Age: 24,
  },
  {
    id: 7,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e72e332-c90f-40a6-a27c-bb706e357154/df1y455-ddf2455a-9834-442b-848e-70d7dc81aae0.png/v1/fill/w_1920,h_2716,q_80,strp/uchiha_madara_by_deriavis_df1y455-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjcxNiIsInBhdGgiOiJcL2ZcLzZlNzJlMzMyLWM5MGYtNDBhNi1hMjdjLWJiNzA2ZTM1NzE1NFwvZGYxeTQ1NS1kZGYyNDU1YS05ODM0LTQ0MmItODQ4ZS03MGQ3ZGM4MWFhZTAucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.w77uksQz0daqOVLVRqrf7D-xihDzwLBkBKitg0lKfTQ ",

    Name: "Madara Uchiha",
    email: "madara@example.com",
    phone: "234 567 8901",
    createdAt: "07.08.2023",
    status: true,
    Age: 70,
  },
  {
    id: 8,
    img: "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/jp/news/2023/10/05/Zp1GRY5rlGFK5htw/82_%E5%8D%83%E6%89%8B%E6%9F%B1%E9%96%93_card_hashirama_00_ur_05_SSR.jpg ",

    Name: "Hashirama Senju",
    email: "hashirama@example.com",
    phone: "890 123 4567",
    createdAt: "08.09.2023",
    status: true,
    Age: 71,
  },
  {
    id: 9,
    img: "https://w0.peakpx.com/wallpaper/235/928/HD-wallpaper-jiraiya-and-naruto-aesthetic-jiraya-sad.jpg ",

    Name: "Jiraya",
    email: "jiraya@example.com",
    phone: "678 901 2345",
    createdAt: "09.10.2023",
    status: true,
    Age: 52,
  },
  {
    id: 10,
    img: "https://wallpapers.com/images/featured/sakura-haruno-64ot3a0im6vopaty.jpg0",

    Name: "Sakura Haruno",
    email: "sakura@example.com",
    phone: "901 234 5678",
    createdAt: "10.11.2023",
    status: true,
    Age: 17,
  },
  {
    id: 11,
    img: "https://e0.pxfuel.com/wallpapers/237/833/desktop-wallpaper-cute-nobita.jpg",

    Name: "Nobita Nobi",
    email: "nobita@example.com",
    phone: "123 456 7891",
    createdAt: "01.02.2023",
    status: true,
    Age: 11,
  },
  {
    id: 12,
    img: "https://i.pinimg.com/736x/2b/89/20/2b89205362fe42af6f6c544d9b255370.jpg",

    Name: "Doraemon",
    email: "doraemon@example.com",
    phone: "789 012 3456",
    createdAt: "05.06.2023",
    status: true,
    Age: 5,
  },
  {
    id: 13,
    img: "https://i.pinimg.com/originals/a8/12/aa/a812aad6eaa53a7a0ab4c71ca1d3b0b7.jpg",

    Name: "Shizuka Minamoto",
    email: "shizuka@example.com",
    phone: "987 654 3210",
    createdAt: "02.03.2023",
    status: true,
    Age: 11,
  },

  {
    id: 14,
    img: "https://img.favpng.com/20/15/17/nobita-nobi-shizuka-minamoto-suneo-honekawa-doraemon-nobisuke-nobi-png-favpng-Hh4yspqd8D2Dg47PVZ5PzzLcy_t.jpg",

    Name: "Takeshi Gouda",
    email: "takeshi@example.com",
    phone: "321 654 0987",
    createdAt: "04.05.2023",
    status: true,
    Age: 12,
  },
  {
    id: 15,
    img: "https://facts.net/wp-content/uploads/2023/09/24-facts-about-suneo-honekawa-doraemon-1693880339.jpg",

    Name: "Suneo Honekawa",
    email: "suneo@example.com",
    phone: "567 890 1234",
    createdAt: "03.04.2023",
    status: true,
    Age: 10,
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};

export const orders = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    OrderedBy: "Priyanshu Rane",
    price: "$250.99",
    OrderedAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    OrderedBy: "Himanshu",
    price: "$499.99",
    OrderedAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    OrderedBy: "Chandini",
    price: "$999.49",
    OrderedAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    OrderedBy: "Jayant",
    price: "$799.49",
    OrderedAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    OrderedBy: "Prabal",
    price: "$39.99",
    OrderedAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    OrderedBy: "Rohan",
    price: "$59.49",
    OrderedAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    OrderedBy: "Akshita",
    price: "$119.49",
    OrderedAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    OrderedBy: "Kratika",
    price: "$899.99",
    OrderedAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    OrderedBy: "Nitin",
    price: "$970.49",
    OrderedAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    OrderedBy: "Sushil",
    price: "$599.99",
    OrderedAt: "01.02.2023",
    inStock: true,
  },
];
