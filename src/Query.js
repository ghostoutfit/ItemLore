import Arweave from "arweave";
import React, { Component } from "react";

const arweave = Arweave.init({
  host: "arweave.net",
});

export class Query extends Component {
  getLoreTransactions() {
    let query = {
      query: `query {
        transactions(
        tags: [
            {
                name: "Content-Type",
                values: ["ItemLore"]
            }
        ]
    ) {
        edges {
            node {
                id
            }
        }
    }
}`,
    };

    async function defineVars() {
      const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(query),
      };

      const res1 = await fetch("https://arweave.net/graphql", requestOptions);
      let json = await res1.clone().json();
      return json;
    }

    defineVars();
  }
}

/*class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'NewText'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
    let itemType = this.state.value;
    console.log("state value test:" + itemType)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Item:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Query;

*/

/*  //DMac's original ts code

export async function getLoreTransactions(address){
    let query = {
        query: `query {
        transactions(recipients: ["${address}"],
        tags: [
            {
                name: "App-Name",
                values: ["permamail"]
            }
        ]
    ) {
        edges {
            node {
                id
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

const res1 = await fetch("https://arweave.net/graphql", requestOptions);
let json = await res1.clone().json();
return json;
}

*/
