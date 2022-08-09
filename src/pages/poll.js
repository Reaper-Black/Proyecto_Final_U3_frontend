import { useEffect, useState, useMemo } from "react"
import { Text, VStack, Progress, Box, Button, Center } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import '../App'
import Dir from "../components/navbar"
import Footer from "../components/footer"

const Poll = () => {
    const [poll, setPoll] = useState({})
    const { id: pollId } = useParams()

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(`https://proyecto-final-u3-backend.herokuapp.com/polls/${pollId}`)
                .then(response => response.json())
                .then(setPoll)
        }, 500)
        return () => clearInterval(interval)
    }, [pollId])

    const totalVotes = useMemo(() => {
        if (poll.answers) {
            return poll.answers.reduce((acc, curr) => acc + curr.vote, poll.answers.length)
        }
        return 0
    }, [poll])

    console.log(totalVotes)

    return (
        <div>
            < Dir />
            <div>
                <Box width="100%" height="100vh" bg="#FFFFFF" p='200'>
                    <Box w={400} h={500} bg="#66BFBF" borderRadius='md' px={30} ml='600'>
                        <VStack spacing={16}>
                            {poll?.answers?.map(({ _id, text, vote }) => {
                                return (
                                    <VStack key={_id} spacing={4} align="stretch" width="100%">
                                        <Text>{text}</Text>
                                        <Progress colorScheme="green" size="lg" value={(vote / totalVotes) * 100} />
                                    </VStack>
                                )
                            }
                            )}
                        </VStack>
                        <Center height='70px'>
                            <Button px={30} bg='#7D9D9C'><a href="/home">Back to Poll</a></Button>
                        </Center>
                    </Box>
                </Box>
            </div>
            <Footer />
        </div>
    )
}

export default Poll