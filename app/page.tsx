"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>(""); // Text input state
  const [todo, setTodo] = useState<string[]>([]); // Todo list state

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (text.trim() !== "" && text.length > 3) {
      setTodo([...todo, text]); // Add new item to list
      setText(""); // Clear input field
    } else {
      console.log("enter more than 3 letters");
    }
  };

  // Remove item from todo list
  const handleRemove = (index: number) => {
    setTodo(todo.filter((_, i) => i !== index)); // Remove item by index
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>DebtMind</h1>
      <ul className="space-y-2 flex flex-wrap">
        {todo.map((item, index) => (
          <li key={index} className="flex justify-center items-center gap-4">
            {item}
            <Button
              type="button"
              className="cursor-pointer"
              onClick={() => handleRemove(index)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>

      {/* Wrap input and buttons inside a form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="border border-amber-950 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex gap-2">
          <Button
            type="button"
            className="cursor-pointer"
            onClick={() => setText("")}
          >
            Clear Input
          </Button>
          <Button
            type="submit"
            className="cursor-pointer"
            variant="outline"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
