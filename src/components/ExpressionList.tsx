import React, { FunctionComponent } from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const ExpressionList : FunctionComponent<any> = (props) => {

  const isExpressionValid = (expression : string) => {
    // TODO Add implementation
    return true;
  }

  return <>
    {props.expressions.map((expression:string) => (
        <Card
          sx={{
              width: 1/2,
              m: 2,
              backgroundColor: isExpressionValid(expression)? '#DCEDC8' : '#ef9a9a'
      }}>
        <CardContent>
          <Typography>
            {expression}
          </Typography>

        </CardContent>
      </Card>
      ))}
  </>
};

export default ExpressionList;
