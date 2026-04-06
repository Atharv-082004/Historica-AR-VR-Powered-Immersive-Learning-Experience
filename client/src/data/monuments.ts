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
    id: "hampi",
    name: "Hampi",
    city: "Hampi",
    state: "Karnataka", 
    coordinates: [76.4700, 15.3350],
    description: "Hampi is an awe-inspiring ancient village in Karnataka that transports visitors to the glorious past of the Vijayanagara Empire (1336-1646 CE). This UNESCO World Heritage Site features a breathtaking landscape of massive boulders balanced precariously amidst lush palm groves, interspersed with over 1,600 surviving remains of temples, palaces, and other structures. Once the capital of one of the greatest Hindu kingdoms and among the richest and largest cities in the world, Hampi's architectural marvels include the iconic Virupaksha Temple, the magnificent Vittala Temple with its famous stone chariot and musical pillars, and the elegant Lotus Mahal.",
    yearBuilt: "1336-1646 CE",
    dynasty: "Vijayanagara Empire",
    primaryModel: "/models/konark_sun_temple.glb",
    historicalModels: {
      past: "/models/konark_sun_temple.glb",
      ancient: "/models/konark_sun_temple.glb"
    },
    facts: [
      "Hampi was the second-largest medieval-era city after Beijing",
      "It is a UNESCO World Heritage Site since 1986",
      "The site contains over 1,600 surviving remains of the last great Hindu kingdom in South India",
      "The iconic stone chariot at the Vittala Temple is featured on the Indian ₹50 note"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
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
    id: "charminar",
    name: "Charminar",
    city: "Hyderabad",
    state: "Telangana",
    coordinates: [78.4747, 17.3616],
    description: "Charminar is an iconic 16th-century monument and mosque in the heart of Hyderabad. Built in 1591 by Muhammad Quli Qutb Shah, it marks the founding of Hyderabad and is known for its four grand minarets and Indo-Islamic architectural style.",
    yearBuilt: "1591",
    dynasty: "Qutb Shahi Dynasty",
    primaryModel: "/models/qutub_minar.glb",
    historicalModels: {
      past: "/models/qutub_minar_new.glb",
      ancient: "/models/qutub_minar.glb"
    },
    facts: [
      "The monument has four minarets, each about 48.7 meters tall",
      "Charminar was built at the center of Hyderabad's original city plan",
      "Its upper floor houses a functioning mosque",
      "The surrounding Laad Bazaar is famous for traditional bangles and pearls"
    ],
    visitingHours: "9:30 AM to 5:30 PM (All days)",
    entryFee: "₹250 for foreign tourists, ₹25 for Indian citizens",
    UNESCO: false
  },
];
