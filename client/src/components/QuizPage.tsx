import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, XCircle, MapPin, Calendar, Landmark, Star, Info } from "lucide-react";

interface Question {
  type: "city" | "year" | "dynasty" | "fact" | "entry" | "material" | "identify" | "unesco" | "height" | "feature";
  monumentId: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  icon: string;
}

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const pickWrong = (correct: string, pool: string[], n = 3): string[] =>
  shuffle(pool.filter(x => x !== correct)).slice(0, n);

const ALL_QUESTIONS: Omit<Question, "correctIndex">[] = [
  // ─── TAJ MAHAL ───────────────────────────────────────────────────
  {
    type: "city", monumentId: "taj-mahal", icon: "🕌",
    prompt: "In which city does the Taj Mahal stand?",
    options: shuffle(["Agra", "Delhi", "Jaipur", "Lucknow"]),
    explanation: "The Taj Mahal is in Agra, Uttar Pradesh, on the right bank of the river Yamuna.",
  },
  {
    type: "year", monumentId: "taj-mahal", icon: "📅",
    prompt: "When was construction of the Taj Mahal completed?",
    options: shuffle(["1653", "1700", "1612", "1720"]),
    explanation: "Construction began in 1632 and was completed in 1653 — taking about 22 years.",
  },
  {
    type: "dynasty", monumentId: "taj-mahal", icon: "👑",
    prompt: "Which emperor commissioned the Taj Mahal?",
    options: shuffle(["Shah Jahan", "Akbar", "Aurangzeb", "Babur"]),
    explanation: "Shah Jahan built it as a mausoleum for his beloved wife Mumtaz Mahal.",
  },
  {
    type: "height", monumentId: "taj-mahal", icon: "📐",
    prompt: "How tall is the main dome of the Taj Mahal?",
    options: shuffle(["73 metres", "50 metres", "90 metres", "60 metres"]),
    explanation: "The central onion dome stands 73 metres high, flanked by four chhatris.",
  },
  {
    type: "material", monumentId: "taj-mahal", icon: "🪨",
    prompt: "What is the primary material used to build the Taj Mahal?",
    options: shuffle(["White marble", "Red sandstone", "Granite", "Limestone"]),
    explanation: "The entire structure is clad in white Makrana marble from Rajasthan.",
  },

  // ─── QUTUB MINAR ─────────────────────────────────────────────────
  {
    type: "city", monumentId: "qutub-minar", icon: "🗼",
    prompt: "Where is the Qutub Minar located?",
    options: shuffle(["Delhi", "Agra", "Jaipur", "Lucknow"]),
    explanation: "The Qutub Minar stands in Mehrauli, South Delhi.",
  },
  {
    type: "height", monumentId: "qutub-minar", icon: "📐",
    prompt: "What is the height of the Qutub Minar?",
    options: shuffle(["73 metres", "56 metres", "90 metres", "48 metres"]),
    explanation: "At 73 metres, it is the tallest brick minaret in the world.",
  },
  {
    type: "dynasty", monumentId: "qutub-minar", icon: "👑",
    prompt: "Which dynasty began construction of the Qutub Minar?",
    options: shuffle(["Mamluk Dynasty", "Mughal Empire", "Rajput Clan", "Lodi Dynasty"]),
    explanation: "Qutub-ud-din Aibak of the Mamluk (Slave) Dynasty started it around 1199.",
  },
  {
    type: "material", monumentId: "qutub-minar", icon: "🪨",
    prompt: "What are the first three storeys of the Qutub Minar made of?",
    options: shuffle(["Red sandstone", "White marble", "Granite", "Brick and lime"]),
    explanation: "The lower three storeys are red sandstone; the top two are marble and sandstone.",
  },
  {
    type: "feature", monumentId: "qutub-minar", icon: "✨",
    prompt: "Which unique record does the Qutub Minar hold?",
    options: shuffle(["Tallest brick minaret in the world", "Largest dome in Asia", "Oldest mosque in India", "Tallest stone tower in Asia"]),
    explanation: "Standing 73 m tall, it is officially the world's tallest brick-built minaret.",
  },

  // ─── RED FORT ────────────────────────────────────────────────────
  {
    type: "city", monumentId: "red-fort", icon: "🏰",
    prompt: "In which city is the Red Fort situated?",
    options: shuffle(["Delhi", "Agra", "Lahore", "Lucknow"]),
    explanation: "The Red Fort is in Old Delhi on the banks of the river Yamuna.",
  },
  {
    type: "year", monumentId: "red-fort", icon: "📅",
    prompt: "When was the Red Fort completed?",
    options: shuffle(["1648", "1700", "1612", "1580"]),
    explanation: "Construction ran from 1639 to 1648 under Emperor Shah Jahan.",
  },
  {
    type: "feature", monumentId: "red-fort", icon: "✨",
    prompt: "What event takes place at the Red Fort every Independence Day?",
    options: shuffle(["Prime Minister hoists national flag", "Republic Day parade", "President's address", "Beating Retreat ceremony"]),
    explanation: "Every 15 August, India's Prime Minister hoists the national flag from its ramparts.",
  },
  {
    type: "material", monumentId: "red-fort", icon: "🪨",
    prompt: "What gives the Red Fort its distinctive colour?",
    options: shuffle(["Red sandstone walls", "Red-painted plaster", "Red granite", "Terracotta tiles"]),
    explanation: "The fort's massive walls, rising 33 m, are built from red sandstone.",
  },
  {
    type: "identify", monumentId: "red-fort", icon: "🔍",
    prompt: "Which monument served as the ceremonial and political centre of the Mughal government for nearly 200 years?",
    options: shuffle(["Red Fort", "Agra Fort", "Golconda Fort", "Jaisalmer Fort"]),
    explanation: "The Red Fort was the seat of Mughal power from 1648 until 1857.",
  },

  // ─── HAWA MAHAL ──────────────────────────────────────────────────
  {
    type: "city", monumentId: "hawa-mahal", icon: "🏯",
    prompt: "In which Pink City is the Hawa Mahal found?",
    options: shuffle(["Jaipur", "Jodhpur", "Udaipur", "Bikaner"]),
    explanation: "Hawa Mahal is one of Jaipur's most iconic landmarks in Rajasthan.",
  },
  {
    type: "feature", monumentId: "hawa-mahal", icon: "✨",
    prompt: "How many small windows (jharokhas) does Hawa Mahal have?",
    options: shuffle(["953", "500", "750", "1,200"]),
    explanation: "953 jharokhas with intricate lattice work give it a honeycomb-like facade.",
  },
  {
    type: "year", monumentId: "hawa-mahal", icon: "📅",
    prompt: "In which year was Hawa Mahal built?",
    options: shuffle(["1799", "1750", "1820", "1680"]),
    explanation: "Maharaja Sawai Pratap Singh built it in 1799.",
  },
  {
    type: "identify", monumentId: "hawa-mahal", icon: "🔍",
    prompt: "Hawa Mahal was designed so royal women could observe street life without being seen. What does 'Hawa Mahal' mean?",
    options: shuffle(["Palace of Winds", "Palace of Light", "Palace of Joy", "Palace of Women"]),
    explanation: "'Hawa Mahal' translates to Palace of Winds — breezes flow freely through its latticed windows.",
  },
  {
    type: "dynasty", monumentId: "hawa-mahal", icon: "👑",
    prompt: "Which royal clan built the Hawa Mahal?",
    options: shuffle(["Rajput", "Mughal", "Maratha", "Sikh"]),
    explanation: "It was built by Maharaja Sawai Pratap Singh of the Kachhwaha Rajput dynasty.",
  },

  // ─── KONARK SUN TEMPLE ───────────────────────────────────────────
  {
    type: "city", monumentId: "konark-sun-temple", icon: "☀️",
    prompt: "The Konark Sun Temple is in which Indian state?",
    options: shuffle(["Odisha", "Tamil Nadu", "Karnataka", "Andhra Pradesh"]),
    explanation: "The temple stands near the town of Konark on the coastline of Odisha.",
  },
  {
    type: "feature", monumentId: "konark-sun-temple", icon: "✨",
    prompt: "The Konark Sun Temple is designed in the shape of what?",
    options: shuffle(["A colossal chariot of the Sun God", "A multi-tiered pyramid", "A lotus flower", "A sailing ship"]),
    explanation: "The temple mimics a giant stone chariot with 24 wheels pulled by 7 horses.",
  },
  {
    type: "identify", monumentId: "konark-sun-temple", icon: "🔍",
    prompt: "The wheels of which temple can be used as accurate sundials?",
    options: shuffle(["Konark Sun Temple", "Brihadeeswara Temple", "Meenakshi Temple", "Lingaraja Temple"]),
    explanation: "Each of the 24 carved wheels at Konark is a precision sundial telling the time.",
  },
  {
    type: "dynasty", monumentId: "konark-sun-temple", icon: "👑",
    prompt: "Which king built the Konark Sun Temple?",
    options: shuffle(["Narasimhadeva I", "Krishnadevaraya", "Rajendra Chola", "Pulakesi II"]),
    explanation: "King Narasimhadeva I of the Eastern Ganga Dynasty built it around 1250 CE.",
  },
  {
    type: "year", monumentId: "konark-sun-temple", icon: "📅",
    prompt: "Approximately when was the Konark Sun Temple built?",
    options: shuffle(["1250 CE", "950 CE", "1400 CE", "700 CE"]),
    explanation: "Construction dates to around 1250 CE during the Eastern Ganga Dynasty.",
  },

  // ─── AJANTA & ELLORA ─────────────────────────────────────────────
  {
    type: "city", monumentId: "ajanta-ellora", icon: "🏛️",
    prompt: "Near which city are the Ajanta and Ellora Caves located?",
    options: shuffle(["Aurangabad", "Pune", "Nashik", "Nagpur"]),
    explanation: "Both cave complexes are near Aurangabad (now Chhatrapati Sambhajinagar) in Maharashtra.",
  },
  {
    type: "feature", monumentId: "ajanta-ellora", icon: "✨",
    prompt: "What is the Kailasa Temple at Ellora famous for?",
    options: shuffle(["Largest monolithic rock excavation in the world", "Tallest rock-cut statue in India", "Oldest Buddhist monastery", "Largest cave painting collection"]),
    explanation: "Kailasa Temple (Cave 16) is carved top-down from a single rock — the world's largest monolithic structure.",
  },
  {
    type: "identify", monumentId: "ajanta-ellora", icon: "🔍",
    prompt: "Which caves contain Buddhist, Hindu, AND Jain temples side by side — reflecting ancient religious harmony?",
    options: shuffle(["Ellora Caves", "Ajanta Caves", "Elephanta Caves", "Badami Caves"]),
    explanation: "Ellora's 34 caves span all three religions carved between the 6th and 10th centuries CE.",
  },
  {
    type: "dynasty", monumentId: "ajanta-ellora", icon: "👑",
    prompt: "Which dynasty carved the Kailasa Temple at Ellora?",
    options: shuffle(["Rashtrakuta", "Mughal", "Chola", "Maratha"]),
    explanation: "The Kailasa Temple was commissioned by the Rashtrakuta king Dantidurga around 756 CE.",
  },
  {
    type: "material", monumentId: "ajanta-ellora", icon: "🪨",
    prompt: "The Ajanta and Ellora cave temples were primarily carved from which rock?",
    options: shuffle(["Basalt / volcanic rock", "Granite", "Sandstone", "Limestone"]),
    explanation: "The Deccan plateau's basalt cliffs were carved over centuries to create these monuments.",
  },

  // ─── GOL GUMBAZ ──────────────────────────────────────────────────
  {
    type: "city", monumentId: "gol-gumbaz", icon: "🕌",
    prompt: "Gol Gumbaz is located in which Karnataka city?",
    options: shuffle(["Bijapur", "Bengaluru", "Mysuru", "Hampi"]),
    explanation: "Gol Gumbaz stands in Vijayapura (Bijapur) in northern Karnataka.",
  },
  {
    type: "feature", monumentId: "gol-gumbaz", icon: "✨",
    prompt: "What is Gol Gumbaz's dome famous for?",
    options: shuffle(["Whispering gallery with remarkable acoustics", "Gilded interior ceiling", "Hidden underground chambers", "Rotating central platform"]),
    explanation: "The gallery around the inner dome bounces even a whisper across its 44 m diameter.",
  },
  {
    type: "identify", monumentId: "gol-gumbaz", icon: "🔍",
    prompt: "Gol Gumbaz is the mausoleum of which sultan?",
    options: shuffle(["Mohammed Adil Shah", "Ibrahim Adil Shah", "Tipu Sultan", "Hyder Ali"]),
    explanation: "Mohammed Adil Shah, fifth ruler of Bijapur, commissioned this tomb for himself.",
  },
  {
    type: "dynasty", monumentId: "gol-gumbaz", icon: "👑",
    prompt: "Gol Gumbaz was built by which dynasty?",
    options: shuffle(["Adil Shahi Dynasty", "Vijayanagara Empire", "Bahmani Sultanate", "Nizam of Hyderabad"]),
    explanation: "The Adil Shahi dynasty of Bijapur ruled when Gol Gumbaz was completed in 1656.",
  },
  {
    type: "height", monumentId: "gol-gumbaz", icon: "📐",
    prompt: "What is the diameter of Gol Gumbaz's dome?",
    options: shuffle(["44 metres", "73 metres", "30 metres", "58 metres"]),
    explanation: "At 44 m across it is one of the largest unsupported domes in the world.",
  },

  // ─── HAMPI ───────────────────────────────────────────────────────
  {
    type: "city", monumentId: "hampi", icon: "🏛️",
    prompt: "Hampi is situated on the banks of which river?",
    options: shuffle(["Tungabhadra", "Godavari", "Krishna", "Kaveri"]),
    explanation: "The ruins of Hampi spread along the south bank of the Tungabhadra in Karnataka.",
  },
  {
    type: "feature", monumentId: "hampi", icon: "✨",
    prompt: "The stone chariot at Hampi's Vittala Temple is depicted on which Indian currency note?",
    options: shuffle(["₹50 note", "₹100 note", "₹500 note", "₹10 note"]),
    explanation: "The iconic Vittala Temple stone chariot appears on the Indian ₹50 banknote.",
  },
  {
    type: "identify", monumentId: "hampi", icon: "🔍",
    prompt: "Which ancient empire made Hampi its glorious capital?",
    options: shuffle(["Vijayanagara Empire", "Chola Empire", "Maratha Empire", "Mughal Empire"]),
    explanation: "Hampi served as the capital of the Vijayanagara Empire from the 14th to 16th centuries.",
  },
  {
    type: "dynasty", monumentId: "hampi", icon: "👑",
    prompt: "The Vittala Temple's famous musical pillars produce what when tapped?",
    options: shuffle(["Different musical notes", "A whispering echo", "A bell-like ring only", "No sound — it is a myth"]),
    explanation: "Each carved pillar resonates at a different musical pitch when struck.",
  },
  {
    type: "material", monumentId: "hampi", icon: "🪨",
    prompt: "Hampi's temples and ruins are primarily built from which stone?",
    options: shuffle(["Granite", "Sandstone", "Marble", "Basalt"]),
    explanation: "The local Deccan granite found in the boulder-strewn hills was the main material.",
  },

  // ─── CHARMINAR ───────────────────────────────────────────────────
  {
    type: "city", monumentId: "charminar", icon: "🕌",
    prompt: "In which city does the Charminar stand?",
    options: shuffle(["Hyderabad", "Secunderabad", "Bijapur", "Aurangabad"]),
    explanation: "The Charminar is the iconic centrepiece of the old city of Hyderabad.",
  },
  {
    type: "feature", monumentId: "charminar", icon: "✨",
    prompt: "What does 'Charminar' literally mean?",
    options: shuffle(["Four Minarets", "Four Arches", "City Mosque", "Four Pillars"]),
    explanation: "'Char' means four and 'minar' means tower — the four minarets define the monument.",
  },
  {
    type: "year", monumentId: "charminar", icon: "📅",
    prompt: "In which year was the Charminar built?",
    options: shuffle(["1591", "1650", "1520", "1700"]),
    explanation: "Muhammad Quli Qutb Shah built it in 1591 to commemorate the end of a plague.",
  },
  {
    type: "height", monumentId: "charminar", icon: "📐",
    prompt: "How tall are the four minarets of the Charminar?",
    options: shuffle(["56 metres", "73 metres", "40 metres", "30 metres"]),
    explanation: "Each of the four minarets rises 56 metres from the ground.",
  },
  {
    type: "identify", monumentId: "charminar", icon: "🔍",
    prompt: "The oldest still-active mosque in Hyderabad is located on the upper floor of which monument?",
    options: shuffle(["Charminar", "Golconda Fort", "Mecca Masjid", "Falaknuma Palace"]),
    explanation: "A small mosque on the top floor of the Charminar has been in use since 1591.",
  },

  // ─── LOTUS TEMPLE ────────────────────────────────────────────────
  {
    type: "city", monumentId: "lotus-temple", icon: "🌸",
    prompt: "The Lotus Temple is a house of worship for which faith?",
    options: shuffle(["Bahá'í Faith", "Buddhism", "Hinduism", "Jainism"]),
    explanation: "The Lotus Temple is a Bahá'í House of Worship, open to all regardless of religion.",
  },
  {
    type: "feature", monumentId: "lotus-temple", icon: "✨",
    prompt: "How many marble petals make up the exterior of the Lotus Temple?",
    options: shuffle(["27", "9", "18", "36"]),
    explanation: "27 free-standing marble-clad petals form nine clusters of three, creating nine sides.",
  },
  {
    type: "year", monumentId: "lotus-temple", icon: "📅",
    prompt: "When was the Lotus Temple dedicated?",
    options: shuffle(["1986", "1975", "1999", "1965"]),
    explanation: "It was completed and dedicated in December 1986.",
  },
  {
    type: "identify", monumentId: "lotus-temple", icon: "🔍",
    prompt: "Which New Delhi temple is surrounded by nine reflecting pools that mirror its petal shape?",
    options: shuffle(["Lotus Temple", "Akshardham Temple", "Birla Mandir", "ISKCON Temple"]),
    explanation: "Nine reflecting pools encircle the Lotus Temple, mirroring its 27 marble petals.",
  },
  {
    type: "entry", monumentId: "lotus-temple", icon: "🎫",
    prompt: "What is the entry fee for the Lotus Temple?",
    options: shuffle(["Free for all visitors", "₹200 for foreigners", "₹100 for everyone", "₹50 for Indians"]),
    explanation: "Entry to the Lotus Temple is completely free for all visitors.",
  },

  // ─── GATEWAY OF INDIA ────────────────────────────────────────────
  {
    type: "city", monumentId: "gateway-of-india", icon: "🌊",
    prompt: "The Gateway of India overlooks which sea?",
    options: shuffle(["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Lakshadweep Sea"]),
    explanation: "The Gateway faces the Mumbai Harbour and the vast Arabian Sea.",
  },
  {
    type: "year", monumentId: "gateway-of-india", icon: "📅",
    prompt: "When was the Gateway of India officially completed?",
    options: shuffle(["1924", "1911", "1947", "1900"]),
    explanation: "Though designed in 1913, it was completed and inaugurated in 1924.",
  },
  {
    type: "identify", monumentId: "gateway-of-india", icon: "🔍",
    prompt: "Which monument was the last to see British troops leave India in 1948?",
    options: shuffle(["Gateway of India", "India Gate", "Victoria Memorial", "Red Fort"]),
    explanation: "The last British regiment marched through the Gateway of India as they left in 1948.",
  },
  {
    type: "height", monumentId: "gateway-of-india", icon: "📐",
    prompt: "How tall is the Gateway of India?",
    options: shuffle(["26 metres", "40 metres", "50 metres", "18 metres"]),
    explanation: "The monument stands 26 metres (85 feet) tall in the Indo-Saracenic style.",
  },
  {
    type: "dynasty", monumentId: "gateway-of-india", icon: "👑",
    prompt: "The Gateway of India was built to commemorate the visit of which monarch?",
    options: shuffle(["King George V", "Queen Victoria", "King Edward VII", "Queen Elizabeth II"]),
    explanation: "It was erected to mark the 1911 visit of King-Emperor George V and Queen Mary.",
  },

  // ─── GOLDEN TEMPLE ───────────────────────────────────────────────
  {
    type: "city", monumentId: "golden-temple", icon: "✨",
    prompt: "In which city is the Golden Temple located?",
    options: shuffle(["Amritsar", "Ludhiana", "Chandigarh", "Patiala"]),
    explanation: "Sri Harmandir Sahib (Golden Temple) is the spiritual centre of Amritsar, Punjab.",
  },
  {
    type: "feature", monumentId: "golden-temple", icon: "🌟",
    prompt: "Approximately how much gold was used to cover the Golden Temple?",
    options: shuffle(["750 kg", "250 kg", "1,000 kg", "500 kg"]),
    explanation: "About 750 kg of pure gold leaf covers the upper floors of the temple.",
  },
  {
    type: "identify", monumentId: "golden-temple", icon: "🔍",
    prompt: "Which Sikh Guru had the foundation stone of the Golden Temple laid by a Muslim Sufi saint?",
    options: shuffle(["Guru Arjan Dev", "Guru Nanak Dev", "Guru Gobind Singh", "Guru Ram Das"]),
    explanation: "Guru Arjan, the fifth Sikh Guru, asked Mian Mir to lay the foundation — symbolising inclusivity.",
  },
  {
    type: "entry", monumentId: "golden-temple", icon: "🎫",
    prompt: "What does the Golden Temple's langar (community kitchen) offer daily?",
    options: shuffle(["Free meals to up to 100,000 people", "Paid meals for pilgrims only", "Tea and snacks free of charge", "Free accommodation and food"]),
    explanation: "The langar serves free vegetarian meals to up to 100,000 people every single day.",
  },
  {
    type: "dynasty", monumentId: "golden-temple", icon: "👑",
    prompt: "The Golden Temple blends which two architectural styles?",
    options: shuffle(["Hindu and Islamic", "Mughal and Rajput", "Buddhist and Hindu", "Sikh and Persian"]),
    explanation: "The temple uniquely fuses Hindu temple architecture with Islamic Mughal elements.",
  },
];

