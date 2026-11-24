import { ViemChainProbe } from "../infrastructure/viem-chain-probe";
import { buildApp } from "./build-app";
import "dotenv/config";

const port = Number(process.env.PORT ?? 3000);
console.info("process.env.ANVIL_RPC_URL: " + process.env.ANVIL_RPC_URL);
const rpcUrl = process.env.ANVIL_RPC_URL ?? "http://127.0.0.1:8545";

const app = buildApp({
  chainProbe: new ViemChainProbe(rpcUrl),
});

await app.listen({
  host: "0.0.0.0",
  port,
});
