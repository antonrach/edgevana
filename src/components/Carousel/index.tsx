import React from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';
import { Box, Grid, IconButton, useTheme } from '@mui/material';
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Title from '../Title';
import Description from '../Description';
import useWindowResize from '@/hooks/useWindowResize';
import { medium, small } from '@/constants';


import General_Information from '../../../public/pics/General_Information.png';
import Chats from '../../../public/pics/Chats.png';

interface SwitchButtonProps {
  children: React.ReactNode;
  color: string;
  disabled: boolean;
  onClick: () => void;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({
  children,
  color,
  disabled,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <IconButton
      sx={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: `2px solid ${color}`,
        [theme.breakpoints.down(small)]: {
          width: '30px',
          height: '30px',
        },
      }}
      size="large"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};

const Carousel: React.FC = () => {
  const [imageSizeCoefficient, setImageSizeCoefficient] = React.useState(0.7);
  useWindowResize(() => {
    if (window.innerWidth > medium) {
      setImageSizeCoefficient(0.7);
      return;
    }
    if (window.innerWidth > small) {
      setImageSizeCoefficient(0.6);
      return
    }
    setImageSizeCoefficient(0.4);
  });

  const [opacities, setOpacities] = React.useState<number[]>([]);

  const [loaded1, setLoaded1] = React.useState(false);
  const [loaded2, setLoaded2] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: currentSlide,
      slideChanged(slider) {
        slideChanged1(slider);
      },
      created() {
        setLoaded1(true);
      }
    },
  );

  const [secSliderRef, secInstanceRef] = useKeenSlider(
    {
      initial: currentSlide,
      slides: 2,
      slideChanged(slider) {
        slideChanged2(slider);
      },
      detailsChanged(slider) {
        const newOpacities = slider.track.details.slides.map((slide) => slide.portion);
        setOpacities(newOpacities);
      },
      created() {
        setLoaded2(true);
      }
    },
  );

  function slideChanged1(slider: any) {
    setCurrentSlide(slider.track.details.rel);
    setTimeout(() => {
      secInstanceRef.current?.moveToIdx(slider.track.details.rel);
    }, 0)
  }

  function slideChanged2(slider: any) {
    setCurrentSlide(slider.track.details.rel);
    setTimeout(() => {
      instanceRef.current?.moveToIdx(slider.track.details.rel);
    }, 0)
  }

  const faderRef = React.useRef<HTMLElement>(null);
  const [faderHeight, setFaderHeight] = React.useState<number>(0);

  useWindowResize(() => {
    const faderSlides = faderRef.current?.querySelectorAll('.fader__slide > div') || [];
    const faderSlidesHeights: number[] = [];
    faderSlides.forEach((slide) => {
      faderSlidesHeights.push(slide.clientHeight);
    });
    
    const maxHeight = Math.max(...faderSlidesHeights);
    if (maxHeight !== faderHeight) {
      setFaderHeight(maxHeight);
    }
  });

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          marginBottom: '70px',
          [theme.breakpoints.down(small)]: {
            marginBottom: '10px',
          },
        }}
      >
        <div ref={sliderRef} className="keen-slider">
          <Box
            className="keen-slider__slide"
            sx={{
              position: 'relative',
            }}
          >
            <Box
              sx={{
                paddingLeft: '68px',
                [theme.breakpoints.down(small)]: {
                  paddingLeft: '40px',
                },
              }}
            >
              <Box
                sx={{
                  marginLeft: 'auto',
                  marginBottom: '30px',
                  width: 'fit-content',
                  position: 'relative',
                  [theme.breakpoints.down(medium)]: {
                    marginBottom: '15px',
                  },
                  [theme.breakpoints.down(small)]: {
                    marginBottom: '10px',
                  },
                }}
              >
                <Image
                  alt="General_Information"
                  src={General_Information}
                  height={717 * imageSizeCoefficient}
                  width={704 * imageSizeCoefficient}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    transform: 'translate(-84px, 23px)',
                    [theme.breakpoints.down(small)]: {
                      transform: 'translate(-53px, 12px)',
                    },
                  }}
                >
                  <Image
                    alt="Chats"
                    src={Chats}
                    height={537 * imageSizeCoefficient}
                    width={337 * imageSizeCoefficient}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className="keen-slider__slide"
            sx={{
              display: 'flex',
            }}
          >
            <Box
              sx={{
                margin: 'auto'
              }}
            >
              <Title>Second slide</Title>
            </Box>
          </Box>
        </div>
      </Box>
      <Grid
        container
        sx={{
          justifyContent: 'space-between',
          paddingRight: '46px',
          [theme.breakpoints.down(small)]: {
            justifyContent: 'flex-start',
            flexDirection: 'column-reverse',
          },
        }}
      >
        <Box
          sx={{
            width: `calc(100% - 40px * 2 - 28px)`,
            [theme.breakpoints.down(small)]: {
              width: '100%',
            },
          }}>
          <Box
            ref={secSliderRef}
            sx={{
              position: 'relative',
              height: `${faderHeight}px`,
            }}
            className="fader"
          >
            <Box ref={faderRef}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                }}
                className="fader__slide"
              >
                <Box
                  sx={{
                    position: 'relative',
                    opacity: opacities[0],
                    zIndex: opacities[0],
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: '12px',
                    }}
                  >
                    <Title size={22}>
                      Accelerating the next generation of the internet
                    </Title>
                  </Box>
                  <Box>
                    <Description size={14}>
                      Participate in over 100+ protocols with one click | Zero to operator in 60 seconds
                    </Description>
                  </Box>
                </Box>
              </Box>
              <Box className="fader__slide">
                <Box
                  sx={{
                    position: 'relative',
                    opacity: opacities[1],
                    zIndex: opacities[1],
                  }}
                >
                  <Title size={22}>
                    Second Slide
                  </Title>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {loaded1 && loaded2 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: `${40 * 2 + 18}px`,
              [theme.breakpoints.down(small)]: {
                marginBottom: '20px',
                width: `${30 * 2 + 15}px`,
              },
            }}
          >
            <SwitchButton
              disabled={currentSlide === 0}
              onClick={() => {
                instanceRef.current?.prev();
              }}
              color={currentSlide === 0 ? theme.palette.action.disabled : theme.palette.primary.main}
            >
              <KeyboardArrowLeftIcon
                sx={{
                  color: currentSlide === 0 ? theme.palette.action.disabled : theme.palette.primary.main,
                }}
              />
            </SwitchButton>
            <SwitchButton
              disabled={currentSlide === (secInstanceRef?.current?.track?.details?.slides?.length || 1) - 1}
              onClick={() => {
                instanceRef.current?.next();
              }}
              color={currentSlide === (secInstanceRef?.current?.track?.details?.slides?.length || 1) - 1 ? theme.palette.action.disabled : theme.palette.primary.main}
            >
              <KeyboardArrowRightIcon
                sx={{
                  color: currentSlide === (secInstanceRef?.current?.track?.details?.slides?.length || 1) - 1 ? theme.palette.action.disabled : theme.palette.primary.main,
                }}
              />
            </SwitchButton>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default Carousel;
