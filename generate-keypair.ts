import { addKeypairToEnvFile } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";
import dotenv from 'dotenv';
dotenv.config();
 
const keypair = Keypair.generate();
 
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);

await addKeypairToEnvFile(keypair, "SECRET_KEY_DEMO", ".env");


// import "dotenv/config";
// import { getKeypairFromEnvironment } from "@solana-developers/helpers";
 
// // const keypair = getKeypairFromEnvironment("SECRET_KEY");
// const keypair = await getKeypairFromEnvironment("SECRET_KEY");
 
// console.log(
//   `✅ Finished! We've loaded our secret key securely, using an env file!`,
// );