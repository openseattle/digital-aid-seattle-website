/* eslint-disable jsx-a11y/alt-text  */
/* eslint-disable @next/next/no-img-element */

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import { theme } from 'theme/theme'

import { ReactNode } from 'react'
import OSLogo from '../assets/darkThemeLogo.svg'
import EmailFormContainer from './email-form/EmailFormContainer'
import { useFeature } from 'pages/api/FeatureService'

// const GridItem = styled(Grid)(() => {
//   return {
//     item: true,
//     padding: '0.5rem',
//     justifyContent: 'left',
//     alignItems: 'center'
//   }
// })


type GridItemProps = {
  children: ReactNode
  md?: number
}

const GridItem = ({ md, children }: GridItemProps) =>
  md ? (
    <Grid
      item={true}
      padding="0.5rem"
      justifyContent="left"
      alignItems="center"
      md={md}
    >
      {children}
    </Grid>
  ) : (
    <Grid
      item={true}
      padding="0.5rem"
      justifyContent="left"
      alignItems="center"
    >
      {children}
    </Grid>
  )

const FooterItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.contrastText,
  fontSize: '0.875rem',
}))

const FooterSubItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '1rem',
  marginTop: '1rem',
  display: 'block',
}))

const LinkSubItem = (props: { url: string; name: string }) => (
  <Link
    sx={{
      color: theme.palette.primary.contrastText,
      marginTop: '1rem',
      display: 'block',
    }}
    underline="hover"
    href={props.url}
  >
    <Typography fontSize={'1rem'}>{props.name}</Typography>
  </Link>
)

const SubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '0.75rem',
}))

const logoBox = () => {
  return (
    <Box>
      <Link href="/" title="Go back to home" aria-label="Go back to home">
        <img src={OSLogo.src} width="120px" alt="Digital Aid Seattle Logo" />
      </Link>
    </Box>
  )
}

const AboutBox = () => {
  const { data: faq } = useFeature('faq')
  return (
    <Box>
      <FooterItemTitle>About Digital Aid Seattle</FooterItemTitle>
      <LinkSubItem url="/privacy" name="Privacy Policy" />
      {faq && <LinkSubItem url="/faq" name="FAQ" />}
    </Box>
  )
}
const contactUsBox = () => {
  return (
    <Box>
      <FooterItemTitle>Contact us</FooterItemTitle>
      <FooterSubItem>
        <a href="mailto:info@digitalaidseattle.org">
          info@digitalaidseattle.org
        </a>
      </FooterSubItem>
    </Box>
  )
}

const workWithUsBox = () => {
  return (
    <Box>
      <FooterItemTitle>Work with us</FooterItemTitle>
      <LinkSubItem url="/partners" name="Partner" />
      <LinkSubItem url="/volunteers" name="Volunteer" />
    </Box>
  )
}

const SupportUsBox = () => {
  const { data: supportUs } = useFeature('support-us')
  return (supportUs &&
    <Box>
      <FooterItemTitle>Support us</FooterItemTitle>
      <FooterSubItem>
        <a href="mailto:info@digitalaidseattle.org">Donate</a>
      </FooterSubItem>
    </Box>)
}

const copyrightBox = () => {
  return (
    <Stack gap="0.25rem">
      <SubText>
        Illustrations by{' '}
        <Link
          href="https://storyset.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Storyset, which opens in a new window."
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Storyset
        </Link>
      </SubText>
      <FooterItemTitle>© Digital Aid Seattle 2024</FooterItemTitle>
    </Stack>
  )
}

const linkedInLink = () => {
  return (
    <Link
      href="https://www.linkedin.com/company/digitalseattle/"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn"
      aria-label="Our LinkedIn, which opens in a new window."
    >
      <LinkedInIcon
        sx={{ color: theme.palette.primary.contrastText }}
        fontSize="large"
      />
    </Link>
  )
}

const githubLink = () => {
  return (
    <Link
      href="https://github.com/digitalaidseattle"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      aria-label="Our GitHub, which opens in a new window."
    >
      <GitHubIcon
        sx={{ color: theme.palette.primary.contrastText }}
        fontSize="large"
      />
    </Link>
  )
}

