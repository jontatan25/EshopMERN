import React from "react";
import { useState, useEffect } from "react";
import CarouselSingle from "../../components/CarouselSingle/CarouselSingle";
import { getProducts } from "../../service";
import "./style.css";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const initProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    initProducts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <h5 className="shoppingCart__url">Home / ShoppingCart</h5>
      <div className="blog__banner">
        <h3 className="blog__banner-text">
          WHAT TO WEAR TO A SUMMER WEDDING THIS YEAR?
        </h3>
      </div>
      <section>
        <div className="banner__content">
          <div className="banner__article">
            <h4 className="banner__article-title">The Dress</h4>
            <p className="banner__article-text">
              It’s a tricky thing, being a wedding guest.<br/> Among the endless list
              of requirements – buy a present, arrange accommodation, practise
              your small talk – there’s one obligation that trumps them all in
              terms of effort: fix up and look sharp.<br/><br/> The rules surrounding
              wedding guest dressing are as nuanced as they come.<br/><br/> There are some
              obvious musts – avoiding white is always a good idea – and others
              that are only acknowledged by serial wedding-goers, such as
              steering clear of stilettos unless you enjoy the feeling of
              numbness in your feet.<br/><br/> In the summer, things get even more
              complicated. Not only do you have to find a sweat-free way to
              “dress to the nines”, but you have to strike the right balance
              between playful sunshine garb and formal occasionwear. This forces
              you to ask difficult questions, such as “Is this wrap dress more
              ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic
              French woman, or a dishevelled bird?”<br/><br/> It’s no mean feat, so here’s
              our handy guide to summer wedding guest dressing, with tips from
              industry experts on the trends and colours you need to know about
              this season .
            </p>
            <div className="banner__article-img"></div>
            <h4 className="banner__article-title">The Dress</h4>
            <p className="banner__article-text">
              It’s a tricky thing, being a wedding guest.<br/> Among the endless list
              of requirements – buy a present, arrange accommodation, practise
              your small talk – there’s one obligation that trumps them all in
              terms of effort: fix up and look sharp.<br/><br/> The rules surrounding
              wedding guest dressing are as nuanced as they come.<br/><br/> There are some
              obvious musts – avoiding white is always a good idea – and others
              that are only acknowledged by serial wedding-goers, such as
              steering clear of stilettos unless you enjoy the feeling of
              numbness in your feet.<br/><br/> In the summer, things get even more
              complicated. Not only do you have to find a sweat-free way to
              “dress to the nines”, but you have to strike the right balance
              between playful sunshine garb and formal occasionwear. This forces
              you to ask difficult questions, such as “Is this wrap dress more
              ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic
              French woman, or a dishevelled bird?”<br/><br/> It’s no mean feat, so here’s
              our handy guide to summer wedding guest dressing, with tips from
              industry experts on the trends and colours you need to know about
              this season .
            </p>
          </div>
          <div className="banner__ads">
            <div className="banner__ads-1"></div>
            <div className="banner__ads-1 banner__ads-2"></div>
          </div>
        </div>
      </section>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <span>Oops something went wrong. Please try again.</span>
      ) : (
        products && (
          <CarouselSingle
            products={products}
            title="Featured Items"
            category={"NEW-ARRIVALS"}
          />
        )
      )}
    </>
  );
};

export default Blog;
