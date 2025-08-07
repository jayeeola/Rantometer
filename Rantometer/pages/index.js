
import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Gauge = dynamic(() => import('../components/Gauge'), { ssr: false });

export default function Home() {
  const [rant, setRant] = useState('');
  const [intensity, setIntensity] = useState(null);
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rant }),
    });
    const data = await res.json();
    setIntensity(data.intensity);
    setResponse(data.response);
  };

  return (
    <div className="container">
      <Head>
        <title>RantOmeter</title>
      </Head>
      <h1>RantOmeter</h1>
      <textarea
        placeholder="Type your grievance..."
        value={rant}
        onChange={(e) => setRant(e.target.value)}
      />
      <button onClick={handleSubmit}>Analyze</button>
      {intensity !== null && <Gauge value={intensity} />}
      {response && <p className="response">RantOmeter says: {response}</p>}
    </div>
  );
}