const facebookLink = () => {
  return (
    <Link
      href="https://facebook.com/digitalaidseattle"
      target="_blank"
      rel="noopener noreferrer"
      title="Facebook"
      aria-label="Our Facebook page, which opens in a new window."
    >
      <FacebookIcon
        sx={{ color: theme.palette.primary.contrastText }}
        fontSize="large"
      />
    </Link>
  )
}

const instagramLink = () => {
  return (
    <Link
      href="https://instagram.com/digitalaidseattle"
      target="_blank"
      rel="noopener noreferrer"
      title="Instagram"
      aria-label="Our Instagram page, which opens in a new window."
    >
      <InstagramIcon
        sx={{ color: theme.palette.primary.contrastText }}
        fontSize="large"
      />
    </Link>
  )
}

const START_BOX_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  gap: '2rem',
}

const CommonFooterLargeScreen = () => (
  <Grid container spacing={5}>
    <GridItem md={4}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {logoBox()}
      </Box>
    </GridItem>

    <GridItem md={4}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {workWithUsBox()}
      </Box>
    </GridItem>

    <GridItem md={4}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <AboutBox />
      </Box>
    </GridItem>

    <GridItem md={4}>
      <Box sx={START_BOX_STYLE}>
      </Box>
    </GridItem>
    <GridItem md={4}>
      <Box sx={START_BOX_STYLE}>
        <SupportUsBox />
      </Box>
    </GridItem>

    <GridItem md={4}>
      <Box sx={START_BOX_STYLE}>
        {contactUsBox()}
      </Box>
    </GridItem>

    <GridItem md={4}>
      <Box sx={START_BOX_STYLE}>
        {copyrightBox()}
      </Box>
    </GridItem>
    <GridItem md={8}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'flex-end',
        }}
      >
        <Box >
          <FooterItemTitle>Follow us on social media</FooterItemTitle>
          <FooterSubItem>
            <Stack direction={'row'} spacing={2}>
              {linkedInLink()}
              {githubLink()}
              {facebookLink()}
              {instagramLink()}
            </Stack>
          </FooterSubItem>
        </Box>
      </Box>
    </GridItem>
  </Grid>
)

const CommonFooterMidScreen = () => (
  <Grid container direction="column" columns={3}>
    <GridItem md={5}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          height: '100%',
          gap: '2rem',
        }}
      >
        {logoBox()}
        {copyrightBox()}
      </Box>
    </GridItem>

    <GridItem md={5}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {contactUsBox()}
        {workWithUsBox()}
        <AboutBox />
      </Box>
    </GridItem>

    <GridItem md={2}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'flex-end',
        }}
      >
        {linkedInLink()}
        {githubLink()}
        {facebookLink()}
        {instagramLink()}
      </Box>
    </GridItem>
  </Grid>
)

const CommonFooterSmallScreen = () => (
  <Grid
    container
    direction="column"
    columns={1}
    sx={{ alignItems: 'center', textAlign: 'center', gap: '2rem' }}
  >
    <GridItem>{logoBox()}</GridItem>

    <GridItem>{contactUsBox()}</GridItem>

    <GridItem>{workWithUsBox()}</GridItem>

    <GridItem><AboutBox /></GridItem>

    <GridItem>
      <Box display="flex" sx={{ gap: '1rem' }}>
        {linkedInLink()}
        {githubLink()}
        {facebookLink()}
        {instagramLink()}
      </Box>
    </GridItem>

    <GridItem>{copyrightBox()}</GridItem>
  </Grid>
)

const CommonFooter = () => {
  const { data: newsLetter } = useFeature('newsletter')
  return (
    <>
      <Container>
        {newsLetter && <EmailFormContainer />}
        <Box
          sx={{
            paddingY: '5rem',
            display: { xs: 'none', md: 'none', lg: 'flex' },
            height: '28rem',
          }}
        >
          <CommonFooterLargeScreen />
        </Box>

        <Box
          sx={{
            paddingY: '4rem',
            display: { xs: 'none', md: 'flex', lg: 'none' },
            height: '29rem',
          }}
        >
          <CommonFooterMidScreen />
        </Box>

        <Box
          sx={{
            paddingY: '4rem',
            display: { xs: 'flex', md: 'none', lg: 'none' },
          }}
        >
          <CommonFooterSmallScreen />
        </Box>
      </Container>
    </>
  )
}
export default CommonFooter
