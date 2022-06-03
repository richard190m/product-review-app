import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ratingColors from '../../../utils/ratingColors';
import { Review } from '../../../contexts/types';
import { ReviewsByRating } from '../types';
import { ReviewsContext } from '../../../contexts/reviews';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'All Reviews',
    },
  },
};

const AllReviewsChart = () => {
  const reviewsContext = useContext(ReviewsContext);

  const hadleLabels = () => {
    const labels = [];

    for (let i = 1; i <= 5; i++) {
      labels.push(i === 1 ? '1 Star' : `${i} Stars`);
    }

    return labels;
  };

  const handleData = (reviews: ReviewsByRating) => {
    const data = [];

    for (let i = 1; i <= 5; i++) {
      data.push(reviews[i.toString()]?.length);
    }

    return data;
  };

  const handleDataSetsChange = (reviews: Review[] | undefined) => {
    const reviewsByRating = reviews?.reduce<ReviewsByRating>((obj, item) => {
      const { rating } = item;
      return { ...obj, [rating]: [...(obj[rating] || []), item] };
    }, {});

    if (!reviewsByRating) return [];

    const datasets = [
      {
        label: '# of Ratings',
        data: handleData(reviewsByRating),
        backgroundColor: ratingColors,
      },
    ];

    return datasets;
  };

  const data = {
    labels: hadleLabels(),
    datasets: handleDataSetsChange(reviewsContext?.reviews),
  };

  return <Doughnut options={options} data={data} />;
};

export default AllReviewsChart;
