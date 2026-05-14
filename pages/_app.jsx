import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page)=><Layout lang="fr">{page}</Layout>);
  

      return  getLayout(<Component {...pageProps} />);
    
}
