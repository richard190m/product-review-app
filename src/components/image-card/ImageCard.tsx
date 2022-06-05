import { Container, Img } from './styles';
import React, { useContext, useEffect, useState } from 'react';
import { BreakpointContext } from '../../contexts/breakpoint';
import imageSizes from '../../utils/imageSizes';

const ImageCarousel = () => {
  const breakpointContext = useContext(BreakpointContext);
  const [productImageUrl, setProductImageUrl] = useState('');

  useEffect(() => {
    if (breakpointContext?.breakpoint) {
      setProductImageUrl(
        `https://source.unsplash.com/random/${
          imageSizes[breakpointContext.breakpoint]
        }/?shoes`,
      );
    }
  }, [breakpointContext?.breakpoint]);

  return (
    <Container>
      <Img url={productImageUrl} />
    </Container>
  );
};

export default ImageCarousel;
