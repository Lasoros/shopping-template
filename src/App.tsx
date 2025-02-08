import './App.css'
import { Box, Container, Input , Image, Flex, HStack, Separator} from '@chakra-ui/react'
import Items from './Items';

import FAQ2 from './FAQ2';
import FAQ3 from './FAQ3';
import FAQ from './FAQ';
import Call from './Call';

function App() {



  return (
    <>


        <Box>

          <Flex direction="column" align="center" bg="gray.50" p={5} >
            
            <header>
              <div className="head">
                <Container >
                  <HStack padding={12} justifyContent={'center'}>
                    <Box boxSize={50} background={'transparent'} >
                      <Image src='src/assets/sheildlogo.jpg'></Image>
                    </Box>
                    {/* <Box>
                      <Bleed>
                      
                      <PageDraw></PageDraw>
                      </Bleed>
                      </Box> */}
                    <Box>
                      
                    <Input placeholder='Search' colorPalette={'gray'}></Input>
                    </Box>

                    

                  </HStack>

                  <Separator paddingBottom={15}></Separator>

                </Container>


              </div>
            </header>


            <main>

              <Container>
                <Box boxSize={'contain'}>
                  <Image src='src/assets/plumbinghero.jpg' borderRadius={25}>
                  </Image>


                  {/* <Separator paddingBottom={15}></Separator> */}
                </Box>

                
                <Box>
                  <HStack justifyContent={'center'} padding={35} alignItems={'baseline'}>
                    <FAQ></FAQ>
                    <FAQ2></FAQ2>
                    <FAQ3></FAQ3>
                  </HStack>

                  <Separator padding={35}></Separator>

                </Box>

                {/* <Separator paddingBottom={15}></Separator> */}

                <Box>
                  <Items></Items>
  
                </Box>



              </Container>

              
            

            </main>



            <footer>
              <Container>

              <Box>
                  <Call></Call>
              </Box>

              </Container>
            </footer>

  



            
          </Flex>

        </Box>


 
    </>
  )
}

export default App
