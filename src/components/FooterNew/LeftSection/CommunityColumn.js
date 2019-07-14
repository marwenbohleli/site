import React from 'react'

import FooterListColumn from './Column'
import { github, forum, slack, meetups, partners } from 'src/constants/newUrls'

const CommunityColumn = () => (
  <FooterListColumn
    header='Community'
    listItems={[
      {
        name: 'GitHub',
        navProps: { to: github, crossDomain: true },
      },
      {
        name: 'Forum',
        navProps: { to: forum, crossDomain: true },
      },
      {
        name: 'Slack',
        navProps: { to: slack, completed: true },
      },
      {
        name: 'Meetups',
        navProps: { to: meetups },
      },
      {
        name: 'Partners',
        navProps: { to: partners, completed: true },
      },
    ]}
  />
)

export default CommunityColumn
