/**
* RolesNeededSection.tsx
* example: 
 
<RolesSection title="Current volunteer openings"
 roles={[]}
 showLink={true}
 columns={2} >
          <Typography variant="bodyLarge" marginTop={'2rem'} textAlign={'center'}>All of our volunteers are vetted for experience, and sign a volunteer agreement before commencing work with Digital Aid Seattle.</Typography>
  </RolesSection>

* @2023 Digital Aid Seattle
*/


import { Box, Button } from '@mui/material'
// icons for role cards
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined'
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined'
import GavelRoundedIcon from '@mui/icons-material/GavelRounded'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import { ReactNode } from 'react'
import ListItemWithIcon from './list/ListItemWithIcon'
import { Section, Subheader } from './style-utils'
import { DASVolunteerRoleBasicInfo } from 'types'

// TODO: standardize roles between sanity and airtable
const rolesMap = {
  communityEngagementLiason: { role: 'community engagement liaison', icon: <CampaignOutlinedIcon />, },
  dataAnalyst: { role: 'data analyst', icon: <ScreenSearchDesktopOutlinedIcon />, },
  designer: { role: 'designer', icon: <DrawOutlinedIcon />, },
  graphicDesigner: { role: 'graphic designer', icon: <DrawOutlinedIcon />, },
  grantWriter: { role: 'grant writer', icon: <DescriptionOutlinedIcon />, },
  legalHelp: { role: 'legal help', icon: <GavelRoundedIcon />, },
  productManager: { role: 'product manager', icon: <Diversity3OutlinedIcon />, },
  projectManager: { role: 'project manager', icon: <ManageAccountsOutlinedIcon />, },
  uxResearcher: { role: 'user experience researcher', icon: <ScreenSearchDesktopOutlinedIcon />, },
  userExperienceResearcher: { role: 'user experience researcher', icon: <ScreenSearchDesktopOutlinedIcon />, },
  uxUiDesigner: { role: 'UX/UI designer', icon: <ScreenSearchDesktopOutlinedIcon />, },
  socialMediaDesigner: { role: 'social media designer', icon: <ShareOutlinedIcon />, },
  socialMediaSpecialist: { role: 'social media specialist', icon: <EmojiPeopleOutlinedIcon />, },
  softwareEngineer: { role: 'software engineer', icon: <CodeOutlinedIcon />, },
  softwareDeveloper: { role: 'software developer', icon: <CodeOutlinedIcon />, },
  solutionArchitect: { role: 'solution architect', icon: <ApartmentOutlinedIcon />, },
  qaTestEngineer: { role: 'QA/test engineer', icon: <BugReportOutlinedIcon /> },
  storyteller: { role: 'storyteller', icon: <AutoStoriesOutlinedIcon />, },
  qaSpecialist: { role: 'QA specialist', icon: <BugReportOutlinedIcon />, },
  // Keyed Roles
  "account-manager" : { role: 'account manager', icon: <ManageAccountsOutlinedIcon />, }, // TODO: add appropriate icon
  "accountant" : { role: 'accountant', icon: <ManageAccountsOutlinedIcon />, }, // TODO: add appropriate icon
  "administrative-manager" : { role: 'administrative manager', icon: <ManageAccountsOutlinedIcon />, }, // TODO: add appropriate icon
  "bookkeeper" : { role: 'bookkeeper', icon: <ManageAccountsOutlinedIcon />, }, // TODO: add appropriate icon
  "community-engagement-liaison": { role: 'community engagement liaison', icon: <CampaignOutlinedIcon />, },
  "data-analyst" : { role: 'data analyst', icon: <ScreenSearchDesktopOutlinedIcon />, },
  "digital-marketing-specialist-&-ga4-specialist" : { role: 'digital marketing specialist & ga4 specialist', icon: <ScreenSearchDesktopOutlinedIcon />, }, // TODO: add appropriate icon
  "engineering-manager" : { role: 'engineering manager', icon: <CodeOutlinedIcon />, },
  "executive-assistant" : { role: 'executive assistant', icon: <ManageAccountsOutlinedIcon />, }, // TODO: add appropriate icon
  "grant-project-manager": { role: 'grant project manager', icon: <DescriptionOutlinedIcon />, },
  "grant-researcher": { role: 'grant researcher', icon: <DescriptionOutlinedIcon />, },
  "grant-writer": { role: 'grant writer', icon: <DescriptionOutlinedIcon />, },
  "graphic-designer": { role: 'graphic designer', icon: <DrawOutlinedIcon />, },
  "hr-generalist": { role: 'hr generalist', icon: <ManageAccountsOutlinedIcon />, }, // TODO: add appropriate icon
  "information-architect": { role: 'information architect', icon: <ApartmentOutlinedIcon />, }, // TODO: add appropriate icon
  "it-generalist": { role: 'it generalist', icon: <ApartmentOutlinedIcon />, }, // TODO: add appropriate icon
  "marketing-generalist": { role: 'marketing generalist', icon: <AutoStoriesOutlinedIcon />, }, // TODO: add appropriate icon
  "operations-manager": { role: 'operations manager', icon: <ManageAccountsOutlinedIcon />, }, // TODO: add appropriate icon
  "product-manager": { role: 'product manager', icon: <Diversity3OutlinedIcon />, },
  "project-manager": { role: 'project manager', icon: <ManageAccountsOutlinedIcon />, },
  "public-relations-lead": { role: 'public relations lead', icon: <AutoStoriesOutlinedIcon />, }, // TODO: add appropriate icon
  "qa-test-engineer": { role: 'QA/test engineer', icon: <BugReportOutlinedIcon /> },
  "researcher": { role: 'researcher', icon: <ScreenSearchDesktopOutlinedIcon />, }, // TODO: add appropriate icon
  "social-media-designer": { role: 'social media designer', icon: <ShareOutlinedIcon />, },
  "social-media-specialist": { role: 'social media specialist', icon: <EmojiPeopleOutlinedIcon />, },
  "software-developer": { role: 'software developer', icon: <CodeOutlinedIcon />, },
  "software-developer-back-end": { role: 'software developer back end', icon: <CodeOutlinedIcon />, },
  "software-developer-front-end": { role: 'software developer front end', icon: <CodeOutlinedIcon />, },
  "solution-architect": { role: 'solution architect', icon: <ApartmentOutlinedIcon />, },
  "storyteller-&-content-writer": { role: 'storyteller & content writer', icon: <AutoStoriesOutlinedIcon />, },
  "user-experience-researcher": { role: 'user experience researcher', icon: <ScreenSearchDesktopOutlinedIcon />, },
  "ux-ui-designer": { role: 'UX/UI designer', icon: <ScreenSearchDesktopOutlinedIcon />, },
  "volunteer": { role: 'volunteer', icon: <EmojiPeopleOutlinedIcon />, }
}

