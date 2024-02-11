import React from 'react';
import styled from 'styled-components';
import cake from '../assets/img/icons/cake.png'
import tedx from '../assets/img/tedx.png'
import joshtalk from '../assets/img/joshtalk.png'

const CardContainer = styled.div`
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubscribersCount = styled.h2`
  font-size: 10px;
  margin-bottom: 1px;
`;

const SubscribersText = styled.p`
  font-size: 18px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Reduce the gap between images */
`;

const Image = styled.img`
  width: 70%; /* Set the image width to 100% of the container */
  max-width: 170px; /* Set a maximum width to limit image size */
  height: auto; /* Allow the height to adjust proportionally */
  border-radius: 80%; /* Make the image circular */
  background-color: #e4b2d6; /* Set the background color */
  padding: 5px; /* Add padding to create space between the image and the border */
`;

const HeroBottomCard = ({ count, type }) => {
  return (
    <CardContainer>
     {/* <div style={{ marginTop: "10px", fontSize: "22px" }}>
     <b>Featured On</b> 
      </div> */}
      <SubscribersText>
        <>
          <a href="https://www.youtube.com/watch?v=ABAm05DaQ8I" target='_blank'>
            <Image src={cake} alt="Zee" />
          </a>
        
          <a href="https://www.youtube.com/watch?v=e6cVpgP6Dmg" target='_blank'>
            <Image src={tedx} alt="TEDx" />
          </a>

          <a href="https://www.youtube.com/watch?v=-DP5da05dys&t=1s" target='_blank'>
            <Image src={joshtalk} alt="JoshTalk" />
          </a>
        </>
      </SubscribersText>
    </CardContainer>
  );
};

export default HeroBottomCard;