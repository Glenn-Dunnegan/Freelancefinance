import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Set page title
    document.title = 'Free Freelance Rate Calculator 2026 - Calculate Hourly & Daily Rates';
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Calculate your ideal freelance rates with our free calculator. Determine hourly, daily, weekly, and monthly rates based on your salary goals, expenses, taxes, and billable hours.');
    
    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'freelance rate calculator, hourly rate calculator, daily rate calculator, freelance pricing, contractor rates, freelancer salary, billable hours calculator, freelance income calculator');
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Free Freelance Rate Calculator 2026 - Calculate Your Ideal Rates' },
      { property: 'og:description', content: 'Calculate your ideal freelance rates based on your salary goals, expenses, and billable hours. Free tool for freelancers and contractors.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
    ];
    
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Free Freelance Rate Calculator 2026' },
      { name: 'twitter:description', content: 'Calculate your ideal freelance hourly and daily rates instantly.' },
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
    
    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Freelance Rate Calculator",
      "applicationCategory": "FinanceApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate your ideal freelance rates based on your desired salary, working days, business expenses, profit margin, tax rate, and billable hours percentage.",
      "featureList": [
        "Hourly rate calculation",
        "Daily rate calculation",
        "Weekly rate calculation",
        "Monthly rate calculation",
        "Billable hours analysis",
        "Tax and expense considerations"
      ],
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "softwareVersion": "1.0",
      "operatingSystem": "Any"
    };
    
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);
  
  return null;
}
