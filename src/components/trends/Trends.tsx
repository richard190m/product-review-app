import {
  ChartsContainer,
  Container,
  Menu,
  MenuButton,
  TrendsTitle,
} from './styles';
import React, { useState } from 'react';
import AllReviewsChart from './all-reviews-chart';
import SixMonthsChart from './six-months-chart';

const Charts = ['allReviews', '6months'];

const Trends = () => {
  const [chartToShow, setChartToShow] = useState(Charts[0]);

  const handleClick = (chart: string) => {
    setChartToShow(chart);
  };

  return (
    <Container>
      <TrendsTitle>Trends</TrendsTitle>
      <Menu>
        <MenuButton
          onClick={() => handleClick(Charts[0])}
          disabled={chartToShow === Charts[0]}
          data-testid="all-reviews-button"
        >
          All reviews
        </MenuButton>
        <MenuButton
          onClick={() => handleClick(Charts[1])}
          disabled={chartToShow === Charts[1]}
          data-testid="6months-button"
        >
          6 Months Chart
        </MenuButton>
      </Menu>
      <ChartsContainer>
        {chartToShow === Charts[0] ? <AllReviewsChart /> : <SixMonthsChart />}
      </ChartsContainer>
    </Container>
  );
};

export default Trends;
