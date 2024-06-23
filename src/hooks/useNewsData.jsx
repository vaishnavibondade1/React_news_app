// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchNewsData() {
//       try {
//         setLoading(true);

//         const apiKey = 'bef5f7f420217664139654f42edc1f99'; // Your new API key
//         const apiUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`;
//         const categoryParam = category ? `&category=${category}` : "";
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;
//         const response = await fetch(url);
//         const data = await response.json();

//         setNewsData(data.articles);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     }

//     fetchNewsData();
//   }, [category, searchTerm]);

//   return { newsData, loading, error };
// };

// export default useNewsData;

import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = 'bef5f7f420217664139654f42edc1f99'; // Your new API key
        const apiUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`;
        const categoryParam = category ? `&category=${category}` : "";
        const searchParam = searchTerm ? `&q=${searchTerm}` : "";
        const url = apiUrl + categoryParam + searchParam;
        const response = await fetch(url);
        const data = await response.json();

        setNewsData(data.articles);
        console.log(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;