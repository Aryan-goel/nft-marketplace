//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x5D4BbE280e107EC7cB5D9aE07c0099a23DeFc0FF&order_direction=asc"
      );
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {/* <CollectionCard
        id={0}
        name={"Zombie Punk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/QmbxpMKvCQV9rGNujnWBr1cb41QnFk18UBb1uYEfJihy5y/0.jpg"
      /> */}
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
