import React from 'react';

import { client } from '../lib/client';
import { FooterBanner, HeroBanner } from '../components';

const Campaigns = ({ bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Mobiles for Winter Sale!!!</h2>
      <p>There are many variations passages</p>
    </div>

    

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footerQuery = '*[_type == "footer"]';
  const footerData = await client.fetch(footerQuery);

  return {
    props: { bannerData }
  }
}

export default Campaigns;