//import Arweave from 'arweave';
//import {useForm} from "react-hook-form";
//import React, { Component } from 'react';
//import './App.css';
//import { CONNECTING } from 'ws';

//const fetch = require("node-fetch");

const loreReturn = {
    "data": {
      "transactions": {
        "edges": [
          {
            "node": {
              "id": "yNSCq58zimKXncay16bFXwDzvwDcBwn7X6da7YdoPIY"
            }
          },
          {
            "node": {
              "id": "OD8swyaKgBvoN3qKs2n1jAuqJHBeHr8g9S8CjS_pXTY"
            }
          },
          {
            "node": {
              "id": "hhRh8QftyS-F9qzuPBDtHVm6za3ySTuKIp6jq1g0y0g"
            }
          },
          {
            "node": {
              "id": "PJmayeQmai-JhTxte6w_mec8MQ7yZkST4UkdN7vg4r4"
            }
          },
          {
            "node": {
              "id": "EELn8782ktKWeK6e6p3EtHGupfuNa4C9sMhrCzs-MlM"
            }
          },
          {
            "node": {
              "id": "xMCMHO0RV5kM5uzDBbsqCaq2Un-qbdAcBtRi4fL0qWc"
            }
          },
          {
            "node": {
              "id": "aAraYccFE8JsJC5HQgOWXSkZlMNa3rJsJwDOfvYD1sQ"
            }
          },
          {
            "node": {
              "id": "4Dj0XmIl2aefeytxGJ_gzw--hV44U-vNW_AX29QIIJs"
            }
          },
          {
            "node": {
              "id": "7_qQmv2THW9zkFycD0SKLSULGi8MHzl13dYsN8vjuWs"
            }
          }
        ]
      }
    }
  };
 

const txs = loreReturn.data.transactions.edges
for(const tx of txs){
  console.log(tx.node.id)
}

/*
let response = fetch('http://arweave.net/yNSCq58zimKXncay16bFXwDzvwDcBwn7X6da7YdoPIY');

response();


function displayLore(response){
fetch(url)
    .then(response => {
        console.log(response);// handle the response
    })
    .catch(error => {
        console.log("error!");// handle the error
    });

}

*/

//export default Display;