import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

const SubscribersCount = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const SubscribersText = styled.p`
  font-size: 18px;
  color: #666;
`;

const YoutubeSubscriberCard = ({ count,type }) => {
  return (
    <CardContainer>
      <SubscribersCount>{count}</SubscribersCount>
      <SubscribersText>
        {type=="sub"?
             (
              <>
              <i 
              class="fa fa-youtube-play 
              fa-1x" aria-hidden="true"
              style={{color:'red',marginRight:"5px"}}
              />
            Happy Customers
              </>
             )             
             :
        type=="views"?
        (
          <>
           <i 
              class="fa fa-youtube-play 
              fa-1x" aria-hidden="true"
              style={{color:'red',marginRight:"5px"}}
              />
              Students
          </>
        )
       :
        type=="students"?
        (
          <>
        <i class="fa-solid fa-user-group"></i>
        Students from 7 countries

          </>
        ):""
        }
        </SubscribersText>
    </CardContainer>
  );
};

export default YoutubeSubscriberCard;