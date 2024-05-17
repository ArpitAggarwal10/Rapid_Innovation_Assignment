import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'nav'
    'main'
    'footer';
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

const Main = styled.main`
  grid-area: main;
  padding: 2em;
`;

const Section = styled.section`
  margin-bottom: 2em;

  h2 {
    margin-bottom: 1em;
    font-size: 1.5rem;
    color: #3333333;
  }

  p {
    line-height: 1.5;
    color: #5555555;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1em;
`;

const ServiceItem = styled.div`
  background: #f4f4f4;
  padding: 1em;
  border: 1px solid #ddd;
  text-align: center;

  h3 {
    margin-bottom: 0.5em;
    font-size: 1.2rem;
    color: #333333;
  }

  p {
    color: #555555;
  }

  li {
    color: #555555;
  }
`;

const Footer = styled.footer`
  grid-area: footer;
  background: #888888;
  color: white;
  text-align: center;
  padding: 1em;
`;

const LandingPage = () => {
  return (
    <Container>
      <Header title="Landing Page" />
      <Main>
        <Section>
          <h2>AI Automation & Blockchain Solutions In 90 Days</h2>
          <p>We are a company that values excellence and innovation. We have a top-tier team of experts that offers premier AI, Blockchain consulting and Web3 development services.</p>
        </Section>
        <Section>
          <h2>Our Services</h2>
          <ServiceGrid>
            <ServiceItem>
              <h3>AI Technology Consulting</h3>
              <p>Description of service 1.</p>
              <li>GPT-enabled NLP services</li>
              <li>Custom LLM Tuning</li>
              <li>Custom LLM Tuning</li>
              <li>Semantic Search</li>
              <li>Embedding Models</li>
              <li>Speech-to-Text or Text-to-Speech</li>
              <li>Customer Behavioral Analytics</li>
              <li>Natural Language Understanding</li>
              <li>Industry-agnostic NLP</li>
            </ServiceItem>
            <ServiceItem>
              <h3>Computer Vision</h3>
              <p>Description of service 2.</p>
              <li>GAN’s based Development Services</li>
              <li>3D Avatar-based Development Services</li>
              <li>OCR-based Development Services</li>
              <li>Facial Recognition and Biometric Services</li>
              <li>Object Detection and Recognition Services</li>
              <li>Medical Imaging Analysis</li>
              <li>Augmented Reality (AR) Experiences</li>
            </ServiceItem>
            <ServiceItem>
              <h3>Blockchain Services</h3>
              <p>Description of service 3.</p>
              <li>Decentralized Exchange</li>
              <li>Real Estate Tokenization</li>
              <li>Prediction Market & Betting</li>
              <li>Supply Chain Management</li>
              <li>Metaverse & Gaming</li>
              <li>Decentralized Autonomous Organization</li>
              <li>Money Markets</li>
              <li>NFT Projects</li>
              <li>Smart Contract Auditing & Penetration Testing</li>
              <li>Asset Transfer</li>
              <li>eCommerce Platforms</li>
            </ServiceItem>
          </ServiceGrid>
        </Section>
      </Main>
      <Footer>
        <p>&copy; 2024 Our Company</p>
      </Footer>
    </Container>
  );
};

export default LandingPage;