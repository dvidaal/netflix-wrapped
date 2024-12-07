import React from 'react';
import { FileUpload } from './components/FileUpload';
import { Summary } from './components/Summary';
import { Header } from './components/Header';
import { HowTo } from './components/HowTo';
import { Footer } from './components/Footer';
import { useNetflixData } from './hooks/useNetflixData';

function App() {
  const { summary, rawData, loading, error, handleFileSelect, resetData } = useNetflixData();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        {!summary && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-600">
                Descobreix els teus hàbits de Netflix. Puja el teu fitxer CSV 
                i obté un resum personalitzat del que has vist aquest 2024.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <FileUpload onFileSelect={handleFileSelect} />
              {loading && (
                <p className="text-center mt-4 text-gray-600">
                  Processant el teu fitxer...
                </p>
              )}
              {error && (
                <p className="text-center mt-4 text-red-600">
                  {error}
                </p>
              )}
              <br></br>
              <center><p className="text-xs text-gray-500 mt-1">No guardem ni recollim aquestes dades</p></center>
            </div>

            <HowTo />
          </div>
        )}

        {summary && rawData && (
          <div className="mt-8">
            <Summary summary={summary} rawData={rawData} />
            <div className="text-center mt-8">
              <button
                onClick={resetData}
                className="px-6 py-3 bg-gradient-to-r from-[#E50914] to-[#831010] text-white 
                         rounded-lg hover:opacity-90 transition-opacity duration-200 
                         font-semibold shadow-md"
              >
                Analitzar un altre fitxer
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;