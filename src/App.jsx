import axios from "axios";
import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    const apiKey = import.meta.env.VITE_API_KEY;

    setAnswer("loading ...");

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      setAnswer("Error generating response", error);
    }
  }

  const handleInputHeight = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setQuestion(textarea.value);
  };

  return (
    <main className="bg-slate-900 text-white h-screen w-screen md:p-10 p-4">
      <div className=" md:w-2/3 w-full h-full mx-auto relative">
        <p className="">
          <code>{answer}</code>
        </p>
        <div className="absolute bottom-0 flex rounded-full w-full">
          <textarea
            className="min-h-20 max-h-48 overflow-y-auto w-full resize-none bg-black rounded-xl px-4 py-2 pr-16"
            placeholder="Type your question here..."
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            onInput={handleInputHeight}
          ></textarea>
          <button
            className="absolute right-0 bottom-0 size-12 flex items-center justify-center rounded-xl"
            onClick={generateAnswer}
          >
            <LuSendHorizonal className="text-white md:text-3xl text-2xl" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
