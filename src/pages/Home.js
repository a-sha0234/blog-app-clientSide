import { react, useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home(props) {
  const [apiPostData, setApiPostData] = useState([]);

  const [isDataExist, setIsDataExist] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:3002/allposts", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((result) => {
  //       return result.json();
  //     })
  //     .then((posts) => {
  //       setApiPostData(posts);
  //     });
  // }, []);

  useEffect(() => {
    if (props.apiData.length > 0) {
      setIsDataExist(true);
    } else {
      setIsDataExist(false);
    }
  }, [props.apiData]);

  

  return (
    <div>
      {isDataExist &&
        props.apiData.map((post) => {
          return <Card post={post} />;
        })}
    </div>
  );
}
