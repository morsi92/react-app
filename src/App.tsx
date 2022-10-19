import React from 'react';
import ExpressionList from "./components/ExpressionList";
import AddExpression from "./components/AddExpression";
import {useState} from "react";
import './App.css';

export function App() {
  const [expressionList, setExpressionList] = useState([] as string[]);

  const addExpressionHandler = (value : string) => {
    setExpressionList((prevExpressionList: string[] ) => {
      return [
        ...prevExpressionList,
        value,
      ];
    });
  };
  return (
        <AddExpression onAddExpression={addExpressionHandler}></AddExpression>
        <ExpressionList expressions={expressionList}></ExpressionList>
  );
}

export default App;
