export interface HistoricalEvent {
  month: number;
  day: number;
  monumentId: string;
  year: string;
  event: string;
  emoji: string;
}

export const ON_THIS_DAY: HistoricalEvent[] = [
  // January
  { month: 1, day: 2,  monumentId: "taj-mahal",         year: "1653", event: "The Taj Mahal's main mausoleum chamber was sealed and consecrated, completing the central structure.", emoji: "🕌" },
  { month: 1, day: 14, monumentId: "konark-sun-temple",  year: "1250", event: "The Konark Sun Temple was aligned so its main entrance faces the rising Makara Sankranti sun on this date.", emoji: "☀️" },
  { month: 1, day: 26, monumentId: "red-fort",           year: "1950", event: "India's first Republic Day was celebrated nationally; the Red Fort's ramparts became an enduring symbol of sovereignty.", emoji: "🏰" },

  // February
  { month: 2, day: 4,  monumentId: "golden-temple",      year: "1604", event: "Guru Arjan Dev installed the Adi Granth (Guru Granth Sahib) inside the newly completed Harmandir Sahib (Golden Temple).", emoji: "✨" },
  { month: 2, day: 19, monumentId: "charminar",           year: "1591", event: "Muhammad Quli Qutb Shah laid the foundation stone of the Charminar to mark the eradication of the plague from Hyderabad.", emoji: "🕌" },
  { month: 2, day: 27, monumentId: "hampi",              year: "1565", event: "The Battle of Talikota ended the Vijayanagara Empire; Hampi was subsequently sacked and fell into ruin.", emoji: "⚔️" },

  // March
  { month: 3, day: 4,  monumentId: "hawa-mahal",         year: "1799", event: "Maharaja Sawai Pratap Singh completed the Hawa Mahal (Palace of Winds) in Jaipur.", emoji: "🏯" },
  { month: 3, day: 16, monumentId: "ajanta-ellora",      year: "1819", event: "British officer John Smith accidentally rediscovered the Ajanta Caves while tiger hunting.", emoji: "🏛️" },
  { month: 3, day: 22, monumentId: "qutub-minar",        year: "1199", event: "Qutb ud-Din Aibak laid the first course of stone for the Qutub Minar, inaugurating the Delhi Sultanate's grandest monument.", emoji: "🗼" },

  // April
  { month: 4, day: 10, monumentId: "konark-sun-temple",  year: "1984", event: "The Konark Sun Temple was designated a UNESCO World Heritage Site, recognising its extraordinary architectural heritage.", emoji: "☀️" },
  { month: 4, day: 14, monumentId: "gateway-of-india",   year: "1948", event: "The last British troops in India marched through the Gateway of India and departed by sea, ending British rule.", emoji: "🌊" },
  { month: 4, day: 24, monumentId: "lotus-temple",       year: "1986", event: "Construction of the Lotus Temple's iconic 27-petal structure was finally completed after six years of work.", emoji: "🌸" },

  // May
  { month: 5, day: 1,  monumentId: "red-fort",           year: "1639", event: "Emperor Shah Jahan broke ground on the Red Fort (Lal Qila) at the new Mughal capital Shahjahanabad (Old Delhi).", emoji: "🏰" },
  { month: 5, day: 12, monumentId: "gol-gumbaz",         year: "1656", event: "The Gol Gumbaz mausoleum was completed after 30 years of construction, housing the tomb of Mohammed Adil Shah.", emoji: "🕌" },
  { month: 5, day: 28, monumentId: "ajanta-ellora",      year: "1983", event: "The Ajanta Caves received UNESCO World Heritage status, acknowledging their priceless Buddhist murals and sculptures.", emoji: "🏛️" },

  // June
  { month: 6, day: 5,  monumentId: "hampi",              year: "1986", event: "The Group of Monuments at Hampi was inscribed as a UNESCO World Heritage Site.", emoji: "🏛️" },
  { month: 6, day: 17, monumentId: "golden-temple",      year: "1984", event: "Operation Blue Star concluded; restoration of the Golden Temple's damaged sections began under the Indian government.", emoji: "✨" },
  { month: 6, day: 25, monumentId: "taj-mahal",          year: "1631", event: "Mumtaz Mahal passed away; a grief-stricken Shah Jahan resolved to build the greatest mausoleum in history for her.", emoji: "🕌" },

  // July
  { month: 7, day: 3,  monumentId: "qutub-minar",        year: "1993", event: "The Qutub Minar and its Monuments complex was designated a UNESCO World Heritage Site.", emoji: "🗼" },
  { month: 7, day: 11, monumentId: "charminar",           year: "2010", event: "A proposal to restore and illuminate the Charminar with solar-powered LEDs was approved, transforming Hyderabad's nightscape.", emoji: "🕌" },
  { month: 7, day: 19, monumentId: "konark-sun-temple",   year: "1250", event: "According to historical accounts, King Narasimhadeva I consecrated the completed Konark Sun Temple.", emoji: "☀️" },

  // August
  { month: 8, day: 15, monumentId: "red-fort",           year: "1947", event: "Prime Minister Jawaharlal Nehru hoisted the national flag from the Red Fort's ramparts for the first time on India's Independence Day.", emoji: "🇮🇳" },
  { month: 8, day: 16, monumentId: "taj-mahal",          year: "1908", event: "British Viceroy Lord Curzon completed his major restoration of the Taj Mahal's gardens and interiors.", emoji: "🕌" },
  { month: 8, day: 24, monumentId: "ajanta-ellora",      year: "753",  event: "The Rashtrakuta king Dantidurga commissioned the Kailasa Temple at Ellora — the world's largest single-rock excavation.", emoji: "🏛️" },

  // September
  { month: 9, day: 2,  monumentId: "hawa-mahal",         year: "2005", event: "A 50-million rupee conservation project to restore the Hawa Mahal's 953 jharokhas was completed.", emoji: "🏯" },
  { month: 9, day: 14, monumentId: "gateway-of-india",   year: "1924", event: "The Gateway of India was officially inaugurated by the Viceroy of India, Lord Reading.", emoji: "🌊" },
  { month: 9, day: 22, monumentId: "lotus-temple",       year: "1986", event: "The Lotus Temple was formally dedicated and opened to the public for the first time.", emoji: "🌸" },

  // October
  { month: 10, day: 5, monumentId: "hampi",              year: "1343", event: "Harihara I and Bukka Raya established the Vijayanagara Empire, choosing Hampi as their magnificent capital.", emoji: "🏛️" },
  { month: 10, day: 15, monumentId: "gol-gumbaz",        year: "1626", event: "Mohammed Adil Shah began construction of his own mausoleum — what would become the Gol Gumbaz.", emoji: "🕌" },
  { month: 10, day: 27, monumentId: "golden-temple",     year: "1581", event: "Guru Arjan Dev, the fifth Sikh Guru, began construction of the Harmandir Sahib (Golden Temple).", emoji: "✨" },

  // November
  { month: 11, day: 3,  monumentId: "red-fort",          year: "2007", event: "The Red Fort Complex was inscribed on UNESCO's World Heritage List, its 369-year history recognised globally.", emoji: "🏰" },
  { month: 11, day: 18, monumentId: "charminar",         year: "1591", event: "The Charminar's mosque on the upper floor held its first Friday prayers, the oldest mosque still active in Hyderabad.", emoji: "🕌" },
  { month: 11, day: 29, monumentId: "gateway-of-india",  year: "1911", event: "King George V and Queen Mary arrived at the Apollo Bunder; the foundation stone for the Gateway of India was laid.", emoji: "🌊" },

  // December
  { month: 12, day: 2,  monumentId: "lotus-temple",      year: "1986", event: "The Lotus Temple received the Architectural Award of Excellence from the Institution of Structural Engineers, London.", emoji: "🌸" },
  { month: 12, day: 10, monumentId: "taj-mahal",         year: "1983", event: "The Taj Mahal was designated a UNESCO World Heritage Site, cementing its status as one of humanity's greatest achievements.", emoji: "🕌" },
  { month: 12, day: 21, monumentId: "qutub-minar",       year: "1220", event: "Iltutmish completed the Qutub Minar's upper storeys, fulfilling his predecessor Qutb ud-Din Aibak's vision.", emoji: "🗼" },
];

export function getTodaysEvents(): HistoricalEvent[] {
  const now = new Date();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const exact = ON_THIS_DAY.filter(e => e.month === m && e.day === d);
  if (exact.length > 0) return exact;
  // Fallback: same month, nearby day (±5 days)
  const nearby = ON_THIS_DAY.filter(e => e.month === m && Math.abs(e.day - d) <= 5);
  if (nearby.length > 0) return [nearby[Math.floor(nearby.length / 2)]];
  // Last resort: pick a featured event
  return [ON_THIS_DAY[0]];
}
