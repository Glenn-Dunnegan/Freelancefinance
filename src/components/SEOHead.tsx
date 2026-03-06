import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function SEOHead() {
  const location = useLocation();
  
  useEffect(() => {
    const metadataByRoute: Record<string, {
      title: string;
      description: string;
      keywords: string;
      ogTitle: string;
      ogDescription: string;
      twitterTitle: string;
      twitterDescription: string;
      schemaName: string;
      schemaDescription: string;
    }> = {
      '/': {
        title: 'Free Freelance Rate Calculator 2026 - Calculate Hourly & Daily Rates',
        description: 'Calculate your ideal freelance rates with our free calculator. Determine hourly, daily, weekly, and monthly rates based on salary goals, expenses, taxes, and billable hours.',
        keywords: 'freelance rate calculator, hourly rate calculator, daily rate calculator, freelance pricing, contractor rates, freelancer salary, billable hours calculator, freelance income calculator',
        ogTitle: 'Free Freelance Rate Calculator 2026 - Calculate Your Ideal Rates',
        ogDescription: 'Calculate your ideal freelance rates based on your salary goals, expenses, and billable hours.',
        twitterTitle: 'Free Freelance Rate Calculator 2026',
        twitterDescription: 'Calculate your ideal freelance hourly and daily rates instantly.',
        schemaName: 'Freelance Rate Calculator',
        schemaDescription: 'Calculate freelance rates based on salary goals, business expenses, taxes, and billable hours.'
      },
      '/invoice-generator': {
        title: 'Free Invoice Generator for Freelancers - Create Professional Invoices Online',
        description: 'Create professional invoices instantly with our free invoice generator. Perfect for freelancers and contractors. Add items, set payment terms, and print/download.',
        keywords: 'invoice generator, free invoices, freelance invoicing, online invoice maker, invoice template, invoice creator',
        ogTitle: 'Free Invoice Generator for Freelancers - Create Professional Invoices Online',
        ogDescription: 'Generate professional invoices for your freelance work instantly.',
        twitterTitle: 'Free Invoice Generator for Freelancers',
        twitterDescription: 'Generate professional invoices instantly for your freelance work.',
        schemaName: 'Freelance Invoice Generator',
        schemaDescription: 'Create professional freelance invoices with line items, taxes, and branding options.'
      },
      '/guide/freelancing-101': {
        title: 'Complete Guide to Freelancing in 2026',
        description: 'Learn how to start and grow a freelance business in 2026, including clients, pricing, operations, and growth strategies.',
        keywords: 'freelancing guide 2026, how to start freelancing, freelance clients, freelance business tips',
        ogTitle: 'Complete Guide to Freelancing in 2026',
        ogDescription: 'A practical guide to starting and growing a successful freelance business.',
        twitterTitle: 'Complete Guide to Freelancing in 2026',
        twitterDescription: 'Learn how to start and grow a successful freelance business.',
        schemaName: 'Complete Guide to Freelancing in 2026',
        schemaDescription: 'Educational guide covering how to start, manage, and scale freelance work.'
      },
      '/guide/hidden-costs': {
        title: 'Hidden Costs of Being a Freelancer',
        description: 'Understand the real costs of freelancing, from taxes and insurance to equipment, admin, and non-billable time.',
        keywords: 'hidden costs freelancer, freelance expenses, freelancer taxes, freelancer overhead',
        ogTitle: 'Hidden Costs of Being a Freelancer',
        ogDescription: 'Break down the true costs freelancers must account for in their rates.',
        twitterTitle: 'Hidden Costs of Being a Freelancer',
        twitterDescription: 'Understand the true costs behind sustainable freelance pricing.',
        schemaName: 'Hidden Costs of Being a Freelancer',
        schemaDescription: 'Educational guide to freelance expenses and business overhead.'
      },
      '/guide/negotiating-rates': {
        title: 'How to Negotiate Rates with Clients',
        description: 'Learn practical strategies to negotiate freelance rates confidently while protecting profitability and client relationships.',
        keywords: 'freelance rate negotiation, negotiate client rates, freelancer pricing strategy',
        ogTitle: 'How to Negotiate Rates with Clients',
        ogDescription: 'Proven methods for negotiating freelance rates with confidence.',
        twitterTitle: 'How to Negotiate Rates with Clients',
        twitterDescription: 'Practical tactics to negotiate better freelance rates.',
        schemaName: 'How to Negotiate Rates with Clients',
        schemaDescription: 'Educational guide for freelance negotiation strategy and pricing communication.'
      },
      '/guide/tax-guide': {
        title: 'Freelancer Tax Guide 2026',
        description: 'A practical freelancer tax guide covering quarterly payments, deductions, recordkeeping, and tax planning basics.',
        keywords: 'freelancer tax guide, self-employment tax, quarterly taxes freelancer, freelancer deductions',
        ogTitle: 'Freelancer Tax Guide 2026',
        ogDescription: 'Understand key freelancer tax responsibilities and planning basics.',
        twitterTitle: 'Freelancer Tax Guide 2026',
        twitterDescription: 'Understand freelancer taxes, deductions, and quarterly payments.',
        schemaName: 'Freelancer Tax Guide 2026',
        schemaDescription: 'Educational guide to freelance tax planning and compliance basics.'
      },
      '/about': {
        title: 'About Freelance Tools',
        description: 'Learn about the mission, editorial standards, and purpose behind Freelance Tools.',
        keywords: 'about freelance tools, editorial standards, freelance tools mission',
        ogTitle: 'About Freelance Tools',
        ogDescription: 'Our mission and editorial standards for freelancer-focused tools and guides.',
        twitterTitle: 'About Freelance Tools',
        twitterDescription: 'Our mission and editorial standards.',
        schemaName: 'About Freelance Tools',
        schemaDescription: 'About page for the Freelance Tools website.'
      },
      '/contact': {
        title: 'Contact Freelance Tools',
        description: 'Contact Freelance Tools for support, corrections, and policy inquiries.',
        keywords: 'contact freelance tools, support, policy inquiries',
        ogTitle: 'Contact Freelance Tools',
        ogDescription: 'Reach our team for support and policy-related questions.',
        twitterTitle: 'Contact Freelance Tools',
        twitterDescription: 'Get in touch for support and inquiries.',
        schemaName: 'Contact Freelance Tools',
        schemaDescription: 'Contact page for support and policy inquiries.'
      },
      '/privacy-policy': {
        title: 'Privacy Policy | Freelance Tools',
        description: 'Review how Freelance Tools handles data, cookies, and privacy requests.',
        keywords: 'privacy policy, cookies, data handling',
        ogTitle: 'Privacy Policy | Freelance Tools',
        ogDescription: 'How we handle privacy, cookies, and user data.',
        twitterTitle: 'Privacy Policy | Freelance Tools',
        twitterDescription: 'How we handle privacy, cookies, and user data.',
        schemaName: 'Privacy Policy',
        schemaDescription: 'Privacy policy page for Freelance Tools.'
      },
      '/terms': {
        title: 'Terms of Service | Freelance Tools',
        description: 'Read the terms of service for using Freelance Tools content and calculators.',
        keywords: 'terms of service, website terms, usage terms',
        ogTitle: 'Terms of Service | Freelance Tools',
        ogDescription: 'Terms governing use of Freelance Tools.',
        twitterTitle: 'Terms of Service | Freelance Tools',
        twitterDescription: 'Terms governing use of Freelance Tools.',
        schemaName: 'Terms of Service',
        schemaDescription: 'Terms of service page for Freelance Tools.'
      },
      '/affiliate-disclosure': {
        title: 'Affiliate Disclosure | Freelance Tools',
        description: 'Understand how affiliate links are used on Freelance Tools and how commissions are disclosed.',
        keywords: 'affiliate disclosure, affiliate links, commissions disclosure',
        ogTitle: 'Affiliate Disclosure | Freelance Tools',
        ogDescription: 'How affiliate links and commission disclosures work on this site.',
        twitterTitle: 'Affiliate Disclosure | Freelance Tools',
        twitterDescription: 'How affiliate links and commission disclosures work on this site.',
        schemaName: 'Affiliate Disclosure',
        schemaDescription: 'Affiliate disclosure page for Freelance Tools.'
      }
    };

    const pageContent = metadataByRoute[location.pathname] ?? metadataByRoute['/'];
    
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
      { name: 'twitter:title', content: pageContent.twitterTitle },
      { name: 'twitter:description', content: pageContent.twitterDescription },
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
      "@type": "WebPage",
      "name": pageContent.schemaName,
      "description": pageContent.schemaDescription,
      "url": window.location.href
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
