import React, { useState } from 'react';
import axios from 'axios';
import { ReactTyped } from "react-typed";
import Github from "../../img/facebookorange.png";
import messenger from "../../img/facebookmessenger.png";
import LinkedIn from "../../img/twitter.png";
import Instagram from "../../img/insta.png";
import GiftForm from "./GiftForm";
import Carousel from "./Carousel/Slider";
import FetchImage from './FetchImage';  // Import the new FetchImage component

const ITEMS_PER_PAGE = 3;

const Intro = () => {
  const [showGiftProducts, setShowGiftProducts] = useState(false);
  const [giftIdeas, setGiftIdeas] = useState([]);
  const [error, setError] = useState("");
  const [showGiftIdeasContainer, setShowGiftIdeasContainer] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [formData, setFormData] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [affiliateUrls, setAffiliateUrls] = useState({});
  const [loadingStates, setLoadingStates] = useState({});
  const [errorStates, setErrorStates] = useState({});

  const handleButtonClick = () => setShowGiftProducts(true);

  const handleReviewClick = (review) => {
    setSelectedPrompt(review);
    setFormData((prevData) => ({
      ...prevData,
      prompt: review,
    }));
  };

  const handleGenerateGiftIdeas = (ideas, error) => {
    setGiftIdeas(ideas); // Clear and set new gift ideas
    setError(error);
    setShowGiftIdeasContainer(true);
    setCurrentPage(0);
  };

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  const handleGenerateMore = async () => {
    if (!formData) {
      setError("Form data is missing");
      return;
    }
    setIsLoadingMore(true);
    try {
      const response = await axios.post("https://shlokverma9828.pythonanywhere.com/generate_more_gift_ideas", formData);
      const newIdeas = response.data.gift_ideas;
      setGiftIdeas([...giftIdeas, ...newIdeas]);
      setError("");
    } catch (error) {
      setError("Error generating more gift ideas");
    }
    setIsLoadingMore(false);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < giftIdeas.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const fetchAffiliateUrl = async (idea) => {
    const query = `${idea.Product_name} ${idea.Company}`;
    setLoadingStates((prevStates) => ({ ...prevStates, [query]: true }));
    setErrorStates((prevStates) => ({ ...prevStates, [query]: "" }));

    try {
      const response = await axios.get('https://real-time-amazon-data.p.rapidapi.com/search', {
        params: { query, page: '1', country: 'IN' },
        headers: {
          'X-RapidAPI-Key': '31016cd6efmshe6f7fb5e68606b5p119872jsn32ae25478ab0',
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
      });
      const products = response.data.data.products;
      if (products && products.length > 0) {
        const productUrl = products[0].product_url;
        const newUrl = `${productUrl}?tag=giftguruai-20&linkCode=osi`;
        setAffiliateUrls((prevUrls) => ({ ...prevUrls, [query]: newUrl }));
      } else {
        setAffiliateUrls((prevUrls) => ({ ...prevUrls, [query]: '' }));
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      setErrorStates((prevStates) => ({ ...prevStates, [query]: 'Failed to fetch data' }));
    }

    setLoadingStates((prevStates) => ({ ...prevStates, [query]: false }));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const displayedIdeas = giftIdeas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <div className="flex ml-10 mt-24 pb-20 pt-13">
        <div className="flex flex-col flex-1 gap-8 items-start">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-5xl mt-10 text-orange-400 fuzzy-bubbles-bold">GiftGuru</p>
            <div className="flex justify-center items-center text-5xl mt-5">
              <p className="text-xl inline-block open-sans-regular">
                The ultimate destination for discovering the perfect gift for every occasion, offering an unparalleled selection of thoughtfully curated treasures for your
                <ReactTyped
                  className="inline-block text-orange-400 font-bold ml-1"
                  style={{ fontSize: "1.875rem" }}
                  strings={['Husband', 'Wife', 'Son', 'Daughter', 'Mother', 'Father', 'Friend']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <img src={LinkedIn} alt="LinkedIn" className=" scale-75 transform hover:scale-100 transition-transform duration-300" />
            <img src={Instagram} alt="Instagram"  className="scale-75 transform hover:scale-100 transition-transform duration-300" />
            <img src={Github} alt="Github"  className="scale-75 transform hover:scale-100 transition-transform duration-300" />
            <img src={messenger} alt="Messenger" className="scale-75 transform hover:scale-100 transition-transform duration-300" />
          </div>
          <div className="max-w-2xl p-2 bg-white shadow-md rounded-md">
            <Carousel onReviewClick={handleReviewClick} />
          </div>
        </div>

        <div className="flex flex-1 relative">
          <div className="max-w-2xl ml-10 p-8 bg-white shadow-md rounded-md">
            <GiftForm onGenerateGiftIdeas={handleGenerateGiftIdeas} onFormDataChange={handleFormDataChange} initialPrompt={selectedPrompt} />
          </div>
        </div>
      </div>
      {showGiftIdeasContainer && (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 mt-10">
          <div className="bg-white text-black p-4 shadow-md rounded-md w-full max-w-6xl">
            {error && <p>{error}</p>}
            <div className="grid grid-cols-3 gap-4">
              {displayedIdeas.map((idea, index) => {
                const query = `${idea.Product_name} ${idea.Company}`;
                const isLoading = loadingStates[query];
                const fetchError = errorStates[query];

                return (
                  <div key={index} className="bg-gray-50 p-4 rounded-md shadow-sm flex flex-col justify-between">
                    <FetchImage query={idea.Product_name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                    <h3 className="fuzzy-bubbles-bold mb-1 text-orange-400">{idea.Product_name}</h3>
                    <p className="text-sm mb-2">{idea.Reason}</p>
                    {!affiliateUrls[query] && (
                      <button
                        onClick={() => fetchAffiliateUrl(idea)}
                        className="bg-orange-400 text-white px-4 py-2 rounded"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Loading...' : 'Generate  Link'}
                      </button>
                    )}
                    {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
                    {affiliateUrls[query] && (
                      <a
                        href={affiliateUrls[query]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:underline mt-2"
                      >
                        View on Amazon
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={handlePreviousPage} disabled={currentPage === 0} className="bg-orange-400 text-white px-4 py-2 rounded disabled:opacity-50">
                Previous
              </button>
              <button onClick={handleNextPage} disabled={(currentPage + 1) * ITEMS_PER_PAGE >= giftIdeas.length} className="bg-orange-400 text-white px-4 py-2 rounded disabled:opacity-50">
                Next
              </button>
            </div>
            <div className="mt-4">
              <button onClick={handleGenerateMore} className="bg-orange-400 text-white px-4 py-2 rounded" disabled={isLoadingMore}>
                {isLoadingMore ? 'Loading...' : 'Generate More'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
