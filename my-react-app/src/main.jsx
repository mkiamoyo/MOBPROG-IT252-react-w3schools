import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import Cars from './Cars';
// Click the "cars.jsx" tab to see the content of the "Cars.jsx" file

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);