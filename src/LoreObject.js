import Arweave from "arweave";
import React, { button, useState } from "react";
//import ReactDOM from "react-dom";
//import "./App.css";

const arweave = Arweave.init({
  host: "arweave.net",
});

function DisplayLoreObjects() {
  const [lores, setLores] = useState(txArray);

  return (
    <div className="App">
      <ul>
        {/*map over the id array*/}
        {lores.map((lore) => (
          <div key={lore.id}>
            <p>
              {lore.address} Print {lore.print}
            </p>
            <p>{lore.txstory}</p>
            <br></br>
          </div>
        ))}
      </ul>
      <button onClick={handleAddNewLore}>Show Lore</button>
    </div>
  );

  function handleAddNewLore() {
    const updateLores = [
      ...lores,
      {
        id: lores.length + 1,
        address: "BJ",
        print: "is",
        txstory: "cool",
      },
    ];
    setLores(updateLores);
  }
}

const loreTags = {
  data: {
    transactions: {
      edges: [
        {
          node: {
            id: "AbUUz4_C7xZIa5ILysDu-GmZqlxBM6uuC_ovLwUID_w",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
            tags: [
              {
                name: "Content-Type",
                value: "text/html",
              },
              {
                name: "App-Name",
                value: "ItemLore",
              },
              {
                name: "Item",
                value: "Ring of Ringing",
              },
              {
                name: "Print-Number",
                value: "7/20",
              },
              {
                name: "Signing-Client",
                value: "ArConnect",
              },
              {
                name: "Signing-Client-Version",
                value: "0.3.5",
              },
            ],
          },
        },
        {
          node: {
            id: "vzuRbWu2PTRE8hHFOpiGlAGu7gEVA0p63xXgv3N-iGI",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
            tags: [
              {
                name: "Content-Type",
                value: "text/html",
              },
              {
                name: "App-Name",
                value: "ItemLore",
              },
              {
                name: "Item",
                value: "Ring of Ringing",
              },
              {
                name: "Print-Number",
                value: "7/20",
              },
              {
                name: "Signing-Client",
                value: "ArConnect",
              },
              {
                name: "Signing-Client-Version",
                value: "0.3.5",
              },
            ],
          },
        },
        {
          node: {
            id: "qWQ1GlrNhoEgFgBk1eyl--XGxPRYijaPi6e1JnB83Uw",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
            tags: [
              {
                name: "Content-Type",
                value: "text/html",
              },
              {
                name: "App-Name",
                value: "ItemLore",
              },
              {
                name: "Item",
                value: "LightHammer",
              },
              {
                name: "Print-Number",
                value: "6/20",
              },
              {
                name: "Signing-Client",
                value: "ArConnect",
              },
              {
                name: "Signing-Client-Version",
                value: "0.3.5",
              },
            ],
          },
        },
        {
          node: {
            id: "-EzW5HIu5gXHgtQJ2d3UsqvwY875gTWjO_EUq7dLNXM",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
            tags: [
              {
                name: "Content-Type",
                value: "text/html",
              },
              {
                name: "App-Name",
                value: "ItemLore",
              },
              {
                name: "Item",
                value: "LightHammer",
              },
              {
                name: "Print-Number",
                value: "6/20",
              },
              {
                name: "Signing-Client",
                value: "ArConnect",
              },
              {
                name: "Signing-Client-Version",
                value: "0.3.5",
              },
            ],
          },
        },
        {
          node: {
            id: "20-RDrsoCzftOe7BoQk--hg_zNWQjSszNTGFlw36MIs",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
            tags: [
              {
                name: "Content-Type",
                value: "text/html",
              },
              {
                name: "App-Name",
                value: "ItemLore",
              },
              {
                name: "Item",
                value: "TestItems",
              },
              {
                name: "Print-Number",
                value: "5/20",
              },
              {
                name: "Signing-Client",
                value: "ArConnect",
              },
              {
                name: "Signing-Client-Version",
                value: "0.3.5",
              },
            ],
          },
        },
        {
          node: {
            id: "EjTwS-dwe1WSf8XzUMngAE1s2TZlMjQrdzhwVYQn8nc",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
            tags: [
              {
                name: "Content-Type",
                value: "text/html",
              },
              {
                name: "App-Name",
                value: "ItemLore",
              },
              {
                name: "Item",
                value: "TestItems",
              },
              {
                name: "Print-Number",
                value: "5/20",
              },
              {
                name: "Signing-Client",
                value: "ArConnect",
              },
              {
                name: "Signing-Client-Version",
                value: "0.3.5",
              },
            ],
          },
        },
        {
          node: {
            id: "99DeUfvDJahkRAMWyxqM2ewMOFr92WLB9c6eAU4OU_o",
            owner: {
              address: "WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU",
            },
            tags: [
              {
                name: "Content-Type",
                value: "text/html",
              },
              {
                name: "App-Name",
                value: "ItemLore",
              },
              {
                name: "Item",
                value: "RingOfBreathing",
              },
              {
                name: "Print-Number",
                value: "4/20",
              },
              {
                name: "Signing-Client",
                value: "ArConnect",
              },
              {
                name: "Signing-Client-Version",
                value: "0.3.5",
              },
            ],
          },
        },
      ],
    },
  },
};

/*
  const onetxs = oneReturn.data.transactions.edges;

  onetxs.forEach ((onetx) => {
    arweave.transactions.getData(onetx.node.id, {decode: true, string: true})
        .then(data => {
            console.log(data);
  });
});
*/

//const itemArray = loreTags.data.transactions.edges;
const txs = loreTags.data.transactions.edges;
//const itemID =  itemArray.node.id;
//const itemOwner = itemArray.node.owner.address;
//const itemTypeTag = itemArray.node.tags[3].name;

function TagTest() {
  const txArray = new Array();
  let n = 0;
  for (const tx of txs) {
    const arrayid = n;
    const address = tx.node.owner.address;
    const print = tx.node.tags[3].value;
    const txid = tx.node.id;
    arweave.transactions
      .getData(tx.node.id, { decode: true, string: true })
      .then((data) => {
        console.log(data);
        const txstory = data;
        let newEntry = { arrayid, address, print, txid, txstory };
        txArray.push(newEntry);
        console.log(txArray);
      });
    n += 1;
  }
  return txArray;
}

let txArray = TagTest();

export default DisplayLoreObjects;
