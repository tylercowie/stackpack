import React from 'react';
import axios from '../lib/axios';

export default function Home({ siteContent }) {
  return (
    <div>
      <h1>{siteContent.title}</h1>
      <p>{siteContent.description}</p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get('/site_content');
  const siteContent = res.data.data;

  return {
    props: {
      siteContent,
    },
  };
}