const buildQuestions = (): Question[] => {
  const withIndex: Question[] = ALL_QUESTIONS.map(q => ({
    ...q,
    correctIndex: q.options.indexOf(
      q.options.find((_, i) => {
        const correctMap: Record<string, number> = {};
        return false;
      }) ?? q.options[0]
    ),
  }));

  const resolved: Question[] = ALL_QUESTIONS.map(q => {
    const shuffledOptions = shuffle(q.options);
    const correct = q.options[0];
    return {
      ...q,
      options: shuffledOptions,
      correctIndex: shuffledOptions.indexOf(correct),
    };
  });

  const byMonument: Record<string, Question[]> = {};
  for (const q of resolved) {
    if (!byMonument[q.monumentId]) byMonument[q.monumentId] = [];
    byMonument[q.monumentId].push(q);
  }

  const picked: Question[] = [];
  for (const id of Object.keys(byMonument)) {
    const qs = shuffle(byMonument[id]);
    picked.push(...qs.slice(0, 2));
  }

  return shuffle(picked).slice(0, 15);
};

const typeLabel: Record<Question["type"], string> = {
  city: "Location",
  year: "Year",
  dynasty: "Dynasty / Builder",
  fact: "Fun Fact",
  entry: "Entry & Access",
  material: "Materials",
  identify: "Identify the Monument",
  unesco: "UNESCO Status",
  height: "Dimensions",
  feature: "Unique Feature",
};

