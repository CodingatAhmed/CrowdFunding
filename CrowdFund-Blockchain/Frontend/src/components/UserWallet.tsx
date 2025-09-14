import React, { useState, useEffect } from "react";

const WalletInterface: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("0.00");

  // Heroicons as JSX
  const WalletIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-24 h-24 text-indigo-400 animate-pulse-slow"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V12m18 0h-3.562c.355.125.699.289 1.037.476.471.261.967.57 1.458.94c.594.464 1.154 1.002 1.637 1.597.464.577.857 1.217 1.171 1.9.333.72.569 1.5.692 2.302A2.25 2.25 0 0 0 21 18.75V12z"
      />
    </svg>
  );

  const LinkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 mr-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.457-1.457m1.24-.04a4.5 4.5 0 0 0 6.366-6.366l-4.5-4.5a4.5 4.5 0 0 0-6.364 6.364l1.457 1.457z"
      />
    </svg>
  );

  const CreditCardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6M21.75 12V6a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 6v6a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12z"
      />
    </svg>
  );

  const ArrowRightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );

  const ArrowLeftIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );

  const ArrowDownIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  );

  const formatAddress = (address: string) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const connectWallet = () => {
    setIsLoading(true);

    setTimeout(() => {
      const mockAddress = "0x1A2b3C4d5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T";
      const mockBalance = (Math.random() * 100).toFixed(2);

      setWalletAddress(mockAddress);
      setWalletBalance(mockBalance);
      setIsConnected(true);
      setIsLoading(false);
    }, 2000);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
    setWalletBalance("0.00");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col items-center">
        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Header */}
        <div className="z-10 text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
            CryptoFund Wallet
          </h1>
          <p className="mt-2 text-gray-400 text-lg">
            Your portal to decentralized crowdfunding.
          </p>
        </div>

        {/* Main Content */}
        <div className="z-10 w-full">
          {!isConnected ? (
            <div className="flex flex-col items-center justify-center p-6 md:p-8">
              <div className="bg-gray-700 p-8 rounded-full mb-6">{WalletIcon}</div>
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Connect your wallet to get started.
              </h2>
              <p className="text-gray-400 text-center mb-8">
                Connect a Web3 wallet like MetaMask to view your balance and
                interact with projects.
              </p>
              <button
                onClick={connectWallet}
                disabled={isLoading}
                className={`w-full max-w-sm flex items-center justify-center px-6 py-4 font-bold rounded-xl transition-all duration-300 transform
                  ${
                    isLoading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"
                  }
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 
                          3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Connecting...
                  </span>
                ) : (
                  <>
                    {LinkIcon}
                    Connect Wallet
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Wallet Info */}
              <div className="bg-gray-700 p-6 rounded-2xl shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center text-indigo-400 font-bold">
                    {CreditCardIcon}
                    Your Address
                  </span>
                  <button
                    onClick={() => navigator.clipboard.writeText(walletAddress)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Copy
                  </button>
                </div>
                <p
                  className="text-lg md:text-xl font-mono truncate"
                  id="wallet-address-display"
                >
                  {formatAddress(walletAddress)}
                </p>
              </div>

              {/* Balance */}
              <div className="bg-gray-700 p-6 rounded-2xl shadow-inner text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="flex items-center text-green-400 font-bold">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 
                          2-3 2m0-8v2m0 4v2m-6 3h12a2 2 0 002-2V7a2 
                          2 0 00-2-2H6a2 2 0 00-2 2v10a2 
                          2 0 002 2z"
                      ></path>
                    </svg>
                    Current Balance
                  </span>
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-white">
                  {walletBalance} ETH
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-95">
                  {ArrowRightIcon} Send
                </button>
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-95">
                  {ArrowDownIcon} Receive
                </button>
              </div>

              {/* Disconnect */}
              <button
                onClick={disconnectWallet}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-95 mt-4"
              >
                {ArrowLeftIcon} Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default WalletInterface;
