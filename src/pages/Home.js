import { react, useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home(props) {
  const [apiPostData, setApiPostData] = useState([]); // hold api data

  const [isDataExist, setIsDataExist] = useState(false);

  useEffect(() => {
    // check if api data exists
    if (props.apiData.length > 0) {
      setIsDataExist(true);
    } else {
      setIsDataExist(false);
    }
  }, [props.apiData]); // runs everytime the data changes

  return (
    <div>
      {isDataExist &&
        props.apiData.map((post) => {
          return <Card post={post} />;
        })}
    </div>
  );
}
