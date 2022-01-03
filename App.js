import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="hero is-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">日本大学文理学部情報科学科</h1>
          <h1 className="title">Webプログラミングの演習課題</h1>
          <h2>学籍番号：5418026 名前：田中柊羽</h2>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="media">
      <div className="media-left">
        <figure className="image">
        <img src={props.src} alt="today's dinner" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}


function Gallery(props) {
  const { url } = props;
  if (url == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
        <Image src={ url } />
      </div>
    </div>
  );
}



function Main() {
 const [url, setUrls] = useState(null);
  useEffect(() => {
    fetchImages().then((url) => {
      setUrls(url);
    });
  });
  return (
    <main>
      <section className="section">
        <div className="container">
        <h1>美味しそうな食べ物の画像がランダムに表示されます</h1>
        <Gallery url={url} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Food images are retrieved from Foodish</p>
        <p></p>
        <p>
          <a href="https://foodish-api.herokuapp.com/images/samosa/"> Foodish</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;