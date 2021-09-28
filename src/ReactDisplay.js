import Arweave from "arweave";
//import {useForm} from "react-hook-form";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
//import { CONNECTING } from 'ws';
import axios from "axios";

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

function Display() {
   
  const displayTxids = () => {
    const txs = loreReturn.data.transactions.edges;
    for (const tx of txs) {
      console.log(tx.node.id);
    }
  };

  const allData = () => {
    const txs = loreReturn.data.transactions.edges;
    txs.forEach ((tx) => {
      console.log(tx.node.id);
      console.log(tx.node.owner.address);
      return axios
        .get("https://arweave.net/" + tx.node.id)
        .then(function (response) {
          if (response.status === 200 && response != null) {
            let data = response.data;
            console.log(data);
            //return data;
          } else {
            console.log("problem");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <button onClick={displayTxids}>List transactions</button>
      <button onClick={allData}>Show All Text</button>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Display;
