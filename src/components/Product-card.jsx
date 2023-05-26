import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Stack ,Heading ,Divider ,ButtonGroup,Button ,Text,Image} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Product_card = (props) => {
       let {id,name,photo}     = props
       const navi = useNavigate();
    
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        crossorigin="anonymous"
                        src={photo}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue' onClick={()=>{navi('/productDetail')}} >
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Product_card;
