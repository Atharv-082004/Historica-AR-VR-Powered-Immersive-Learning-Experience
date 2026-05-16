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
    bestTimeDesc: "Winter mornings offer the most magical views — cool mist at sunrise and soft golden afternoon light. Avoid April–June (extreme heat, 45°C+) and the peak monsoon crowds of July–August.",
    bestTimeDescHi: "सर्दियों की सुबह सबसे जादुई नज़ारा देती है — सूर्योदय पर ठंडी धुंध और शाम की सुनहरी रोशनी। अप्रैल–जून (45°C+ तीव्र गर्मी) और जुलाई–अगस्त की चरम भीड़ से बचें।",
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
    bestTimeDesc: "Delhi's winters (October to March) are ideal — pleasant days and cool evenings perfect for exploring the complex. Summer temperatures can exceed 45°C and the monsoon makes outdoor exploration uncomfortable.",
    bestTimeDescHi: "दिल्ली की सर्दियाँ (अक्तूबर से मार्च) आदर्श हैं — सुहावने दिन और ठंडी शामें परिसर की सैर के लिए बेहतरीन। गर्मियों में तापमान 45°C से अधिक हो सकता है और मानसून में बाहरी सैर असहज हो जाती है।",
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
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to March is ideal for exploring the Red Fort's expansive grounds. Independence Day (15 August) brings a special flag-hoisting ceremony, but visits in summer heat and monsoon humidity are tiring.",
    bestTimeDescHi: "अक्तूबर से मार्च लाल किले के विशाल परिसर की सैर के लिए आदर्श है। स्वतंत्रता दिवस (15 अगस्त) पर विशेष झंडारोहण समारोह होता है, लेकिन गर्मी और मानसून की उमस में यात्रा थकाऊ हो सकती है।",
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
    bestMonths: [9, 10, 11, 0, 1],
    bestTimeDesc: "Rajasthan winters are perfect — sunny days, cool nights, and vivid bazaars fill Jaipur's streets. Summers are brutal (up to 48°C); the monsoon brings some relief but also high humidity that fades the palace's vibrant pink facade.",
    bestTimeDescHi: "राजस्थान की सर्दियाँ एकदम सही हैं — धूप भरे दिन, ठंडी रातें और जयपुर की रंग-बिरंगी बाज़ारें। गर्मी क्रूर होती है (48°C तक); मानसून कुछ राहत देता है लेकिन महल की गुलाबी दीवारों की चमक फीकी पड़ जाती है।",
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
    bestTimeDesc: "November to February is ideal — Odisha's coastal climate is comfortable and visibility is excellent. The Konark Dance Festival in December is a spectacular bonus. Avoid June–September when heavy monsoon rains lash the coast.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श समय है — ओडिशा का तटीय मौसम सुहावना रहता है और दृश्यता उत्कृष्ट होती है। दिसंबर में कोणार्क नृत्य महोत्सव एक अतिरिक्त आकर्षण है। जून–सितंबर में भारी मानसूनी बारिश से बचें।",
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
    bestMonths: [9, 10],
    bestTimeDesc: "October to March is perfect for exploring the caves. The post-monsoon months (October–November) are especially beautiful as the surrounding Sahyadri hills turn lush green. Avoid the hot, humid summer — cave interiors become stifling.",
    bestTimeDescHi: "अक्तूबर से मार्च गुफाओं की सैर के लिए आदर्श है। मानसून के बाद के महीने (अक्तूबर–नवंबर) विशेष रूप से सुंदर होते हैं जब सह्याद्रि पहाड़ियाँ हरी-भरी हो जाती हैं। गर्म, उमस भरी गर्मी से बचें — गुफाओं के अंदर भी बहुत गर्मी होती है।",
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
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to February brings cool, dry weather ideal for the Deccan Plateau. The famous whispering gallery is best experienced in the calm, clear air of early winter mornings. March–May is scorching, and the monsoon can be humid.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी में दक्कन पठार पर ठंडा, शुष्क मौसम रहता है। प्रसिद्ध व्हिस्परिंग गैलरी का अनुभव सर्दियों की शांत, स्वच्छ सुबह में सबसे अच्छा होता है। मार्च–मई में झुलसाने वाली गर्मी, और मानसून में उमस होती है।",
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
    bestTimeDesc: "October to February is ideal — the vast open ruins are best explored in cool weather. March–May becomes scorching across the boulder-strewn landscape, and the monsoon (June–September) makes rocky terrain slippery.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी आदर्श है — विशाल खुले खंडहरों को ठंडे मौसम में सबसे अच्छे से देखा जा सकता है। मार्च–मई में पत्थरों से भरे परिदृश्य पर चिलचिलाती गर्मी होती है, और मानसून (जून–सितंबर) में चट्टानी भूमि फिसलन भरी हो जाती है।",
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
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to February is ideal for Hyderabad — mild, dry weather and uncrowded streets. Visit at dusk when the Charminar is dramatically lit. If you're lucky to be there during Ramzan, the evening bazaars around it are electric.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी हैदराबाद के लिए आदर्श है — हल्का, शुष्क मौसम और कम भीड़। सूर्यास्त के समय जाएं जब चारमीनार नाटकीय रूप से रोशन होता है। रमज़ान में जाने का मौका मिले तो आसपास के शाम के बाज़ार देखने लायक होते हैं।",
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
    bestMonths: [9, 10, 11, 0, 1],
    bestTimeDesc: "October to March is best — Delhi's cool winters let you linger in the serene gardens and reflecting pools. Winter sunlight creates a beautiful warm glow on the white marble petals. Arrive early on weekdays to beat the crowds at this hugely popular landmark.",
    bestTimeDescHi: "अक्तूबर से मार्च सबसे अच्छा समय है — दिल्ली की ठंडी सर्दियाँ शांत बगीचों और परावर्तक तालाबों में समय बिताने देती हैं। सर्दियों की धूप सफेद संगमरमर की पंखुड़ियों पर एक सुंदर गर्म चमक पैदा करती है। सप्ताह के दिनों में जल्दी पहुंचें।",
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
    bestTimeDesc: "November to February offers Mumbai's most pleasant weather for a leisurely harbour visit. The Gateway looks spectacular against monsoon skies (June–September), but the rain can be heavy. The Elephanta Island ferry runs year-round — pair your visit for a full day out.",
    bestTimeDescHi: "नवंबर से फ़रवरी मुंबई का सबसे सुहावना मौसम होता है जो बंदरगाह की सुकूनभरी यात्रा के लिए आदर्श है। मानसून (जून–सितंबर) में गेटवे बारिश के खिलाफ शानदार दिखता है, लेकिन बारिश भारी हो सकती है। एलीफेंटा द्वीप की फेरी साल भर चलती है।",
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
    bestTimeDesc: "February to April (spring) and October to November (autumn) are ideal — pleasant temperatures and major festivals like Baisakhi (April) and Diwali (October). December–January is bitterly cold but deeply spiritual; the Sarovar in morning mist is unforgettable.",
    bestTimeDescHi: "फ़रवरी से अप्रैल (वसंत) और अक्तूबर से नवंबर (शरद) आदर्श हैं — सुहावना मौसम और बैसाखी (अप्रैल) व दीवाली (अक्तूबर) जैसे प्रमुख त्योहार। दिसंबर–जनवरी बेहद ठंडा लेकिन आध्यात्मिक दृष्टि से गहरा अनुभव देने वाला है; सुबह की धुंध में सरोवर का नज़ारा अविस्मरणीय होता है।",
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
];
