
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-[5%] md:left-[10%] w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-[5%] md:right-[10%] w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              University Central Application System
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Your Future <br />
              <span className="text-blue-600">Begins Here</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              One application platform for all universities. Discover programs, track applications, and secure your academic future with our streamlined application system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 px-6 text-base font-medium flex items-center justify-center sm:justify-start transition-colors">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="rounded-full py-3 px-6 border border-blue-200 text-blue-700 text-base font-medium transition-colors hover:bg-blue-50">
                Explore Programs
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">300+ Universities</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">10,000+ Programs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Simple Application</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-2xl" />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="backdrop-blur-sm bg-white/80 p-6 rounded-xl w-full shadow-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Application Period Open</h3>
                      <p className="text-sm text-gray-600">Fall 2023 Semester</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white h-8 px-3 rounded transition-colors">Apply</button>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '70%' }} />
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Application opens</span>
                      <span>70% filled</span>
                      <span>Closing soon</span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="University Students"
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
                style={{ minHeight: '400px', maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
