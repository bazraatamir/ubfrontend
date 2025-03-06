import React, { useState } from "react";

const TextAreaComponent = () => {
  const [text, setText] = useState("");
  const MAX_LENGTH = 150;

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= MAX_LENGTH) {
      setText(inputText);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Текстээ энд бичнэ үү (100-150 тэмдэгт)"
        rows={4}
        className="w-full h-full bg-transparent text-white p-3 placeholder-gray-400 focus:outline-none resize-none"
      />
      <div className="w-full h-full bg-transparent text-white p-3 placeholder-gray-400 focus:outline-none resize-none">
        {text.length}/{MAX_LENGTH} тэмдэгт
      </div>
    </div>
  );
};

export default TextAreaComponent;
