import CardList from "./component/card-list/CardList";
import SearchBox from "./component/search-box/SearchBox";
import "./App.css";
import { useEffect, useState } from "react";

let App = () => {
  const [filter, setFilter] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setMonsters(res));
  }, []);

  let onSearchChange = (e) => {
    let searchField = e.target.value.toLocaleLowerCase();

    setFilter(searchField);
  };

  let filterMonsters = monsters.filter((mons) => {
    return mons.name.toLocaleLowerCase().includes(filter);
  });

  return (
    <div>
      <h1 className="app-title">Monster Roldex</h1>
      <SearchBox
        className={"monster-search-box"}
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monstars: [],
//       filter: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((res) =>
//         this.setState(() => {
//           return { monstars: res };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     let searchField = e.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return {
//         filter: searchField,
//       };
//     });
//   };

//   render() {
//     let { onSearchChange } = this;
//     let filterMonsters = this.state.monstars.filter((mons) => {
//       return mons.name.toLocaleLowerCase().includes(this.state.filter);
//     });

//     return (
//       <div>
//         <h1 className="app-title">Monster Roldex</h1>
//         <SearchBox
//           className={"monster-search-box"}
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//         />
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

export default App;
