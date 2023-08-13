import styled, { keyframes } from 'styled-components';
import { Notification } from './components/Notification';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeInNotification = styled(Notification)`
  animation: ${fadeIn} 0.5s ease forwards;
`;
