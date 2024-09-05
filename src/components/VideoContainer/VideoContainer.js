import React from 'react';
import styled from 'styled-components';

const video1="https://res.cloudinary.com/dmmrbxddi/video/upload/v1725493329/Advertisement-1_-_Made_with_Clipchamp_ae7co4.mp4";
const video2="https://res.cloudinary.com/dmmrbxddi/video/upload/v1725497496/Advertisement-3_-_Made_with_Clipchamp_tsrj57.mp4";

const VideoContainer = () => {
  return (
    <Container>
      <Title>Adivasi Hair Oil - How It Works</Title>
      
      <VideoGrid>
        {/* Video 1 */}
        <VideoBox>
          <VideoTitle>Benefits of Adivasi Hair Oil</VideoTitle>
          <VideoWrapper>
            <video controls>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoWrapper>
          <Description>
            Learn about the natural benefits of Adivasi Hair Oil and how it nourishes your hair for better growth and strength.
          </Description>
        </VideoBox>

        {/* Video 2 */}
        <VideoBox>
          <VideoTitle>How to Apply Adivasi Hair Oil</VideoTitle>
          <VideoWrapper>
            <video controls>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoWrapper>
          <Description>
            Discover the proper way to apply Adivasi Hair Oil to achieve the best results for hair growth and nourishment.
          </Description>
        </VideoBox>
      </VideoGrid>
    </Container>
  );
};

// Styled-components for responsive design
const Container = styled.div`
  text-align: center;
  margin: 20px auto;
  padding: 40px;
  max-width: 1000px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VideoBox = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 12px;
  max-width: 450px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const VideoWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const VideoTitle = styled.h4`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: black;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export default VideoContainer;
