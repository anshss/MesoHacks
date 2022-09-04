import styles from "../styles/Login.module.css";

import { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

export default function Login() {
  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (LoggedIn == true) {
      check();
    }
  }, [LoggedIn]);

  async function login() {
    if (window !== undefined) {
      if (window.ethereum) {
        const providerOptions = {};
        const web3Modal = new Web3Modal({
          network: "mumbai",
          cacheProvider: true,
          providerOptions,
        });

        connection = await web3Modal.connect();
        // const provider = new ethers.providers.Web3Provider(connection)
        // const address = await provider.send("eth_requestAccounts", []);

        await connection.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }],
        });
        setLoggedIn(true);
      }
    }
  }

  function check() {
    if (window !== undefined) {
      window.ethereum.on("accountsChanged", () => {
        setLoggedIn(false);
      });

      window.ethereum.on("chainChanged", (chainId) => {
        if (chainId !== "0x13881") {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
        }
      });
      ``;
      window.ethereum.on("disconnect", () => {
        setLoggedIn(false);
      });
    }
  }

  return (
    <div>
      {LoggedIn ? (
        <img
          className={styles.walletIcon}
          src="https://img.icons8.com/ios/50/FFFFFF/wallet--v1.png"
        />
      ) : (
        <button className={styles.loginButton} onClick={login}>
          LOGIN
        </button>
      )}
    </div>
  );
}
