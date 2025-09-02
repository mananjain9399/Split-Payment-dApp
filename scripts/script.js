// public/script.js

let contract;
let signer;

// Replace with your deployed contract address after deploy
const contractAddress = "0xYourContractAddressHere"; // ← Change this
const abi = [/* ABI GOES HERE */];

async function connectWallet() {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    console.log("Connected to wallet:", await signer.getAddress());
  } else {
    alert("Please install MetaMask");
  }
}

async function createSplit() {
  const recipients = [
    document.getElementById("recipient1").value,
    document.getElementById("recipient2").value,
  ];
  const percentages = [
    parseInt(document.getElementById("percent1").value),
    parseInt(document.getElementById("percent2").value),
  ];
  const description = document.getElementById("description").value;

  try {
    const tx = await contract.createSplit(recipients, percentages, description);
    await tx.wait();
    alert("Split created successfully!");
  } catch (err) {
    console.error(err);
    alert("Error creating split");
  }
}

async function sendPayment() {
  const splitId = document.getElementById("splitId").value;
  const amountEth = document.getElementById("amount").value;

  try {
    const tx = await contract.receivePayment(splitId, {
      value: ethers.utils.parseEther(amountEth),
    });
    await tx.wait();
    alert("Payment sent and distributed!");
  } catch (err) {
    console.error(err);
    alert("Error sending payment");
  }
}

async function fetchSplitInfo() {
  const splitId = document.getElementById("infoSplitId").value;
  try {
    const [recipients, percentages, totalReceived, isActive, description] =
      await contract.getSplitInfo(splitId);
    document.getElementById("splitInfo").innerText = `
      Recipients: ${recipients.join(", ")}
      Percentages: ${percentages.join(", ")}
      Total Received: ${ethers.utils.formatEther(totalReceived)} ETH
      Active: ${isActive}
      Description: ${description}
    `;
  } catch (err) {
    console.error(err);
    alert("Error fetching split info");
  }
}

