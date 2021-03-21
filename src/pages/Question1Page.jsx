import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { isFibonacci, isPrime } from "../utils";
const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
  },
  section1: {
    width: 200,
    minWidth: 200,
  },
  section2: {
    width: "100%",
    minWidth: 100,
    height: 100,
  },
  section3: {
    width: 300,
    minWidth: 300,
    height: 100,
  },
});

const Question1Page = () => {
  const classes = useStyles({});
  const [value, setValue] = useState();
  const [option, setOption] = useState("prime");
  const [isValid, setIsValid] = useState(false);

  const handleValid = (value, option) => {
    if (option === "prime") {
      isPrime(Number(value));
      setIsValid(isPrime(Number(value)));
    } else if (option === "fibonacci") {
      setIsValid(isFibonacci(Number(value)));
    }
  };
  const handleChangeInput = (e) => {
    handleValid(e.target.value, option);
    setValue(e.target.value);
  };
  const handleChangeType = (e) => {
    handleValid(value, e.target.value);
    setOption(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <input type="number" value={value} onChange={handleChangeInput} />
      </div>
      <div className={classes.section2}>
        <select onChange={handleChangeType} defaultValue={option}>
          <option value="prime">isPrime</option>
          <option value="fibonacci">isFibonacci</option>
        </select>
      </div>
      <div className={classes.section3}>{String(isValid)}</div>
    </div>
  );
};

export default Question1Page;
