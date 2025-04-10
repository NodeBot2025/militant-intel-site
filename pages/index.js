import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <Layout>
      <h2>Latest Military News</h2>
      {news.map((item, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <h3>{item.title}</h3>
          </a>
          <p>{item.summary}</p>
        </div>
      ))}
    </Layout>
  );
}