import React, { Component } from "react";
//import Arweave from "arweave";
//import ReactDOM from "react-dom";
import "./App.css";
import axios from "axios";

//Define loreReturn as a static json-type file that I know works.
const loreReturn = {
  data: {
    transactions: {
      edges: [
        {
          node: {
            id: "20-RDrsoCzftOe7BoQk--hg_zNWQjSszNTGFlw36MIs",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
          },
        },
        {
          node: {
            id: "EjTwS-dwe1WSf8XzUMngAE1s2TZlMjQrdzhwVYQn8nc",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
          },
        },
        {
          node: {
            id: "99DeUfvDJahkRAMWyxqM2ewMOFr92WLB9c6eAU4OU_o",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
          },
        },
      ],
    },
  },
};

//Run a query to find all tx's w/ "App-Name" = ItemLore", which should return 3 txs
function QueryDisplay() {
  let query = {
    query: `query {
        transactions(
        tags: [
            {
                name: "App-Name",
                values: ["ItemLore"]
            }
        ]
    ) {
        edges {
            node {
              id
              owner {
                address
              }
            }
        }
    }
}`,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(query),
  };
  //I want this async function to store the result in the same json-type format as loreReturn
  async function createJSON() {
    const res1 = await fetch("https://arweave.net/graphql", requestOptions);
    let json = await res1.clone().json();
    console.log(json);

    const txs = json.data.transactions.edges;
    for (const tx of txs) {
      console.log(tx.node.id);
    }
    //return json;



  }
  createJSON();

  async function displayLore() {
    const res1 = await fetch("https://arweave.net/graphql", requestOptions);
    let json = await res1.clone().json();
    console.log(json);

    const txs = json.data.transactions.edges;

  txs.forEach((tx) => {
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
}
displayLore();

  const displayStaticIds = () => {
    const txs = loreReturn.data.transactions.edges;
    for (const tx of txs) {
      console.log(tx.node.id);
    }
  };
  

  return (
    <div>
      <button onClick={createJSON}>List query transactions</button>
      <button onClick={displayStaticIds}>List static transactions</button>
      <button onClick={displayLore}>Show Lore contents</button>
      
    </div>
  );
}
//<button onClick={Query}>Query Transactions</button>
//<button onClick={allData}>Show All Text</button>

export default QueryDisplay;
