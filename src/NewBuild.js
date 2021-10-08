import Arweave from "arweave";
import React, { useState }  from "react";
//import ReactDOM from "react-dom";
import "./App.css";

const arweave = Arweave.init({
    host: "arweave.net",
  });

//This is in the format that my gql search returns - this is how I tell the page what to display.
//I've stripped it down to one item, in case that makes it easier to deal with.
//Questions below:
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

  function arweaveOneShot(){ 
    const txs = oneReturn.data.transactions.edges;
    const tx = txs[0];
    console.log('2. arweaveOneShot is called');
    arweave.transactions.getData(tx.node.id, {decode: true, string: true}).then(data => {
      console.log(`3. arweave.transations.getData().then callback is called, data = ${data}`);
      //This is where one big question lies - I know I'm fetching "data" correctly, but it doesn't 
      //return in a way that lets me add that string to the useState hook.
      return data;
    });
  };

  function returnOneShot(){
    console.log("return OneShot: " + arweaveOneShot() );
  }

  function showJoeHowPromisesWork() {
    console.log('1. showJoeHowPromisesWork is called');
    const arweaveOneShotData = arweaveOneShot();
    console.log(`4. after arweaveOneShot is called, arweaveOneShotData == ${arweaveOneShotData}`);
  }

//This is me trying out a few different pieces, ultimately atttempting to get something like
//what you see in the "Add Lore Text" button - my thinking is that I'll return the contents of
//the text in the json, then add it to the {text} value that's displayed at the top. 
//
//Question 1) In both the "Return One Shot" button and the "Add Lore Text" button I get undefined 
//returned from the arweaveOneShot function. B) How can I get it to return the text I need?

  export function TextExample() {
    // Declare a new state variable, which we'll call "text"
    let testText = "no itemLore yet";
    const [text, textCount] = useState(testText);
    return (
      <div>
        <p>{text}</p>
        <button onClick={showJoeHowPromisesWork}>Show Joe How Promises Work</button>
        <button onClick={arweaveOneShot}>Log One Shot</button>
        <button onClick={returnOneShot}>Return One Shot</button>
        <button onClick={() => textCount(text + " add more text")}>Add Text</button>
        <button onClick={() => textCount(text + forOfThreeEntries() )}>Add Lore Text</button> 
        <br></br>
        <br></br>
        <button onClick={forOfThreeEntries}>Log Three Arweave Entries</button>
      </div>
    ); 
  }


  // The code below is closer to what I'm actually trying to finish. A gql search of arweave returns
  // a json with lots of tx ids of entries, and I want to display them one by one, with the "owner
  //  address" followed by the fetched html text for each entry. 
  //
  // I recognize this is trickier to display in React, because I'll need to use the useState hook
  // sequentially, and add each entry to it one by one. More specific questions down below:

// This json is a lot like what the gql returns:
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


  function arweaveThreeEntries(){
    const txs = loreReturn.data.transactions.edges;
    txs.forEach ((tx) => {arweave.transactions.getData(tx.node.id, {decode: true, string: true}).then(data => {
        console.log(data);
        return data;
    });
  });
};

//I read the forEach always returns undefined, so I tried the same thing with a for of loop...
//But still no dice! So my two questions here are:
//1As above, how do I return the contents of each fetched "data" to add to useState hook?
//and Question 2) How can I ALSO return the "owner" of each "data" - I'm confused on how to use this for
//notation to get the loop to do two things together before moving onto the next item in the array.
function forOfThreeEntries(){
    const txs = loreReturn.data.transactions.edges;
    for (const tx of txs){arweave.transactions.getData(tx.node.id, {decode: true, string: true}).then(data => {
        console.log(data);
        return data;
    });
  };
};
