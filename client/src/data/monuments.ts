export interface Monument {
  id: string;
  name: string;
  city: string;
  state: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  yearBuilt: string;
  dynasty: string;
  primaryModel: string; // This would be the model path in a real app
  historicalModels: {
    past: string; // ~100 years ago
    ancient: string; // Original construction
  };
  facts: string[];
  visitingHours: string;
  entryFee?: string;
  UNESCO?: boolean;
}

// India's major historical monuments
export const monuments: Monument[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    city: "Agra",
    state: "Uttar Pradesh",
    coordinates: [78.0421, 27.1751],
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
    yearBuilt: "1632-1653",
    dynasty: "Mughal Empire",
    primaryModel: "/models/taj_mahal.glb",
    historicalModels: {
      past: "/models/taj_mahal.glb",
      ancient: "/models/taj_mahal.glb"
    },
    facts: [
      "The Taj Mahal's construction took about 22 years to complete",
      "Over 20,000 workers were employed for its construction",
      "The main dome is 73 meters high",
      "The entire structure is made of white marble from Rajasthan"
    ],
    visitingHours: "6:00 AM to 6:30 PM (Closed on Fridays)",
    entryFee: "₹1,100 for foreign tourists, ₹50 for Indian citizens",
    UNESCO: true
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.1855, 28.5245],
    description: "The Qutub Minar is a 73-metre tall minaret built in the early 13th century. It is a UNESCO World Heritage Site and has survived natural disasters and invasions throughout its history. The tower is known for its intricate carvings, inscriptions from the Quran, and distinctive architectural style that showcases a blend of Indo-Islamic influences.",
    yearBuilt: "1199-1220",
    dynasty: "Mamluk Dynasty",
    primaryModel: "/models/qutub_minar_new.glb",
    historicalModels: {
      past: "/models/qutub_minar_new.glb",
      ancient: "/models/qutub_minar_new.glb"
    },
    facts: [
      "It is the tallest brick minaret in the world",
      "Construction was started by Qutub-ud-din Aibak and completed by his successor Iltutmish",
      "The tower has five distinct storeys, each marked by a projecting balcony",
      "The first three storeys are made of red sandstone, while the fourth and fifth are made of marble and sandstone"
    ],
    visitingHours: "7:00 AM to 5:00 PM (All days)",
    entryFee: "₹600 for foreign tourists, ₹35 for Indian citizens",
    UNESCO: true
  },
  {
    id: "red-fort",
    name: "Red Fort",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.2410, 28.6562],
    description: "The Red Fort is a historic fort that served as the main residence of the emperors of the Mughal dynasty for nearly 200 years. Built in 1639 by Emperor Shah Jahan, it was the ceremonial and political center of the Mughal government. The massive red sandstone walls rise 33 meters above the surrounding area and encompass several impressive structures including the Diwan-i-Aam (Hall of Public Audience) and the Diwan-i-Khas (Hall of Private Audience).",
    yearBuilt: "1639-1648",
    dynasty: "Mughal Empire",
    primaryModel: "/models/red_fort_past.glb",
    historicalModels: {
      past: "/models/red_fort_past.glb",
      ancient: "/models/red_fort_past.glb"
    },
    facts: [
      "The fort derives its name from its massive red sandstone walls",
      "It was the ceremonial and political center of the Mughal government",
      "The Indian Prime Minister hoists the national flag here on Independence Day",
      "It houses several museums and was declared a UNESCO World Heritage Site in 2007"
    ],
    visitingHours: "9:30 AM to 4:30 PM (Closed on Mondays)",
    entryFee: "₹600 for foreign tourists, ₹35 for Indian citizens",
    UNESCO: true
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    city: "Jaipur",
    state: "Rajasthan",
    coordinates: [75.8267, 26.9239],
    description: "Hawa Mahal (Palace of Winds) is an extraordinary five-story palace in Jaipur, constructed of red and pink sandstone. Built in 1799 by Maharaja Sawai Pratap Singh, this architectural marvel features 953 small windows (jharokhas) with intricate lattice designs that create a honeycomb-like facade. The palace was ingeniously designed to allow royal women to observe street festivals and everyday city life without being seen, while also providing natural cooling through the breeze that flows through its many windows.",
    yearBuilt: "1799",
    dynasty: "Rajput",
    primaryModel: "/models/hawa_mahal.glb",
    historicalModels: {
      past: "/models/hawa_mahal_past.glb",
      ancient: "/models/hawa_mahal_ancient.glb"
    },
    facts: [
      "The palace has 953 small windows called jharokhas decorated with intricate latticework",
      "The unique five-story exterior is akin to a honeycomb with its 953 small windows",
      "It was built to allow royal ladies to observe everyday life and festivals without being seen",
      "The building has no foundation and is the tallest building in the world without a foundation"
    ],
    visitingHours: "9:00 AM to 5:00 PM (All days)",
    entryFee: "₹200 for foreign tourists, ₹50 for Indian citizens",
    UNESCO: false
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    city: "Konark",
    state: "Odisha",
    coordinates: [86.0945, 19.8876],
    description: "The Konark Sun Temple is a magnificent 13th-century CE temple at Konark, about 35 kilometers northeast from Puri on the coastline of Odisha, India. Dedicated to the Hindu Sun God Surya, this UNESCO World Heritage site is one of India's most stunning architectural marvels. The temple is designed in the form of a gigantic chariot of the Sun God with twelve pairs of elaborately carved stone wheels and pulled by seven horses. The temple's walls showcase exquisite stone carvings depicting various aspects of life, mythological narratives, and celestial beings.",
    yearBuilt: "1250 CE",
    dynasty: "Eastern Ganga Dynasty",
    primaryModel: "/models/konark_sun_temple.glb",
    historicalModels: {
      past: "/models/konark_sun_temple.glb", // We'll use the same model for now
      ancient: "/models/konark_sun_temple.glb" // We'll use the same model for now
    },
    facts: [
      "The temple is designed in the form of a colossal chariot with 24 wheels, pulled by 7 horses",
      "The wheels of the temple are sundials which can be used to calculate time accurately",
      "The temple was built by King Narasimhadeva I of the Eastern Ganga Dynasty",
      "It is a UNESCO World Heritage Site since 1984"
    ],
    visitingHours: "6:00 AM to 8:00 PM (All days)",
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    UNESCO: true
  },
  {
    id: "ajanta-ellora",
    name: "Ajanta & Ellora Caves",
    city: "Aurangabad",
    state: "Maharashtra",
    coordinates: [75.7010, 20.5500],
    description: "The Ajanta and Ellora Caves represent the pinnacle of ancient Indian rock-cut architecture and artistry. The Ajanta Caves comprise 30 Buddhist cave monuments carved into a horseshoe-shaped cliff, dating from the 2nd century BCE to about 480 CE. They feature exquisite paintings and sculptures depicting Buddha's life and Jataka tales, preserved remarkably through centuries of abandonment. The Ellora Caves, located about 100 km away, include 34 monasteries and temples spanning Buddhism, Hinduism, and Jainism, carved between the 6th and 10th centuries CE. The crown jewel of Ellora is the magnificent Kailasa Temple (Cave 16), the world's largest monolithic structure, carved top-down from a single massive rock, representing Mount Kailash, the abode of Lord Shiva.",
    yearBuilt: "2nd century BCE to 7th century CE",
    dynasty: "Various dynasties including Satavahana, Vakataka, and Rashtrakuta",
    primaryModel: "/models/ajanta_ellora.glb",
    historicalModels: {
      past: "/models/ajanta_ellora_past.glb",
      ancient: "/models/ajanta_ellora.glb"
    },
    facts: [
      "The Ajanta Caves contain paintings and sculptures considered to be masterpieces of Buddhist religious art",
      "The Ellora Caves demonstrate the religious harmony prevalent during this period through dedicated Hindu, Buddhist, and Jain cave temples",
      "The Kailasa temple in Ellora is the largest monolithic rock excavation in the world",
      "Both cave complexes are UNESCO World Heritage Sites"
    ],
    visitingHours: "9:00 AM to 5:30 PM (Closed on Tuesdays)",
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    UNESCO: true
  },
  {
    id: "gol-gumbaz",
    name: "Gol Gumbaz",
    city: "Bijapur",
    state: "Karnataka",
    coordinates: [75.7101, 16.8302],
    description: "Gol Gumbaz is the mausoleum of Mohammed Adil Shah, Sultan of Bijapur. The tomb, located in Bijapur, Karnataka, was completed in 1656 and is remarkable for its massive dome, which is the second largest dome in the world after St. Peter's Basilica in Rome. The acoustics of the central chamber are particularly notable - even the faintest sound is echoed several times.",
    yearBuilt: "1626-1656",
    dynasty: "Adil Shahi Dynasty",
    primaryModel: "/models/gol_gumbaz.glb",
    historicalModels: {
      past: "/models/gol_gumbaz_past.glb",
      ancient: "/models/gol_gumbaz_ancient.glb"
    },
    facts: [
      "The dome of Gol Gumbaz is 44 meters in diameter, making it one of the largest single chamber spaces in the world",
      "The whispering gallery around the dome allows sounds to be heard across the diameter of the dome due to its acoustic properties",
      "The structure features four seven-story octagonal towers at each corner which served as minarets",
      "The name 'Gol Gumbaz' means 'circular dome' in reference to its distinctive architecture"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    entryFee: "₹300 for foreign tourists, ₹25 for Indian citizens",
    UNESCO: false
  },
  {
    id: "hampi",
    name: "Hampi",
    city: "Hampi",
    state: "Karnataka",
    coordinates: [76.4600, 15.3350],
    description: "Hampi is an ancient village in the southern Indian state of Karnataka, dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the river Tungabhadra, it contains the iconic Vittala Temple complex with its stone chariot and musical pillars, the Virupaksha Temple still used for worship, and a vast landscape of boulder-strewn hills and royal enclosures. Hampi was the capital of one of the greatest Hindu empires in Indian history during the 14th to 16th centuries.",
    yearBuilt: "14th-16th century CE",
    dynasty: "Vijayanagara Empire",
    primaryModel: "/models/hampi.glb",
    historicalModels: {
      past: "/models/hampi.glb",
      ancient: "/models/hampi.glb"
    },
    facts: [
      "Hampi was the capital of the Vijayanagara Empire and was once one of the richest and largest cities in the world",
      "The iconic stone chariot at the Vittala Temple is depicted on the Indian ₹50 currency note",
      "The Vittala Temple's musical pillars produce different musical notes when tapped",
      "The entire ruins of Hampi are a UNESCO World Heritage Site, spread across an area of more than 4,100 hectares"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    UNESCO: true
  },
  {
    id: "charminar",
    name: "Charminar",
    city: "Hyderabad",
    state: "Telangana",
    coordinates: [78.4747, 17.3616],
    description: "The Charminar is a monument and mosque located in Hyderabad, Telangana, India. Constructed in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, the iconic structure features four grand arches facing the four cardinal directions, with four ornate minarets at each corner soaring 56 metres above the ground. Built from granite and lime mortar, the Charminar is the most recognised symbol of Hyderabad and stands at the heart of the bustling old city, surrounded by the famous Laad Bazaar.",
    yearBuilt: "1591",
    dynasty: "Qutb Shahi Dynasty",
    primaryModel: "/models/charminar.glb",
    historicalModels: {
      past: "/models/charminar.glb",
      ancient: "/models/charminar.glb"
    },
    facts: [
      "The Charminar gets its name from its four (char) minarets (minar), which rise to a height of 56 metres",
      "It was built to commemorate the eradication of a deadly plague from the city",
      "The monument is built from granite, limestone, mortar and pulverised marble",
      "A small mosque on the upper floor is the oldest in Hyderabad and is still in use today"
    ],
    visitingHours: "9:00 AM to 5:30 PM (All days)",
    entryFee: "₹250 for foreign tourists, ₹25 for Indian citizens",
    UNESCO: false
  },
  {
    id: "lotus-temple",
    name: "Lotus Temple",
    city: "New Delhi",
    state: "Delhi",
    coordinates: [77.2588, 28.5535],
    description: "The Lotus Temple, located in New Delhi, is a Bahá'í House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city. Like all Bahá'í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other distinction. The building is composed of 27 free-standing marble-clad petals arranged in clusters of three to form nine sides, with nine doors opening onto a central hall capable of holding up to 2,500 people. Designed by Iranian architect Fariborz Sahba, the temple is surrounded by nine reflecting pools that beautifully mirror its petals.",
    yearBuilt: "1980-1986",
    dynasty: "Modern (Bahá'í Faith)",
    primaryModel: "/models/lotus_temple.glb",
    historicalModels: {
      past: "/models/lotus_temple.glb",
      ancient: "/models/lotus_temple.glb"
    },
    facts: [
      "The temple is composed of 27 free-standing marble-clad petals arranged in clusters of three to form nine sides",
      "It has won numerous architectural awards and has been featured in hundreds of newspaper and magazine articles",
      "The temple is open to people of all religions and is one of the most visited buildings in the world",
      "The structure is surrounded by nine reflecting pools that mirror its lotus-petal design"
    ],
    visitingHours: "9:00 AM to 5:30 PM (Closed on Mondays)",
    entryFee: "Free entry for all visitors",
    UNESCO: false
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    city: "Mumbai",
    state: "Maharashtra",
    coordinates: [72.8347, 18.9220],
    description: "The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain. Designed by architect George Wittet in the Indo-Saracenic style and completed in 1924, the monument is built from yellow basalt and reinforced concrete and stands 26 metres tall. Overlooking the Arabian Sea and the Mumbai Harbour, it has become one of the most iconic symbols of the city, often called the 'Taj Mahal of Mumbai'.",
    yearBuilt: "1913-1924",
    dynasty: "British Raj",
    primaryModel: "/models/gateway_of_india.glb",
    historicalModels: {
      past: "/models/gateway_of_india.glb",
      ancient: "/models/gateway_of_india.glb"
    },
    facts: [
      "The Gateway of India was built to commemorate the visit of King George V and Queen Mary to Mumbai in 1911",
      "It was designed by Scottish architect George Wittet in the Indo-Saracenic architectural style",
      "The monument stands 26 metres (85 feet) tall, with a central arch about 15 metres in diameter",
      "It served as the ceremonial entrance for British Viceroys and was the symbolic 'last gateway' from which the final British troops left India in 1948"
    ],
    visitingHours: "Open 24 hours (All days)",
    entryFee: "Free entry for all visitors",
    UNESCO: false
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    city: "Amritsar",
    state: "Punjab",
    coordinates: [74.8765, 31.6200],
    description: "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest gurdwara and the most important pilgrimage site of Sikhism. Located in the city of Amritsar, Punjab, the temple sits on a square platform in the middle of the Amrit Sarovar (Pool of Nectar), connected to the surrounding marble causeway by a narrow bridge. The upper floors of the temple are covered with approximately 750 kg of pure gold leaf, giving it the distinctive shining golden appearance from which it gets its popular name. Built by Guru Arjan, the fifth Sikh Guru, in the late 16th century, it features a unique blend of Hindu and Islamic architectural styles and welcomes visitors of all faiths.",
    yearBuilt: "1581-1604",
    dynasty: "Sikh Empire",
    primaryModel: "/models/golden_temple.glb",
    historicalModels: {
      past: "/models/golden_temple.glb",
      ancient: "/models/golden_temple.glb"
    },
    facts: [
      "The upper floors of the temple are covered with approximately 750 kg of pure gold leaf",
      "The temple's langar (community kitchen) serves free vegetarian meals to up to 100,000 people daily, regardless of religion or background",
      "It has four entrances on each side, symbolising openness to people from all directions and walks of life",
      "The foundation stone was laid by the Muslim Sufi saint Mian Mir, reflecting the temple's message of religious harmony"
    ],
    visitingHours: "Open 24 hours (All days)",
    entryFee: "Free entry for all visitors",
    UNESCO: false
  },
];
