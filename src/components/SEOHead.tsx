import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function SEOHead() {
  const location = useLocation();
  
  useEffect(() => {
    // Determine page-specific content
    const isInvoicePage = location.pathname === '/invoice-generator';
    
    const pageContent = isInvoicePage
      ? {
          title: 'Free Invoice Generator for Freelancers - Create Professional Invoices Online',
          description: 'Create professional invoices instantly with our free invoice generator. Perfect for freelancers and contractors. Add items, set payment terms, and download as PDF.',
          keywords: 'invoice generator, free invoices, freelance invoicing, online invoice maker, invoice template, invoice creator',
          ogTitle: 'Free Invoice Generator for Freelancers - Create Professional Invoices Online',
          ogDescription: 'Generate professional invoices for your freelance work instantly. Free tool for freelancers to create and download invoices.',
          features: [
            'Invoice generation',
            'Business logo upload',
            'PDF download',
            'Line item management',
            'Payment term customization',
            'Professional templates',
            'Instant invoice creation',
            'Tax calculation'
          ]
        }
      : {
          title: 'Free Freelance Rate Calculator 2026 - Calculate Hourly & Daily Rates',
          description: 'Calculate your ideal freelance rates with our free calculator. Determine hourly, daily, weekly, and monthly rates based on your salary goals, expenses, taxes, and billable hours.',
          keywords: 'freelance rate calculator, hourly rate calculator, daily rate calculator, freelance pricing, contractor rates, freelancer salary, billable hours calculator, freelance income calculator',
          ogTitle: 'Free Freelance Rate Calculator 2026 - Calculate Your Ideal Rates',
          ogDescription: 'Calculate your ideal freelance rates based on your salary goals, expenses, and billable hours. Free tool for freelancers and contractors.',
          features: [
            'Hourly rate calculation',
            'Daily rate calculation',
            'Weekly rate calculation',
            'Monthly rate calculation',
            'Billable hours analysis',
            'Tax and expense considerations'
          ]
        };
    
    // Set page title
    document.title = pageContent.title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageContent.description);
    
    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', pageContent.keywords);
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: pageContent.ogTitle },
      { property: 'og:description', content: pageContent.ogDescription },
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
      { name: 'twitter:title', content: isInvoicePage ? 'Free Invoice Generator for Freelancers' : 'Free Freelance Rate Calculator 2026' },
      { name: 'twitter:description', content: isInvoicePage ? 'Generate professional invoices instantly for your freelance work.' : 'Calculate your ideal freelance hourly and daily rates instantly.' },
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
    const structuredData = isInvoicePage
      ? {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Freelance Invoice Generator",
          "applicationCategory": "FinanceApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Create professional invoices instantly for your freelance work with our free online invoice generator.",
          "featureList": [
            "Invoice generation",
            "PDF download",
            "Line item management",
            "Payment term customization",
            "Professional templates",
            "Instant invoice creation"
          ],
          "browserRequirements": "Requires JavaScript. Requires HTML5.",
          "softwareVersion": "1.0",
          "operatingSystem": "Any"
        }
      : {
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
          "featureList": pageContent.features,
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
  }, [location.pathname]);
  
  return null;
}
