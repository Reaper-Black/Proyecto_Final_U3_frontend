import { useEffect, useState } from "react"
import { Text, VStack, Checkbox, Button, HStack, Heading, Divider, Box, Container, Center } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import '../App'
import Dir from "../components/navbar"
import Footer from "../components/footer"

const Vote = () => {
    const navigate = useNavigate()
    const [poll, setPoll] = useState({})
    const [answerId, setAnswerId] = useState(null)
    const { id: pollId } = useParams()

    useEffect(() => {
        fetch(`https://proyecto-final-u3-backend.herokuapp.com/polls/${pollId}`)
            .then(response => response.json())
            .then(setPoll)

    }, [pollId])

    const submitVote = async () => {
        await fetch(`https://proyecto-final-u3-backend.herokuapp.com/polls/${pollId}/votes/${answerId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{ }'
        })
        navigate(`/poll/${pollId}`)
    }

    return (
        <div>
            < Dir />
            <div>
                <Box width="100%" height="100vh" bg="#FFFFFF" p='300'>
                    <Box w={400} h={300} bg="#66BFBF" borderRadius='md' px={30} ml='500'>
                        <Container centerContent alignItems="left">
                            <Heading>{poll.question}</Heading>
                            <Divider />
                            <Box>
                                <VStack alignItems="left">
                                    {poll?.answers?.map(({ _id, text }) => {
                                        return (
                                            <HStack key={_id}>
                                                <Checkbox onChange={() => setAnswerId(_id)} isChecked={_id === answerId} />
                                                <Text>{text}</Text>
                                            </HStack>
                                        )
                                    }
                                    )}
                                </VStack>
                                <Center height='100px'>
                                    <Button onClick={submitVote} px={30} bg='#7D9D9C'>Vote</Button>
                                    <Divider />
                                    <Button px={35} bg='#7D9D9C'><a href="/home">Back to Poll</a></Button>
                                </Center>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </div>
            <Footer />
        </div>
    )
}

export default Vote