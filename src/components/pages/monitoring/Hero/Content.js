import React from 'react'
import { Heading, Button } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard, docPages } from 'src/constants/newUrls.js'
import FrameworkLogo from 'src/components/pages/features-common/FrameworkLogo'

const HeroContent = props => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.55, 0.6, 0.45]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <FrameworkLogo />
    </Flex>
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless Monitoring
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Instant, powerful metrics for your serverless apps, covering usage,
      performance, errors & more.
    </Text>
    <Flex
      justifyContent={[
        'space-between',
        'space-between',
        'space-between',
        'space-evenly',
        'flex-start',
      ]}
      mt={42}
    >
      <ExternalLink to={dashboard}>
        <Button>Sign-up for free</Button>
      </ExternalLink>
      <ExternalLink to={docPages.monitoring} style={{ alignSelf: 'center' }}>
        <Text
          color='#fd5750'
          fontSize='16px'
          fontFamily='SoleilBk'
          lineHeight='24px'
          letterSpacing='0.8px'
          ml={[0, 0, 33]}
        >
          learn more >
        </Text>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