type RolesSectionProps = {
  title: string
  columns?: number
  showLink?: boolean
  roles?: DASVolunteerRoleBasicInfo[] | String[]
  children?: ReactNode
}

const getRoleUrl = (roleKey:string) => {
 return `/volunteer_role?role=${roleKey}`
}

const RolesSection = ({ title, columns = 3, showLink = false, roles = [], children }: RolesSectionProps) => {
  return (
    roles.length > 0 && (
      <Section>
        <Subheader variant="headlineMedium">{title}</Subheader>
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'columns',
            gridTemplateColumns: `repeat(${columns}, minmax(15rem, 1fr))`,
            justifyContent: 'center',
            gap: '2rem',
            width: '100%',
          }}
        >
          {roles.length > 0 &&
              roles.map((singleRole, i) => (
                    <ListItemWithIcon
                      key={`${i}-${singleRole?.key}` || `${i}-${singleRole}`}
                      listIcon={rolesMap[singleRole.key]?.icon || rolesMap[singleRole].icon || null}
                      listText={rolesMap[singleRole.key]?.role || rolesMap[singleRole].role || null}
                      sxProps={{
                        alignItems: showLink ? 'flex-start' : 'center',
                      }}
                    >
                      {showLink &&
                        <Button
                          variant="outlined"
                          href={`${getRoleUrl(singleRole.key)}`}
                          sx={{ width: { md: 'max-content' } }}
                        >
                          Learn more &rarr;
                        </Button>
                      }
                    </ListItemWithIcon>
                ))
            }
        </Box>
        {children}
      </Section>
    )
  )
}

export default RolesSection
