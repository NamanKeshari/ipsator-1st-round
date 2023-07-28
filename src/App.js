import "./styles.css";
import { useQuery } from "./useQuery";

export default function App() {
  const { data } = useQuery({
    url: "https://jsonplaceholder.typicode.com/posts/"
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {typeof data === "string" ? (
        <div>{data}</div>
      ) : (
        data?.map((d, i) => (
          <div key={d.id}>
            {d?.id} {d?.title}
          </div>
        ))
      )}
    </div>
  );
}
