import Arweave from "arweave";
//import {useForm} from "react-hook-form";
import React, { Component } from "react";
import "./App.css";
//import { CONNECTING } from 'ws';
import { TextExample } from "./NewBuild";

const arweave = Arweave.init({
  host: "arweave.net",
});

arweave.wallets
  .getBalance("WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU")
  .then((balance) => {
    let winston = balance;
    let ar = arweave.ar.winstonToAr(balance);
    console.log(winston);
    console.log(ar);
  });

async function submitLore(itemLore) {
  const permissions = ["ACCESS_ADDRESS", "SIGN_TRANSACTION", "SIGNATURE"];
  await window.arweaveWallet.connect(permissions, {
    name: "ItemLore",
    logo: "https://magicitems.org/img/ghosty.gif",
  });

  let key = await arweave.wallets.generate();

  // Plain text
  let transactionA = await arweave.createTransaction(
    {
      data: Buffer.from(itemLore, "utf8"),
    },
    key
  );

  transactionA.addTag("Content-Type", "text/html");
  transactionA.addTag("App-Name", "ItemLore");
  transactionA.addTag("Item", "TestItems");
  transactionA.addTag("Print-Number", "5/20");

  /*
// Buffer
let transactionB = await arweave.createTransaction({
    data: Buffer.from('Some data', 'utf8')
}, key);
*/

  await arweave.transactions.sign(transactionA);

  let uploader = await arweave.transactions.getUploader(transactionA);

  while (!uploader.isComplete) {
    await uploader.uploadChunk();
    console.log(
      `${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`
    );
  }

  /*
function checkSubmit(){
  arweave.wallets.getLastTransactionID('WLFm2hFVbkc_Cd3w3aHC2aRWxFuSzYsP00gCempykqU').then((recentID) => {
  console.log(recentID); });

const checkUpload = arweave.transactions.get(recentID).then(checkUpload => {
console.log(checkUpload);
}
}
*/
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "(Write your story here)",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your story reads: " + this.state.value);
    event.preventDefault();
    let itemLore = this.state.value;
    console.log("state value test:" + itemLore);
    submitLore(itemLore);
    //checkSubmit();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Item:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <TextExample/>
      </div>
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>    Name:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <input type="file" />
          
          <button onClick={submitLore}>   Upload    </button>
          <button onClick={checkSubmit}>   Check    </button>
        </header>
      </div>
    );
  }
}
*/

/*
export default function App() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" name="email" ref={register}/>
      <input type="password" placeholder="Password" name="password" ref={register}/>
      <input type="submit"/>


    </form>

  );
}
*/

export default App;
