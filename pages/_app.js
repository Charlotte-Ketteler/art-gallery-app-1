import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout.js";

export default function App({ Component, pageProps }) {
  const fetcher = (URL) => fetch(URL).then((response)=> response.json())
  const { data, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);

  if (error) return <div>Error loading art pieces.</div>;
  if (!data) return <div>Loading...</div>;
 
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
      <Layout/>
    </>
  );
}
