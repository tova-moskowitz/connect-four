import React, { useEffect, useState } from "react";
import "../App.scss";
import axios from "axios";

const QUESTIONS_API_BASE_URL = "https://api.frontendexpert.io/api/fe/questions";
const SUBMISSIONS_API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/submissions";

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [submissions, setSumbissions] = useState([]);

  useEffect(() => {
    axios
      .get(QUESTIONS_API_BASE_URL)
      .then((questions) => {
        setQuestions(questions.data);
      })
      .catch((error) => console.log("ERROR => ", error));

    axios
      .get(SUBMISSIONS_API_BASE_URL)
      .then((submissions) => {
        setSumbissions(submissions.data);
      })
      .catch((error) => console.log("ERROR => ", error));
  }, []);

  const getUniqueCategories = () => {
    const categorySet = new Set();
    questions.map((question) => {
      categorySet.add(question.category);
    });
    return Array.from(categorySet);
  };

  console.log(getUniqueCategories());

  return (
    <>
      <div className="category">
        <h2></h2>
        <div className="question">
          <div className="status"></div>
          <h3></h3>
        </div>
      </div>
    </>
  );
}
