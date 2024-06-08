import React, { useState } from 'react';

const QuestionInput = ({ userId }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmitQuestion = async () => {
    const response = await fetch('http://localhost:3000/api/question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, question }),
    });

    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <div className="question-input">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Haz una pregunta"
      />
      <button onClick={handleSubmitQuestion}>Enviar</button>
      {answer && <p>Respuesta: {answer}</p>}
    </div>
  );
};

export default QuestionInput;
