export interface Hotspot {
  name: string;
  description: string;
  position: [number, number, number];
}

export interface TimelineEntry {
  year: string;
  event: string;
  eventHi?: string;
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
  bestMonths?: number[]; // 0-based indices: 0=Jan … 11=Dec
  bestTimeDesc?: string;
  bestTimeDescHi?: string;
  timeline?: TimelineEntry[];
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the most magical window — misty winter mornings cast an ethereal glow on the white marble at sunrise, and cool afternoons are perfect for lingering in the gardens. Avoid April–June (scorching 45°C+) and the monsoon months when humidity is oppressive.",
    bestTimeDescHi: "नवंबर से फ़रवरी सबसे जादुई समय है — सर्दियों की धुंधली सुबह में सफेद संगमरमर पर एक अलौकिक चमक होती है और ठंडी दोपहरें बगीचों में टहलने के लिए आदर्श हैं। अप्रैल–जून (45°C+) और उमस भरे मानसून महीनों से बचें।",
    timeline: [
      { year: "1631", event: "Construction begins; Shah Jahan commissions the mausoleum in memory of Mumtaz Mahal", eventHi: "सम्राट शाहजहाँ ने मुमताज महल की याद में मकबरे का निर्माण शुरू करवाया" },
      { year: "1643", event: "Main mausoleum structure completed after 12 years of construction", eventHi: "12 वर्षों के बाद मुख्य मकबरे का ढाँचा पूर्ण हुआ" },
      { year: "1653", event: "Full complex — gardens, mosque, and great gate — finally completed", eventHi: "बगीचे, मस्जिद और मुख्य द्वार सहित पूरा परिसर पूर्ण हुआ" },
      { year: "1908", event: "Major restoration by British Viceroy Lord Curzon revives the monument", eventHi: "ब्रिटिश वायसरॉय लॉर्ड कर्ज़न द्वारा बड़ा जीर्णोद्धार कार्य" },
      { year: "1983", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Delhi's cool, clear winter skies let you appreciate the intricate carvings and towering height without heat exhaustion. Mornings are crisp and pleasantly uncrowded. Summers exceed 45°C and the monsoon makes the extensive grounds muddy and uncomfortable.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — दिल्ली के ठंडे, साफ़ सर्दियों के आसमान में जटिल नक्काशी और ऊँची मीनार को बिना थकान के निहारा जा सकता है। सुबहें शांत और कम भीड़ वाली होती हैं। गर्मियों में 45°C+ और मानसून में कीचड़ भरे मैदान यात्रा को असुविधाजनक बना देते हैं।",
    timeline: [
      { year: "1199", event: "Construction begins under Qutb-ud-Din Aibak of the Delhi Sultanate", eventHi: "दिल्ली सल्तनत के कुतुब-उद-दीन ऐबक के अधीन निर्माण शुरू" },
      { year: "1220", event: "Completed by Iltutmish, successor of Qutb-ud-Din Aibak", eventHi: "ऐबक के उत्तराधिकारी इल्तुतमिश द्वारा निर्माण पूर्ण" },
      { year: "1368", event: "Fifth storey added by Firuz Shah Tughlaq after lightning destroys the top", eventHi: "बिजली गिरने के बाद फ़िरोज़ शाह तुगलक ने पाँचवीं मंजिल जोड़ी" },
      { year: "1920s", event: "Repairs undertaken under British colonial authority", eventHi: "ब्रिटिश औपनिवेशिक प्रशासन के अधीन मरम्मत कार्य" },
      { year: "1993", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the sweet spot — comfortable temperatures and clear skies make the red sandstone glow beautifully, and the museums inside are a pleasure to explore at a relaxed pace. Independence Day (15 August) brings a ceremonial flag-hoisting, but summer heat and monsoon humidity make extended visits draining.",
    bestTimeDescHi: "नवंबर से फ़रवरी सबसे अच्छा समय है — सुहावने तापमान और साफ़ आसमान में लाल बलुआ पत्थर खूबसूरती से चमकता है और अंदर के संग्रहालय आराम से देखे जा सकते हैं। स्वतंत्रता दिवस (15 अगस्त) पर झंडारोहण समारोह होता है, लेकिन गर्मी और मानसून की उमस लंबी यात्रा को थका देने वाली बनाती है।",
    timeline: [
      { year: "1639", event: "Emperor Shah Jahan orders construction of his new capital at Delhi", eventHi: "सम्राट शाहजहाँ ने दिल्ली में अपनी नई राजधानी के निर्माण का आदेश दिया" },
      { year: "1648", event: "Construction completed; Mughal court moves from Agra into the fort", eventHi: "निर्माण पूर्ण; मुगल दरबार आगरा से किले में आया" },
      { year: "1857", event: "British forces capture the fort after the Indian Rebellion; last Mughal emperor tried here", eventHi: "1857 के विद्रोह के बाद ब्रिटिश सेना का कब्जा; अंतिम मुगल सम्राट पर यहीं मुकदमा चला" },
      { year: "1947", event: "Indian flag raised here for the first time on Independence Day by Nehru", eventHi: "स्वतंत्रता दिवस पर नेहरू द्वारा पहली बार यहाँ तिरंगा फहराया गया" },
      { year: "2007", event: "Declared a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is when Jaipur truly shines — sunny days, cool nights, and the city's bazaars are at their most vibrant. The Jaipur Literature Festival in January draws visitors from around the world and adds a festive buzz. Summers are brutal (up to 48°C) and monsoon humidity dulls the palace's famous pink facade.",
    bestTimeDescHi: "नवंबर से फ़रवरी में जयपुर अपने सर्वश्रेष्ठ रूप में होता है — धूप भरे दिन, ठंडी रातें और रंग-बिरंगी बाज़ारें। जनवरी में जयपुर लिटरेचर फ़ेस्टिवल एक विशेष उत्सव का माहौल बनाता है। गर्मियाँ क्रूर होती हैं (48°C तक) और मानसून की उमस महल की गुलाबी दीवारों को फीका कर देती है।",
    timeline: [
      { year: "1799", event: "Built by Maharaja Sawai Pratap Singh of Jaipur", eventHi: "जयपुर के महाराजा सवाई प्रताप सिंह द्वारा निर्मित" },
      { year: "1800s", event: "Becomes a treasured icon of Jaipur's Pink City identity", eventHi: "जयपुर के पिंक सिटी की एक प्रिय पहचान बनी" },
      { year: "1876", event: "Jaipur painted pink to welcome the Prince of Wales, cementing the 'Pink City' name", eventHi: "वेल्स के राजकुमार के स्वागत में जयपुर को गुलाबी रंगा, 'पिंक सिटी' नाम पक्का हुआ" },
      { year: "2005", event: "Major restoration and conservation project undertaken by Rajasthan government", eventHi: "राजस्थान सरकार द्वारा बड़े पैमाने पर जीर्णोद्धार व संरक्षण परियोजना" },
      { year: "Present", event: "One of the most photographed monuments in Rajasthan, welcoming millions annually", eventHi: "राजस्थान के सर्वाधिक फोटो खिंचे जाने वाले स्मारकों में से एक, प्रतिवर्ष लाखों पर्यटकों का स्वागत" },
    ],
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the prime season — Odisha's coast is cool and breezy, perfect for studying the temple's extraordinary stone carvings without the harsh summer glare. The Konark Dance Festival in December is a spectacular highlight, with classical performances held right before the temple. Avoid March–May (intense heat) and June–September (heavy coastal monsoon).",
    bestTimeDescHi: "नवंबर से फ़रवरी मुख्य मौसम है — ओडिशा का तट ठंडा और हवादार होता है, जो मंदिर की असाधारण पत्थर की नक्काशी को कड़ी गर्मी के बिना देखने के लिए एकदम सही है। दिसंबर में कोणार्क नृत्य महोत्सव एक शानदार आकर्षण है — मंदिर के सामने शास्त्रीय नृत्य प्रस्तुतियाँ होती हैं। मार्च–मई (तीव्र गर्मी) और जून–सितंबर (भारी तटीय मानसून) से बचें।",
    timeline: [
      { year: "1250 CE", event: "Construction begins under King Narasimhadeva I of the Eastern Ganga dynasty", eventHi: "पूर्वी गंग वंश के राजा नरसिंहदेव प्रथम के अधीन निर्माण शुरू" },
      { year: "1255 CE", event: "Temple construction completed; becomes a major pilgrimage and trading hub", eventHi: "मंदिर निर्माण पूर्ण; एक प्रमुख तीर्थ और व्यापार केंद्र बना" },
      { year: "~1568", event: "Mughal incursions; temple falls into neglect and structural sand-filling begins", eventHi: "मुगल आक्रमणों के बाद मंदिर उपेक्षित; रेत से भराई शुरू" },
      { year: "1902", event: "Archaeological Survey of India initiates first systematic conservation work", eventHi: "भारतीय पुरातत्व सर्वेक्षण ने पहला व्यवस्थित संरक्षण कार्य शुरू किया" },
      { year: "1984", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
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
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to January is the ideal window — October and November are the most beautiful as the surrounding Sahyadri hills are brilliantly lush green after the monsoon. December and January bring cool, dry comfort for extended exploration of the cave interiors. Avoid the hot, humid summer entirely — cave interiors become unbearably stifling.",
    bestTimeDescHi: "अक्तूबर से जनवरी सबसे अच्छा समय है — अक्तूबर और नवंबर में मानसून के बाद सह्याद्रि पहाड़ियाँ हरी-भरी होती हैं। दिसंबर और जनवरी में ठंडा, शुष्क मौसम गुफाओं की लंबी सैर के लिए आरामदायक है। गर्म, उमस भरी गर्मी में गुफाओं के अंदर असहनीय गर्मी होती है — उस समय आने से पूरी तरह बचें।",
    timeline: [
      { year: "2nd Century BCE", event: "Buddhist monks begin carving the Ajanta Caves in a horseshoe-shaped cliff", eventHi: "बौद्ध भिक्षुओं ने घोड़े की नाल आकार की चट्टान में अजंता गुफाएँ उकेरनी शुरू कीं" },
      { year: "6th–10th Century CE", event: "Ellora Caves carved spanning Buddhist, Hindu, and Jain traditions", eventHi: "एलोरा में बौद्ध, हिंदू और जैन परंपराओं की गुफाएँ उकेरी गईं" },
      { year: "~1100 CE", event: "Caves abandoned; forgotten for centuries as trade routes shifted", eventHi: "गुफाएँ छोड़ दी गईं; व्यापार मार्ग बदलने से सदियों तक भुला दी गईं" },
      { year: "1819", event: "British officer John Smith rediscovers the Ajanta Caves during a tiger hunt", eventHi: "ब्रिटिश अधिकारी जॉन स्मिथ ने बाघ के शिकार के दौरान अजंता गुफाएँ पुनः खोजीं" },
      { year: "1983 / 1984", event: "Ajanta and Ellora both designated UNESCO World Heritage Sites", eventHi: "अजंता और एलोरा दोनों को यूनेस्को विश्व धरोहर स्थल घोषित किया गया" },
    ],
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February brings crisp, dry air to the Deccan Plateau — ideal conditions for the famous whispering gallery, where even the faintest whisper travels the full circumference of the massive dome. Early winter mornings are the most magical. March–May is scorching, and the monsoon brings oppressive humidity.",
    bestTimeDescHi: "नवंबर से फ़रवरी में दक्कन पठार पर ठंडी, शुष्क हवा रहती है — प्रसिद्ध व्हिस्परिंग गैलरी के लिए आदर्श परिस्थितियाँ, जहाँ हल्की सी फुसफुसाहट भी विशाल गुंबद की परिधि में घूमती है। सर्दियों की शुरुआती सुबह सबसे जादुई होती है। मार्च–मई में झुलसाने वाली गर्मी और मानसून में उमस भरा मौसम होता है।",
    timeline: [
      { year: "1626", event: "Construction begins under Muhammad Adil Shah of the Adil Shahi dynasty", eventHi: "आदिल शाही वंश के मुहम्मद आदिल शाह के अधीन निर्माण शुरू" },
      { year: "1656", event: "Gol Gumbaz completed; Muhammad Adil Shah interred within the dome", eventHi: "गोल गुम्बज़ पूर्ण; मुहम्मद आदिल शाह को गुंबद के भीतर दफनाया गया" },
      { year: "1760", event: "Adil Shahi dynasty falls; monument enters a period of neglect", eventHi: "आदिल शाही वंश का पतन; स्मारक में उपेक्षा का दौर शुरू" },
      { year: "1881", event: "Archaeological Survey of India takes over and begins conservation", eventHi: "भारतीय पुरातत्व सर्वेक्षण ने देखरेख संभाली और संरक्षण शुरू किया" },
      { year: "1999", event: "Listed as a nationally protected monument of India", eventHi: "भारत के राष्ट्रीय महत्व के संरक्षित स्मारक के रूप में सूचीबद्ध" },
    ],
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
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to January is the best window — the sprawling ruins are most rewarding in cool weather when you can walk freely among the boulders and temples. November is particularly special as the Vijayanagara Festival brings classical music and cultural performances among the ancient stones. March–May becomes scorching, and the monsoon makes rocky terrain dangerously slippery.",
    bestTimeDescHi: "अक्तूबर से जनवरी सबसे अच्छा समय है — ठंडे मौसम में विशाल खंडहरों के बीच पत्थरों और मंदिरों में स्वतंत्र रूप से घूमा जा सकता है। नवंबर में विजयनगर उत्सव प्राचीन पत्थरों के बीच शास्त्रीय संगीत और सांस्कृतिक प्रस्तुतियाँ लेकर आता है। मार्च–मई में चिलचिलाती गर्मी और मानसून में चट्टानी भूमि फिसलन भरी हो जाती है।",
    timeline: [
      { year: "1336", event: "Vijayanagara Empire founded; Hampi established as the imperial capital", eventHi: "विजयनगर साम्राज्य की स्थापना; हम्पी को शाही राजधानी बनाया गया" },
      { year: "1400s", event: "City grows into one of the world's largest and wealthiest urban centres", eventHi: "शहर दुनिया के सबसे बड़े और धनी नगरों में गिना जाने लगा" },
      { year: "1510", event: "Vittala Temple complex construction commences under Krishna Deva Raya", eventHi: "कृष्णदेव राय के शासन में विट्ठल मंदिर परिसर का निर्माण शुरू" },
      { year: "1565", event: "Battle of Talikota — city sacked and burned; never rebuilt", eventHi: "तालीकोटा की लड़ाई — शहर लूटा और जलाया गया; दोबारा कभी न बना" },
      { year: "1986", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the perfect time for Hyderabad — mild temperatures and dry air make wandering the bustling lanes around the Charminar an absolute pleasure. Visit at dusk for the dramatic evening illumination that turns the minarets golden. If you happen to be here during Ramzan, the surrounding bazaars come alive with an electric energy after sunset.",
    bestTimeDescHi: "नवंबर से फ़रवरी हैदराबाद के लिए आदर्श है — हल्का तापमान और शुष्क हवा चारमीनार के आसपास की हलचल भरी गलियों में घूमना सुखद बनाते हैं। सूर्यास्त के समय जाएं जब मीनारें सुनहरी रोशनी में नहाती हैं। रमज़ान में यहाँ होने का मौका मिले तो सूर्यास्त के बाद आसपास के बाज़ार जीवंत हो उठते हैं।",
    timeline: [
      { year: "1591", event: "Sultan Muhammad Quli Qutb Shah builds Charminar to mark Hyderabad's founding", eventHi: "सुल्तान मुहम्मद क़ुली क़ुतुब शाह ने हैदराबाद की स्थापना के उपलक्ष्य में चारमीनार बनवाया" },
      { year: "1687", event: "Aurangzeb captures Hyderabad; Charminar becomes part of Mughal Empire", eventHi: "औरंगज़ेब ने हैदराबाद पर कब्जा किया; चारमीनार मुगल साम्राज्य का हिस्सा बना" },
      { year: "1724", event: "Nizam dynasty establishes independent control over Hyderabad", eventHi: "निज़ाम वंश ने हैदराबाद पर स्वतंत्र नियंत्रण स्थापित किया" },
      { year: "1957", event: "Archaeological Survey of India undertakes major restoration work", eventHi: "भारतीय पुरातत्व सर्वेक्षण ने बड़ा जीर्णोद्धार कार्य किया" },
      { year: "Present", event: "One of India's most recognised landmarks; surrounded by vibrant bazaars", eventHi: "भारत के सबसे पहचाने जाने वाले स्मारकों में से एक; चारों ओर जीवंत बाज़ार" },
    ],
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Delhi's cool winters let you linger peacefully in the serene gardens and reflecting pools. Winter sunlight creates a warm golden glow on the white marble petals, and the calm atmosphere enhances the temple's meditative character. Arrive early on weekdays to avoid the considerable crowds this hugely popular landmark draws.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — दिल्ली की ठंडी सर्दियाँ शांत बगीचों और परावर्तक तालाबों में शांति से समय बिताने देती हैं। सर्दियों की धूप सफेद संगमरमर की पंखुड़ियों पर एक सुनहरी चमक पैदा करती है और शांत वातावरण मंदिर के ध्यानात्मक स्वरूप को और गहरा करता है। सप्ताह के दिनों में जल्दी पहुंचें।",
    timeline: [
      { year: "1953", event: "National Spiritual Assembly of India acquires the land in New Delhi", eventHi: "भारत की राष्ट्रीय आध्यात्मिक सभा ने नई दिल्ली में भूमि अर्जित की" },
      { year: "1976", event: "International design competition held; Iranian architect Fariborz Sahba selected", eventHi: "अंतर्राष्ट्रीय वास्तुकला प्रतियोगिता आयोजित; ईरानी वास्तुकार फ़रीबोर्ज़ सहबा चयनित" },
      { year: "1980", event: "Foundation stone laid; construction of the 27 marble petals commences", eventHi: "नींव का पत्थर रखा गया; 27 संगमरमर पंखुड़ियों का निर्माण शुरू" },
      { year: "1986", event: "Temple dedicated and opened to all — welcomes people of all faiths", eventHi: "मंदिर समर्पित एवं सभी धर्मों के लोगों के लिए खोला गया" },
      { year: "2001", event: "Receives Good Design Award; among the world's most visited buildings", eventHi: "गुड डिज़ाइन अवॉर्ड; दुनिया की सर्वाधिक देखी जाने वाली इमारतों में शुमार" },
    ],
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
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is Mumbai's most pleasant window — the coastal city finally cools to comfortable temperatures, making a boat trip to Elephanta Island or simply sitting at the waterfront a delightful experience. The Arabian Sea is calm and visibility is excellent. Avoid May–September when the monsoon brings heavy rain and rough harbour waters.",
    bestTimeDescHi: "नवंबर से फ़रवरी मुंबई का सबसे सुहावना समय है — तटीय शहर आरामदायक तापमान तक ठंडा हो जाता है और एलीफेंटा द्वीप की नाव यात्रा या बंदरगाह के किनारे बैठना दोनों ही आनंददायक होते हैं। अरब सागर शांत रहता है और दृश्यता उत्कृष्ट होती है। मई–सितंबर में भारी मानसूनी बारिश और तेज़ समुद्री लहरों से बचें।",
    timeline: [
      { year: "1911", event: "King George V and Queen Mary visit Bombay; foundation stone laid", eventHi: "किंग जॉर्ज पंचम और क्वीन मैरी की बंबई यात्रा; नींव का पत्थर रखा" },
      { year: "1913", event: "Construction begins under Scottish architect George Wittet", eventHi: "स्कॉटिश वास्तुकार जॉर्ज विटेट के निर्देशन में निर्माण शुरू" },
      { year: "1924", event: "Gateway of India officially inaugurated by Viceroy Rufus Isaacs", eventHi: "वायसरॉय रूफस आइज़ैक्स द्वारा गेटवे ऑफ इंडिया का आधिकारिक उद्घाटन" },
      { year: "1948", event: "Last British troops march through and leave India through the Gateway", eventHi: "अंतिम ब्रिटिश सैनिक यहाँ से मार्च करके भारत छोड़ गए" },
      { year: "Present", event: "Iconic symbol of Mumbai; departure point for Elephanta Island ferries", eventHi: "मुंबई का प्रतिष्ठित प्रतीक; एलीफेंटा द्वीप की नौकाओं का प्रस्थान बिंदु" },
    ],
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
    bestMonths: [1, 2, 3, 9, 10],
    bestTimeDesc: "February to April and October to November are the two golden windows — spring brings Baisakhi (13–14 April), the most joyous festival at the Golden Temple, while October and November offer post-monsoon clarity with stunning golden reflections on the Amrit Sarovar. Amritsar summers are intense (45°C+) and winters can be bitterly cold with heavy fog that obscures the gold.",
    bestTimeDescHi: "फ़रवरी से अप्रैल और अक्तूबर से नवंबर दो सबसे अच्छे समय हैं — वसंत में बैसाखी (13-14 अप्रैल) स्वर्ण मंदिर का सबसे आनंदमय पर्व है, जबकि अक्तूबर और नवंबर में मानसून के बाद अमृत सरोवर में सोने का शानदार प्रतिबिंब दिखता है। अमृतसर की गर्मी तीव्र होती है (45°C+) और सर्दियाँ कड़ाके की ठंड व घने कोहरे के साथ आती हैं जो सोने की चमक को ढक देता है।",
    timeline: [
      { year: "1581", event: "Guru Ram Das founds Amritsar and begins excavating the sacred Sarovar", eventHi: "गुरु राम दास ने अमृतसर शहर की स्थापना की और पवित्र सरोवर खोदना शुरू किया" },
      { year: "1604", event: "Guru Arjan completes the temple and enshrines the Adi Granth within", eventHi: "गुरु अर्जन ने मंदिर पूर्ण किया और आदि ग्रंथ स्थापित किया" },
      { year: "1762", event: "Ahmed Shah Durrani destroys the temple; Sikh warriors rebuild it within months", eventHi: "अहमद शाह दुर्रानी ने मंदिर ध्वस्त किया; सिख योद्धाओं ने महीनों में पुनर्निर्माण किया" },
      { year: "1830", event: "Maharaja Ranjit Singh overlays the upper floors with 750 kg of pure gold leaf", eventHi: "महाराजा रणजीत सिंह ने ऊपरी मंजिलों पर 750 किलो शुद्ध सोने की पत्तियाँ चढ़वाईं" },
      { year: "Present", event: "Serves ~100,000 free meals daily and welcomes people of all faiths", eventHi: "प्रतिदिन ~1,00,000 लोगों को निःशुल्क भोजन और सभी आस्थाओं का स्वागत" },
    ],
    entryFee: "Free entry for all visitors",
    entryFeeHi: "सभी आगंतुकों के लिए निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    nameHi: "मैसूर महल",
    city: "Mysore",
    state: "Karnataka",
    coordinates: [76.6551, 12.3052],
    description: "The Mysore Palace, officially the Mysuru Palace, is a historical palace and royal residence in Mysore, Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. After the old wooden palace was destroyed by fire in 1897, the 24th Wadiyar king Krishnaraja Wadiyar IV commissioned English architect Henry Irwin to build a new one. The three-storey structure in the Indo-Saracenic style, completed in 1912, blends Hindu, Muslim, Rajput, and Gothic elements under marble domes, towers, and ornate arches. It is illuminated by nearly 100,000 light bulbs every Sunday and on festivals, creating one of India's most breathtaking spectacles.",
    descriptionHi: "मैसूर महल, आधिकारिक रूप से मैसुरु महल, कर्नाटक के मैसूर में स्थित एक ऐतिहासिक महल और शाही निवास है। 1897 में पुराने लकड़ी के महल में आग लगने के बाद 24वें वाडियार राजा कृष्णराज वाडियार IV ने अंग्रेज़ वास्तुकार हेनरी इरविन से इंडो-सारसेनिक शैली में नया महल बनवाया। 1912 में पूर्ण यह तीन मंजिला संरचना संगमरमर के गुंबदों, मीनारों और भव्य मेहराबों के साथ भारत के सबसे शानदार शाही आवासों में से एक है।",
    yearBuilt: "1897–1912",
    dynasty: "Kingdom of Mysore (Wadiyar)",
    dynastyHi: "मैसूर राज्य (वाडियार)",
    primaryModel: "/models/golden_temple.glb",
    historicalModels: { past: "/models/golden_temple.glb", ancient: "/models/hampi.glb" },
    era: "modern",
    hotspots: [
      { name: "Kalyana Mandapa", description: "The Royal Wedding Hall with a stunning stained-glass ceiling imported from Scotland and a mosaic floor with intricate geometric patterns.", position: [0, 0.3, 1.2] },
      { name: "Amba Vilas Darbar Hall", description: "The grand audience hall where the king held court — adorned with cast-iron pillars, stained glass, and paintings by Raja Ravi Varma.", position: [1.2, 1.0, 0.5] },
      { name: "Doll's Pavilion", description: "A display gallery housing the royal family's prized collection of dolls, palanquins, and ceremonial elephants accumulated over generations.", position: [-1.0, 0.5, 0.8] },
    ],
    facts: [
      "The palace is illuminated by approximately 100,000 light bulbs every Sunday evening and on public holidays",
      "It is the second most visited monument in India after the Taj Mahal, attracting over 6 million visitors annually",
      "Designed by British architect Henry Irwin in the Indo-Saracenic style, blending Hindu, Muslim, Rajput, and Gothic architectural elements",
      "The Mysore Dasara festival held here every October is one of the most spectacular royal celebrations in the world, featuring a grand elephant procession"
    ],
    factsHi: [
      "महल को हर रविवार शाम और सार्वजनिक छुट्टियों पर लगभग 1,00,000 बल्बों से रोशन किया जाता है",
      "ताज महल के बाद यह भारत में दूसरा सबसे अधिक देखा जाने वाला स्मारक है, जहाँ प्रतिवर्ष 60 लाख से अधिक पर्यटक आते हैं",
      "ब्रिटिश वास्तुकार हेनरी इरविन ने इसे इंडो-सारसेनिक शैली में डिज़ाइन किया, जिसमें हिंदू, मुस्लिम, राजपूत और गोथिक तत्वों का मेल है",
      "यहाँ हर अक्तूबर में होने वाला मैसूर दशहरा उत्सव दुनिया के सबसे शानदार शाही उत्सवों में से एक है"
    ],
    visitingHours: "10:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 10:00 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to January is the prime time — the weather is pleasant and the famous Mysore Dasara festival (October) transforms the palace into a sea of golden light with a grand elephant procession. December and January offer comfortable winter temperatures. Avoid March–May when Karnataka heats up considerably.",
    bestTimeDescHi: "अक्तूबर से जनवरी सबसे अच्छा समय है — मौसम सुहावना होता है और मैसूर दशहरा उत्सव (अक्तूबर) महल को सुनहरी रोशनी और भव्य हाथी जुलूस से जीवंत कर देता है। दिसंबर और जनवरी में आरामदायक सर्दियों का मौसम रहता है। मार्च–मई में काफी गर्मी पड़ती है।",
    timeline: [
      { year: "1399", event: "Yaduraya founds the Kingdom of Mysore; Mysore established as seat of the Wadiyar dynasty", eventHi: "यदुराय ने मैसूर राज्य की स्थापना की; मैसूर वाडियार वंश की राजधानी बना" },
      { year: "1612", event: "An earlier version of the palace built by Wadiyar rulers on the same hilltop site", eventHi: "वाडियार शासकों ने इसी पहाड़ी स्थल पर महल का पहला संस्करण बनाया" },
      { year: "1897", event: "The old wooden palace burns down during a princess's wedding; Henry Irwin commissioned", eventHi: "राजकुमारी के विवाह के दौरान पुराना लकड़ी का महल जल गया; हेनरी इरविन को नया महल डिज़ाइन करने को नियुक्त किया गया" },
      { year: "1912", event: "The new Indo-Saracenic palace is completed and inaugurated", eventHi: "इंडो-सारसेनिक नया महल पूर्ण एवं उद्घाटित" },
      { year: "1970", event: "The palace is acquired by the Government of Karnataka and opened to the public", eventHi: "महल कर्नाटक सरकार ने अधिग्रहीत किया और जनता के लिए खोला" },
    ],
    entryFee: "₹100 (Adults), ₹10 (Children)",
    entryFeeHi: "₹100 (वयस्क), ₹10 (बच्चे)",
    UNESCO: false
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    nameHi: "मीनाक्षी अम्मान मंदिर",
    city: "Madurai",
    state: "Tamil Nadu",
    coordinates: [78.1197, 9.9195],
    description: "The Meenakshi Amman Temple is a historic Hindu temple on the southern bank of the Vaigai River in Madurai, Tamil Nadu. Dedicated to the goddess Meenakshi (a form of Parvati) and her consort Sundareshvara (a form of Shiva), it forms the heart of the 2,500-year-old city. The 14-acre complex has 14 gopurams (gateway towers) ranging from 45 to 52 metres, covered with thousands of brightly painted mythological sculptures. The tallest, the Rajagopuram, rises 52 metres and carries 1,511 carved figures. With up to 20,000 visitors daily, it is one of the most active living temples in the world.",
    descriptionHi: "मीनाक्षी अम्मान मंदिर तमिलनाडु के मदुरई में वैगई नदी के दक्षिणी तट पर स्थित एक ऐतिहासिक हिंदू मंदिर है। देवी मीनाक्षी और सुंदरेश्वर को समर्पित, यह 2,500 वर्ष पुराने मदुरई शहर का दिल है। 14 एकड़ के परिसर में 45 से 52 मीटर ऊँचे 14 गोपुरम हैं जो हज़ारों रंगीन पौराणिक मूर्तियों से ढके हैं। सबसे ऊँचे राजगोपुरम में 1,511 नक्काशीदार मूर्तियाँ हैं।",
    yearBuilt: "7th century CE (major rebuild 1623–1655)",
    dynasty: "Nayak Kingdom",
    dynastyHi: "नायक राज्य",
    primaryModel: "/models/hampi.glb",
    historicalModels: { past: "/models/hampi.glb", ancient: "/models/hampi_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Rajagopuram", description: "The towering 52-metre south gateway adorned with 1,511 painted stone sculptures of deities — the visual crown of the entire temple complex.", position: [0, 1.5, 0.5] },
      { name: "Pottramarai Kulam", description: "The Golden Lotus Tank — a sacred pool at the heart of the complex, believed to be the site of Shiva and Parvati's celestial wedding.", position: [0.5, -0.5, 1.2] },
      { name: "Thousand-Pillar Hall", description: "The Hall of a Thousand Pillars (actually 985) features intricately carved columns and houses a small museum of temple sculpture and art.", position: [-1.2, 0.3, 0.8] },
    ],
    facts: [
      "The temple complex has 14 gopurams (gateway towers) — the tallest rises 52 metres and is adorned with 1,511 carved stone sculptures",
      "Around 15,000–20,000 pilgrims and tourists visit every day; during festivals this rises to over 25,000",
      "The temple has over 33,000 sculptures and is one of the largest active temple complexes in India",
      "The Meenakshi Tirukalyanam (divine wedding) festival held every April–May draws hundreds of thousands of devotees from across India"
    ],
    factsHi: [
      "मंदिर परिसर में 14 गोपुरम हैं, सबसे ऊँचा 52 मीटर ऊँचा है और 1,511 नक्काशीदार मूर्तियों से सजा है",
      "प्रतिदिन 15,000–20,000 तीर्थयात्री और पर्यटक आते हैं; त्योहारों के दौरान यह 25,000 से अधिक हो जाता है",
      "मंदिर में 33,000 से अधिक मूर्तियाँ हैं और यह भारत के सबसे बड़े सक्रिय मंदिर परिसरों में से एक है",
      "हर अप्रैल–मई में मीनाक्षी तिरुकल्याणम (दिव्य विवाह) उत्सव में पूरे भारत से लाखों श्रद्धालु आते हैं"
    ],
    visitingHours: "5:00 AM to 12:30 PM, 4:00 PM to 9:30 PM (All days)",
    visitingHoursHi: "सुबह 5:00 से दोपहर 12:30 बजे तक और शाम 4:00 से रात 9:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Tamil Nadu winters are warm but manageable, making temple exploration comfortable. January's Pongal harvest festival adds a layer of cultural richness to any visit. Avoid April–June when temperatures climb above 40°C and Madurai's city-centre humidity becomes intense.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — तमिलनाडु की सर्दियाँ गर्म लेकिन सहनीय होती हैं। जनवरी में पोंगल फसल उत्सव यात्रा को सांस्कृतिक रूप से समृद्ध बनाता है। अप्रैल–जून से बचें जब तापमान 40°C से ऊपर जाता है।",
    timeline: [
      { year: "~3rd century BCE", event: "Early temple established; Madurai becomes a major Pandya trading and cultural capital", eventHi: "प्रारंभिक मंदिर स्थापित; मदुरई एक प्रमुख पांड्य व्यापार और सांस्कृतिक केंद्र बना" },
      { year: "7th century CE", event: "Temple praised by Sangam poets; becomes a central Shaivite pilgrimage destination", eventHi: "संगम कवियों द्वारा मंदिर की प्रशंसा; प्रमुख शैव तीर्थ केंद्र बना" },
      { year: "1310", event: "Malik Kafur's invasion destroys much of the original temple; gradual reconstruction begins", eventHi: "मलिक काफूर के आक्रमण में मंदिर का अधिकांश भाग नष्ट; क्रमिक पुनर्निर्माण शुरू" },
      { year: "1623–1655", event: "Nayak ruler Tirumalai Nayak undertakes the major reconstruction and expansion of the gopurams", eventHi: "नायक शासक तिरुमलाई नायक ने गोपुरमों का प्रमुख पुनर्निर्माण और विस्तार कराया" },
      { year: "Present", event: "One of the most visited Hindu temples in the world and a living cultural institution of Tamil Nadu", eventHi: "दुनिया के सर्वाधिक देखे जाने वाले हिंदू मंदिरों में से एक और तमिलनाडु की एक जीवंत सांस्कृतिक संस्था" },
    ],
    entryFee: "Free entry (Camera fee ₹50)",
    entryFeeHi: "निःशुल्क प्रवेश (कैमरा शुल्क ₹50)",
    UNESCO: false
  },
  {
    id: "khajuraho-temples",
    name: "Khajuraho Temples",
    nameHi: "खजुराहो मंदिर",
    city: "Khajuraho",
    state: "Madhya Pradesh",
    coordinates: [79.9199, 24.8318],
    description: "The Khajuraho Group of Monuments is a collection of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, built by the Chandela dynasty between 950 and 1050 CE. The temples are renowned for their nagara-style architectural symbolism and extraordinarily detailed erotic sculptures. Of the original 85 temples, only 25 survive. Divided into western, eastern, and southern groups, the temples are dedicated to Shiva, Vishnu, and other deities, and represent the pinnacle of medieval Indian artistic expression. They were lost to the wider world for centuries, hidden in dense jungle, until rediscovered by British surveyor T.S. Burt in 1838.",
    descriptionHi: "खजुराहो स्मारक समूह मध्य प्रदेश के छतरपुर जिले में 950 से 1050 ई. के बीच चंदेल वंश द्वारा बनाए गए हिंदू और जैन मंदिरों का संग्रह है। नागर शैली की वास्तुकला और विस्तृत कामुक मूर्तियों के लिए प्रसिद्ध, मूल 85 मंदिरों में से केवल 25 बचे हैं। शिव, विष्णु और अन्य देवताओं को समर्पित ये मंदिर मध्यकालीन भारतीय कलात्मक अभिव्यक्ति के शिखर का प्रतिनिधित्व करते हैं।",
    yearBuilt: "950–1050 CE",
    dynasty: "Chandela Dynasty",
    dynastyHi: "चंदेल वंश",
    primaryModel: "/models/hampi.glb",
    historicalModels: { past: "/models/hampi.glb", ancient: "/models/hampi_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Kandariya Mahadev Temple", description: "The largest and most ornate temple, dedicated to Shiva, soaring 30 metres — considered the pinnacle of Chandela artistic achievement.", position: [0, 1.2, 0.5] },
      { name: "Erotic Sculptures", description: "The outer walls are adorned with explicit carvings — representing tantric philosophy, the cycle of life, and Kama as one of the four aims of human existence.", position: [1.0, 0.5, 1.0] },
      { name: "Lakshmana Temple", description: "One of the best-preserved western group temples, dedicated to Vishnu, with a continuous narrative frieze of sculptures encircling the entire structure.", position: [-1.0, 0.3, 0.8] },
    ],
    facts: [
      "Of the original 85 temples built by the Chandela dynasty, only 25 survive into the 21st century",
      "The temples were lost in dense jungle for several centuries until rediscovered by British surveyor T.S. Burt in 1838",
      "The erotic sculptures represent only about 10% of the total decoration — the remaining 90% depicts deities, celestial dancers, and scenes of daily life",
      "Designated a UNESCO World Heritage Site in 1986 for extraordinary artistic and architectural achievement"
    ],
    factsHi: [
      "चंदेल वंश द्वारा बनाए गए मूल 85 मंदिरों में से केवल 25 21वीं सदी में बचे हैं",
      "मंदिर सदियों तक घने जंगल में खो गए थे, 1838 में ब्रिटिश सर्वेक्षक टी.एस. बर्ट ने इन्हें फिर से खोजा",
      "कामुक मूर्तियाँ कुल सजावट का केवल 10% हैं — शेष 90% देवताओं, अप्सराओं और दैनिक जीवन को दर्शाती हैं",
      "असाधारण कलात्मक और वास्तुकला उपलब्धि के लिए 1986 में यूनेस्को विश्व धरोहर स्थल घोषित"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is perfect — Madhya Pradesh winters are cool and dry, ideal for wandering among the temples and studying the exquisite carvings at length. The Khajuraho Dance Festival in February–March brings spectacular classical Indian dance performances with the floodlit temples as a backdrop. Avoid April–June when the heat becomes punishing.",
    bestTimeDescHi: "नवंबर से फ़रवरी एकदम सही समय है — मध्य प्रदेश की सर्दियाँ ठंडी और शुष्क होती हैं। फ़रवरी–मार्च में खजुराहो नृत्य महोत्सव में रोशन मंदिरों की पृष्ठभूमि में शास्त्रीय नृत्य की शानदार प्रस्तुति होती है। अप्रैल–जून की कड़ी गर्मी से बचें।",
    timeline: [
      { year: "831 CE", event: "Chandela dynasty founded by Nannuka; begins consolidating power in central India", eventHi: "नन्नुक द्वारा चंदेल वंश की स्थापना; मध्य भारत में शक्ति को मज़बूत करना शुरू" },
      { year: "950 CE", event: "Major temple construction begins under Chandela king Yashovarman", eventHi: "चंदेल राजा यशोवर्मन के अधीन प्रमुख मंदिर निर्माण शुरू" },
      { year: "1050 CE", event: "Final temples completed; the complex reaches its zenith with 85 temples spanning 20 km²", eventHi: "अंतिम मंदिर पूर्ण; 20 वर्ग किमी में 85 मंदिरों के साथ परिसर अपने शिखर पर" },
      { year: "1838", event: "British surveyor T.S. Burt rediscovers the temples hidden in dense forest", eventHi: "ब्रिटिश सर्वेक्षक टी.एस. बर्ट ने घने जंगल में छिपे मंदिरों को फिर से खोजा" },
      { year: "1986", event: "Designated a UNESCO World Heritage Site for extraordinary artistic achievement", eventHi: "असाधारण कलात्मक उपलब्धि के लिए यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
  {
    id: "sanchi-stupa",
    name: "Sanchi Stupa",
    nameHi: "सांची स्तूप",
    city: "Sanchi",
    state: "Madhya Pradesh",
    coordinates: [77.7395, 23.4795],
    description: "The Sanchi Stupa is one of the oldest stone structures in India and a crown jewel of Buddhist architecture. The Great Stupa at Sanchi was originally commissioned by the Maurya Emperor Ashoka in the 3rd century BCE to enshrine the relics of the Buddha. Enlarged and embellished over subsequent centuries, it now stands 16.5 metres tall with a circumference of nearly 120 metres. The four elaborately carved toranas (gateways), added in the 1st century BCE, depict scenes from the Buddha's life and Jataka tales in extraordinary detail. The hilltop site contains stupas, pillars, temples, and monasteries spanning nine centuries of Buddhist history.",
    descriptionHi: "सांची स्तूप भारत में सबसे पुरानी पत्थर संरचनाओं में से एक और बौद्ध वास्तुकला का गहना है। मौर्य सम्राट अशोक ने तीसरी शताब्दी ईसा पूर्व में बुद्ध के अवशेषों को स्थापित करने के लिए इसे बनवाया था। 16.5 मीटर ऊँचे और लगभग 120 मीटर परिधि वाले इस स्तूप में पहली शताब्दी ईसा पूर्व के चार विस्तृत नक्काशीदार तोरण हैं जो बुद्ध के जीवन के दृश्यों को दर्शाते हैं।",
    yearBuilt: "3rd century BCE (expanded 2nd–1st century BCE)",
    dynasty: "Maurya Empire",
    dynastyHi: "मौर्य साम्राज्य",
    primaryModel: "/models/lotus_temple.glb",
    historicalModels: { past: "/models/lotus_temple.glb", ancient: "/models/lotus_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Great Stupa (Stupa 1)", description: "The hemispherical dome stands 16.5 metres tall with a 120-metre circumference — the spiritual core of the entire Sanchi complex, housing Buddha's relics.", position: [0, 0.5, 0.5] },
      { name: "Northern Torana", description: "The most intact of the four carved gateways, depicting scenes from the life of the Buddha in extraordinary sculptural detail across multiple narrative registers.", position: [0, 0.8, 1.5] },
      { name: "Ashoka Pillar", description: "A polished sandstone monolithic pillar erected by Ashoka around 250 BCE — the stump and detached capital survive, bearing edicts on dharma.", position: [1.2, 0.2, 0.6] },
    ],
    facts: [
      "The Great Stupa was originally built by Emperor Ashoka in the 3rd century BCE and later doubled in size by the Shunga dynasty in the 2nd century BCE",
      "Forgotten for centuries, it was used as a quarry by locals until General Taylor rediscovered it in 1818",
      "The four intricately carved toranas (gateways) date from the 1st century BCE and depict 900 years of Buddhist history",
      "Designated a UNESCO World Heritage Site in 1989, it is one of the best-preserved Buddhist sanctuaries in the world"
    ],
    factsHi: [
      "महान स्तूप मूल रूप से तीसरी शताब्दी ईसा पूर्व में सम्राट अशोक ने बनवाया था और दूसरी शताब्दी ईसा पूर्व में शुंग वंश ने इसे दोगुना बड़ा किया",
      "सदियों तक भुला दिया गया; 1818 में जनरल टेलर द्वारा पुनर्खोज तक स्थानीय लोग इसे पत्थर की खदान के रूप में उपयोग करते थे",
      "चार नक्काशीदार तोरण पहली शताब्दी ईसा पूर्व के हैं और 900 वर्षों के बौद्ध इतिहास को दर्शाते हैं",
      "1989 में यूनेस्को विश्व धरोहर स्थल घोषित; दुनिया के सर्वोत्तम संरक्षित बौद्ध अभयारण्यों में से एक"
    ],
    visitingHours: "Sunrise to Sunset (Closed on Fridays)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (शुक्रवार को बंद)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Madhya Pradesh's cool, clear winters are perfect for exploring the hilltop complex without heat exhaustion. Morning mist occasionally wraps the ancient stupa in an ethereal atmosphere. Avoid April–June when temperatures soar past 42°C and the exposed hilltop site provides almost no shade.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — मध्य प्रदेश की ठंडी, साफ़ सर्दियाँ पहाड़ी परिसर की सैर के लिए एकदम सही हैं। कभी-कभी सुबह की धुंध प्राचीन स्तूप को एक अलौकिक वातावरण में लपेट देती है। अप्रैल–जून से बचें जब तापमान 42°C से ऊपर जाता है।",
    timeline: [
      { year: "~268 BCE", event: "Emperor Ashoka converts to Buddhism after the Kalinga war; commissions stupas across India", eventHi: "कलिंग युद्ध के बाद सम्राट अशोक बौद्ध धर्म में परिवर्तित; भारत भर में स्तूप बनवाए" },
      { year: "~250 BCE", event: "The original brick Great Stupa erected at Sanchi to enshrine the Buddha's relics", eventHi: "बुद्ध के अवशेषों के लिए सांची में मूल ईंट का महान स्तूप बनाया गया" },
      { year: "~2nd century BCE", event: "Shunga dynasty enlarges the stupa, adds the stone casing, railing, and dome", eventHi: "शुंग वंश ने स्तूप को बड़ा किया और पत्थर की परत, रेलिंग और गुंबद जोड़े" },
      { year: "~1st century BCE", event: "Four elaborately carved toranas (gateways) added by the Satavahana dynasty", eventHi: "सातवाहन वंश द्वारा चार विस्तृत नक्काशीदार तोरण जोड़े गए" },
      { year: "1989", event: "Designated a UNESCO World Heritage Site; major conservation work completed", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित; प्रमुख संरक्षण कार्य पूर्ण" },
    ],
    entryFee: "₹30 (Indians), ₹500 (Foreigners)",
    entryFeeHi: "₹30 (भारतीय), ₹500 (विदेशी)",
    UNESCO: true
  },
  {
    id: "fatehpur-sikri",
    name: "Fatehpur Sikri",
    nameHi: "फ़तेहपुर सीकरी",
    city: "Agra District",
    state: "Uttar Pradesh",
    coordinates: [77.6638, 27.0939],
    description: "Fatehpur Sikri is a 16th-century Mughal city built entirely by Emperor Akbar between 1569 and 1585 on a rocky ridge in Uttar Pradesh. After Akbar visited the Sufi saint Salim Chishti at Sikri and a son (later Emperor Jahangir) was born fulfilling the saint's prophecy, Akbar transferred his capital here from Agra. The complex includes the Buland Darwaza — the tallest gateway in the world at 54 metres — the Jama Masjid, the white marble tomb of Salim Chishti, the five-storey Panch Mahal, and a series of palaces in a breathtaking blend of Mughal, Hindu, and Jain architectural styles. The city was mysteriously abandoned just 14 years after completion.",
    descriptionHi: "फ़तेहपुर सीकरी एक 16वीं सदी का मुगल शहर है जिसे सम्राट अकबर ने 1569 से 1585 के बीच पूरी तरह बनवाया। अकबर के पुत्र (बाद में सम्राट जहाँगीर) के जन्म की भविष्यवाणी करने वाले सूफी संत सलीम चिश्ती से मिलने के बाद अकबर ने आगरा से राजधानी यहाँ स्थानांतरित की। परिसर में 54 मीटर ऊँचा बुलंद दरवाज़ा (दुनिया का सबसे बड़ा प्रवेश द्वार), जामा मस्जिद, सलीम चिश्ती का सफेद संगमरमर का मकबरा और पंच महल शामिल हैं।",
    yearBuilt: "1569–1585",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/charminar.glb",
    historicalModels: { past: "/models/charminar.glb", ancient: "/models/charminar.glb" },
    era: "medieval",
    hotspots: [
      { name: "Buland Darwaza", description: "Built to commemorate Akbar's victory over Gujarat, this 54-metre gateway is the largest in the world — inscribed with verses from the Quran.", position: [0, 1.5, 0.5] },
      { name: "Panch Mahal", description: "A five-storey open pavilion with 176 uniquely carved columns — believed to have been used as a pleasure and wind-catching pavilion by the royal household.", position: [1.0, 0.8, 0.8] },
      { name: "Tomb of Salim Chishti", description: "A stunning white marble mausoleum of the Sufi saint whose prophecy brought Akbar to Sikri — devotees still tie threads here to wish for children.", position: [-0.8, 0.3, 1.0] },
    ],
    facts: [
      "Fatehpur Sikri was built following Akbar's pilgrimage to the Sufi saint Salim Chishti, who predicted the birth of Akbar's son (later Emperor Jahangir)",
      "The Buland Darwaza at 54 metres is the tallest gateway in the world, built to commemorate Akbar's conquest of Khandesh in Gujarat",
      "The city was abandoned just 14 years after construction was completed, believed to be due to failure of the water supply",
      "Designated a UNESCO World Heritage Site in 1986 for its remarkable blend of Mughal, Hindu, and Jain architectural styles"
    ],
    factsHi: [
      "फ़तेहपुर सीकरी सूफी संत सलीम चिश्ती की तीर्थयात्रा के बाद अकबर ने बनवाई, जिन्होंने जहाँगीर के जन्म की भविष्यवाणी की थी",
      "54 मीटर ऊँचा बुलंद दरवाज़ा दुनिया का सबसे ऊँचा प्रवेश द्वार है, जो गुजरात में खानदेश विजय की स्मृति में बना",
      "निर्माण के केवल 14 वर्ष बाद शहर छोड़ दिया गया, संभवतः जल आपूर्ति विफल होने के कारण",
      "1986 में मुगल, हिंदू और जैन वास्तुशैलियों के उल्लेखनीय मिश्रण के लिए यूनेस्को विश्व धरोहर स्थल घोषित"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the sweet spot — cool, dry winters make exploring this vast open-air complex of palaces and courtyards genuinely enjoyable. Sunrise visits offer dramatic golden light on the red sandstone. Avoid March–June when temperatures in the UP plains exceed 44°C and the open site provides little shade.",
    bestTimeDescHi: "नवंबर से फ़रवरी सबसे अच्छा समय है — ठंडी, शुष्क सर्दियाँ महलों और आँगनों के विशाल परिसर की सैर को सुखद बनाती हैं। सूर्योदय के समय लाल बलुआ पत्थर पर सुनहरी रोशनी अद्भुत होती है। मार्च–जून से बचें जब तापमान 44°C से अधिक हो सकता है।",
    timeline: [
      { year: "1569", event: "Akbar visits Sufi saint Salim Chishti at Sikri; a son is born fulfilling the prophecy", eventHi: "अकबर ने सीकरी में सलीम चिश्ती से मुलाकात की; भविष्यवाणी पूरी करते हुए पुत्र का जन्म हुआ" },
      { year: "1571", event: "Construction begins; Akbar moves his capital from Agra to the new city", eventHi: "निर्माण शुरू; अकबर ने राजधानी आगरा से नए शहर में स्थानांतरित की" },
      { year: "1585", event: "City abandoned — likely due to water scarcity — capital moves to Lahore", eventHi: "शहर छोड़ा गया — संभवतः जल अभाव के कारण — राजधानी लाहौर स्थानांतरित" },
      { year: "1601", event: "Buland Darwaza added to commemorate Akbar's conquest of Khandesh", eventHi: "खानदेश पर अकबर की विजय की स्मृति में बुलंद दरवाज़ा जोड़ा गया" },
      { year: "1986", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹50 (Indians), ₹610 (Foreigners)",
    entryFeeHi: "₹50 (भारतीय), ₹610 (विदेशी)",
    UNESCO: true
  },
  {
    id: "victoria-memorial",
    name: "Victoria Memorial",
    nameHi: "विक्टोरिया मेमोरियल",
    city: "Kolkata",
    state: "West Bengal",
    coordinates: [88.3421, 22.5448],
    description: "The Victoria Memorial is a magnificent marble building in Kolkata, West Bengal, built between 1906 and 1921 in memory of Queen Victoria, Empress of India. Designed by William Emerson in the Indo-Saracenic revivalist style, the structure fuses British and Mughal architectural elements and is built from the same white Makrana marble used in the Taj Mahal. Standing 56 metres tall under its central dome — topped by a 4.9-metre rotating bronze Angel of Victory — it is set in 64 acres of ornamental gardens. It now functions as a museum with 25 galleries housing 28,394 artefacts from the colonial era.",
    descriptionHi: "विक्टोरिया मेमोरियल कोलकाता में 1906 से 1921 के बीच महारानी विक्टोरिया की स्मृति में बना एक भव्य संगमरमर का भवन है। विलियम एमर्सन द्वारा इंडो-सारसेनिक शैली में डिज़ाइन किया गया, यह ताज महल जैसे सफेद मकराना संगमरमर से बना है। 56 मीटर ऊँचे केंद्रीय गुंबद वाला यह भवन 64 एकड़ के बगीचों में स्थित है और अब 25 दीर्घाओं में 28,394 कलाकृतियों वाले संग्रहालय के रूप में काम करता है।",
    yearBuilt: "1906–1921",
    dynasty: "British Raj",
    dynastyHi: "ब्रिटिश राज",
    primaryModel: "/models/lotus_temple.glb",
    historicalModels: { past: "/models/lotus_temple.glb", ancient: "/models/lotus_temple.glb" },
    era: "modern",
    hotspots: [
      { name: "Central Dome & Angel of Victory", description: "The 56-metre dome is crowned by a 4.9-metre rotating bronze Angel of Victory — weighing over 3.6 tonnes, it turns with the wind like a majestic weathervane.", position: [0, 1.8, 0.3] },
      { name: "Royal Gallery", description: "Houses portraits of British monarchs and Viceroys — the visual centrepiece of 25 galleries containing 28,394 artefacts from the colonial era.", position: [0.8, 0.5, 1.0] },
      { name: "Ornamental Gardens", description: "64 acres of manicured gardens with ornamental pools, statues, and century-old trees — one of central Kolkata's most beloved green spaces.", position: [-1.2, -0.5, 0.8] },
    ],
    facts: [
      "Built from the same white Makrana marble as the Taj Mahal, the memorial stands 56 metres tall under its central dome",
      "The rotating bronze Angel of Victory atop the dome weighs over 3.6 tonnes and turns with the wind",
      "The memorial houses 28,394 artefacts in 25 galleries, including Queen Victoria's personal piano and state robes",
      "Viceroy Lord Curzon conceived the memorial as a 'monument of gratitude' and raised funds from Indian princes as well as the British government"
    ],
    factsHi: [
      "ताज महल जैसे सफेद मकराना संगमरमर से बना, यह मेमोरियल केंद्रीय गुंबद के नीचे 56 मीटर ऊँचा है",
      "गुंबद पर घूमने वाली कांस्य 'विजय की परी' का वजन 3.6 टन से अधिक है और यह हवा के साथ घूमती है",
      "25 दीर्घाओं में 28,394 कलाकृतियाँ हैं, जिनमें महारानी विक्टोरिया का व्यक्तिगत पियानो और राज्य वस्त्र शामिल हैं",
      "वायसराय लॉर्ड कर्ज़न ने इसे 'कृतज्ञता के स्मारक' के रूप में कल्पित किया और भारतीय राजकुमारों तथा ब्रिटिश सरकार से धन जुटाया"
    ],
    visitingHours: "10:00 AM to 5:00 PM (Closed on Mondays)",
    visitingHoursHi: "सुबह 10:00 से शाम 5:00 बजे तक (सोमवार को बंद)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Kolkata's brief but pleasant winter makes the white marble luminous in cool, clear light and the surrounding gardens come alive with flowers. The memorial is spectacularly illuminated on Republic Day (26 January). Avoid April–June when pre-monsoon heat and humidity make outdoor exploration exhausting.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — कोलकाता की संक्षिप्त लेकिन सुहावनी सर्दी में सफेद संगमरमर ठंडी, साफ़ रोशनी में चमकता है और बगीचे फूलों से जीवंत हो उठते हैं। गणतंत्र दिवस (26 जनवरी) पर मेमोरियल की रोशनी शानदार होती है। अप्रैल–जून से बचें।",
    timeline: [
      { year: "1901", event: "Queen Victoria dies; Viceroy Curzon proposes a grand memorial in Calcutta", eventHi: "महारानी विक्टोरिया का निधन; वायसराय कर्ज़न ने कलकत्ता में भव्य स्मारक का प्रस्ताव रखा" },
      { year: "1906", event: "Foundation stone laid by the Prince of Wales (later King George V)", eventHi: "वेल्स के राजकुमार (बाद में किंग जॉर्ज पंचम) द्वारा नींव का पत्थर रखा" },
      { year: "1921", event: "Memorial opened to the public by the Prince of Wales", eventHi: "वेल्स के राजकुमार द्वारा मेमोरियल जनता के लिए खोला गया" },
      { year: "1947", event: "India gains independence; memorial transferred to Indian national control", eventHi: "भारत स्वतंत्र; मेमोरियल भारतीय राष्ट्रीय नियंत्रण में आया" },
      { year: "Present", event: "One of Kolkata's most iconic landmarks; hosts cultural events and sound-and-light shows", eventHi: "कोलकाता का सबसे प्रतिष्ठित स्थल; सांस्कृतिक कार्यक्रमों और ध्वनि-प्रकाश शो का केंद्र" },
    ],
    entryFee: "₹30 (Indians), ₹500 (Foreigners)",
    entryFeeHi: "₹30 (भारतीय), ₹500 (विदेशी)",
    UNESCO: false
  },
  {
    id: "amber-fort",
    name: "Amber Fort",
    nameHi: "आमेर किला",
    city: "Jaipur",
    state: "Rajasthan",
    coordinates: [75.8513, 26.9855],
    description: "Amber Fort (also known as Amer Fort) is a majestic hilltop fortification located 11 kilometres from Jaipur, Rajasthan, overlooking the Maota Lake below. Originally founded by the Meena people, it was extensively built and expanded by Rajput chief Raja Man Singh I in 1592. The fort complex, spread over 4 square kilometres, was the principal residence of the Rajput Maharajas for over 150 years. Its most famous feature is the Sheesh Mahal (Palace of Mirrors), where thousands of tiny mirror inlays create the effect of 4,000 stars from a single candle. The fort is part of the UNESCO World Heritage Site 'Hill Forts of Rajasthan', inscribed in 2013.",
    descriptionHi: "आमेर किला (अमेर किला) जयपुर से 11 किलोमीटर दूर एक पहाड़ी पर स्थित राजसी किला है जो नीचे माओता झील की ओर देखता है। मूल रूप से मीना लोगों द्वारा स्थापित, इसे 1592 में राजपूत सरदार राजा मान सिंह प्रथम ने बड़े पैमाने पर बनवाया। 4 वर्ग किमी में फैला यह किला 150 से अधिक वर्षों तक राजपूत महाराजाओं का मुख्य निवास था। इसका सबसे प्रसिद्ध स्थान शीश महल है, जहाँ हज़ारों छोटे दर्पण एक मोमबत्ती से 4,000 तारों का प्रभाव पैदा करते हैं।",
    yearBuilt: "1592 (major expansion by Raja Man Singh I)",
    dynasty: "Kachwaha Rajput",
    dynastyHi: "कछवाहा राजपूत",
    primaryModel: "/models/charminar.glb",
    historicalModels: { past: "/models/charminar.glb", ancient: "/models/hampi.glb" },
    era: "medieval",
    hotspots: [
      { name: "Sheesh Mahal", description: "The Palace of Mirrors — every inch of walls and ceiling is covered with tiny mirror inlays that, when a single candle is lit, replicate a sky full of 4,000 stars.", position: [0, 0.8, 1.0] },
      { name: "Diwan-i-Khas", description: "The Hall of Private Audience where the Maharaja received nobles and allies — decorated with delicate floral motifs in alabaster and glasswork.", position: [1.0, 0.5, 0.5] },
      { name: "Ganesh Pol", description: "The ceremonial gateway decorated with frescoes and mosaic, featuring lattice screens (jali) through which royal women could view arrivals without being seen.", position: [-0.5, 0.5, 1.5] },
    ],
    facts: [
      "The Sheesh Mahal (Mirror Palace) is designed so that a single candle creates the effect of 4,000 stars through its thousands of tiny mirror inlays",
      "Elephants were the traditional mode of transport to the fort's main gate (Suraj Pol) — a practice that continued for tourists until 2017",
      "The fort is part of the UNESCO World Heritage Site 'Hill Forts of Rajasthan', inscribed in 2013",
      "Raja Man Singh I, who commissioned the major expansion, was one of the Navaratnas (nine jewels) of Emperor Akbar's court"
    ],
    factsHi: [
      "शीश महल इस तरह बना है कि एक मोमबत्ती की रोशनी हज़ारों छोटे दर्पणों से 4,000 तारों का प्रभाव पैदा करती है",
      "हाथी पारंपरिक रूप से किले के मुख्य द्वार तक पहुँचाते थे — 2017 तक पर्यटकों के लिए भी यह परंपरा जारी रही",
      "यह किला 2013 में यूनेस्को विश्व धरोहर स्थल 'राजस्थान के पर्वतीय किले' का हिस्सा है",
      "राजा मान सिंह प्रथम, जिन्होंने प्रमुख विस्तार कराया, सम्राट अकबर के दरबार के नवरत्नों में से एक थे"
    ],
    visitingHours: "8:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 8:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to January is ideal — Rajasthan's crisp winter makes exploring the hilltop fort and its mirror-lined palaces a pure pleasure. Morning visits offer the most beautiful soft light on the pale sandstone. The fort is especially festive during the Jaipur Literature Festival in January. Summers are brutal with temperatures touching 48°C.",
    bestTimeDescHi: "अक्तूबर से जनवरी आदर्श है — राजस्थान की खुशनुमा सर्दी में पहाड़ी किले और दर्पण-जड़ित महलों की सैर शानदार होती है। सुबह की मुलायम रोशनी बलुआ पत्थर पर सबसे सुंदर दिखती है। जनवरी में जयपुर लिटरेचर फ़ेस्टिवल के दौरान किला विशेष रूप से जीवंत होता है। गर्मियाँ 48°C तक के साथ क्रूर होती हैं।",
    timeline: [
      { year: "967 CE", event: "Amber town founded by Meena ruler Ral Dan; early fortifications built on the hill", eventHi: "मीना शासक राल दान द्वारा आमेर शहर की स्थापना; पहाड़ी पर प्रारंभिक किलेबंदी" },
      { year: "1592", event: "Raja Man Singh I begins the major construction of the current fort complex", eventHi: "राजा मान सिंह प्रथम ने वर्तमान किला परिसर का प्रमुख निर्माण शुरू किया" },
      { year: "1727", event: "Maharaja Jai Singh II founds Jaipur and moves the capital, leaving Amber as the ancestral seat", eventHi: "महाराजा जय सिंह द्वितीय ने जयपुर की स्थापना की और राजधानी वहाँ स्थानांतरित की" },
      { year: "~1630", event: "Sheesh Mahal constructed; Amber Fort reaches its architectural zenith", eventHi: "शीश महल का निर्माण; आमेर किला अपनी वास्तुकला के शिखर पर पहुँचा" },
      { year: "2013", event: "Inscribed as UNESCO World Heritage Site — part of 'Hill Forts of Rajasthan'", eventHi: "यूनेस्को विश्व धरोहर स्थल — 'राजस्थान के पर्वतीय किले' के हिस्से के रूप में अंकित" },
    ],
    entryFee: "₹100 (Indians), ₹500 (Foreigners)",
    entryFeeHi: "₹100 (भारतीय), ₹500 (विदेशी)",
    UNESCO: true
  },
  {
    id: "mahabalipuram",
    name: "Shore Temple, Mahabalipuram",
    nameHi: "शोर मंदिर, महाबलिपुरम",
    city: "Mahabalipuram",
    state: "Tamil Nadu",
    coordinates: [80.1927, 12.6269],
    description: "The Shore Temple is an 8th-century complex of shrines at the edge of the Bay of Bengal in Mahabalipuram, Tamil Nadu, built by the Pallava king Narasimhavarman II (Rajasimha). It is one of the oldest structural stone temples of South India. Part of the UNESCO-listed Group of Monuments at Mahabalipuram, the site also includes the world's largest bas-relief — Arjuna's Penance, carved into a granite boulder face 27 metres wide — and the Five Rathas, five monolithic rock-cut temple-chariots. The Shore Temple has stood at the water's edge for over 1,300 years, battered by the waves of the Bay of Bengal.",
    descriptionHi: "शोर मंदिर तमिलनाडु के महाबलिपुरम में बंगाल की खाड़ी के किनारे स्थित 8वीं शताब्दी का मंदिर परिसर है, जिसे पल्लव राजा नरसिंहवर्मन द्वितीय ने बनवाया था। यह दक्षिण भारत के सबसे पुराने संरचनात्मक पत्थर मंदिरों में से एक है। इस यूनेस्को-सूचीबद्ध स्थल में दुनिया की सबसे बड़ी बास-रिलीफ — अर्जुन की तपस्या (27 मीटर चौड़ी) — और पंच रथ भी शामिल हैं।",
    yearBuilt: "700–728 CE",
    dynasty: "Pallava Dynasty",
    dynastyHi: "पल्लव वंश",
    primaryModel: "/models/hampi.glb",
    historicalModels: { past: "/models/hampi.glb", ancient: "/models/hampi_ancient.glb" },
    era: "ancient",
    hotspots: [
      { name: "Shore Temple Shrine", description: "The three-storied stone temple facing the sea, dedicated to both Shiva and Vishnu — one of the oldest structural temples of South India, battered by the Bay of Bengal for 1,300+ years.", position: [0, 1.0, 0.5] },
      { name: "Arjuna's Penance", description: "The world's largest bas-relief — 27 metres wide and 9 metres tall — carved into a single granite boulder, depicting the descent of the Ganges from heaven.", position: [1.2, 0.5, 0.8] },
      { name: "Five Rathas (Pancha Rathas)", description: "Five monolithic rock-cut temple-chariots carved from a single granite outcrop, named after the Pandava brothers — a masterpiece of early Dravidian architecture.", position: [-1.0, 0.2, 1.2] },
    ],
    facts: [
      "The Shore Temple is unusually dedicated to both Shiva and Vishnu, housing shrines to both deities within the same complex",
      "Local legend speaks of seven pagodas at Mahabalipuram — six submerged by the sea over the millennia",
      "The 2004 Indian Ocean tsunami temporarily exposed ancient submerged ruins offshore, seemingly confirming the seven pagodas legend",
      "The Group of Monuments at Mahabalipuram was designated a UNESCO World Heritage Site in 1984, among the earliest Indian sites inscribed"
    ],
    factsHi: [
      "शोर मंदिर असामान्य रूप से शिव और विष्णु दोनों को समर्पित है — एक ही परिसर में दोनों देवताओं के मंदिर हैं",
      "स्थानीय किंवदंती के अनुसार महाबलिपुरम में मूल रूप से सात पगोडा थे — सदियों में छह समुद्र में डूब गए",
      "2004 की हिंद महासागर सुनामी ने समुद्र में डूबी प्राचीन संरचनाओं को अस्थायी रूप से उजागर किया",
      "महाबलिपुरम स्मारक समूह 1984 में यूनेस्को विश्व धरोहर स्थल घोषित — भारत के शुरुआती अंकित स्थलों में से एक"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0],
    bestTimeDesc: "October to December is the sweet spot — the post-monsoon coast is refreshed and green, temperatures drop to a pleasant 25–28°C, and the sea is calm enough for a scenic walk beside the Shore Temple. January can bring occasional cool breezes off the Bay of Bengal. Avoid July–September when the northeast monsoon lashes the Tamil Nadu coast with heavy rain.",
    bestTimeDescHi: "अक्तूबर से दिसंबर सबसे अच्छा समय है — मानसून के बाद तट ताज़ा और हरा होता है, तापमान 25–28°C तक गिर जाता है और समुद्र शोर मंदिर के बगल में सुंदर सैर के लिए पर्याप्त शांत होता है। जुलाई–सितंबर से बचें जब उत्तर-पूर्वी मानसून भारी बारिश करता है।",
    timeline: [
      { year: "630–668 CE", event: "Narasimhavarman I (Mamalla) rules the Pallava kingdom; Mahabalipuram becomes the royal port city", eventHi: "नरसिंहवर्मन प्रथम पल्लव राज्य पर शासन करते हैं; महाबलिपुरम शाही बंदरगाह शहर बना" },
      { year: "700–728 CE", event: "Shore Temple built by Narasimhavarman II (Rajasimha); Pallava art at its pinnacle", eventHi: "नरसिंहवर्मन द्वितीय ने शोर मंदिर बनवाया; पल्लव कला अपने चरम पर" },
      { year: "~800 CE", event: "Pancha Rathas and Arjuna's Penance bas-relief completed under Pallava patronage", eventHi: "पल्लव संरक्षण में पंच रथ और अर्जुन की तपस्या बास-रिलीफ पूर्ण" },
      { year: "1984", event: "Group of Monuments at Mahabalipuram inscribed as a UNESCO World Heritage Site", eventHi: "महाबलिपुरम स्मारक समूह को यूनेस्को विश्व धरोहर स्थल घोषित" },
      { year: "2004", event: "Indian Ocean tsunami temporarily exposes submerged ancient structures, validating the 'seven pagodas' legend", eventHi: "हिंद महासागर सुनामी ने समुद्र में डूबी संरचनाओं को अस्थायी रूप से उजागर किया" },
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
];
