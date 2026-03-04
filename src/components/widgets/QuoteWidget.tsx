import { useState } from "react";
import { quoteWidgetStyles } from "../../styles/quoteWidget.styles";

interface Quote {
  text: string;
  author: string;
}

const QUOTES: Quote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" }
];

export function QuoteWidget() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const next = () => {
    setVisible(false);
    setTimeout(() => {
      setIdx((i) => (i + 1) % QUOTES.length);
      setVisible(true);
    }, 200);
  };

  const { text, author } = QUOTES[idx];

  return (
    <div style={quoteWidgetStyles.quoteWidget}>
      <div style={{ ...quoteWidgetStyles.quoteText, opacity: visible ? 1 : 0, transition: "opacity 0.2s" }}>
        {text}
      </div>
      <div style={quoteWidgetStyles.quoteAuthor}>— {author}</div>
      <button onClick={next} style={quoteWidgetStyles.quoteBtn}>Next quote →</button>
    </div>
  );
}