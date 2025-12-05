import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Home, Maximize, Check } from 'lucide-react';
import { projectData } from '../utils/mockData';

const FloorPlans = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="floor-plans" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Floor Plans & Specifications
          </h2>
          <p className="text-lg text-slate-600">
            Thoughtfully designed spaces that blend luxury with functionality
          </p>
        </div>

        {/* Floor Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {projectData.floorPlans.map((plan, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-slate-200 hover:border-slate-300 overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{plan.type}</span>
                  <Home className="h-8 w-8" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* Area Details */}
                <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-slate-200">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Carpet Area</p>
                    <p className="text-2xl font-bold text-slate-900">{plan.carpetArea}</p>
                    <p className="text-xs text-slate-500">sq. ft.</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Built-Up Area</p>
                    <p className="text-2xl font-bold text-slate-900">{plan.builtUpArea}</p>
                    <p className="text-xs text-slate-500">sq. ft.</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                >
                  Request Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specifications with Images */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Specifications List */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50/50 p-8">
                <CardTitle className="text-3xl font-bold text-slate-900 flex items-center space-x-3">
                  <Maximize className="h-8 w-8" />
                  <span>Premium Specifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {projectData.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interior Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" 
                  alt="Luxury Living Room"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=600&q=80" 
                  alt="Master Bedroom"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?w=600&q=80" 
                  alt="Modern Kitchen"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=600&q=80" 
                  alt="Balcony Setup"
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
