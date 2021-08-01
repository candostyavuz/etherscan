import "./index.scss";

 (function getLatestBlock() {
    const request = new Request('http://localhost:3032/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({method: 'getLatestBlock'})
    });
    
     fetch(request)
      .then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
        document.getElementById("blocknumber").innerHTML = response.blockNumber.number.toString();
        document.getElementById("timestamp").innerHTML = new Date(response.blockNumber.timestamp*1000).toISOString().slice(0, 19).replace('T', ' ');
        document.getElementById("difficulty").innerHTML = response.blockNumber.difficulty.toString();
        document.getElementById("hash").innerHTML = response.blockNumber.hash.toString();
        document.getElementById("nonce").innerHTML = response.blockNumber.nonce.toString();
        document.getElementById("miner").innerHTML = response.blockNumber.miner.toString();
        document.getElementById("gaslimit").innerHTML = parseInt(response.blockNumber.gasLimit.hex.toString());
        document.getElementById("gasused").innerHTML = parseInt(response.blockNumber.gasUsed.hex.toString());
        document.getElementById("transactions").innerHTML = response.blockNumber.transactions.toString().split(',').join("<br />");
      });
  })();
  //setInterval(getLatestBlock, 10000);
  
  document.getElementById("getblock").addEventListener('click', () => { 
    const request = new Request('http://localhost:3032/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({method: 'getLatestBlock'})
  });
      fetch(request)
      .then(response => {
        return response.json();
      }).then(response => {
        document.getElementById("blocknumber").innerHTML = response.blockNumber.number.toString();
        document.getElementById("timestamp").innerHTML = new Date(response.blockNumber.timestamp*1000).toISOString().slice(0, 19).replace('T', ' ');
        document.getElementById("difficulty").innerHTML = response.blockNumber.difficulty.toString();
        document.getElementById("hash").innerHTML = response.blockNumber.hash.toString();
        document.getElementById("nonce").innerHTML = response.blockNumber.nonce.toString();
        document.getElementById("miner").innerHTML = response.blockNumber.miner.toString();
        document.getElementById("gaslimit").innerHTML = parseInt(response.blockNumber.gasLimit.hex.toString());
        document.getElementById("gasused").innerHTML = parseInt(response.blockNumber.gasUsed.hex.toString());
        document.getElementById("transactions").innerHTML = response.blockNumber.transactions.toString().split(',').join("<br />");
      });
  });
