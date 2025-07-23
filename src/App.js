import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import TechnologiesPage from './pages/TechnologiesPage';
import OffshoreDeveloperPage from './pages/OffshoreDeveloperPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage';
import ApplicationModernizationPage from './pages/ApplicationModernizationPage';
import HireDedicatedDevelopersPage from './pages/HireDedicatedDevelopersPage';
import UIUXServicesPage from './pages/UIUXServicesPage';
import SaaSDevelopmentPage from './pages/SaaSDevelopmentPage';
import WebAppDevelopmentPage from './pages/WebAppDevelopmentPage';
import APIIntegrationPage from './pages/ApiIntegrationPage';
import SoftwareProductPage from './pages/SoftwareProductPage';
import StaffAugmentationPage from './pages/StaffAugmentationPage.js';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import CloudConsultingPage from './pages/CloudConsultingPage';
import DevopsServicesPage from './pages/DevopsServicesPage';
import EnterPrise from './pages/EnterPrise';
import SoftwareOutsourcing from './pages/SoftwareOutsourcing';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/offshore-developer" element={<OffshoreDeveloperPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
        <Route path="/services/application-modernization" element={<ApplicationModernizationPage />} />
        <Route path="/services/hire-dedicated-developers" element={<HireDedicatedDevelopersPage />} />
        <Route path="/services/ui-ux-services" element={<UIUXServicesPage />} />
        <Route path="/services/saas-development" element={<SaaSDevelopmentPage />} />
        <Route path="/services/web-app-development" element={<WebAppDevelopmentPage />} />
        <Route path="/services/api-integration" element={<APIIntegrationPage />} />
        <Route path="/services/software-product" element={<SoftwareProductPage />} />
        <Route path="/services/staff-augmentation" element={<StaffAugmentationPage />} />
        <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
        <Route path= "/services/cloud-consulting" element={<CloudConsultingPage />}/>
        <Route path="/services/devops-services" element={<DevopsServicesPage />} />
        <Route path="/services/enterprise-software" element={<EnterPrise />} />
        <Route path="/services/software-outsourcing" element={<SoftwareOutsourcing />} />
      </Routes>
    </Router>
  );
}

export default App;
