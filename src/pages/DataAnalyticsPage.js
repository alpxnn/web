import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroData from '../components/HeroData';

import LatestInsights from '../components/LatestInsights';

const DataAnalyticsPage = () => {
    return (
        <div className="bg-gray-900 text-white overflow-x-hidden">
            <Header />
            <HeroData />
            <LatestInsights />
            
             


            <Footer/>
        </div>
    );
    }

export default DataAnalyticsPage;