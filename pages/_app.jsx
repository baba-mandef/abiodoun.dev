import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    
      <Layout lang="fr">
        <Component>{pageProps}</Component>
      </Layout>
    
  );
}
