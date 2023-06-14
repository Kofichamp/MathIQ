"use client"


import { useState } from 'react'

export default function page() {
         // eslint-disable-next-line react-hooks/rules-of-hooks
         const [count, setCount] = useState(0);

      function updateCount() {
        setCount(count + 1);
      }
  return (
    <div>
        <div>{count}</div>
        <button onClick={updateCount}>Count</button>
    </div>
  )
}





























// import { useState } from 'react';

// function page() {
//   const [result, setResult] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const currencyInput = document.querySelector('#currency');
//     const currency = currencyInput.value.toUpperCase();

//     try {
//       const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=3dc26fcc97683663eeff19b14c5584dc');
//       const data = await response.json();

//       const rates = data.rates;
//       if (rates && currency in rates) {
//         const rate = rates[currency];
//         setResult(`1 USD equals to ${rate.toFixed(3)} ${currency}.`);
//       } else {
//         setResult('Invalid currency.');
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" id="currency" placeholder="Currency" />
//         <input type="submit" value="Convert" />
//       </form>
//       <div id="result">{result}</div>
//     </div>
//   );
// }

// export default page;
