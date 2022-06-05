import { BreakpointProvider } from '../../../contexts/breakpoint';
import ImageCard from '../ImageCard';
import { render } from '@testing-library/react';

describe('ImageCard', () => {
  test('should render correctly', () => {
    const { container } = render(
      <BreakpointProvider>
        <ImageCard />
      </BreakpointProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
