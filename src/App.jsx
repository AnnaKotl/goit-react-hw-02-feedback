import React, { useState } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle.js';
import { Layout } from './components/styles/Layout.js';

import { Statistics } from './components/Statistics/Statistics.js';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section.js';
import { Notification } from './components/Notification/Notification.js';
import { Wrapper } from 'components/styles/Container.styled.js';
import { CoffeeImage } from 'components/Coffe/Coffe.js';

export const App = () => {
  const [data, setData] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const calcValues = () => {
    const { good, neutral, bad } = data;
    const totalFeedback = good + neutral + bad;
    const positiveValue = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
    const shouldPulsate = true;

    return { totalFeedback, positiveValue, shouldPulsate };
  };

  const handleFeedback = (feedbackType) => {
    setData((prevData) => ({
      ...prevData,
      [feedbackType]: prevData[feedbackType] + 1
    }));
  };

  const { totalFeedback, positiveValue, shouldPulsate } = calcValues();

  return (
    <Layout>
      <Wrapper>
        <Section title="Leave feedback" shouldpulsate={shouldPulsate.toString()}>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <>
              <Notification message="There is no feedback" />
              <CoffeeImage />
            </>
          ) : (
            <Statistics
              good={data.good}
              neutral={data.neutral}
              bad={data.bad}
              total={totalFeedback}
              positivePercentage={positiveValue}
            />
          )}
        </Section>
      </Wrapper>
      <GlobalStyle />
    </Layout>
  );
};