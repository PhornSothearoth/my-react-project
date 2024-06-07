import { useEffect, useState } from "react";
import Article from "../component/Article";
import MyFooter from "../component/MyFooter";
import Cards from "../component/Card";
import MyNav from "../component/MyNav";
import Loading from "../component/Loading";

function Home() {
  //state -> specail variable
  //state hook use to store data from api response
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fectchProducts = (limit, offset) => {
    fetch(
      `https://api.escuelajs.co/api/v1/products/?offset=${offset}&limit=${limit}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setProducts(resp);
        setLoading(false);
      });
  };

  // Execute
  useEffect(() => {
    //call to api product
    fectchProducts(12, 0);
  }, []);
  return (
    <>
      <main>
        <Article />
        <section className="container mx-auto mt-11">
          <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in popular products
          </h1>
          <p className="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          {/* loop data from product to cards */}
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
            {loading ? (
              <Loading />
            ) : (
              products.length > 0 &&
              products.map((product) => (
                <Cards
                  key={product.id}
                  url={product.images[0]}
                  price={product.price}
                />
              ))
            )}
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;

// hello bro roth cute hi
 
