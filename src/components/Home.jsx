import React, { useEffect, useState } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Center } from '@chakra-ui/react'
import Product_card from './product-card'
import axios from 'axios'



const Home = () => {

    const [shop, setShop] = useState([{}]);
    

    

    useEffect(() => {

        axios.get('http://api_oh.udvc.ac.th/shop')
            .then(respones => {
                setShop(respones.data.data);
            })

    }, [])

    

    

   

    const warpItems = shop.map((item) =>

        <WrapItem  key={item.id}>
        <Center w='420px' h='580px' bg='red.200'>
            <Product_card  id={item.id} name={item.name} photo={item.photo}  />
        </Center>
       </WrapItem>
   
    )

    return (

        <>


            <Wrap spacing='30px' justify='center' >

                {warpItems}

                {/* <WrapItem>
                    <Center w='420px' h='580px' bg='red.200'>
                        <Product_card />
                    </Center>
                </WrapItem> */}


            </Wrap>


        </>


    )
}

export default Home
