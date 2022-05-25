import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Card from "./components/Card";
import BlogDetails from "./components/BlogDetails";
import "./scss/main.scss";

function App() {
  const [postsData, setPostsData] = useState([]);

  const [isDataLoading, setIsDataLoading] = useState(); //

  useEffect(() => {
    fetch("http://localhost:3002/allposts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((posts) => {
        setPostsData(posts);
      });
  }, []);

  useEffect(() => {
    // check if api request has been fufilled
    if (postsData.length > 0) {
      setIsDataLoading(false);
    } else {
      setIsDataLoading(true);
    }
  }, [postsData]);

  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <header>
          <div className="appTitle">Blogs</div>
          <Navbar />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home apiData={postsData} />}></Route>
        {/* Dynamically create routes for each post */}
        {isDataLoading == false &&
          postsData.map((post) => {
            let route = `/post/${post._id}`;
            return (
              // <Route path={route} element={<Card apiData={post} />}></Route>
              <Route
                path={route}
                element={<BlogDetails apiData={post} />}
              ></Route>
            );
          })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
