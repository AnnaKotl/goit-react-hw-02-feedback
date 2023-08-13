import { Title } from './styles/Section.styled';

export const Section = ({ title, shouldpulsate, children }) => (
  <div>
    <Title shouldpulsate={shouldpulsate ? 'true' : 'false'}>{title}</Title>
    {children}
  </div>
);