import React from 'react'
import { Heading, Button } from 'src/fragments/DesignSystem'
import { Flex, Text, Image } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/newUrls.js'
import slsHeroLogo from 'src/assets/images/home/sls-home-logo.svg'

const HeroContent = props => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.6, 0.6, 0.47]}
    mt={[70, 70, 62, 78, 28]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <Image src={slsHeroLogo} />
    </Flex>
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless Debugging
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      color='#5b5b5b'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Query across any invocation to quickly troubleshoot and optimize function
      performance.
    </Text>
    <Flex
      justifyContent={['left', 'left', 'center', 'center', 'flex-start']}
      mt={42}
    >
      <ExternalLink to={dashboard}>
        <Button>Sign-up for free</Button>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent