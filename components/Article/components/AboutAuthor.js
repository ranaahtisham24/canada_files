import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const AboutAuthor = () => {
  return (
    <Stack direction={"column"} borderBottom={'1px solid #6B7280'} py={8} spacing={6}>
        <Heading fontFamily={'Inter'} fontWeight={'700'} fontSize={'20px'} lineHeight={'160%'} letterSpacing={'-0.011em'} color={'#22224A'}>About the Author</Heading>
        <Text fontFamily={'Inter'} lineHeight={'24px'} letterSpacing={'-0.011em'} color={'#22224A'}>Alison Bodine is a social justice activist, author and researcher in Vancouver, Canada, on the Editorial Board of the Fire This Time Newspaper and Coordinator of the Fire This Time Movement for Social Justice Venezuela Solidarity Campaign. She is the author of Revolution and Counter-Revolution in Venezuela (Battle of Ideas Press, 2018).</Text>
    </Stack>
  )
}

export default AboutAuthor