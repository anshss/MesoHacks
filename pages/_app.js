import '../styles/globals.css'
import Layout from "../components/Layout";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider, 
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'


function MyApp({ Component, pageProps }) {

  // ------------

  const CSC = {
    id: 80001,
    name: 'Polygon mumbai',
    network: 'Polygon mumbai',
    nativeCurrency: {
      decimals: 18,
      name: 'MATIC',
      symbol: 'MATIC',
    },
    rpcUrls: {
      default: 'https://rpc-mumbai.matic.today',
    },
    blockExplorers: {
      default: { name: 'Polygon PoS Chain Testnet Explorer', url: 'https://mumbai.polygonscan.com/' },
    },
    testnet: true,
  }

  const { chains, provider } = configureChains(
    [CSC],
    [
      infuraProvider({ apiKey: '1dbc3ef8703a4669a5cda4f7de7343bc'}),
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id !== CSC.id) return null
          return { http: chain.rpcUrls.default }
        },
      }),
    ]
  )

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  })

  // ------------

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
