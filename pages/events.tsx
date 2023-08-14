/*
* @2023 Open Seattle
*/

import {
  Container,
  Stack,
  Typography,
  useTheme
  useTheme
} from '@mui/material'
import Masthead from 'components/Masthead'
import CardEvent from 'components/cards/CardEvent'
import CardRowContainer from 'components/cards/CardRowContainer'
import { withBasicLayout } from 'components/layouts'
import { useEffect, useState } from 'react'
import { osEventsService } from './api/EventsService'


const EventsPage = () => {
  const theme = useTheme()
  const palette = theme.palette

  const title = 'Events';
  const [events, setEvents] = useState([]);

  useEffect(() => {
      setEvents(osEventsService.getActiveEvents());
  }, []);

  return (
    <div>
      <Masthead title={title} />
      <Container
        sx={{
          backgroundColor: palette.primary.contrastText,
          padding: { md: '5rem' },
        }}
        maxWidth={false}
      >
        {(events.length > 0) &&
          <CardRowContainer>
            {events.map(event => <CardEvent key={event.title} event={event} />)}
          </CardRowContainer>}
        {(events.length === 0) &&
          <Stack
            sx={{
              backgroundColor: theme.palette.primary.contrastText,
              alignItems: 'center',
              padding: {
                xs: '2.5rem 1rem 4rem 1rem',
                md: '2.5rem 2rem 4rem 2rem',
                lg: '2.5rem 12.5rem 7.5rem 12.5rem',
              },
            }}>
            There are currently no events scheduled, please check back in the future.
          </Stack>}
      </Container>
    </div >
  )
}

export default withBasicLayout(EventsPage)
