import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner} from '../components';

const Mobiles = ({ products, bannerData }) => (
  <div>
    <div className="products-heading">
      <h2>ALL MOBILES OF TECH--X</h2>
      <p>These Mobiles are from various brands with the best specifications</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Mobiles;