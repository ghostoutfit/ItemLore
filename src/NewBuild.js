//import Arweave from "arweave";
import React, { useState }  from "react";
//import ReactDOM from "react-dom";
import "./App.css";
import axios from "axios";

const oneReturn = {
    "data": {
      "transactions": {
        "edges": [
          {
            "node": {
              "id": "99DeUfvDJahkRAMWyxqM2ewMOFr92WLB9c6eAU4OU_o",
              "owner": {
                "address": "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU"
              }
            }
          }
        ]
      }
    }
  }

  function reactOneShot(){
    const txs = oneReturn.data.transactions.edges;
    const tx = txs[0];
    console.log("log txid: " + tx.node.id);
      axios
        .get("https://arweave.net/" + tx.node.id)
        //What is "function" here? Is it just not named?
        .then(function (response) {
            const newText = response.data;
            console.log("oneShot function: " + newText);
            //My thought was that return would give me the actual value of response.data
            //to add to the text being displayed as {text} below, but no dice. Why doesn't that work?
            //When I console.log newText I get the text correctly displayed, but when I try to 
            //
            return newText;
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  function logOneShot(){
    console.log("log OneShot return: " + reactOneShot());
  }

  export function TextExample() {
    // Declare a new state variable, which we'll call "text"
    let testText = "no itemLore yet";
    const [text, textCount] = useState(testText);
    return (
      <div>
        <p>{text}</p>
        <button onClick={logOneShot}>Log One Shot</button>
        <button onClick={() => textCount(text + " add more text")}>Add Text</button>
        <button onClick={() => textCount(text + reactOneShot() )}>Add Lore Text</button>
        <br></br>
        <br></br>
        <button onClick={logThreeEntries}>Log Three Entries</button>
      </div>
    ); 
  }


  // The code below is closer to what I'm actually trying to finish. The gql returns a json
  // with lots of tx ids of entries, and I want to display them one by one, with the "owner address" followed
  // by the fetched html text for each entry. 
  //
  // I recognize this is trickier to display in React, because I'll need to use the useState hook
  // sequentially, and add each entry to it one by one. What should I be looking out for in 
  // dropping the useState hook into the the forEach loop below?

// First, declare a static json that's identical to what gql returns:
  const loreReturn = {
    "data": {
      "transactions": {
        "edges": [
          {
            "node": {
              "id": "20-RDrsoCzftOe7BoQk--hg_zNWQjSszNTGFlw36MIs",
              "owner": {
                "address": "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU"
              }
            }
          },
          {
            "node": {
              "id": "EjTwS-dwe1WSf8XzUMngAE1s2TZlMjQrdzhwVYQn8nc",
              "owner": {
                "address": "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU"
              }
            }
          },
          {
            "node": {
              "id": "99DeUfvDJahkRAMWyxqM2ewMOFr92WLB9c6eAU4OU_o",
              "owner": {
                "address": "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU"
              }
            }
          }
        ]
      }
    }
  }

  function reactThreeEntries(){
    const txs = loreReturn.data.transactions.edges;
    txs.forEach ((tx) => {
      axios
        .get("https://arweave.net/" + tx.node.id)
        .then(function deliver(response) {
          if (response.status === 200 && response != null) {
            let newText = response.data;
            console.log(newText);
            return newText;
          } else {
            console.log("problem");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

  function logThreeEntries(){
    console.log("log ThreeEntries return: " + reactThreeEntries());
  }