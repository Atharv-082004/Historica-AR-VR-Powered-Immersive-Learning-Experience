import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PassportRegion {
  id: string;
  label: string;
  emoji: string;
  monumentIds: string[];
  badgeColor: string;
}

export const REGIONS: PassportRegion[] = [
  {
    id: "north",
    label: "North India",
    emoji: "🏔️",
    monumentIds: ["taj-mahal", "qutub-minar", "red-fort", "hawa-mahal", "golden-temple", "fatehpur-sikri", "amber-fort"],
    badgeColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "south-deccan",
    label: "South & Deccan",
    emoji: "🌴",
    monumentIds: ["hampi", "gol-gumbaz", "charminar", "ajanta-ellora", "mysore-palace", "meenakshi-temple", "mahabalipuram"],
    badgeColor: "from-green-500 to-emerald-600",
  },
  {
    id: "central",
    label: "Central India",
    emoji: "🏛️",
    monumentIds: ["khajuraho-temples", "sanchi-stupa"],
    badgeColor: "from-yellow-500 to-orange-500",
  },
  {
    id: "east",
    label: "East India",
    emoji: "🌅",
    monumentIds: ["konark-sun-temple", "victoria-memorial"],
    badgeColor: "from-orange-500 to-amber-600",
  },
  {
    id: "west",
    label: "West India",
    emoji: "🌊",
    monumentIds: ["gateway-of-india", "lotus-temple"],
    badgeColor: "from-purple-500 to-pink-600",
  },
];

export const MONUMENT_NAMES: Record<string, string> = {
  "taj-mahal": "Taj Mahal",
  "qutub-minar": "Qutub Minar",
  "red-fort": "Red Fort",
  "hawa-mahal": "Hawa Mahal",
  "golden-temple": "Golden Temple",
  "fatehpur-sikri": "Fatehpur Sikri",
  "amber-fort": "Amber Fort",
  "hampi": "Hampi",
  "gol-gumbaz": "Gol Gumbaz",
  "charminar": "Charminar",
  "ajanta-ellora": "Ajanta & Ellora",
  "mysore-palace": "Mysore Palace",
  "meenakshi-temple": "Meenakshi Temple",
  "mahabalipuram": "Mahabalipuram",
  "khajuraho-temples": "Khajuraho",
  "sanchi-stupa": "Sanchi Stupa",
  "konark-sun-temple": "Konark",
  "victoria-memorial": "Victoria Memorial",
  "gateway-of-india": "Gateway of India",
  "lotus-temple": "Lotus Temple",
};

interface PassportStore {
  visitedIds: string[];
  markVisited: (id: string) => void;
  isVisited: (id: string) => boolean;
  getRegionProgress: (region: PassportRegion) => { visited: number; total: number; complete: boolean };
  totalVisited: () => number;
  earnedBadges: () => string[];
}

export const usePassport = create<PassportStore>()(
  persist(
    (set, get) => ({
      visitedIds: [],

      markVisited: (id: string) => {
        set((state) => ({
          visitedIds: state.visitedIds.includes(id) ? state.visitedIds : [...state.visitedIds, id],
        }));
      },

      isVisited: (id: string) => get().visitedIds.includes(id),

      getRegionProgress: (region: PassportRegion) => {
        const visited = region.monumentIds.filter(id => get().visitedIds.includes(id)).length;
        return { visited, total: region.monumentIds.length, complete: visited === region.monumentIds.length };
      },

      totalVisited: () => get().visitedIds.length,

      earnedBadges: () =>
        REGIONS.filter(r => {
          const { complete } = get().getRegionProgress(r);
          return complete;
        }).map(r => r.id),
    }),
    { name: "historica-passport" }
  )
);
