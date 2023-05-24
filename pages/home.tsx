import { NextPage } from 'next'
import Image from 'next/image'

import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'

import CardRowContainer from 'components/cards/CardRowContainer'
import CardOne from 'components/cards/CardOne'

interface Props {}

const Home: NextPage<Props> = () => {
  const theme = useTheme()
  const palette = theme.palette

  const loader = ({ src }) => {
    return `${process.env.NEXT_PUBLIC_BASE_PATH}${src}`
  }

  const isMediumScreen = useMediaQuery('(max-Width:960px)')

  return (
    <>
      <Container
        sx={{
          height: isMediumScreen ? 'fit-content' : '100vh',
          overflow: 'auto',
          backgroundColor: palette.primary.dark,
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        maxWidth={false}
      >
        <Box
          mt={10}
          sx={{
            display: 'flex',
            flexDirection: isMediumScreen ? 'column' : 'row',
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: isMediumScreen ? '350px' : '480px',
              height: isMediumScreen ? '350px' : '480px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '24px',
              alignItems: isMediumScreen ? 'center' : 'flex-start',
              textAlign: isMediumScreen ? 'center' : 'left',
              marginBottom: isMediumScreen ? 10 : 0,
            }}
          >
            <Typography
              color={'text.secondary'}
              sx={{ maxWidth: isMediumScreen ? '90%' : '450px' }}
              variant={isMediumScreen ? 'displaySmall' : 'displayLarge'}
            >
              Connecting Puget Sound nonprofits with free tech solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: '24px' }}>
              <Button variant="contained" color="secondary">
                Get Help
              </Button>
              <Button variant="contained" color="primary">
                Volunteer With Us
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              width: isMediumScreen ? '350px' : '480px',
              height: isMediumScreen ? '350px' : '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              marginBottom: isMediumScreen ? 10 : 0,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: isMediumScreen ? '325px' : '424px',
                  height: isMediumScreen ? '325px' : '424px',
                }}
              >
                <Image
                  src="/seattle_4.jpg"
                  loader={loader}
                  fill={true}
                  alt="Seattle skyline by Stephen Plopper"
                  priority={true}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  borderRadius: '50%',
                  width: isMediumScreen ? '350px' : '480px',
                  height: isMediumScreen ? '350px' : '480px',
                  border: '4px solid rgba(248, 248, 248, 0.3)',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <Container
        sx={{ backgroundColor: palette.background.default }}
        maxWidth={false}
      >
        <Box
          sx={{
            height: isMediumScreen ? '450px' : '536px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Typography variant="headlineLarge">Our Mission</Typography>
          <Typography
            variant={isMediumScreen ? 'bodyMedium' : 'bodyLarge'}
            sx={{ width: '80%', maxWidth: '880' }}
          >
            We believe community organizations are the heart of Seattle, and
            deserve the same tools and advantages enjoyed by our largest tech
            companies. Our mission is to create scalable, customized solutions
            to enable other nonprofits to reach their full potential and achieve
            their own mission-driven goals.
          </Typography>
          <Button variant="contained" color="primary">
            Learn About Us
          </Button>
        </Box>
      </Container>
      <Container
        sx={{ backgroundColor: palette.background.default, paddingTop: '120px', paddingBottom: '120px' }}
        maxWidth={false}
      >
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
      </Container>
    </>
  )
}

export default Home
