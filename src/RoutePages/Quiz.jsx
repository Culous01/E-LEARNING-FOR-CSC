import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { NavBars } from "../ReusableComponent/Navbar";

function App() {
    const [quiz, setQuiz] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10); // ⏳ timer state
    const { user } = useAuth();   
    const { courseCode } = useParams();
    const title = "Introduction to Programming"

    const userId = user?._id;

    const getQuiz = async () => {
        try {
            const response = await fetch(`https://final-year-project-elearing-backend.onrender.com/api/v1/quiz/${courseCode}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            let data = await response.json();
            console.log(data); // Assuming the API returns an array of past questions
            setQuiz(data);
        } catch (error) {
            console.error('Error fetching Quiz:', error);
            return [];
        }    
    }
  //  Fetch quiz from backend
    useEffect(() => {
        getQuiz();
    }, []);

    //  Timer logic
    useEffect(() => {
        if (!quiz || isFinished) return;
        if (timeLeft === 0) {
        handleNext();
        
        return;
    }

        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, quiz, isFinished]);

    const handleAnswer = (option) => {
        if (showResult) return;
        setSelectedOption(option);
        setShowResult(true);

        const currentQ = quiz[currentIndex];
        if (option === currentQ.answer) {
        setScore((prev) => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + 1 < quiz.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setShowResult(false);
        setTimeLeft(10); // reset timer
    } else {
        setIsFinished(true);

        fetch("https://final-year-project-elearing-backend.onrender.com/api/v1/quiz/attempt-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
                courseCode,
                score,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log("Attempt saved:", data))
            .catch((err) => console.error("Error saving attempt:", err));
        }
    };

    const handleRetry = () => {
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsFinished(false);
        setShowResult(false);
        setTimeLeft(10);
    };

if (!quiz) {
    return (
    <p className="text-center mt-10 font-poppins text-[#1A2E56]">
        Loading quiz...
    </p>
    );
}

if (isFinished) {
        return (
            <>
                <NavBars />
                <div className="flex flex-col items-center mt-20 font-poppins text-[#1A2E56]">
                    <h2 className="text-2xl font-bold mb-4">🎉 Quiz Finished!</h2>

                    <p className="text-lg mb-6">
                    Your score: <span className="font-bold">{score}</span> / {quiz.length}
                    </p>

                    <div className="flex gap-4">

                    <button
                        onClick={handleRetry}
                        className="px-6 py-2 rounded-lg bg-[#1A2E56] text-[#FFC727] font-semibold"
                    >
                        Retry Quiz
                    </button>

                    <button
                        onClick={() => (window.location.href = "/dashboard")}
                        className="px-6 py-2 rounded-lg bg-[#1A2E56] text-[#FFC727] font-semibold"
                    >
                        Go to Dashboard
                    </button>

                    </div>
                </div>
            </>
        );
}

const currentQ = quiz[currentIndex];

return (
    <><NavBars />
    <div className="max-w-lg mx-auto p-6 shadow-lg rounded-xl mt-20 bg-white font-poppins text-[#1A2E56]">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p className="mb-4">{currentQ.questionText}</p>

      {/* ⏳ Timer Bar */}
    <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
    <div
        className="h-2 bg-[#1A2E56] rounded-full"
          style={{ width: `${(timeLeft / 10) * 100}%` }}
        />
    </div>
      {/* <p className="text-sm mb-4">Time left: {timeLeft}s</p> */}

    <div className="flex flex-col gap-2">
        {currentQ.options.map((opt, idx) => {
          let btnClass = "text-[#1A2E56]"; // default
            if (showResult) {
                if (opt === currentQ.answer) {
                    btnClass = "bg-green-500 text-white";
                } else if (opt === selectedOption) {
                    btnClass = "bg-red-500 text-white";
            }
        }

        return (
            <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                disabled={showResult}
                className={`p-3 rounded-lg border font-medium ${btnClass}`}
            >
            {opt}
            </button>
        );
        })}
    </div>

    {showResult && (
        <button
        onClick={handleNext}
            className="mt-6 w-full bg-[#1A2E56] text-[#FFC727] px-4 py-3 rounded-lg font-semibold"
            >
            {currentIndex + 1 === quiz.length ? "Finish" : "Next"}
            </button>
        )}
        </div>
    </>
    );
}

export default App;