const typeColor: Record<Question["type"], string> = {
  city: "bg-blue-100 text-blue-700",
  year: "bg-purple-100 text-purple-700",
  dynasty: "bg-amber-100 text-amber-700",
  fact: "bg-green-100 text-green-700",
  entry: "bg-teal-100 text-teal-700",
  material: "bg-stone-100 text-stone-700",
  identify: "bg-rose-100 text-rose-700",
  unesco: "bg-indigo-100 text-indigo-700",
  height: "bg-orange-100 text-orange-700",
  feature: "bg-yellow-100 text-yellow-700",
};

const QuizPage = () => {
  const [, setLocation] = useLocation();
  const [questions, setQuestions] = useState<Question[]>(() => buildQuestions());
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[index];

  const onPick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.correctIndex) setScore(s => s + 1);
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      setDone(true);
    } else {
      setIndex(i => i + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setQuestions(buildQuestions());
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">
              Heritage Quiz
            </h1>
            <p className="text-sm text-orange-600 mt-0.5">Questions span every monument & topic</p>
          </div>
          <Button variant="outline" onClick={() => setLocation("/")}>Back to Map</Button>
        </div>

        {!done ? (
          <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between text-sm text-amber-700 mb-3">
                <span>Question {index + 1} of {questions.length}</span>
                <span className="font-semibold">Score: {score} / {index + (picked !== null ? 1 : 0)}</span>
              </div>

              <div className="h-1.5 w-full bg-amber-100 rounded-full mb-5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all"
                  style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="mb-1">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColor[q.type]}`}>
                  {q.icon} {typeLabel[q.type]}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  className="my-4"
                >
                  <p className="text-lg font-medium text-orange-900">{q.prompt}</p>
                </motion.div>
              </AnimatePresence>

              <div className="grid gap-3">
                {q.options.map((opt, i) => {
                  const isCorrect = picked !== null && i === q.correctIndex;
                  const isWrong = picked === i && i !== q.correctIndex;
                  const isNeutral = picked !== null && i !== q.correctIndex && picked !== i;
                  return (
                    <button
                      key={i}
                      onClick={() => onPick(i)}
                      disabled={picked !== null}
                      className={`text-left px-4 py-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                        isCorrect
                          ? "bg-emerald-50 border-emerald-400 text-emerald-900"
                          : isWrong
                          ? "bg-rose-50 border-rose-400 text-rose-900"
                          : isNeutral
                          ? "bg-white/50 border-gray-100 text-gray-400"
                          : "bg-white border-amber-200 hover:bg-amber-50 hover:border-amber-400 text-orange-900"
                      }`}
                    >
                      {picked !== null && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />}
                      {picked !== null && isWrong && <XCircle className="h-5 w-5 text-rose-500 shrink-0" />}
                      {(picked === null || isNeutral) && (
                        <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                      )}
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {picked !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5"
                >
                  <div className={`rounded-lg p-3 flex gap-2 mb-4 ${picked === q.correctIndex ? "bg-emerald-50 border border-emerald-200" : "bg-rose-50 border border-rose-200"}`}>
                    <Info className={`h-5 w-5 mt-0.5 shrink-0 ${picked === q.correctIndex ? "text-emerald-600" : "text-rose-600"}`} />
                    <div>
                      <p className={`text-xs font-semibold mb-0.5 ${picked === q.correctIndex ? "text-emerald-700" : "text-rose-700"}`}>
                        {picked === q.correctIndex ? "Correct!" : `Correct answer: ${q.options[q.correctIndex]}`}
                      </p>
                      <p className="text-sm text-gray-700">{q.explanation}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={next}
                      className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                    >
                      {index + 1 >= questions.length ? "See results" : "Next question →"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-4">
                {score === questions.length ? "🏆" : score >= questions.length * 0.7 ? "🎉" : score >= questions.length * 0.4 ? "📚" : "🏛️"}
              </div>
              <h2 className="text-2xl font-bold text-amber-800 mb-2">Quiz Complete!</h2>
              <p className="text-orange-800 mb-1">Your score</p>
              <p className="text-6xl font-bold text-orange-700 mb-2">
                {score} <span className="text-3xl text-orange-400">/ {questions.length}</span>
              </p>
              <p className="text-amber-700 mb-6 text-sm">
                {score === questions.length
                  ? "Perfect! You are a true heritage scholar of India."
                  : score >= questions.length * 0.7
                  ? "Impressive — you know India's monuments very well!"
                  : score >= questions.length * 0.4
                  ? "Not bad at all. A little more exploring and you'll ace it."
                  : "There's so much to discover — browse some monuments and try again!"}
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={restart} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  Play again
                </Button>
                <Button variant="outline" onClick={() => setLocation("/")}>Back to Map</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
