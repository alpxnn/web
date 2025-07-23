import React from 'react';

// Data for the service cards
const servicesData = [
  {
    title: 'Fintech',
    description: 'Our fintech software development services cater to the dynamic needs of the financial technology industry.',
    items: [
      'Financial Transactions Monitoring',
      'Financial Risk Management',
      'Anti-Money Laundering Compliance',
      'Mobile Money Transfer',
    ],
  },
  {
    title: 'Healthcare',
    description: 'Our healthcare software solutions streamline operations, improve patient care, and ensure compliance within the healthcare sector.',
    items: [
      'Custom EMR/EHR Software',
      'Therapy Practice Software',
      'Homecare Services Platform',
      'Online Pharmacy Supply',
    ],
  },
  {
    title: 'Insurance',
    description: 'Our insurance software development services develop customized solutions that automate processes, enhance customer experiences, and enable data-driven decision-making.',
    items: [
      'Policy Management System',
      'Risk Assessment Modeling',
      'Fraud Detection Prevention',
      'Digital Claims Processing',
    ],
  },
  {
    title: 'Transportation',
    description: 'Our transportation software solutions optimize transportation services while enhancing visibility and collaboration across the entire supply chain.',
    items: [
      'Fleet Management Tracking',
      'Freight Forwarding Platform',
      'Intelligent Transportation System (ITS)',
      'Transportation Marketplace Platform',
    ],
  },
  {
    title: 'Oil & Gas',
    description: 'Our oil and gas software development services cover upstream, midstream, and downstream operations.',
    items: [
      'Exploration and Production Management',
      'Refinery Management System',
      'Pipeline Integrity Management',
      'Environmental Compliance and Reporting',
    ],
  },
  {
    title: 'Retail',
    description: 'Our retail software solutions enable seamless omnichannel experiences, supply chain optimization, and data-driven decision-making.',
    items: [
      'Multi-Channel eCommerce Management',
      'B2B & B2C Marketplace Solutions',
      'Custom POS Solution',
      'AR Product Selection Solution',
    ],
  },
];

// SVG Icon Components
const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-indigo-400 mr-2 mt-1 flex-shrink-0"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Service Card Component
const ServiceCard = ({ title, description, items }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:shadow-xl hover:shadow-indigo-500/10">
    <div className="flex items-center mb-4">
      <CheckCircleIcon />
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
    </div>
    <p className="text-gray-400 mb-5 flex-grow">{description}</p>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <ChevronRightIcon />
          <span className="text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Main App Component
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
            Development Services and Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
            Jellyfish Technologies is at the forefront of delivering innovative and reliable software solutions. From healthcare to finance and beyond, we specialize in crafting custom software solutions that address industry-specific challenges, streamline processes, and drive innovation, ensuring your organization stays ahead in digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
