import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

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

const ALL_QUESTIONS: Omit<Question, "correctIndex">[] = [
  { type: "city", monumentId: "taj-mahal", icon: "🕌", prompt: "In which city does the Taj Mahal stand?", options: shuffle(["Agra", "Delhi", "Jaipur", "Lucknow"]), explanation: "The Taj Mahal is in Agra, Uttar Pradesh, on the right bank of the river Yamuna." },
  { type: "year", monumentId: "taj-mahal", icon: "📅", prompt: "When was construction of the Taj Mahal completed?", options: shuffle(["1653", "1700", "1612", "1720"]), explanation: "Construction began in 1632 and was completed in 1653 — taking about 22 years." },
  { type: "dynasty", monumentId: "taj-mahal", icon: "👑", prompt: "Which emperor commissioned the Taj Mahal?", options: shuffle(["Shah Jahan", "Akbar", "Aurangzeb", "Babur"]), explanation: "Shah Jahan built it as a mausoleum for his beloved wife Mumtaz Mahal." },
  { type: "height", monumentId: "taj-mahal", icon: "📐", prompt: "How tall is the main dome of the Taj Mahal?", options: shuffle(["73 metres", "50 metres", "90 metres", "60 metres"]), explanation: "The central onion dome stands 73 metres high, flanked by four chhatris." },
  { type: "material", monumentId: "taj-mahal", icon: "🪨", prompt: "What is the primary material used to build the Taj Mahal?", options: shuffle(["White marble", "Red sandstone", "Granite", "Limestone"]), explanation: "The entire structure is clad in white Makrana marble from Rajasthan." },
  { type: "city", monumentId: "qutub-minar", icon: "🗼", prompt: "Where is the Qutub Minar located?", options: shuffle(["Delhi", "Agra", "Jaipur", "Lucknow"]), explanation: "The Qutub Minar stands in Mehrauli, South Delhi." },
  { type: "height", monumentId: "qutub-minar", icon: "📐", prompt: "What is the height of the Qutub Minar?", options: shuffle(["73 metres", "56 metres", "90 metres", "48 metres"]), explanation: "At 73 metres, it is the tallest brick minaret in the world." },
  { type: "dynasty", monumentId: "qutub-minar", icon: "👑", prompt: "Which dynasty began construction of the Qutub Minar?", options: shuffle(["Mamluk Dynasty", "Mughal Empire", "Rajput Clan", "Lodi Dynasty"]), explanation: "Qutub-ud-din Aibak of the Mamluk (Slave) Dynasty started it around 1199." },
  { type: "material", monumentId: "qutub-minar", icon: "🪨", prompt: "What are the first three storeys of the Qutub Minar made of?", options: shuffle(["Red sandstone", "White marble", "Granite", "Brick and lime"]), explanation: "The lower three storeys are red sandstone; the top two are marble and sandstone." },
  { type: "feature", monumentId: "qutub-minar", icon: "✨", prompt: "Which unique record does the Qutub Minar hold?", options: shuffle(["Tallest brick minaret in the world", "Largest dome in Asia", "Oldest mosque in India", "Tallest stone tower in Asia"]), explanation: "Standing 73 m tall, it is officially the world's tallest brick-built minaret." },
  { type: "city", monumentId: "red-fort", icon: "🏰", prompt: "In which city is the Red Fort situated?", options: shuffle(["Delhi", "Agra", "Lahore", "Lucknow"]), explanation: "The Red Fort is in Old Delhi on the banks of the river Yamuna." },
  { type: "year", monumentId: "red-fort", icon: "📅", prompt: "When was the Red Fort completed?", options: shuffle(["1648", "1700", "1612", "1580"]), explanation: "Construction ran from 1639 to 1648 under Emperor Shah Jahan." },
  { type: "feature", monumentId: "red-fort", icon: "✨", prompt: "What event takes place at the Red Fort every Independence Day?", options: shuffle(["Prime Minister hoists national flag", "Republic Day parade", "President's address", "Beating Retreat ceremony"]), explanation: "Every 15 August, India's Prime Minister hoists the national flag from its ramparts." },
  { type: "city", monumentId: "hawa-mahal", icon: "🏯", prompt: "In which Pink City is the Hawa Mahal found?", options: shuffle(["Jaipur", "Jodhpur", "Udaipur", "Bikaner"]), explanation: "Hawa Mahal is one of Jaipur's most iconic landmarks in Rajasthan." },
  { type: "feature", monumentId: "hawa-mahal", icon: "✨", prompt: "How many small windows (jharokhas) does Hawa Mahal have?", options: shuffle(["953", "500", "750", "1,200"]), explanation: "953 jharokhas with intricate lattice work give it a honeycomb-like facade." },
  { type: "identify", monumentId: "hawa-mahal", icon: "🔍", prompt: "Hawa Mahal was designed so royal women could observe street life without being seen. What does 'Hawa Mahal' mean?", options: shuffle(["Palace of Winds", "Palace of Light", "Palace of Joy", "Palace of Women"]), explanation: "'Hawa Mahal' translates to Palace of Winds — breezes flow freely through its latticed windows." },
  { type: "city", monumentId: "konark-sun-temple", icon: "☀️", prompt: "The Konark Sun Temple is in which Indian state?", options: shuffle(["Odisha", "Tamil Nadu", "Karnataka", "Andhra Pradesh"]), explanation: "The temple stands near the town of Konark on the coastline of Odisha." },
  { type: "feature", monumentId: "konark-sun-temple", icon: "✨", prompt: "The Konark Sun Temple is designed in the shape of what?", options: shuffle(["A colossal chariot of the Sun God", "A multi-tiered pyramid", "A lotus flower", "A sailing ship"]), explanation: "The temple mimics a giant stone chariot with 24 wheels pulled by 7 horses." },
  { type: "identify", monumentId: "konark-sun-temple", icon: "🔍", prompt: "The wheels of which temple can be used as accurate sundials?", options: shuffle(["Konark Sun Temple", "Brihadeeswara Temple", "Meenakshi Temple", "Lingaraja Temple"]), explanation: "Each of the 24 carved wheels at Konark is a precision sundial telling the time." },
  { type: "city", monumentId: "ajanta-ellora", icon: "🏛️", prompt: "Near which city are the Ajanta and Ellora Caves located?", options: shuffle(["Aurangabad", "Pune", "Nashik", "Nagpur"]), explanation: "Both cave complexes are near Aurangabad in Maharashtra." },
  { type: "feature", monumentId: "ajanta-ellora", icon: "✨", prompt: "What is the Kailasa Temple at Ellora famous for?", options: shuffle(["Largest monolithic rock excavation in the world", "Tallest rock-cut statue in India", "Oldest Buddhist monastery", "Largest cave painting collection"]), explanation: "Kailasa Temple (Cave 16) is carved top-down from a single rock — the world's largest monolithic structure." },
  { type: "city", monumentId: "gol-gumbaz", icon: "🕌", prompt: "Gol Gumbaz is located in which Karnataka city?", options: shuffle(["Bijapur", "Bengaluru", "Mysuru", "Hampi"]), explanation: "Gol Gumbaz stands in Vijayapura (Bijapur) in northern Karnataka." },
  { type: "feature", monumentId: "gol-gumbaz", icon: "✨", prompt: "What is Gol Gumbaz's dome famous for?", options: shuffle(["Whispering gallery with remarkable acoustics", "Gilded interior ceiling", "Hidden underground chambers", "Rotating central platform"]), explanation: "The gallery around the inner dome bounces even a whisper across its 44 m diameter." },
  { type: "city", monumentId: "hampi", icon: "🏛️", prompt: "Hampi is situated on the banks of which river?", options: shuffle(["Tungabhadra", "Godavari", "Krishna", "Kaveri"]), explanation: "The ruins of Hampi spread along the south bank of the Tungabhadra in Karnataka." },
  { type: "feature", monumentId: "hampi", icon: "✨", prompt: "The stone chariot at Hampi's Vittala Temple is depicted on which Indian currency note?", options: shuffle(["₹50 note", "₹100 note", "₹500 note", "₹10 note"]), explanation: "The iconic Vittala Temple stone chariot appears on the Indian ₹50 banknote." },
  { type: "city", monumentId: "charminar", icon: "🕌", prompt: "In which city does the Charminar stand?", options: shuffle(["Hyderabad", "Secunderabad", "Bijapur", "Aurangabad"]), explanation: "The Charminar is the iconic centrepiece of the old city of Hyderabad." },
  { type: "feature", monumentId: "charminar", icon: "✨", prompt: "What does 'Charminar' literally mean?", options: shuffle(["Four Minarets", "Four Arches", "City Mosque", "Four Pillars"]), explanation: "'Char' means four and 'minar' means tower — the four minarets define the monument." },
  { type: "city", monumentId: "lotus-temple", icon: "🌸", prompt: "The Lotus Temple is a house of worship for which faith?", options: shuffle(["Bahá'í Faith", "Buddhism", "Hinduism", "Jainism"]), explanation: "The Lotus Temple is a Bahá'í House of Worship, open to all regardless of religion." },
  { type: "feature", monumentId: "lotus-temple", icon: "✨", prompt: "How many marble petals make up the exterior of the Lotus Temple?", options: shuffle(["27", "9", "18", "36"]), explanation: "27 free-standing marble-clad petals form nine clusters of three, creating nine sides." },
  { type: "city", monumentId: "gateway-of-india", icon: "🌊", prompt: "The Gateway of India overlooks which sea?", options: shuffle(["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Lakshadweep Sea"]), explanation: "The Gateway faces the Mumbai Harbour and the vast Arabian Sea." },
  { type: "identify", monumentId: "gateway-of-india", icon: "🔍", prompt: "Which monument was the last to see British troops leave India in 1948?", options: shuffle(["Gateway of India", "India Gate", "Victoria Memorial", "Red Fort"]), explanation: "The last British regiment marched through the Gateway of India as they left in 1948." },
  { type: "city", monumentId: "golden-temple", icon: "✨", prompt: "In which city is the Golden Temple located?", options: shuffle(["Amritsar", "Ludhiana", "Chandigarh", "Patiala"]), explanation: "Sri Harmandir Sahib (Golden Temple) is the spiritual centre of Amritsar, Punjab." },
  { type: "feature", monumentId: "golden-temple", icon: "🌟", prompt: "Approximately how much gold was used to cover the Golden Temple?", options: shuffle(["750 kg", "250 kg", "1,000 kg", "500 kg"]), explanation: "About 750 kg of pure gold leaf covers the upper floors of the temple." },
];

