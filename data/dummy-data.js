import Category from '../models/Category';
import Product from '../models/Product';


export const CATEGORIES = [
    new Category("c1", "Computers", "https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg"),
    new Category("c2", "Leptops", "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg"),
    new Category("c3", "Phones", "https://cdn.pixabay.com/photo/2020/01/27/15/30/background-4797499_1280.jpg"),
    new Category("c4", "Gaming", "https://cdn.pixabay.com/photo/2017/04/09/12/00/gaming-2215601_1280.jpg"),
    new Category("c5", "Screens and TV`s", "https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876_1280.jpg"),
    new Category("c6", "Accessories", "https://cdn.pixabay.com/photo/2016/01/14/20/14/desk-1140699_1280.jpg"),
];
export const PRODUCTS =[
    new Product(
        "p1",
        ["c1"],
        "Lenovo Ideacentre Gaming 5-14IOB 90RE006TYS",
        2000,
        "https://ksp.co.il/site/siteUpload/265692222-3.jpg",
        "15.5 kg   292.2 mm x 145 mm x 365 mm",
        "מחשב מותג שולחני מוכן מראש מבית Lenovo העולמית, בעל מעבד Intel® Core™ i7-11700F 2.5GHz - 4.9GHz, זיכרון בנפח 32GB, כונן קשיח בנפח 1TB וכונן SSD בנפח 512GB, כרטיס מסך NVIDIA Geforce RTX 3060 12GB וכולל מערכת הפעלה ",
        `Or Milis: "good computer"`
    ),
    new Product(
        "p2",
        ["c1"],
        "Asus ROG Strix GA15 G15DK-73700X0490",
        3500,
        "https://img.ksp.co.il/item/179755/b_1.jpg?v=3",
        "12.58 kg",
        "מחשב מותג שולחני מוכן מראש מבית Asus, בעל מעבד AMD Ryzen™ 7 3700X 3.6GHz - 4.4GHz, זיכרון בנפח 16GB, כונן SSD בנפח 1TB, מאיץ גרפי NVIDIA® GeForce® RTX™ 3070 8GB וללא מערכת הפעלה",
        `Yehuda ray: "good computer"`
    ),
    new Product(
        "p3",
        ["c1"],
        "HP Omen Desktop GT13-1110NJ",
        1500,
        "https://img.ksp.co.il/item/179892/b_1.jpg?v=3",
        "13.58 kg",
        "מחשב מותג שולחני מוכן מראש מבית HP בעל מעבד Intel® Core™ i7-11700K 3.60GHz - 5.00GHz, זיכרון פנימי בנפח 32GB, שני כונני SSD בנפח 1TB, כרטיס מסך NVIDIA Geforce RTX 3090 24GB וכולל מערכת הפעלה",
        `Or Milis: "good computer"`
    ),
    new Product(
        "p4",
        ["c1"],
        "Lenovo Legion T5-26IAB",
        3000,
        "https://img.ksp.co.il/item/187440/b_1.jpg?v=3",
        "15.58 kg",
        "The amount of storage of the information provided by the manufacturers for various products that shown above, are calculated in the decimal system, according to which 1000Bytes are 1KB and a Billion Bytes are actually 1GB or 1000GB are 1TB, etc. However, on computers, where the operating system is running in binary calculation system (unlike decimal system that is mentioned above), above amount of storage information are presented in a different way so that only 1024Bytes will be recognized and called as 1KB and 1024GB will be 1TB , or alternatively 1TB presented by decimal calculation system (standard) will constitute only about 931GB when you will view them on the computer (in binary calculation system). For more information, refer to the manufacturer's website.",
        `Yehuda ray: "good computer"`
    ),
    new Product(
        "p5",
        ["c2"],
        "Asus zenBook 14",
        1500,
        "http://dealshaibuy.com/wp-content/uploads/2020/10/81DkONvgRVL._AC_SL1500_.jpg",
        "1.58 kg",
        "Asus ZenBook 14 is a Windows 10 Home laptop with a 14.00-inch display that has a resolution of 1080x1920 pixels. It is powered by a Ryzen processor and it comes with 8GB of RAM. The Asus ZenBook 14 packs 512GB of SSD storage. Graphics are powered by AMD Radeon Vega 8.",
        `Or Milis: "good computer"`
    ),
    new Product(
        "p6",
        ["c2"],
        "Lenovo IdeaPad",
        500,
        "https://img.ksp.co.il/item/129934/b_1.jpg?v=3",
        "1.58 kg",
        "מחשב נייד מבית Lenovo בעל מסך 15.6 אינטש ברזולוצית FHD, מעבד Intel® Core™ i3-1115G4 3.0GHz - 4.1GHz, זיכרון פנימי בנפח 8GB, כונן SSD בנפח 256GB וללא מערכת הפעלה",
        `yehuda ray: "good computer"`
    ),
    new Product(
        "p7",
        ["c2"],
        "Dell Vostro 14 3000",
        800,
        "https://img.ksp.co.il/item/135731/b_7.jpg?v=3",
        "2.58 kg",
        "14-inch laptop featuring a display with a 2-sided narrow border, an ExpressCharge™ battery and Intel® Core™ processors.",
        `Or Milis: "good computer"`
    ),
    new Product(
        "p8",
        ["c2"],
        "Apple MacBook Pro 13",
        3500,
        "https://img.ksp.co.il/item/135191/b_1.jpg?v=3",
        "3.58 kg",
        "The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life — the longest of any Mac ever. It’s our most popular pro notebook, taken to a whole new level.",
        `Or Milis: "good computer"`
    ),
    new Product(
        "p9",
        ["c3"],
        "Samsung Galaxy S21 Ultra",
        1000,
        "https://img.ksp.co.il/item/130805/b_3.jpg?v=3",
        "277 g Size: 6.7 inches, ",
        "טלפון סלולרי איכותי מבית Samsung בעל מסך 6.8 אינטש, 3 מצלמות אחוריות 12+108+10 מגה פיקסל כולל Laser Auto Focus ומצלמת סלפי 40 מגה פיקסל, ערכת שבבים בעלת 8 ליבות, תומך ברשת 5G ובעל קורא טביעת אצבע",
        `Or Milis: "good phone"`
    ),
    new Product(
        "p10",
        ["c3"],
        "Apple iPhone 12",
        1700,
        "https://img.ksp.co.il/item/124953/b_6.jpg?v=3",
        "58 g size: 6 inch",
        "5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes",
        `yehuda ray: "good phone"`
    ),
    new Product(
        "p11",
        ["c3"],
        "NOKIA 230",
        100,
        "https://img.ksp.co.il/item/61211/b_1.jpg?v=3",
        "3 inch",
        "Nokia 230 Beautifully crafted and ready for selfies, the Nokia 230 has a 2 MP front-facing camera with an LED flash and a sand-blasted aluminum back cover that wraps tightly around the sides of the phone. The Nokia 230 has a built-in torchlight and FM radio. You can download one free Gameloft game every month for a year, and with more apps in the Opera Store, it’s a complete package that gives you fantastic value for your money.",
        `Or Milis: "good phone"`
    ),
    new Product(
        "p12",
        ["c3"],
        "Samsung Galaxy S21+",
        900,
        "https://img.ksp.co.il/item/130793/b_2.jpg?v=3",
        "6 inch",
        "טלפון סלולרי איכותי מבית Samsung בעל מסך 6.7 אינטש, 3 מצלמות אחוריות 12+12+64 מגה פיקסל ומצלמת סלפי 10 מגה פיקסל, ערכת שבבים בעלת 8 ליבות, תומך ברשת 5G ובעל קורא טביעת אצבע",
        `Yehuda Ray: "good phone"`
    ),
    new Product(
        "p13",
        ["c4"],
        "Logitech Driving Force Racing Wheel",
        3500,
        "https://img.ksp.co.il/item/28904/b_1.jpg?v=3",
        "7.58 kg",
        "Enhance your console experience. Driving Force is designed for the latest Xbox One™ console racing game titles. You may never race with a regular controller again after you experience G920 Driving Force. G920 Driving Force also works on PC with select titles using Logitech Gaming Software.",
        `Or Milis: "good racing wheel"`
    ),
    new Product(
        "p14",
        ["c4"],
        "Nintendo Switch",
        500,
        "https://img.ksp.co.il/item/72971/b_7.jpg?v=3",
        "3.58 kg",
        "Get the gaming system that lets you play the games you want, wherever you are, however you like. Includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy‑Con controllers—one red, one blue. Also includes all the extras you need to get started..",
        `Or Milis: "good console"`
    ),
    new Product(
        "p15",
        ["c4"],
        "Microsoft Xbox Series X 1TB SSD",
        2000,
        "https://img.ksp.co.il/item/115991/b_13.jpg?v=3",
        "5.50 kg",
        "ntroducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles—all games look and play best on Xbox Series X. At the heart of Series X is the Xbox Velocity Architecture, which pairs a custom SSD with integrated software for faster, streamlined gameplay with significantly reduced load times. Seamlessly move between multiple games in a flash with Quick Resume. Explore rich new worlds and enjoy the action like never before with the unmatched 12 teraflops of raw graphic processing power. Enjoy 4K gaming at up to 120 frames per second, advanced 3D spatial sound, and more. Get started with an instant library of 100+ high-quality games, including all new Xbox Game Studios titles the day they launch like Halo Infinite, with Xbox Game Pass Ultimate (membership sold separately).",
        `Yehuda Ray: "good console"`
    ),
    new Product(
        "p16",
        ["c4"],
        "Wireless Controller",
        40,
        "https://img.ksp.co.il/item/121989/b_1.jpg?v=3",
        "300 g",
        "Experience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay. Stay on target with textured grip and a hybrid D-pad. Seamlessly capture and share content with a dedicated Share button. Quickly pair with, play on, and switch between devices including Xbox Series X|S, Xbox One, Windows 10 PC, and Android. iOS support coming in the future.",
        `Or Milis: "good controller"`
    ),
    new Product(
        "p17",
        ["c5"],
        "Samsung C24F390FH 23.5 Inch LED ",
        900,
        "https://img.ksp.co.il/item/33970/b_1.jpg?v=3",
        "23.5 inch",
        "מסך מחשב קעור ואיכותי מבית Samsung בגודל 23.5 אינטש עם חיבורי VGA ו- HDMI, בעל חיסכון בחשמל, עיצוב מודרני מרהיב ותמיכה ב- AMD FreeSync",
        `Or Milis: "good screen"`
    ),
    new Product(
        "p18",
        ["c5"],
        "Sony Bravia LED 65 Inch",
        1400,
        "https://img.ksp.co.il/item/188000/b_1.jpg?v=3",
        "65 inch",
        "טלוויזיה חכמה ואיכותית מבית Sony בגודל 65 אינטש, ברזולוציית 4K, כוללת מערכת אנדרואיד, חורים מובנים להתקן תליה על הקיר, רמקולים מובנים, קישורית WiFi ו-Bluetooth ושלט אלחוטי.",
        `Yehuda Ray: "good Tv"`
    ),
    new Product(
        "p19",
        ["c5"],
        "Samsung 65 Inch QLED 4K",
        970,
        "https://img.ksp.co.il/item/184489/b_8.jpg?v=3",
        "65 inch",
        "טלוויזיה איכותית מבית Samsung בגודל 65 אינטש, ברזולוציית Ultra HD 4K מדהימה, תאורת QLED, מעבד Quantum Lite 4K עוצמתי, ניגודיות דינמית עם Quantum HDR, מגוון תכונות לחווית גיימינג עשירה וכוללת אפשרות שיקוף מסך מהטלפון הנייד.",
        `Or Milis: "good tv"`
    ),
    new Product(
        "p20",
        ["c5"],
        "LG 55 Inch OLED UHD 4K ",
        1000,
        "https://img.ksp.co.il/item/149006/b_1.jpg?v=3",
        "55 inch",
        "LG OLED UHD 4K A1 Series Smart TV Light Up Your World with Self-lit Pixels LG OLED TV is a joy to behold. Self-lit pixels allow truly spectacular picture quality and a whole host of design possibilities, while the latest cutting-edge technologies help deliver unprecedented levels of wonder. This is everything you love about TV — elevated in every way.",
        `Yehuda Ray: "good tv"`
    ),
    new Product(
        "p21",
        ["c6"],
        "Samsung Galaxy Watch Silver 46mm",
        300,
        "https://img.ksp.co.il/item/79644/b_1.jpg?v=3",
        "46 mm",
        "שעון חכם מבית Samsung בעל מסך בגודל 1.3 אינטש אשר מראה את השעה, מציג הודעות, שליטה במוזיקה, מד צעדים ודופק, GPS, קישוריות אלחוטיות ובעל מגוון רחב של יישומים להורדה.",
        `Or Milis: "good watch"`
    ),
    new Product(
        "p22",
        ["c6"],
        "Logitech Wireless Combo Set MK270 Retail",
        20,
        "https://img.ksp.co.il/item/21422/b_3.jpg?v=3",
        "1.58 kg",
        "WIRELESS COMBO MK270 Reliable wireless keyboard/mouse combo with small Logitech Unifying receiver",
        `Or Milis: "good keyboard"`
    ),
    new Product(
        "p23",
        ["c6"],
        "SanDisk Cruzer Blade 16GB",
        10,
        "https://img.ksp.co.il/item/10113/b_1.jpg?v=3",
        "1.58 kg",
        "Keep your digital world in your pocket in our smallest package. Transfer and share photos, videos, songs and other files between computers with ease.",
        `Or Milis: "good cruzer blade"`
    ),
    new Product(
        "p24",
        ["c6"],
        "Razer Anzu Smart Glasses",
        200,
        "https://img.ksp.co.il/item/163834/b_1.jpg?v=3",
        "8 g",
        "Rethink eyewear with the Razer Anzu—open-ear audio glasses that protect your eyes and immerse your ears. With built-in speakers hidden in its frame, taking in the sights and sounds now has a whole new meaning. Available in two types of frames and two sizes.",
        `yehuda ray: "good glasses"`
    ),

];

export const CART=[];
