// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
 
// const publicKey = new PublicKey("DT4rwvJCLyb5fGoykvAkSrstvqpwA7CC6h3D8bPcKswL");
 
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
 
// const balanceInLamports = await connection.getBalance(publicKey);
 
// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
// console.log(
//   `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
// );

import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}
 
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// let connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
 
const publicKey = new PublicKey(suppliedPublicKey);
 
const balanceInLamports = await connection.getBalance(publicKey);
 
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
);