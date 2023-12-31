import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 300px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    ); /* Adjust the minimum and maximum width as needed */
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
