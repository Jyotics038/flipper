import React, { useState, useEffect } from "react";
import Card from "./Card";
import Timer from "./Timer";

const Mainarea = (props) => {
  const { difficulty } = props;
  const [cardArray, setCardArray] = useState([]);
  const [revealedCardsArray, setRevealedCardsArray] = useState([]);
  const [selection1, setSelection1] = useState(null);
  const [selection2, setSelection2] = useState(null);

  const [totalFlips, settotalFlips] = useState(0);
  const [remainingFlips, setremainingFlips] = useState(
    (props.difficulty * props.difficulty) / 2
  );
  const [canSelect, setcanSelect] = useState(true);

  //to give bg color to selected cards
  const [cardsColArr, setcardsColArr] = useState([]);

  //for Timer
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let tempCardArray = [];
    for (let i = 0; i < difficulty * difficulty; i++) {
      tempCardArray.push(i);
    }
    console.log(tempCardArray);

    let shuffleArray = [];
    let revealedCards = [];
    let tempCardColArr = [];

    for (let i = 0; i < difficulty * difficulty; i++) {
      const randomIndex = Math.floor(Math.random() * tempCardArray.length);
      shuffleArray.push(tempCardArray[randomIndex]);
      tempCardArray.splice(randomIndex, 1);
      revealedCards.push(false);
      tempCardColArr.push("light");
    }
    console.log(shuffleArray);
    setCardArray(shuffleArray);
    setRevealedCardsArray(revealedCards);
    setcardsColArr(tempCardColArr);
    console.log(revealedCards);
  }, []);

  const handleSelection = (value) => {
    if (canSelect) {
      console.log("clicked", value);
      if (selection1 === null) {
        setSelection1(value);
        let newVisibleCardsArray = revealedCardsArray;
        newVisibleCardsArray[value] = true;
        setRevealedCardsArray(newVisibleCardsArray);
      } else if (selection1 !== value) {
        setSelection2(value);
        let newVisibleCardsArray = revealedCardsArray;
        newVisibleCardsArray[value] = true;
        setRevealedCardsArray(newVisibleCardsArray);
      }
    }
  };

  const hideCards = () => {
    let newVisibleCardsArray = revealedCardsArray;
    newVisibleCardsArray[selection1] = false;
    newVisibleCardsArray[selection2] = false;
    setRevealedCardsArray(newVisibleCardsArray);
  };

  //to reset the selection
  const handleReset = () => {
    setSelection1(null);
    setSelection2(null);
  };

  //to handle change of selection1
  useEffect(() => {
    console.log("Selection changed");
    if (selection1 !== null) {
      let newCardColArr = { ...cardsColArr };
      newCardColArr[selection1] = "info";
      setcardsColArr(newCardColArr);
    }
  }, [selection1]);

  //run when selection2 changes
  useEffect(() => {
    if (selection1 !== null && selection2 !== null) {
      settotalFlips((prevState) => prevState + 1);
      let newCardColArr = { ...cardsColArr };
      newCardColArr[selection2] = "info";
      setcardsColArr(newCardColArr);
      if (selection1 % 8 === selection2 % 8) {
        console.log("same");
        newCardColArr = { ...cardsColArr };
        newCardColArr[selection1] = "success";
        newCardColArr[selection2] = "success";
        setcardsColArr(newCardColArr);
        handleReset();
        setremainingFlips((prevState) => prevState - 1);
      } else {
        console.log("not same");
        setcanSelect(false);
        newCardColArr = { ...cardsColArr };
        newCardColArr[selection1] = "danger";
        newCardColArr[selection2] = "danger";
        setcardsColArr(newCardColArr);
        setTimeout(() => {
          newCardColArr = { ...cardsColArr };
          newCardColArr[selection1] = "light";
          newCardColArr[selection2] = "light";
          setcardsColArr(newCardColArr);
          hideCards();
          handleReset();
          setcanSelect(true);
        }, 1000);
      }
    }
  }, [selection2]);

  const handleTimeIncrement = () => {
    setSeconds((prevState) => prevState + 1);
  };

  //for timer
  useEffect(() => {
    if(seconds===60){
       setSeconds(0);
       setMinutes(prevState=>prevState + 1);
    }
  },[seconds]);

  return (
    <div className="container my-3">
      <h1 className="text-center">Flipper</h1>
      {remainingFlips > 0 ? (
        <>
          <div className="d-flex justify-content-between py-2">
            <h4>Total Flips Made:{totalFlips}</h4>
            <h4 className="d-flex align-items-center">
              <Timer
                minutes={minutes}
                seconds={seconds}
                incrementTime={handleTimeIncrement}
              />
            </h4 >
            <h4>Flips Remaining:{remainingFlips}</h4>
          </div>
          <div className="row">
            {cardArray.map((element) => {
              return (
                <Card
                  key={element}
                  value={element}
                  visible={revealedCardsArray[element]}
                  bgCol={cardsColArr[element]}
                  handleSelection={handleSelection}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="my-4">
          <h2 className="text-center">You win!</h2>
          <h4 className="text-center">Total Flips Made: {totalFlips}</h4>
          <h4 className="text-center">Total Time Taken:{minutes}:{seconds}</h4>
        </div>
      )}
    </div>
  );
};

export default Mainarea;