const buildQuestions = (count = 15): Question[] => {
  const resolved: Question[] = ALL_QUESTIONS.map(q => {
    const shuffledOptions = shuffle(q.options);
    const correct = q.options[0];
    return { ...q, options: shuffledOptions, correctIndex: shuffledOptions.indexOf(correct) };
  });
  const byMonument: Record<string, Question[]> = {};
  for (const q of resolved) {
    if (!byMonument[q.monumentId]) byMonument[q.monumentId] = [];
    byMonument[q.monumentId].push(q);
  }
  const picked: Question[] = [];
  for (const id of Object.keys(byMonument)) picked.push(...shuffle(byMonument[id]).slice(0, 2));
  return shuffle(picked).slice(0, count);
};

const typeLabel: Record<Question["type"], string> = {
  city: "Location", year: "Year", dynasty: "Dynasty / Builder", fact: "Fun Fact",
  entry: "Entry & Access", material: "Materials", identify: "Identify the Monument",
  unesco: "UNESCO Status", height: "Dimensions", feature: "Unique Feature",
};
const typeColor: Record<Question["type"], string> = {
  city: "bg-blue-100 text-blue-700", year: "bg-purple-100 text-purple-700",
  dynasty: "bg-amber-100 text-amber-700", fact: "bg-green-100 text-green-700",
  entry: "bg-teal-100 text-teal-700", material: "bg-stone-100 text-stone-700",
  identify: "bg-rose-100 text-rose-700", unesco: "bg-indigo-100 text-indigo-700",
  height: "bg-orange-100 text-orange-700", feature: "bg-yellow-100 text-yellow-700",
};

