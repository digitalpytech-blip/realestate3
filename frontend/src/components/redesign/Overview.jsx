import React from 'react';
import { projectData } from '../../utils/mockData';

const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1623051786509-57224cdc43e1?w=800&q=80"
                alt="Luxury Building"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-500 text-white p-6 rounded-xl shadow-xl">
                <p className="text-sm font-semibold">RERA Approved</p>
                <p className="text-xs">{projectData.rera}</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About {projectData.name}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Welcome to {projectData.name}, where modern architecture meets natural serenity. 
                  Spread across 7+ acres with only 528 exclusive units, this is luxury redefined.
                </p>
                <p>
                  Experience premium living with spacious 3 BHK and 4 BHK apartments featuring 
                  9-foot wide semi wrap-around balconies offering breathtaking views. Each home is 
                  crafted with advanced Mivan technology ensuring superior construction quality.
                </p>
                <p>
                  Located in Sector-22D, YEIDA, Greater Noida, {projectData.name} offers unparalleled 
                  connectivity to Jewar Airport (10 mins), Noida, and major IT hubs. With only 2 flats 
                  per floor, enjoy enhanced privacy and exclusive amenities including a temperature-controlled 
                  swimming pool, sports facilities, and lush landscaped gardens.
                </p>
                <p className="text-lg font-semibold text-slate-900 mt-6">
                  {projectData.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
