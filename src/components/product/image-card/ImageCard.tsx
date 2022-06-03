import { Brand, Container, Img } from './styles';
import React, { useContext, useEffect, useState } from 'react';
import { BreakpointContext } from '../../../contexts/breakpoint';
import { ImageCardProps } from './types';
import imageSizes from '../../../utils/imageSizes';
import PropTypes from 'prop-types';

const ImageCarousel = ({ brand, alt }: ImageCardProps) => {
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
      <Img src={productImageUrl} alt={alt} />
      <Brand>{brand}</Brand>
    </Container>
  );
};

ImageCarousel.propTypes = {
  brand: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default ImageCarousel;
