import React, {FunctionComponent, useState} from "react";
import {Button, Card, TextField} from "@mui/material";

const regex = new RegExp('^[()\\[\\]{}]+$')

const AddExpression : FunctionComponent<any> = (props) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [error, setError] = useState(false);

  const addExpressionHandler = (event : any) => {
    setError(false);
    event.preventDefault();
    if (!regex.test(enteredValue)) {
      setError(true);
      return;
    }
    props.onAddExpression(enteredValue);
    setEnteredValue('');
  };

  const valueChangeHandler = (event : any) => {
    setEnteredValue(event.target.value);
  };

  return <>
    <Card sx={{width: 1/2, m:2}}>
        <form  onSubmit={addExpressionHandler}>
          <TextField
            error={error}
            id="outlined-basic"
            label='Enter expression that contains only "(", ")", "[", "]" characters.'
            variant="outlined"
            sx={{width: 3/4, m:2}}

            onChange={valueChangeHandler}
          />
        </form>

        <div>
          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{m:2}}
          >
          Add
          </Button>
        </div>
    </Card>

  </>
};

export default AddExpression;
