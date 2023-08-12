import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CardOne from 'components/cards/CardOne'
import CardRowContainer from 'components/cards/CardRowContainer'
import SectionContainer from 'components/layout/SectionContainer'
import { withBasicLayout } from 'components/layouts'

import HeroLines from '../public/images/homeHeroLines.svg'
import HeroLinesMobile from '../public/images/homeHeroLinesMobile.svg'
import HeroImage from '../public/images/SeattleSkyline.png'

/* eslint-disable @next/next/no-img-element */

const Home = () => {
  const theme = useTheme()
  const palette = theme.palette

  const loader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_BASE_PATH}${src}\?w=${width}&q=${
      quality || 75
    }`
  }

  const isMediumScreen = useMediaQuery('(max-Width:600px)')

  return (
    <>
      {/* Hero Container */}
      <Box
        sx={{
          backgroundColor: palette.primary.main,
          display: 'flex',
          minHeight: '650px',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          padding: { xs: '1rem 0 1rem 0', md: '4rem 0 4rem 0' },
        }}
      >
        {/* SVG Linework Container */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '1800px', lg: '1280px' },
            height: 'auto',
            left: { xs: 0, sm: '50%' },
            top: { xs: 0, sm: '50%' },
            transform: {
              sm: 'rotate(90deg)translate(15%, 125%)',
              md: 'translate(-50%, -50%)',
            },
          }}
        >
          {isMediumScreen ? (
            <img
              src={HeroLinesMobile.src}
              alt="Hero Lines"
              style={{
                opacity: 0.3,
                objectFit: 'cover',
                mixBlendMode: 'overlay',
              }}
            />
          ) : (
            <img
              src={HeroLines.src}
              alt="Hero Lines"
              style={{
                opacity: 0.3,
                objectFit: 'cover',
                mixBlendMode: 'overlay',
              }}
            />
          )}
        </Box>
        {/* Hero Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 4, md: 12 },
            alignItems: 'center',
            textAlign: { xs: 'center', lg: 'left' },
            paddingX: { xs: '16px', md: '32px', lg: 0 },
            paddingBottom: { xs: '64px', lg: '8rem' },
          }}
          maxWidth={'880px'}
        >
          {/* Heading and CTA Buttons */}
          <Box
            sx={{
              width: { xs: '100%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: { xs: 3, sm: 5 },
              alignItems: { xs: 'center', lg: 'flex-start' },
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            <Typography
              color={'text.secondary'}
              sx={{}}
              variant={isMediumScreen ? 'displayMedium' : 'displayLarge'}
            >
              Connecting Puget Sound nonprofits with free tech solutions.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, sm: 4 },
                flexDirection: { xs: 'column', lg: 'row' },
              }}
            >
              <Button variant="contained" color="secondary" size="small">
                Partner With Us
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  backgroundColor: '#004138',
                  marginBottom: { xs: '32px', md: '0px' },
                }}
              >
                Volunteer With Us
              </Button>
            </Box>
          </Box>
          {/* Box for Image, circle, and shadows */}
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              marginBottom: { xs: 2, sm: 0 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Image Container */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: { xs: '275px', md: '424px' },
                  height: { xs: '275px', md: '424px' },
                  zIndex: 1,
                }}
              >
                <img
                  src={HeroImage.src}
                  alt="Seattle skyline by Stephen Plopper"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  borderRadius: '50%',
                  width: { xs: '295px', md: '480px' },
                  height: { xs: '295px', md: '480px' },
                  border: '4px solid rgba(248, 248, 248, 0.3)',
                  mixBlendMode: 'overlay',
                }}
              />
              {/* Shading for image */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '125%',
                  height: '50%',
                  borderRadius: '50%',
                  background: 'rgba(184, 233, 122, 0.32)',
                  top: '55%',
                  filter: 'blur(100px)',
                  zIndex: 0,
                }}
              />
              {/* Shading for image */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '75%',
                  height: '25%',
                  borderRadius: '50%',
                  background: 'rgba(184, 233, 122, 0.32)',
                  top: '65%',
                  left: '-15%',
                  filter: 'blur(100px)',
                  transform: 'rotate(45deg)',
                  zIndex: 0,
                }}
              />
            </Box>
            {/* Shading for image */}
            <Box
              sx={{
                position: 'absolute',
                width: '75%',
                height: '25%',
                borderRadius: '50%',
                background: 'rgba(184, 233, 122, 0.32)',
                top: '65%',
                left: '40%',
                filter: 'blur(100px)',
                transform: 'rotate(-45deg)',
                zIndex: 0,
              }}
            />
          </Box>
        </Box>
      </Box>
      <SectionContainer backgroundColor={palette.background.default}>
        <Stack
          sx={{
            gap: { xs: 3, md: 5 },
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          maxWidth={'880px'}
        >
          <Typography variant="headlineLarge">Our Mission</Typography>
          <Typography
            variant={isMediumScreen ? 'bodyMedium' : 'bodyLarge'}
            textAlign={'center'}
          >
            We believe community organizations are the heart of Seattle, and
            deserve the same tools and advantages enjoyed by our largest tech
            companies. Our mission is to create scalable, customized solutions
            to enable other nonprofits to reach their full potential and achieve
            their own mission-driven goals.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: palette.primary.dark }}
          >
            Learn About Us
          </Button>
          <CardRowContainer>
            <CardOne
              description="Reach out to Open Seattle! We work with Washington-based nonprofits to create customized digital solutions for free."
              buttonText="Partner With Us"
              icon={
                <HandshakeOutlinedIcon
                  fontSize="large"
                  sx={{ color: palette.text.secondary }}
                />
              }
            />
            <CardOne
              description="Join Open Seattle to make a difference in the lives of others—we have a wide range of volunteer opportunities available."
              buttonText="Volunteer With Us"
              icon={
                <Groups2OutlinedIcon
                  fontSize="large"
                  sx={{ color: palette.text.secondary }}
                />
              }
            />
            <CardOne
              description="Support Open Seattle in its mission to build tech solutions for our community nonprofits by donating."
              buttonText="Support Us"
              icon={
                <VolunteerActivismOutlinedIcon
                  fontSize="large"
                  sx={{ color: palette.text.secondary }}
                />
              }
            />
          </CardRowContainer>
        </Stack>
      </SectionContainer>
    </>
  )
}

export default withBasicLayout(Home)
