import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import monthNames from '../../../utils/monthNames';
import { Review } from '../../../contexts/types';
import { ReviewsByRating } from '../types';
import { ReviewsContext } from '../../../contexts/reviews';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Reviews: Latest 6 Months',
    },
  },
  scales: {
    y: {
      title: { display: true, text: 'Count by month' },
      ticks: {
        stepSize: 1,
      },
    },
  },
};

const SixMonthsChart = () => {
  const reviewsContext = useContext(ReviewsContext);

  const hadleLabels = () => {
    const labels = [];
    const date = new Date();
    const month = date.getMonth();

    for (let i = 0; i < 6; i++) {
      const rightMonth = month - i < 0 ? 12 + (month - i) : month - i;
      labels.push(monthNames[rightMonth]);
    }

    // Reverse months labels to show latests first on chart
    return labels.reverse();
  };

  const handleData = (reviews: Review[]) => {
    const months = [];
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    for (let i = 0; i < 6; i++) {
      const rightMonth = month - i < 0 ? 12 + (month - i) : month - i;
      const rightYear = month - i < 0 ? year - 1 : year;

      months[i] = reviews.filter(
        rev =>
          rev.date.getFullYear() === rightYear &&
          rev.date.getMonth() === rightMonth,
      ).length;
    }

    // Reverse months to show latests first on chart
    return months.reverse();
  };

  const handleDataSetsChange = (reviews: Review[] | undefined) => {
    const reviewsByRating = reviews?.reduce<ReviewsByRating>((obj, item) => {
      const { rating } = item;
      return { ...obj, [rating]: [...(obj[rating] || []), item] };
    }, {});

    if (!reviewsByRating) return [];

    const datasets = Object.keys(reviewsByRating).map((key: string) => {
      const reviews = reviewsByRating[key];
      const backgroundColorRandomR = Math.floor(Math.random() * 255);
      const backgroundColorRandomG = Math.floor(Math.random() * 255);
      const backgroundColorRandomB = Math.floor(Math.random() * 255);

      return {
        label: key === '1' ? '1 Star' : `${key} Stars`,
        data: handleData(reviews),
        fill: true,
        backgroundColor: `rgba(${backgroundColorRandomR}, ${backgroundColorRandomG}, ${backgroundColorRandomB}, 0.2)`,
        borderColor: `rgba(${backgroundColorRandomR}, ${backgroundColorRandomG}, ${backgroundColorRandomB}, 1)`,
      };
    });

    return datasets;
  };

  const data = {
    labels: hadleLabels(),
    datasets: handleDataSetsChange(reviewsContext?.reviews),
  };

  return <Line options={options} data={data} />;
};

export default SixMonthsChart;
