import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
  margin-top: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #333333;
  }

  p {
    line-height: 1.5;
    color: #666666;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header title="Home Page" />
      <ContentContainer>
        <Card>
          <h2>Feature 1</h2>
          <p>This is a futuristic feature description.</p>
        </Card>
        <Card>
          <h2>Feature 2</h2>
          <p>This is another futuristic feature description.</p>
        </Card>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;