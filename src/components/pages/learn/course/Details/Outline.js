import React from 'react'
import { Heading, P } from 'src/fragments/DesignSystem'
import { Box, Flex, Card, Image } from 'serverless-design-system'
import courseOutlineData from './Data'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import { InternalLink } from 'src/fragments'

const CourseOutline = props => (
    <Box>
      <Heading.h3
        align='left'
        mt={[62, 62, 62, 62, 62]}
        mb={[22, 22, 22, 22, 32]}
      >
        Course outline
      </Heading.h3>
      <Card border='1px solid #eaeaea'>
      {
        courseOutlineData.map((course, index) => (
          <Flex key={index} flexDirection='column'>
            <Flex style={{backgroundColor: '#f7f7f7'}} p={22}>
              <Heading.h5 color='black' mb={0} fontFamily='Soleil'>{course.title}</Heading.h5>
            </Flex>
            {
                course.items.map((item, index) => (
                  <Flex key={item.videoNumber} justifyContent='space-between' px={'22px'}
                  
                  >
                    <InternalLink to={'/learn/tutorial/create-an-aws-account/'}>
                      <Flex>
                        <Image src={playVideoIcon} />
                        <P>&nbsp;&nbsp;{item.title}</P>  
                      </Flex>
                    </InternalLink>
                    <P>{item.playTime}</P>
                  </Flex>
                ))
            }
          </Flex>
        ))
      }
      </Card>
    </Box>
)

export default CourseOutline