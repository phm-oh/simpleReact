import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Container,
    Button,
    Center, Square, Circle,Heading
} from '@chakra-ui/react'
import register from '../service/login.service'
import { useToast } from '@chakra-ui/react'

const Form = () => {
    const toast = useToast();
    const [username,setUserName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    
    const onChangeUserName = (e) => {
        setUserName(e.target.value)  
        console.log(username)
    }


    const onChangeEmail = (e) => {
        setEmail(e.target.value)  
        console.log(email)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)  
        console.log(password)
    }

    const submitData = async (e) =>{
        e.preventDefault()
        // const data = {
        //     name: username,
        //     email: email,
        //     password:password
        // }
        // console.log(data)

        try {
          const response = await register(username,email,password)
           console.log(response.data.mesaage) 
           toast({
            position: 'top-right',
            title: 'Success',
            description: "response.data.mesaage",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
        } catch (error) {
            console.log(error.data.message)
        }
        
    }


    return (
        <div> 
            <Center mt={10}>
                <Heading as='h2' size='xl' >
                Register
            </Heading>
            </Center>

            <Container mt={10} p={10} maxW='container.sm' bg='gray.100' color='#262626' borderRadius={30}>
                <form onSubmit={submitData}>
                <FormControl >
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input id='text' type='text' onChange={onChangeUserName}/>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' onChange={onChangeEmail}/>
                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    <FormLabel htmlFor='password' type={'password'}  >Password</FormLabel>
                    <Input type='password' placeholder='password'  onChange={onChangePassword} />
                    <Button mt={5}
                        // isLoading
                        loadingText='Submitting'
                        colorScheme='teal'
                        variant='outline'
                        type="submit"
                    >
                        Submit
                    </Button>

                </FormControl>



                </form>
                

                
               


            </Container>






        </div>
    )
}

export default Form
