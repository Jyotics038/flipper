import React,{useState,useEffect} from "react";
import Card from "./Card";

const Mainarea = (props) => {

    const {difficulty}=props;
    const [cardArray, setCardArray] = useState([]);

    useEffect(()=>{
        let tempCardArray=[];
        for(let i=0; i<difficulty*difficulty; i++){
           tempCardArray.push(i);
        }
        console.log(tempCardArray);

        let shuffleArray=[];
        for(let i=0; i<difficulty*difficulty; i++){
            const randomIndex=Math.floor(Math.random() * tempCardArray.length);
            shuffleArray.push(tempCardArray[randomIndex]);
            tempCardArray.splice(randomIndex, 1);
        }
        console.log(shuffleArray);
        setCardArray(shuffleArray);
    },[])


  return (
    <div className="container my-3">
      <h1 className="text-center">Flipper</h1>
      <div className="row">
          {cardArray.map((element)=>{
            return <Card key={element} visible={false} value={element}/>
          })}
      </div>
    </div>
  );
};

export default Mainarea;
