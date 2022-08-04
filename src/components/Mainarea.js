import React,{useState,useEffect} from "react";
import Card from "./Card";

const Mainarea = (props) => {

    const {difficulty}=props;
    const [cardArray, setCardArray] = useState([]);
    const [revealedCardsArray,setRevealedCardsArray] = useState([]);
    const [selection1, setSelection1] = useState(null);
    const [selection2, setSelection2] = useState(null);

    useEffect(()=>{
        let tempCardArray=[];
        for(let i=0; i<difficulty*difficulty; i++){
           tempCardArray.push(i);
        }
        console.log(tempCardArray);

        let shuffleArray=[];
        let revealedCards=[];
        for(let i=0; i<difficulty*difficulty; i++){
            const randomIndex=Math.floor(Math.random() * tempCardArray.length);
            shuffleArray.push(tempCardArray[randomIndex]);
            tempCardArray.splice(randomIndex, 1);
            revealedCards.push(false);
        }
        console.log(shuffleArray);
        setCardArray(shuffleArray);
        setRevealedCardsArray(revealedCards);
        console.log(revealedCards);
    },[])

    const handleSelection=(value) => {
        console.log("clicked",value);
        if(selection1==null){
            setSelection1(value);
            let newVisibleCardsArray=revealedCardsArray;
            newVisibleCardsArray[value]=true;
            setRevealedCardsArray(newVisibleCardsArray);
        }
        else{
            setSelection2(value);
            let newVisibleCardsArray=revealedCardsArray;
            newVisibleCardsArray[value]=true;
            setRevealedCardsArray(newVisibleCardsArray);
        }
    }
    
    const hideCards=()=>{
      let newVisibleCardsArray=revealedCardsArray;
      newVisibleCardsArray[selection1]=false;
      newVisibleCardsArray[selection2]=false;
      setRevealedCardsArray(newVisibleCardsArray);
    }

    //to reset the selection
    const handleReset=()=>{
      setSelection1(null);
      setSelection2(null);
    }

    //run when selection2 changes
    useEffect(()=>{
        if(selection1!==null && selection2!==null){
          if(selection1%8===selection2%8){
            console.log("same");
            handleReset();
          }
          else{
            console.log("not same");
            setTimeout(()=>{

            },1000);
            hideCards();
            handleReset();
          }
        }
    },[selection2]);

  return (
    <div className="container my-3">
      <h1 className="text-center">Flipper</h1>
      <h3>Selection1:{selection1}</h3>
      <h3>Selection2:{selection2}</h3>

      <div className="row">
          {cardArray.map((element)=>{
            return <Card key={element} visible={false} value={element} visible={revealedCardsArray[element]} handleSelection={handleSelection}/>
          })}
      </div>
    </div>
  );
};

export default Mainarea;
