export interface Hotspot {
  name: string;
  description: string;
  position: [number, number, number];
}

export interface Monument {
  id: string;
  name: string;
  nameHi?: string;
  city: string;
  state: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  descriptionHi?: string;
  yearBuilt: string;
  dynasty: string;
  dynastyHi?: string;
  primaryModel: string;
  historicalModels: {
    past: string;
    ancient: string;
  };
  facts: string[];
  factsHi?: string[];
  visitingHours: string;
  visitingHoursHi?: string;
  entryFee?: string;
  entryFeeHi?: string;
  UNESCO?: boolean;
  era?: "ancient" | "medieval" | "modern";
  hotspots?: Hotspot[];
}

export const monuments: Monument[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    nameHi: "ताज महल",
    city: "Agra",
    state: "Uttar Pradesh",
    coordinates: [78.0421, 27.1751],
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
    descriptionHi: "ताज महल आगरा, उत्तर प्रदेश में यमुना नदी के दाहिने तट पर स्थित एक हाथी-दांत सफेद संगमरमर का मकबरा है। इसे 1631 में मुगल सम्राट शाहजहाँ ने अपनी प्रिय पत्नी मुमताज महल की समाधि के लिए बनवाया था। इसमें स्वयं शाहजहाँ की भी समाधि है। यह इमारत प्रेम और शोक की अमर अभिव्यक्ति मानी जाती है और दुनिया के सात अजूबों में शामिल है।",
    yearBuilt: "1632-1653",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/taj_mahal.glb",
    historicalModels: { past: "/models/taj_mahal.glb", ancient: "/models/taj_mahal.glb" },
    era: "medieval",
    hotspots: [
      { name: "Main Dome", description: "The 73-metre-tall central onion dome flanked by four chhatris.", position: [0, 1.6, 0] },
      { name: "Minarets", description: "Four 40-metre minarets, slightly tilted outward to protect the tomb in case of an earthquake.", position: [1.4, 0.4, 1.4] },
      { name: "Charbagh Garden", description: "The Mughal-style four-part garden symbolises the four rivers of paradise.", position: [0, -0.8, 1.8] }
    ],
    facts: [
      "The Taj Mahal's construction took about 22 years to complete",
      "Over 20,000 workers were employed for its construction",
      "The main dome is 73 meters high",
      "The entire structure is made of white marble from Rajasthan"
    ],
    factsHi: [
      "ताज महल के निर्माण में लगभग 22 साल लगे",
      "इसके निर्माण में 20,000 से अधिक कारीगरों को लगाया गया था",
      "मुख्य गुंबद 73 मीटर ऊंचा है",
      "पूरी संरचना राजस्थान के सफेद संगमरमर से बनी है"
    ],
    visitingHours: "6:00 AM to 6:30 PM (Closed on Fridays)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:30 बजे तक (शुक्रवार को बंद)",
    entryFee: "₹1,100 for foreign tourists, ₹50 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹1,100, भारतीय नागरिकों के लिए ₹50",
    UNESCO: true
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    nameHi: "कुतुब मीनार",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.1855, 28.5245],
    description: "The Qutub Minar is a 73-metre tall minaret built in the early 13th century. It is a UNESCO World Heritage Site and has survived natural disasters and invasions throughout its history. The tower is known for its intricate carvings, inscriptions from the Quran, and distinctive architectural style that showcases a blend of Indo-Islamic influences.",
    descriptionHi: "कुतुब मीनार 73 मीटर ऊंची एक मीनार है जिसे 13वीं सदी की शुरुआत में बनाया गया था। यह यूनेस्को विश्व धरोहर स्थल है और इतिहास में प्राकृतिक आपदाओं तथा आक्रमणों के बावजूद सुरक्षित रही है। इस मीनार में जटिल नक्काशी, कुरानी शिलालेख और इंडो-इस्लामी वास्तुकला का अनूठा मेल देखने को मिलता है। यह विश्व की सबसे ऊंची ईंट की मीनार है।",
    yearBuilt: "1199-1220",
    dynasty: "Mamluk Dynasty",
    dynastyHi: "ममलूक वंश",
    primaryModel: "/models/qutub_minar_new.glb",
    historicalModels: { past: "/models/qutub_minar.glb", ancient: "/models/qutub_minar.glb" },
    era: "medieval",
    hotspots: [
      { name: "Five Storeys", description: "Five distinct storeys, each marked by a projecting carved balcony.", position: [0, 1.5, 0.6] },
      { name: "Quranic Inscriptions", description: "The first storey is covered in Arabic inscriptions from the Quran.", position: [0.5, 0.2, 0.5] }
    ],
    facts: [
      "It is the tallest brick minaret in the world",
      "Construction was started by Qutub-ud-din Aibak and completed by his successor Iltutmish",
      "The tower has five distinct storeys, each marked by a projecting balcony",
      "The first three storeys are made of red sandstone, while the fourth and fifth are made of marble and sandstone"
    ],
    factsHi: [
      "यह विश्व की सबसे ऊंची ईंट की मीनार है",
      "निर्माण कुतुब-उद-दीन ऐबक ने शुरू किया और उत्तराधिकारी इल्तुतमिश ने पूरा किया",
      "मीनार में पाँच मंजिलें हैं, जिनमें से प्रत्येक पर उभरी हुई नक्काशीदार बालकनी है",
      "पहली तीन मंजिलें लाल बलुआ पत्थर से और चौथी व पाँचवीं संगमरमर व बलुआ पत्थर से बनी हैं"
    ],
    visitingHours: "7:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 7:00 से शाम 5:00 बजे तक (सभी दिन)",
    entryFee: "₹600 for foreign tourists, ₹35 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹35",
    UNESCO: true
  },
  {
    id: "red-fort",
    name: "Red Fort",
    nameHi: "लाल किला",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.2410, 28.6562],
    description: "The Red Fort is a historic fort that served as the main residence of the emperors of the Mughal dynasty for nearly 200 years. Built in 1639 by Emperor Shah Jahan, it was the ceremonial and political center of the Mughal government. The massive red sandstone walls rise 33 meters above the surrounding area and encompass several impressive structures including the Diwan-i-Aam (Hall of Public Audience) and the Diwan-i-Khas (Hall of Private Audience).",
    descriptionHi: "लाल किला एक ऐतिहासिक किला है जो मुगल वंश के सम्राटों का लगभग 200 वर्षों तक मुख्य निवास था। 1639 में सम्राट शाहजहाँ द्वारा निर्मित, यह मुगल सरकार का औपचारिक और राजनीतिक केंद्र था। विशाल लाल बलुआ पत्थर की दीवारें आसपास के क्षेत्र से 33 मीटर ऊपर उठती हैं और दीवान-ए-आम (सार्वजनिक दरबार) तथा दीवान-ए-खास (विशेष दरबार) जैसी भव्य संरचनाओं को घेरती हैं।",
    yearBuilt: "1639-1648",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/red_fort_improved.glb",
    historicalModels: { past: "/models/red_fort_past.glb", ancient: "/models/red_fort.glb" },
    era: "medieval",
    facts: [
      "The fort derives its name from its massive red sandstone walls",
      "It was the ceremonial and political center of the Mughal government",
      "The Indian Prime Minister hoists the national flag here on Independence Day",
      "It houses several museums and was declared a UNESCO World Heritage Site in 2007"
    ],
    factsHi: [
      "किले का नाम इसकी विशाल लाल बलुआ पत्थर की दीवारों के कारण पड़ा",
      "यह मुगल सरकार का औपचारिक और राजनीतिक केंद्र था",
      "स्वतंत्रता दिवस पर भारतीय प्रधानमंत्री यहाँ राष्ट्रीय ध्वज फहराते हैं",
      "इसमें कई संग्रहालय हैं और 2007 में इसे यूनेस्को विश्व धरोहर स्थल घोषित किया गया"
    ],
    visitingHours: "9:30 AM to 4:30 PM (Closed on Mondays)",
    visitingHoursHi: "सुबह 9:30 से शाम 4:30 बजे तक (सोमवार को बंद)",
    entryFee: "₹600 for foreign tourists, ₹35 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹35",
    UNESCO: true
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    nameHi: "हवा महल",
    city: "Jaipur",
    state: "Rajasthan",
    coordinates: [75.8267, 26.9239],
    description: "Hawa Mahal (Palace of Winds) is an extraordinary five-story palace in Jaipur, constructed of red and pink sandstone. Built in 1799 by Maharaja Sawai Pratap Singh, this architectural marvel features 953 small windows (jharokhas) with intricate lattice designs that create a honeycomb-like facade. The palace was ingeniously designed to allow royal women to observe street festivals and everyday city life without being seen, while also providing natural cooling through the breeze that flows through its many windows.",
    descriptionHi: "हवा महल (पवनों का महल) जयपुर में लाल और गुलाबी बलुआ पत्थर से बना एक असाधारण पाँच मंजिला महल है। 1799 में महाराजा सवाई प्रताप सिंह द्वारा निर्मित, इस वास्तुकला के चमत्कार में जटिल जाली के डिजाइन वाली 953 छोटी खिड़कियाँ (झरोखे) हैं जो मधुकोश जैसा मुखौटा बनाती हैं। महल को इस प्रकार बनाया गया था कि शाही महिलाएँ बिना दिखे गली के उत्सव और रोज़मर्रा का जीवन देख सकती थीं, साथ ही खिड़कियों से बहने वाली हवा प्राकृतिक शीतलता भी प्रदान करती थी।",
    yearBuilt: "1799",
    dynasty: "Rajput",
    dynastyHi: "राजपूत",
    primaryModel: "/models/hawa_mahal.glb",
    historicalModels: { past: "/models/hawa_mahal_past.glb", ancient: "/models/hawa_mahal_ancient.glb" },
    era: "medieval",
    facts: [
      "The palace has 953 small windows called jharokhas decorated with intricate latticework",
      "The unique five-story exterior is akin to a honeycomb with its 953 small windows",
      "It was built to allow royal ladies to observe everyday life and festivals without being seen",
      "The building has no foundation and is the tallest building in the world without a foundation"
    ],
    factsHi: [
      "महल में जटिल जालीकाम से सजी 953 छोटी खिड़कियाँ हैं जिन्हें झरोखा कहते हैं",
      "इसका पाँच मंजिला बाहरी भाग 953 झरोखों के साथ मधुमक्खी के छत्ते जैसा दिखता है",
      "इसे शाही महिलाओं के लिए बनाया गया था ताकि वे बिना दिखे रोज़मर्रा की ज़िंदगी देख सकें",
      "इमारत की कोई नींव नहीं है और यह बिना नींव के दुनिया की सबसे ऊंची इमारत है"
    ],
    visitingHours: "9:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:00 बजे तक (सभी दिन)",
    entryFee: "₹200 for foreign tourists, ₹50 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹200, भारतीय नागरिकों के लिए ₹50",
    UNESCO: false
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    nameHi: "कोणार्क सूर्य मंदिर",
    city: "Konark",
    state: "Odisha",
    coordinates: [86.0945, 19.8876],
    description: "The Konark Sun Temple is a magnificent 13th-century CE temple at Konark, about 35 kilometers northeast from Puri on the coastline of Odisha, India. Dedicated to the Hindu Sun God Surya, this UNESCO World Heritage site is one of India's most stunning architectural marvels. The temple is designed in the form of a gigantic chariot of the Sun God with twelve pairs of elaborately carved stone wheels and pulled by seven horses. The temple's walls showcase exquisite stone carvings depicting various aspects of life, mythological narratives, and celestial beings.",
    descriptionHi: "कोणार्क सूर्य मंदिर ओडिशा के तट पर पुरी से लगभग 35 किलोमीटर उत्तर-पूर्व में स्थित एक भव्य 13वीं शताब्दी का मंदिर है। हिंदू सूर्य देवता सूर्य को समर्पित यह यूनेस्को विश्व धरोहर स्थल भारत के सबसे शानदार वास्तुशिल्प चमत्कारों में से एक है। मंदिर को सूर्य देव के विशाल रथ के रूप में डिजाइन किया गया है जिसमें बारह जोड़ी विस्तृत रूप से नक्काशीदार पत्थर के पहिये हैं और सात घोड़े इसे खींचते हैं। मंदिर की दीवारें जीवन के विभिन्न पहलुओं, पौराणिक कथाओं और खगोलीय प्राणियों को दर्शाती उत्कृष्ट पत्थर की नक्काशियों से सुशोभित हैं।",
    yearBuilt: "1250 CE",
    dynasty: "Eastern Ganga Dynasty",
    dynastyHi: "पूर्वी गंग वंश",
    primaryModel: "/models/konark_sun_temple.glb",
    historicalModels: { past: "/models/konark_sun_temple.glb", ancient: "/models/konark_sun_temple.glb" },
    era: "medieval",
    facts: [
      "The temple is designed in the form of a colossal chariot with 24 wheels, pulled by 7 horses",
      "The wheels of the temple are sundials which can be used to calculate time accurately",
      "The temple was built by King Narasimhadeva I of the Eastern Ganga Dynasty",
      "It is a UNESCO World Heritage Site since 1984"
    ],
    factsHi: [
      "मंदिर को 24 पहियों वाले विशाल रथ के रूप में बनाया गया है जिसे 7 घोड़े खींचते हैं",
      "मंदिर के पहिये सूक्ष्म घड़ियाँ हैं जिनसे सटीक समय की गणना की जा सकती है",
      "मंदिर का निर्माण पूर्वी गंग वंश के राजा नरसिंहदेव प्रथम ने करवाया था",
      "यह 1984 से यूनेस्को विश्व धरोहर स्थल है"
    ],
    visitingHours: "6:00 AM to 8:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से रात 8:00 बजे तक (सभी दिन)",
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹40",
    UNESCO: true
  },
  {
    id: "ajanta-ellora",
    name: "Ajanta & Ellora Caves",
    nameHi: "अजंता और एलोरा गुफाएँ",
    city: "Aurangabad",
    state: "Maharashtra",
    coordinates: [75.7010, 20.5500],
    description: "The Ajanta and Ellora Caves represent the pinnacle of ancient Indian rock-cut architecture and artistry. The Ajanta Caves comprise 30 Buddhist cave monuments carved into a horseshoe-shaped cliff, dating from the 2nd century BCE to about 480 CE. They feature exquisite paintings and sculptures depicting Buddha's life and Jataka tales, preserved remarkably through centuries of abandonment. The Ellora Caves, located about 100 km away, include 34 monasteries and temples spanning Buddhism, Hinduism, and Jainism, carved between the 6th and 10th centuries CE. The crown jewel of Ellora is the magnificent Kailasa Temple (Cave 16), the world's largest monolithic structure, carved top-down from a single massive rock, representing Mount Kailash, the abode of Lord Shiva.",
    descriptionHi: "अजंता और एलोरा की गुफाएँ प्राचीन भारतीय पाषाण-कला वास्तुकला और कलात्मकता की पराकाष्ठा का प्रतिनिधित्व करती हैं। अजंता की 30 बौद्ध गुफाएँ घोड़े की नाल के आकार की चट्टान में खुदी हुई हैं, जो दूसरी शताब्दी ईसा पूर्व से लगभग 480 ईस्वी तक की हैं। एलोरा की 34 मठों और मंदिरों में बौद्ध, हिंदू और जैन धर्म की झलक मिलती है। एलोरा का सबसे बड़ा रत्न कैलाश मंदिर (गुफा 16) है — एक ही विशाल चट्टान को ऊपर से नीचे काटकर बनाई गई दुनिया की सबसे बड़ी एकाश्म संरचना, जो भगवान शिव के निवास माउंट कैलाश का प्रतिनिधित्व करती है।",
    yearBuilt: "2nd century BCE to 7th century CE",
    dynasty: "Various dynasties including Satavahana, Vakataka, and Rashtrakuta",
    dynastyHi: "सातवाहन, वाकाटक और राष्ट्रकूट सहित विभिन्न वंश",
    primaryModel: "/models/ajanta_ellora.glb",
    historicalModels: { past: "/models/ajanta_ellora_past.glb", ancient: "/models/ajanta_ellora_ancient.glb" },
    era: "ancient",
    hotspots: [
      { name: "Shikhara Tower", description: "The tall pyramidal central tower of the Kailasa Temple, carved monolithically from the cliff above.", position: [0, 1.6, 0] },
      { name: "Carved Elephants", description: "Life-size elephants and lions sculpted in deep relief that appear to support the temple base.", position: [0.9, -0.7, 1.2] },
      { name: "Mandapa Hall", description: "The pillared front hall used for assembly and ritual, also carved from solid rock.", position: [0, 0.2, 1.6] },
      { name: "Wall Friezes", description: "Densely carved panels depicting Hindu deities, dancers and scenes from the Ramayana and Mahabharata.", position: [-1.4, 0.3, 0.4] }
    ],
    facts: [
      "The Ajanta Caves contain paintings and sculptures considered to be masterpieces of Buddhist religious art",
      "The Ellora Caves demonstrate the religious harmony prevalent during this period through dedicated Hindu, Buddhist, and Jain cave temples",
      "The Kailasa temple in Ellora is the largest monolithic rock excavation in the world",
      "Both cave complexes are UNESCO World Heritage Sites"
    ],
    factsHi: [
      "अजंता की गुफाओं में बौद्ध धार्मिक कला की उत्कृष्ट कृतियाँ मानी जाने वाली चित्रकारियाँ और मूर्तियाँ हैं",
      "एलोरा की गुफाएँ हिंदू, बौद्ध और जैन मंदिरों के माध्यम से उस काल की धार्मिक सद्भावना को दर्शाती हैं",
      "एलोरा में कैलाश मंदिर विश्व की सबसे बड़ी एकाश्म चट्टान खुदाई है",
      "दोनों गुफा परिसर यूनेस्को विश्व धरोहर स्थल हैं"
    ],
    visitingHours: "9:00 AM to 5:30 PM (Closed on Tuesdays)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (मंगलवार को बंद)",
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹40",
    UNESCO: true
  },
  {
    id: "gol-gumbaz",
    name: "Gol Gumbaz",
    nameHi: "गोल गुम्बज़",
    city: "Bijapur",
    state: "Karnataka",
    coordinates: [75.7101, 16.8302],
    description: "Gol Gumbaz is the mausoleum of Mohammed Adil Shah, Sultan of Bijapur. The tomb, located in Bijapur, Karnataka, was completed in 1656 and is remarkable for its massive dome, which is the second largest dome in the world after St. Peter's Basilica in Rome. The acoustics of the central chamber are particularly notable - even the faintest sound is echoed several times.",
    descriptionHi: "गोल गुम्बज़ बीजापुर के सुल्तान मोहम्मद आदिल शाह का मकबरा है। कर्नाटक के बीजापुर में स्थित यह मकबरा 1656 में पूरा हुआ और अपने विशाल गुंबद के लिए उल्लेखनीय है — रोम की सेंट पीटर की बेसिलिका के बाद दुनिया का दूसरा सबसे बड़ा गुंबद। केंद्रीय कक्ष की ध्वनिकी विशेष रूप से अनूठी है — यहाँ हल्की से हल्की आवाज़ भी कई बार गूंजती है, जिसे 'व्हिस्परिंग गैलरी' कहते हैं।",
    yearBuilt: "1626-1656",
    dynasty: "Adil Shahi Dynasty",
    dynastyHi: "आदिल शाही वंश",
    primaryModel: "/models/gol_gumbaz.glb",
    historicalModels: { past: "/models/gol_gumbaz_past.glb", ancient: "/models/gol_gumbaz_ancient.glb" },
    era: "medieval",
    facts: [
      "The dome of Gol Gumbaz is 44 meters in diameter, making it one of the largest single chamber spaces in the world",
      "The whispering gallery around the dome allows sounds to be heard across the diameter of the dome due to its acoustic properties",
      "The structure features four seven-story octagonal towers at each corner which served as minarets",
      "The name 'Gol Gumbaz' means 'circular dome' in reference to its distinctive architecture"
    ],
    factsHi: [
      "गोल गुम्बज़ का गुंबद 44 मीटर व्यास का है, जो दुनिया के सबसे बड़े एकल कक्ष स्थानों में से एक है",
      "गुंबद के चारों ओर व्हिस्परिंग गैलरी अपनी ध्वनि-विशेषताओं से आवाज़ को गुंबद के पार सुनने देती है",
      "संरचना में प्रत्येक कोने पर सात मंजिला अष्टभुजाकार मीनारें हैं जो मीनारों का काम करती थीं",
      "'गोल गुम्बज़' नाम का अर्थ है 'गोल गुंबद' जो इसकी विशिष्ट वास्तुकला को दर्शाता है"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    entryFee: "₹300 for foreign tourists, ₹25 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹300, भारतीय नागरिकों के लिए ₹25",
    UNESCO: false
  },
  {
    id: "hampi",
    name: "Hampi",
    nameHi: "हम्पी",
    city: "Hampi",
    state: "Karnataka",
    coordinates: [76.4600, 15.3350],
    description: "Hampi is an ancient village in the southern Indian state of Karnataka, dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the river Tungabhadra, it contains the iconic Vittala Temple complex with its stone chariot and musical pillars, the Virupaksha Temple still used for worship, and a vast landscape of boulder-strewn hills and royal enclosures. Hampi was the capital of one of the greatest Hindu empires in Indian history during the 14th to 16th centuries.",
    descriptionHi: "हम्पी कर्नाटक में एक प्राचीन गाँव है जो विजयनगर साम्राज्य के अनेक खंडहर मंदिर परिसरों से सुशोभित है। तुंगभद्रा नदी के दक्षिणी तट पर स्थित, इसमें अपने पत्थर के रथ और संगीत स्तंभों के लिए प्रसिद्ध विट्ठल मंदिर परिसर, अभी भी पूजनीय विरूपाक्ष मंदिर, और बोल्डर-युक्त पहाड़ियों एवं शाही परिसरों का विशाल परिदृश्य है। हम्पी 14वीं से 16वीं शताब्दी के दौरान भारतीय इतिहास के सबसे महान हिंदू साम्राज्यों में से एक की राजधानी थी।",
    yearBuilt: "14th-16th century CE",
    dynasty: "Vijayanagara Empire",
    dynastyHi: "विजयनगर साम्राज्य",
    primaryModel: "/models/hampi.glb",
    historicalModels: { past: "/models/hampi.glb", ancient: "/models/hampi_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Stone Chariot", description: "The iconic Vittala Temple stone chariot, depicted on the Indian ₹50 note.", position: [0, 0.6, 0] },
      { name: "Carved Wheels", description: "Each wheel was carved to actually rotate around its axle.", position: [0.9, -0.6, 0.6] },
      { name: "Stone Elephants", description: "Two carved elephants pulling the chariot — originally horses, replaced later.", position: [0, -0.4, 1.2] }
    ],
    facts: [
      "Hampi was the capital of the Vijayanagara Empire and was once one of the richest and largest cities in the world",
      "The iconic stone chariot at the Vittala Temple is depicted on the Indian ₹50 currency note",
      "The Vittala Temple's musical pillars produce different musical notes when tapped",
      "The entire ruins of Hampi are a UNESCO World Heritage Site, spread across an area of more than 4,100 hectares"
    ],
    factsHi: [
      "हम्पी विजयनगर साम्राज्य की राजधानी थी और कभी दुनिया के सबसे अमीर और सबसे बड़े शहरों में से एक थी",
      "विट्ठल मंदिर का प्रतिष्ठित पत्थर का रथ भारतीय ₹50 के नोट पर अंकित है",
      "विट्ठल मंदिर के संगीत स्तंभों को थपथपाने पर अलग-अलग संगीत ध्वनियाँ निकलती हैं",
      "हम्पी के सभी खंडहर यूनेस्को विश्व धरोहर स्थल हैं जो 4,100 हेक्टेयर से अधिक क्षेत्र में फैले हैं"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹40",
    UNESCO: true
  },
  {
    id: "charminar",
    name: "Charminar",
    nameHi: "चारमीनार",
    city: "Hyderabad",
    state: "Telangana",
    coordinates: [78.4747, 17.3616],
    description: "The Charminar is a monument and mosque located in Hyderabad, Telangana, India. Constructed in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, the iconic structure features four grand arches facing the four cardinal directions, with four ornate minarets at each corner soaring 56 metres above the ground. Built from granite and lime mortar, the Charminar is the most recognised symbol of Hyderabad and stands at the heart of the bustling old city, surrounded by the famous Laad Bazaar.",
    descriptionHi: "चारमीनार हैदराबाद, तेलंगाना में स्थित एक स्मारक और मस्जिद है। कुतुब शाही वंश के पाँचवें शासक मुहम्मद कुली कुतुब शाह द्वारा 1591 में निर्मित, इस प्रतिष्ठित संरचना में चारों कार्डिनल दिशाओं की ओर चार भव्य मेहराब और चार कोनों पर 56 मीटर ऊंची अलंकृत मीनारें हैं। ग्रेनाइट और चूने के मिश्रण से बनी चारमीनार हैदराबाद का सबसे पहचाना प्रतीक है और पुराने शहर के केंद्र में प्रसिद्ध लाड बाज़ार से घिरी स्थित है।",
    yearBuilt: "1591",
    dynasty: "Qutb Shahi Dynasty",
    dynastyHi: "कुतुब शाही वंश",
    primaryModel: "/models/charminar.glb",
    historicalModels: { past: "/models/charminar.glb", ancient: "/models/charminar.glb" },
    era: "medieval",
    hotspots: [
      { name: "Four Minarets", description: "Each of the four 56-metre minarets has four storeys with a tiered balcony.", position: [1.2, 1.2, 1.2] },
      { name: "Grand Arch", description: "Four 11-metre-tall pointed arches face the cardinal directions.", position: [0, -0.4, 1.4] },
      { name: "Mosque Above", description: "The upper floor houses Hyderabad's oldest still-active mosque.", position: [0, 0.8, 0] }
    ],
    facts: [
      "The Charminar gets its name from its four (char) minarets (minar), which rise to a height of 56 metres",
      "It was built to commemorate the eradication of a deadly plague from the city",
      "The monument is built from granite, limestone, mortar and pulverised marble",
      "A small mosque on the upper floor is the oldest in Hyderabad and is still in use today"
    ],
    factsHi: [
      "चारमीनार का नाम इसकी चार (चार) मीनारों (मीनार) से पड़ा है जो 56 मीटर की ऊँचाई तक जाती हैं",
      "इसे शहर से एक घातक प्लेग के उन्मूलन की स्मृति में बनाया गया था",
      "स्मारक ग्रेनाइट, चूना पत्थर, मोर्टार और चूर्णित संगमरमर से बनी है",
      "ऊपरी मंजिल पर एक छोटी मस्जिद है जो हैदराबाद की सबसे पुरानी है और आज भी उपयोग में है"
    ],
    visitingHours: "9:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सभी दिन)",
    entryFee: "₹250 for foreign tourists, ₹25 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹250, भारतीय नागरिकों के लिए ₹25",
    UNESCO: false
  },
  {
    id: "lotus-temple",
    name: "Lotus Temple",
    nameHi: "कमल मंदिर",
    city: "New Delhi",
    state: "Delhi",
    coordinates: [77.2588, 28.5535],
    description: "The Lotus Temple, located in New Delhi, is a Bahá'í House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city. Like all Bahá'í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other distinction. The building is composed of 27 free-standing marble-clad petals arranged in clusters of three to form nine sides, with nine doors opening onto a central hall capable of holding up to 2,500 people. Designed by Iranian architect Fariborz Sahba, the temple is surrounded by nine reflecting pools that beautifully mirror its petals.",
    descriptionHi: "कमल मंदिर नई दिल्ली में स्थित एक बहाई उपासना गृह है जिसे दिसंबर 1986 में समर्पित किया गया। अपने फूल जैसे आकार के लिए उल्लेखनीय, यह शहर का एक प्रमुख आकर्षण बन गया है। सभी बहाई उपासना गृहों की तरह, कमल मंदिर धर्म या किसी अन्य भेद के बिना सभी के लिए खुला है। इमारत 27 स्वतंत्र संगमरमर से मढ़ी पंखुड़ियों से बनी है जो तीन-तीन के समूह में नौ भुजाएँ बनाती हैं। ईरानी वास्तुकार फ़रीबोर्ज़ सहबा द्वारा डिज़ाइन किया गया, मंदिर नौ परावर्तक जलाशयों से घिरा है।",
    yearBuilt: "1980-1986",
    dynasty: "Modern (Bahá'í Faith)",
    dynastyHi: "आधुनिक (बहाई धर्म)",
    primaryModel: "/models/lotus_temple.glb",
    historicalModels: { past: "/models/lotus_temple.glb", ancient: "/models/lotus_temple.glb" },
    era: "modern",
    hotspots: [
      { name: "27 Marble Petals", description: "27 free-standing white marble petals in three concentric rings of nine.", position: [0, 1.2, 0] },
      { name: "Reflecting Pools", description: "Nine surrounding reflecting pools mirror the petals and naturally cool the building.", position: [1.6, -0.8, 0] }
    ],
    facts: [
      "The temple is composed of 27 free-standing marble-clad petals arranged in clusters of three to form nine sides",
      "It has won numerous architectural awards and has been featured in hundreds of newspaper and magazine articles",
      "The temple is open to people of all religions and is one of the most visited buildings in the world",
      "The structure is surrounded by nine reflecting pools that mirror its lotus-petal design"
    ],
    factsHi: [
      "मंदिर 27 स्वतंत्र संगमरमर-आच्छादित पंखुड़ियों से बना है जो तीन-तीन के समूह में नौ भुजाएँ बनाती हैं",
      "इसने अनेक वास्तुकला पुरस्कार जीते हैं और सैकड़ों अखबारों व पत्रिकाओं में इसकी चर्चा हुई है",
      "मंदिर सभी धर्मों के लोगों के लिए खुला है और दुनिया की सबसे अधिक देखी जाने वाली इमारतों में से एक है",
      "संरचना नौ परावर्तक जलाशयों से घिरी है जो इसके कमल की पंखुड़ी के डिजाइन को दर्शाते हैं"
    ],
    visitingHours: "9:00 AM to 5:30 PM (Closed on Mondays)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सोमवार को बंद)",
    entryFee: "Free entry for all visitors",
    entryFeeHi: "सभी आगंतुकों के लिए निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    nameHi: "गेटवे ऑफ इंडिया",
    city: "Mumbai",
    state: "Maharashtra",
    coordinates: [72.8347, 18.9220],
    description: "The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain. Designed by architect George Wittet in the Indo-Saracenic style and completed in 1924, the monument is built from yellow basalt and reinforced concrete and stands 26 metres tall. Overlooking the Arabian Sea and the Mumbai Harbour, it has become one of the most iconic symbols of the city, often called the 'Taj Mahal of Mumbai'.",
    descriptionHi: "गेटवे ऑफ इंडिया मुंबई में 20वीं सदी की शुरुआत में बना एक मेहराब स्मारक है। इसे दिसंबर 1911 में भारत आने वाले पहले ब्रिटिश सम्राट किंग-एम्परर जॉर्ज पंचम के आगमन की स्मृति में बनाया गया था। इंडो-सारसेनिक शैली में वास्तुकार जॉर्ज विटेट द्वारा डिज़ाइन किया गया और 1924 में पूरा किया गया, यह स्मारक 26 मीटर ऊंचा है। अरब सागर और मुंबई बंदरगाह के सामने स्थित, इसे अक्सर 'मुंबई का ताज महल' कहा जाता है।",
    yearBuilt: "1913-1924",
    dynasty: "British Raj",
    dynastyHi: "ब्रिटिश राज",
    primaryModel: "/models/gateway_of_india.glb",
    historicalModels: { past: "/models/gateway_of_india.glb", ancient: "/models/gateway_of_india.glb" },
    era: "modern",
    hotspots: [
      { name: "Central Arch", description: "26 metres tall and about 15 metres wide, the focal point of the monument.", position: [0, 0.2, 1.2] },
      { name: "Corner Turrets", description: "Two octagonal turrets with ribbed domes flank the central arch.", position: [1.3, 1.1, 0.5] }
    ],
    facts: [
      "The Gateway of India was built to commemorate the visit of King George V and Queen Mary to Mumbai in 1911",
      "It was designed by Scottish architect George Wittet in the Indo-Saracenic architectural style",
      "The monument stands 26 metres (85 feet) tall, with a central arch about 15 metres in diameter",
      "It served as the ceremonial entrance for British Viceroys and was the symbolic 'last gateway' from which the final British troops left India in 1948"
    ],
    factsHi: [
      "गेटवे ऑफ इंडिया 1911 में किंग जॉर्ज पंचम और क्वीन मैरी की मुंबई यात्रा की स्मृति में बनाया गया था",
      "इसे स्कॉटिश वास्तुकार जॉर्ज विटेट ने इंडो-सारसेनिक वास्तुशैली में डिज़ाइन किया था",
      "स्मारक 26 मीटर (85 फुट) ऊँचा है और मुख्य मेहराब लगभग 15 मीटर व्यास का है",
      "यह ब्रिटिश वायसरायों के लिए औपचारिक प्रवेश द्वार था और 1948 में यहीं से अंतिम ब्रिटिश सैनिक भारत छोड़ गए"
    ],
    visitingHours: "Open 24 hours (All days)",
    visitingHoursHi: "24 घंटे खुला (सभी दिन)",
    entryFee: "Free entry for all visitors",
    entryFeeHi: "सभी आगंतुकों के लिए निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    nameHi: "स्वर्ण मंदिर",
    city: "Amritsar",
    state: "Punjab",
    coordinates: [74.8765, 31.6200],
    description: "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest gurdwara and the most important pilgrimage site of Sikhism. Located in the city of Amritsar, Punjab, the temple sits on a square platform in the middle of the Amrit Sarovar (Pool of Nectar), connected to the surrounding marble causeway by a narrow bridge. The upper floors of the temple are covered with approximately 750 kg of pure gold leaf, giving it the distinctive shining golden appearance from which it gets its popular name. Built by Guru Arjan, the fifth Sikh Guru, in the late 16th century, it features a unique blend of Hindu and Islamic architectural styles and welcomes visitors of all faiths.",
    descriptionHi: "स्वर्ण मंदिर, जिसे श्री हरमंदिर साहिब के नाम से भी जाना जाता है, सिखों का सबसे पवित्र गुरुद्वारा और सबसे महत्वपूर्ण तीर्थस्थल है। अमृतसर में अमृत सरोवर (अमृत के तालाब) के मध्य में एक चौकोर मंच पर बने इस मंदिर तक एक संकरे पुल से पहुँचा जाता है। मंदिर की ऊपरी मंजिलें लगभग 750 किलोग्राम शुद्ध सोने की पत्तियों से ढकी हैं। पाँचवें सिख गुरु, गुरु अर्जन द्वारा 16वीं सदी के अंत में निर्मित, यह हिंदू और इस्लामी वास्तुशैलियों का अनूठा मेल प्रस्तुत करता है और सभी आस्थाओं के लोगों का स्वागत करता है।",
    yearBuilt: "1581-1604",
    dynasty: "Sikh Empire",
    dynastyHi: "सिख साम्राज्य",
    primaryModel: "/models/golden_temple.glb",
    historicalModels: { past: "/models/golden_temple.glb", ancient: "/models/golden_temple_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Gilded Dome", description: "The central onion-shaped dome covered in roughly 750 kg of pure gold leaf.", position: [0, 1.4, 0] },
      { name: "Causeway", description: "The Guru's Bridge — a marble causeway linking the temple to the surrounding parikrama.", position: [0, -0.6, 1.6] },
      { name: "Sarovar", description: "The Amrit Sarovar (Pool of Nectar) surrounding the temple.", position: [1.8, -0.9, 0] }
    ],
    facts: [
      "The upper floors of the temple are covered with approximately 750 kg of pure gold leaf",
      "The temple's langar (community kitchen) serves free vegetarian meals to up to 100,000 people daily, regardless of religion or background",
      "It has four entrances on each side, symbolising openness to people from all directions and walks of life",
      "The foundation stone was laid by the Muslim Sufi saint Mian Mir, reflecting the temple's message of religious harmony"
    ],
    factsHi: [
      "मंदिर की ऊपरी मंजिलें लगभग 750 किलोग्राम शुद्ध सोने की पत्तियों से ढकी हैं",
      "मंदिर का लंगर (सामुदायिक रसोई) धर्म या पृष्ठभूमि के बिना प्रतिदिन 1,00,000 लोगों को निःशुल्क भोजन कराता है",
      "इसके चारों तरफ चार प्रवेश द्वार हैं जो सभी दिशाओं के लोगों के लिए खुलेपन का प्रतीक हैं",
      "नींव का पत्थर मुस्लिम सूफी संत मियाँ मीर ने रखा था जो धार्मिक सद्भावना के संदेश को दर्शाता है"
    ],
    visitingHours: "Open 24 hours (All days)",
    visitingHoursHi: "24 घंटे खुला (सभी दिन)",
    entryFee: "Free entry for all visitors",
    entryFeeHi: "सभी आगंतुकों के लिए निःशुल्क प्रवेश",
    UNESCO: false
  },
];
