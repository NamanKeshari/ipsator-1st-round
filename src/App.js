import { useEffect, useLayoutEffect, useState } from "react";
import "./styles.css";
// import { useQuery } from "./useQuery";

export default function App() {
  const [json, setjson] = useState({});
  // const { data } = useQuery({
  //   url: "https://jsonplaceholder.typicode.com/posts/"
  // });

  useLayoutEffect(() => {
    console.log("hi i am naman");
  }, []);

  useEffect(() => {
    setjson({ a: true, out: "a" });
    setjson({ b: true, out: "b" });
    setjson({ c: true, out: "c" });
    setjson({ d: true, out: "d" });
  }, []);

  useEffect(() => {
    console.log(json, "inside");
  }, [json]);

  console.log(json, "outside");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        type="button"
        onClick={(e) => {
          setjson({ click: true });
        }}
      >
        "Click Me"
      </button>
      {/* {typeof data === "string" ? (
        <div>{data}</div>
      ) : (
        data?.map((d, i) => (
          <div key={d.id}>
            {d?.id} {d?.title}
          </div>
        ))
      )} */}
    </div>
  );
}
