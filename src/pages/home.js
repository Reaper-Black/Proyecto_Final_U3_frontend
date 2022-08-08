import { ChakraProvider, VStack, Input, Divider, Button, Center, Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/footer'
import Dir from "../components/navbar"


const Home = () => {
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    const answers = [
      event.target.elements['answer-1'].value,
      event.target.elements['answer-2'].value,
      event.target.elements['answer-3'].value,
      event.target.elements['answer-4'].value
    ]
    const body = {
      question: event.target.elements.question.value,
      answers: answers.filter(Boolean)
    }
    const response = await fetch('http://localhost:3001/polls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const poll = await response.json()

    navigate(`/vote/${poll._id}`)
  }

  return (
    <div>
      < Dir />
      <div>
        <ChakraProvider>
          <Box width="100%" height="100vh" bg="#FFFFFF" p='250'>
            <Box w={400} h={220} bg="#66BFBF" borderRadius='md' px={30} ml='500'>
              <form onSubmit={handleSubmit}>
                <input name="question" placeholder="What's your question?" />
                <Divider />
                <VStack bg='#F0EBE3'>
                  {[1, 2, 3, 4].map(index => {
                    return <Input size="medium" name={`answer-${index}`} placeholder={`Answer #${index}`} />
                  })}
                </VStack>
                <Center height='60px'>
                  <Button bg='#7D9D9C' type="submit" px={30}> Create Poll </Button>
                </Center>
              </form>
            </Box>
          </Box>
        </ChakraProvider>
      </div>
      <Footer />
    </div>
  );
}

export default Home