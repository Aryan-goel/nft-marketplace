import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={'aryan'}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/QmbxpMKvCQV9rGNujnWBr1cb41QnFk18UBb1uYEfJihy5y/0.jpg"
      />
    </div>
  );
}

export default App;
