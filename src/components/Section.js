import { Title } from './styles/Section.styled';

export const Section = ({ title, shouldpulsate, children }) => (
  <div>
    <Title shouldpulsate={shouldpulsate}>{title}</Title>
    {children}
  </div>
);
