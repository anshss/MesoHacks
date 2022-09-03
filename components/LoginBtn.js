// import styles from '../styles/Login.module.css'

import { useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";


export default function Login() {
    const [LoggedIn, setLoggedIn] = useState("false");

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
                const web3 = new Web3(connection);
                // const accounts = await web3.eth.getAccounts();

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
``
            window.ethereum.on("disconnect", () => {
                setLoggedIn(false);
            });
        }
    }

    return <div>{/* {LoggedIn ? walletIcon : loginIcon onClick={login}} */}</div>;
}
