import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaRegCheckCircle, FaHandHoldingHeart, FaChartLine } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import UnderstandingNDIS from '../components/home/UnderstandingNDIS';
import HowItWorks from '../components/home/HowItWorks';
import ContactBanner from '../components/home/ContactBanner';

const fundingCategories = [
  {
    icon: FaHandHoldingHeart,
    title: 'Core Supports',
    description: 'Funding for everyday activities, your current disability-related needs, and to help you work towards your goals.',
    items: [
      'Assistance with Daily Life',
      'Transport Assistance',
      'Consumables & Supplies',
      'Social & Community Participation'
    ]
  },
  {
    icon: FaChartLine,
    title: 'Capacity Building',
    description: 'Funding to help build your independence and skills, allowing you to pursue your long-term goals.',
    items: [
      'Support Coordination',
      'Improved Living Arrangements',
      'Increased Social & Community Participation',
      'Improved Daily Living Skills'
    ]
  }
];

const NDISSupport = () => {
  return (
    <>
      <Helmet>
        <title>NDIS Support | Astute Softcare</title>
        <meta name="description" content="Learn how Astute Softcare can help you navigate your NDIS plan, maximize your funding, and receive the best possible care." />
      </Helmet>

      <main>
        <PageHeader 
          title="NDIS Support" 
          breadcrumb="NDIS Support"
          bgImage="https://res.cloudinary.com/defqgygsf/image/upload/v1791280014/Caring_Nurse_with_Elderly_Woman_1_ncfd4o.png" 
        />

        {/* Introduction Section using the existing component */}
        <UnderstandingNDIS />

        {/* Funding Categories Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#FDCB58] font-bold tracking-wider uppercase text-sm mb-3 block">
                Your Funding Options
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-secondary mb-6">
                NDIS Support Categories We Cover
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The NDIS provides funding across three main categories. As a registered provider, we offer comprehensive services across these areas to ensure all your needs are met.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
              {fundingCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-navy/5 text-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FDCB58] group-hover:text-white transition-colors duration-300">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaRegCheckCircle className="text-[#FDCB58] w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <div className="bg-gray-50">
          <HowItWorks />
        </div>

        {/* Call to Action */}
        <ContactBanner />
      </main>
    </>
  );
};

export default NDISSupport;
