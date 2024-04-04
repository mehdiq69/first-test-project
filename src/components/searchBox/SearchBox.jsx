import { useContext } from "react";
import { UserContext } from "../../context/context";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const { text, setText } = useContext(UserContext);
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* <div className={styles.searchResult}>
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default SearchBox;
