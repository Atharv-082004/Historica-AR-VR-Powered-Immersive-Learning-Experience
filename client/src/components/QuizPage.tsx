import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { monuments } from "../data/monuments";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Question {
  prompt: string;
  options: string[];
  correctIndex: number;
  monumentId: string;
}

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const buildQuestions = (): Question[] => {
  const qs: Question[] = [];

  for (const m of monuments) {
    qs.push({
      prompt: `In which city is the ${m.name} located?`,
      options: shuffle([
        m.city,
        ...shuffle(monuments.filter(x => x.city !== m.city).map(x => x.city)).slice(0, 3),
      ]),
      correctIndex: -1,
      monumentId: m.id,
    });
    qs.push({
      prompt: `Which dynasty / era built the ${m.name}?`,
      options: shuffle([
        m.dynasty,
        ...shuffle(monuments.filter(x => x.dynasty !== m.dynasty).map(x => x.dynasty)).slice(0, 3),
      ]),
      correctIndex: -1,
      monumentId: m.id,
    });
    if (m.facts && m.facts.length > 0) {
      const fact = m.facts[Math.floor(Math.random() * m.facts.length)];
      qs.push({
        prompt: `Which monument is this fact about?\n\n"${fact}"`,
        options: shuffle([
          m.name,
          ...shuffle(monuments.filter(x => x.id !== m.id).map(x => x.name)).slice(0, 3),
        ]),
        correctIndex: -1,
        monumentId: m.id,
      });
    }
  }

  return shuffle(qs)
    .slice(0, 10)
    .map(q => {
      const correctValue =
        q.prompt.startsWith("In which city")
          ? monuments.find(m => m.id === q.monumentId)!.city
          : q.prompt.startsWith("Which dynasty")
          ? monuments.find(m => m.id === q.monumentId)!.dynasty
          : monuments.find(m => m.id === q.monumentId)!.name;
      return { ...q, correctIndex: q.options.indexOf(correctValue) };
    });
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
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">
            Heritage Quiz
          </h1>
          <Button variant="outline" onClick={() => setLocation("/")}>Back to Map</Button>
        </div>

        {!done ? (
          <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between text-sm text-amber-700 mb-4">
                <span>Question {index + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="h-1.5 w-full bg-amber-100 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all"
                  style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                />
              </div>

              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-6"
              >
                <p className="text-lg text-orange-900 whitespace-pre-line">{q.prompt}</p>
              </motion.div>

              <div className="grid gap-3">
                {q.options.map((opt, i) => {
                  const isCorrect = picked !== null && i === q.correctIndex;
                  const isWrong = picked === i && i !== q.correctIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => onPick(i)}
                      disabled={picked !== null}
                      className={`text-left px-4 py-3 rounded-lg border transition-all ${
                        isCorrect
                          ? "bg-emerald-100 border-emerald-400 text-emerald-900"
                          : isWrong
                          ? "bg-rose-100 border-rose-400 text-rose-900"
                          : picked !== null
                          ? "bg-white/50 border-amber-100 text-amber-800"
                          : "bg-white border-amber-200 hover:bg-amber-50 text-orange-900"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {picked !== null && (
                <div className="mt-6 flex justify-end">
                  <Button
                    onClick={next}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                  >
                    {index + 1 >= questions.length ? "See results" : "Next question"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-amber-800 mb-2">Quiz complete!</h2>
              <p className="text-orange-800 mb-1">You scored</p>
              <p className="text-5xl font-bold text-orange-700 mb-4">
                {score} / {questions.length}
              </p>
              <p className="text-amber-700 mb-6">
                {score === questions.length
                  ? "Perfect score — you're a heritage scholar!"
                  : score >= questions.length * 0.7
                  ? "Great job! You know India's monuments well."
                  : score >= questions.length * 0.4
                  ? "Not bad — keep exploring to learn more."
                  : "Plenty more to discover. Browse some monuments and try again!"}
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
