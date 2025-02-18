/**
 * CommonHeader.tsx
 * @2024 Digital Aid Seattle
 */
/* eslint-disable jsx-a11y/alt-text  */
/* eslint-disable @next/next/no-img-element */
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Button, List, Typography, useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { theme } from 'theme/theme'

import { useFeature } from '../services/FeatureService'
import OSLogo from '../assets/darkThemeLogo.svg'
import MobileMenu from './MobileMenu'

const DEFAULT_MENU_ITEMS = [
  { label: 'About', path: '/about', style: 'primary', pages: ['about'] },
  { label: 'Projects', path: '/projects', style: 'primary', pages: ['projects', 'project'] },
  { label: 'Partners', path: '/partners', style: 'primary', pages: ['partners'] },
  { label: 'Volunteer', path: '/volunteers', style: 'primary', pages: ['volunteers', 'volunteer'] },
  { label: 'Events', path: '/events', style: 'primary', pages: ['events', 'event'] }
]

const lookup = (supportUs: any): any[] => {
  if (supportUs.status === 'fetched') {
    const items = DEFAULT_MENU_ITEMS.slice()
    if (supportUs.data) {
      items.push({ label: 'Support us', path: '/support_us', style: 'secondary', pages: ['support_us'] })
    }
    return items;
  }
  else {
    return [];
  }
}

const CommonHeader = () => {
  // React states for handling the hamburger menu.
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const smallScreen = useMediaQuery(theme.breakpoints.down('lg'))
  const supportUs = useFeature('support-us')
  const router = useRouter()
  const menuItems = useMemo(() => lookup(supportUs), [supportUs]);

  const isCurrent = (menuItem: any) => {
    const paths = router.route.split('/')
    return menuItem.pages.includes(paths[1]);
  }

  const desktopMenuItem = (menuItem: any, idx: number) => {

    // Couldn't find highlight color for secondary
    const buttonColor = ('primary' === menuItem.style)
      ? isCurrent(menuItem)
        ? 'success'
        : 'primary'
      : isCurrent(menuItem)
        ? 'secondary'
        : 'secondary';

    const linkColor = ('primary' === menuItem.style)
      ? theme.palette.primary.contrastText
      : theme.palette.secondary.contrastText;

    return (
      <Link
        key={'menu' + idx}
        sx={{
          color: linkColor,
          textUnderlineOffset: '0.5rem',
          textDecoration: isCurrent(menuItem)
            ? 'underline'
            : 'none'
        }}
        href={menuItem.path}
      >
        <Button
          variant="contained"
          color={buttonColor}
          disableRipple={true}>
          {menuItem.label}
        </Button>
      </Link>)
  }

  const mobileMenuItem = (menuItem: any, idx: number) => {
    return (
      <MenuItem
        key={'menu' + idx}
        style={{ borderRadius: '0px' }}
      >
        <Link
          underline="hover"
          sx={{
            color: theme.palette.primary.contrastText,
          }}
          href={menuItem.path}
        >
          <Typography variant="labelLarge">
            {menuItem.label}
          </Typography>
        </Link>
      </MenuItem>)
  };

  const LogoBox = () => {
    return (
      <Box>
        <Link href="/" title="Go back to home" aria-label="Go back to home">
          <img src={OSLogo.src} width="120px" alt="Digital Aid Seattle Logo" />
        </Link>
      </Box>
    )
  }

  return (
    // Containing Box is given AppBar's z-index; ensures it always stays on top.
    // z-index taken from docs: https://mui.com/material-ui/customization/z-index/
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: theme.palette.primary.main,
        }}
      >
        <Toolbar sx={{ padding: '0 !important' }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', lg: 'none' },
              justifyContent: 'space-between',
              padding: {
                xs: '1rem 1rem',
                md: '1rem 2rem',
                lg: '1.25rem 0',
              },
            }}
          >
            {/* Hamburger menu when the screen is small. */}
            <LogoBox />
            <IconButton
              size="large"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              sx={{ color: theme.palette.primary.contrastText }}
            >
              {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          {/* Menu items that are shown on desktop */}
          <Container
            disableGutters
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'none', lg: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.25rem 2.5rem !important',
            }}
          >
            <LogoBox />
            <nav>
              <List sx={{ display: 'flex', gap: '0.5rem' }}>
                {menuItems.map((section, idx) => desktopMenuItem(section, idx))}
              </List>
            </nav>
          </Container>
        </Toolbar>
        {/* mobile slide-out menu */}
        {smallScreen &&
          <Box sx={{ position: 'relative', zIndex: -1 }}>
            <MobileMenu yTranslate={showMobileMenu ? '0' : '-500px'}>
              {menuItems.map((menuItem, idx) =>
                mobileMenuItem(menuItem, idx)
              )}
            </MobileMenu>
          </Box>}
        {/* dark overlay */}
        {showMobileMenu && smallScreen &&
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              background: 'rgba(0,0,0,0.6)',
              position: 'absolute',
              zIndex: '-2'
            }}
          ></Box>}
      </AppBar>
    </Box>
  )
}
export default CommonHeader
