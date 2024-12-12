import React from "react";

const PuttersBayBody: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-8">


      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Putter&apos;s Bay Mini-Golf Course, a cornerstone of Washington, Indiana, aims to enhance its role as a community-focused recreational facility. With a diverse population of 25,000 people and a market reach within a 50-mile radius, Putter’s Bay is well-positioned to strengthen its appeal through strategic marketing initiatives.
        </p>
        <p>
          This case analysis provides actionable recommendations to improve Putter&apos;s Bay&apos;s visibility, increase profitability, and attract a wider demographic, particularly teenagers and young adults.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Background</h2>
        <p className="mb-4">
          While Putter&apos;s Bay has established itself as a beloved destination for families and adults aged 25-50, it faces challenges in engaging younger audiences (ages 13-24). Currently, its marketing efforts are limited to Facebook, which underperforms in reaching this demographic.
        </p>
        <p>
          With increasing reliance on social media platforms like Instagram and TikTok among younger age groups, there is a significant opportunity to expand digital outreach. Additionally, Putter&apos;s Bay&apos;s prime location near Highway 50 offers potential for attracting travelers with effective advertising, such as billboards.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Objectives</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Establish a presence on Instagram and TikTok to engage younger audiences.
          </li>
          <li className="mb-2">
            Host themed events like &ldquo;Glow Golf Evening&ldquo; and &ldquo;Family Fun Night&ldquo; to attract diverse visitors.
          </li>
          <li className="mb-2">
            Utilize traditional advertising methods, such as billboards, to maintain visibility among travelers.
          </li>
          <li>Leverage social media contests and giveaways to encourage community interaction.</li>
        </ul>
      </section>

      <footer className="text-center mt-8">
        <p className="text-sm text-gray-600 mb-4">
          For more details, view the full case analysis document.
        </p>
        <a
          href="https://docs.google.com/document/d/1dtUwdM31uYTVPB8krAeQ6LsGaN71hqIvt3dxgQzJ8UI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Open Full Case Analysis
        </a>
      </footer>
    </div>
  );
};

export default PuttersBayBody;