const BLITZ_SECONDS = 60;
const POINTS_PER_Q = 10;
const STREAK_THRESHOLDS = [1, 3, 5, 8];
const MULTIPLIERS = [1, 2, 3, 5];
const LS_KEY = "historica-blitz-scores";

function getMultiplier(streak: number) {
  let m = 1;
  for (let i = 0; i < STREAK_THRESHOLDS.length; i++) {
    if (streak >= STREAK_THRESHOLDS[i]) m = MULTIPLIERS[i];
  }
  return m;
}

function loadScores(): number[] {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); }
  catch { return []; }
}
function saveScore(s: number) {
  const scores = [...loadScores(), s].sort((a, b) => b - a).slice(0, 5);
  localStorage.setItem(LS_KEY, JSON.stringify(scores));
}

type Mode = "menu" | "classic" | "blitz";

const QuizPage = () => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [mode, setMode] = useState<Mode>("menu");

  // Classic state
  const [questions, setQuestions] = useState<Question[]>(() => buildQuestions());
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  // Blitz state
  const [blitzQuestions, setBlitzQuestions] = useState<Question[]>([]);
  const [blitzIndex, setBlitzIndex] = useState(0);
  const [blitzPicked, setBlitzPicked] = useState<number | null>(null);
  const [blitzScore, setBlitzScore] = useState(0);
  const [blitzStreak, setBlitzStreak] = useState(0);
  const [blitzTimeLeft, setBlitzTimeLeft] = useState(BLITZ_SECONDS);
  const [blitzDone, setBlitzDone] = useState(false);
  const [blitzIsNewRecord, setBlitzIsNewRecord] = useState(false);
  const [blitzScores, setBlitzScores] = useState<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startBlitz = () => {
    const qs = buildQuestions(50);
    setBlitzQuestions(qs);
    setBlitzIndex(0);
    setBlitzPicked(null);
    setBlitzScore(0);
    setBlitzStreak(0);
    setBlitzTimeLeft(BLITZ_SECONDS);
    setBlitzDone(false);
    setBlitzIsNewRecord(false);
    setBlitzScores(loadScores());
    setMode("blitz");
    timerRef.current = setInterval(() => {
      setBlitzTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setBlitzDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const endBlitz = (finalScore: number) => {
    clearInterval(timerRef.current!);
    setBlitzDone(true);
    const prev = loadScores();
    saveScore(finalScore);
    setBlitzScores(loadScores());
    if (prev.length === 0 || finalScore > prev[0]) setBlitzIsNewRecord(true);
  };

  const onBlitzPick = (i: number) => {
    if (blitzPicked !== null || blitzDone) return;
    setBlitzPicked(i);
    const bq = blitzQuestions[blitzIndex];
    const correct = i === bq.correctIndex;
    const newStreak = correct ? blitzStreak + 1 : 0;
    setBlitzStreak(newStreak);
    const mult = getMultiplier(correct ? blitzStreak + 1 : blitzStreak);
    const newScore = blitzScore + (correct ? POINTS_PER_Q * mult : 0);
    setBlitzScore(newScore);
    setTimeout(() => {
      const nextIdx = blitzIndex + 1;
      if (nextIdx >= blitzQuestions.length) {
        endBlitz(newScore);
      } else {
        setBlitzIndex(nextIdx);
        setBlitzPicked(null);
      }
    }, 500);
  };

  // Classic helpers
  const q = questions[index];
  const onPick = (i: number) => { if (picked !== null) return; setPicked(i); if (i === q.correctIndex) setScore(s => s + 1); };
  const next = () => { if (index + 1 >= questions.length) setDone(true); else { setIndex(i => i + 1); setPicked(null); } };
  const restart = () => { setQuestions(buildQuestions()); setIndex(0); setPicked(null); setScore(0); setDone(false); };

  const bq = blitzQuestions[blitzIndex];
  const blitzMult = getMultiplier(blitzStreak);

  // ── MENU ──────────────────────────────────────────────────────────────────
  if (mode === "menu") {
    const topScores = loadScores();
    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🏛️</div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700 mb-1">
              {t("quiz.title")}
            </h1>
            <p className="text-orange-600 text-sm">{t("quiz.subtitle")}</p>
          </div>

          <div className="grid gap-4">
            {/* Classic */}
            <button
              onClick={() => { setMode("classic"); setQuestions(buildQuestions()); setIndex(0); setPicked(null); setScore(0); setDone(false); }}
              className="group p-5 bg-white/90 border-2 border-amber-200 rounded-2xl hover:border-amber-400 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">📚</div>
                <div className="flex-1">
                  <h3 className="font-bold text-amber-900 text-lg">{t("quiz.startClassic")}</h3>
                  <p className="text-amber-600 text-sm">{t("quiz.classicDesc")}</p>
                </div>
                <svg className="text-amber-400 group-hover:text-amber-600 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>

            {/* Blitz */}
            <button
              onClick={startBlitz}
              className="group p-5 bg-gradient-to-br from-rose-900/90 to-orange-900/90 border-2 border-rose-600/40 rounded-2xl hover:border-rose-400 hover:shadow-lg hover:shadow-rose-900/30 transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-orange-600 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">⚡</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{t("quiz.startBlitz")}</h3>
                  <p className="text-rose-300 text-sm">{t("quiz.blitzDesc")}</p>
                </div>
                <svg className="text-rose-400 group-hover:text-rose-200 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>
          </div>

          {/* Leaderboard */}
          {topScores.length > 0 && (
            <div className="mt-6 bg-white/80 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">🏆 {t("quiz.leaderboard")} <span className="text-xs font-normal text-amber-600">(Blitz)</span></h3>
              {topScores.map((s, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-amber-100 last:border-0">
                  <span className="text-sm font-medium text-amber-700">{["🥇","🥈","🥉","4th","5th"][i]}</span>
                  <span className="text-amber-900 font-bold">{s} pts</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <Button variant="outline" onClick={() => setLocation("/")}>Back to Map</Button>
          </div>
        </div>
      </div>
    );
  }

  // ── CLASSIC ───────────────────────────────────────────────────────────────
  if (mode === "classic") {
    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">{t("quiz.title")}</h1>
              <p className="text-sm text-orange-600 mt-0.5">{t("quiz.classicDesc")}</p>
            </div>
            <Button variant="outline" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
          </div>

          {!done ? (
            <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between text-sm text-amber-700 mb-3">
                  <span>{t("quiz.question")} {index + 1} {t("quiz.of")} {questions.length}</span>
                  <span className="font-semibold">{t("quiz.score")}: {score}</span>
                </div>
                <div className="h-1.5 w-full bg-amber-100 rounded-full mb-5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
                </div>
                <div className="mb-1">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColor[q.type]}`}>{q.icon} {typeLabel[q.type]}</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p key={index} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} className="text-lg font-medium text-orange-900 my-4">{q.prompt}</motion.p>
                </AnimatePresence>
                <div className="grid gap-3">
                  {q.options.map((opt, i) => {
                    const isCorrect = picked !== null && i === q.correctIndex;
                    const isWrong = picked === i && i !== q.correctIndex;
                    const isNeutral = picked !== null && i !== q.correctIndex && picked !== i;
                    return (
                      <button key={i} onClick={() => onPick(i)} disabled={picked !== null}
                        className={`text-left px-4 py-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                          isCorrect ? "bg-emerald-50 border-emerald-400 text-emerald-900"
                          : isWrong ? "bg-rose-50 border-rose-400 text-rose-900"
                          : isNeutral ? "bg-white/50 border-gray-100 text-gray-400"
                          : "bg-white border-amber-200 hover:bg-amber-50 hover:border-amber-400 text-orange-900"}`}>
                        {picked !== null && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />}
                        {picked !== null && isWrong && <XCircle className="h-5 w-5 text-rose-500 shrink-0" />}
                        {(picked === null || isNeutral) && <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + i)}</span>}
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {picked !== null && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
                    <div className={`rounded-lg p-3 flex gap-2 mb-4 ${picked === q.correctIndex ? "bg-emerald-50 border border-emerald-200" : "bg-rose-50 border border-rose-200"}`}>
                      <Info className={`h-5 w-5 mt-0.5 shrink-0 ${picked === q.correctIndex ? "text-emerald-600" : "text-rose-600"}`} />
                      <div>
                        <p className={`text-xs font-semibold mb-0.5 ${picked === q.correctIndex ? "text-emerald-700" : "text-rose-700"}`}>{picked === q.correctIndex ? t("quiz.correct") : `${t("quiz.incorrect")}: ${q.options[q.correctIndex]}`}</p>
                        <p className="text-sm text-gray-700">{q.explanation}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={next} className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                        {index + 1 >= questions.length ? t("quiz.finish") : t("quiz.next") + " →"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{score === questions.length ? "🏆" : score >= questions.length * 0.7 ? "🎉" : "📚"}</div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Quiz Complete!</h2>
                <p className="text-6xl font-bold text-orange-700 mb-4">{score} <span className="text-3xl text-orange-400">/ {questions.length}</span></p>
                <div className="flex gap-3 justify-center">
                  <Button onClick={restart} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">{t("quiz.playAgain")}</Button>
                  <Button variant="outline" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  // ── BLITZ ─────────────────────────────────────────────────────────────────
  if (mode === "blitz") {
    const timerPct = (blitzTimeLeft / BLITZ_SECONDS) * 100;
    const timerColor = blitzTimeLeft > 20 ? "from-emerald-400 to-green-500" : blitzTimeLeft > 10 ? "from-amber-400 to-orange-500" : "from-rose-500 to-red-600";

    if (blitzDone || !bq) {
      const topScores = blitzScores;
      return (
        <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-rose-950 via-slate-900 to-orange-950 p-6 flex items-center justify-center">
          <div className="w-full max-w-md text-center">
            {blitzIsNewRecord && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                🎉 {t("quiz.newRecord")}
              </motion.div>
            )}
            <div className="text-5xl mb-3">⚡</div>
            <h2 className="text-2xl font-bold text-white mb-1">{t("quiz.blitzOver")}</h2>
            <p className="text-slate-400 text-sm mb-4">{blitzIndex} questions answered</p>
            <div className="text-6xl font-bold text-white mb-1">{blitzScore}</div>
            <p className="text-rose-400 text-sm mb-6">points scored</p>

            {topScores.length > 0 && (
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 mb-6 text-left">
                <h3 className="text-amber-400 font-semibold text-sm mb-3 flex items-center gap-2">🏆 {t("quiz.leaderboard")}</h3>
                {topScores.map((s, i) => (
                  <div key={i} className={`flex items-center justify-between py-2 border-b border-white/10 last:border-0 ${i === 0 ? "text-amber-300 font-bold" : "text-slate-300"}`}>
                    <span className="text-sm">{["🥇","🥈","🥉","4th","5th"][i]}</span>
                    <span>{s} pts</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-3 justify-center">
              <Button onClick={startBlitz} className="bg-gradient-to-r from-rose-500 to-orange-600 text-white">{t("quiz.playAgain")}</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-rose-950 via-slate-900 to-orange-950 p-4">
        <div className="max-w-2xl mx-auto">
          {/* HUD */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>⏱ {t("quiz.timeLeft")}</span>
                <span className={blitzTimeLeft <= 10 ? "text-rose-400 font-bold animate-pulse" : "text-slate-300"}>{blitzTimeLeft}s</span>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${timerColor} rounded-full`}
                  style={{ width: `${timerPct}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            <div className="text-center min-w-[70px]">
              <div className="text-2xl font-bold text-white">{blitzScore}</div>
              <div className="text-xs text-slate-400">pts</div>
            </div>
            <div className="text-center min-w-[60px]">
              {blitzStreak >= 3 ? (
                <motion.div key={blitzStreak} initial={{ scale: 1.4 }} animate={{ scale: 1 }}>
                  <div className={`text-lg font-bold ${blitzMult >= 5 ? "text-yellow-400" : blitzMult >= 3 ? "text-orange-400" : "text-amber-300"}`}>×{blitzMult}</div>
                  <div className="text-xs text-slate-400">🔥{blitzStreak}</div>
                </motion.div>
              ) : (
                <div>
                  <div className="text-lg font-bold text-slate-500">×1</div>
                  <div className="text-xs text-slate-500">{t("quiz.streak")}: {blitzStreak}</div>
                </div>
              )}
            </div>
          </div>

          {/* Question */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <CardContent className="p-5">
              <div className="mb-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColor[bq.type]}`}>{bq.icon} {typeLabel[bq.type]}</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.p key={blitzIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-base font-medium text-white my-3">{bq.prompt}</motion.p>
              </AnimatePresence>
              <div className="grid gap-2">
                {bq.options.map((opt, i) => {
                  const isCorrect = blitzPicked !== null && i === bq.correctIndex;
                  const isWrong = blitzPicked === i && i !== bq.correctIndex;
                  return (
                    <button key={i} onClick={() => onBlitzPick(i)} disabled={blitzPicked !== null}
                      className={`text-left px-4 py-2.5 rounded-lg border transition-all text-sm font-medium ${
                        isCorrect ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                        : isWrong ? "bg-rose-500/20 border-rose-400 text-rose-200"
                        : blitzPicked !== null ? "bg-white/5 border-white/10 text-slate-500"
                        : "bg-white/10 border-white/20 hover:bg-white/20 text-slate-100"}`}>
                      <span className="mr-2 opacity-60">{String.fromCharCode(65 + i)}.</span>{opt}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="mt-3 flex justify-between items-center">
            <span className="text-slate-500 text-xs">{blitzIndex + 1} answered</span>
            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-300" onClick={() => { clearInterval(timerRef.current!); endBlitz(blitzScore); }}>End early</Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default QuizPage;
