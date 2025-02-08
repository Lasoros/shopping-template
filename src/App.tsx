import './App.css'
import { Box, Container, Input , Image, Button, Flex, Grid, GridItem, Heading, useBreakpointValue, HStack, Text, Separator, Bleed, Center} from '@chakra-ui/react'
import Items from './Items';
import PageDraw from './Drawer';

import FAQ2 from './FAQ2';
import FAQ3 from './FAQ3';
import FAQ from './FAQ';

function App() {

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    sm: "1fr 1fr",
    md: "1fr 1fr 1fr",
  });

  const products = [
    { id: 1, name: "Nourison 23", price: "৳ 600.0", originalPrice: "৳ 870.0", imgUrl: "image1.jpg" },
    { id: 2, name: "Single Pendant", price: "৳ 4200.0", originalPrice: "৳ 5999.0", imgUrl: "image2.jpg" },
    { id: 3, name: "Light Drum Pendant", price: "৳ 2567.0", imgUrl: "image3.jpg" },
    { id: 4, name: "Silk Drum Lamp Shade", price: "৳ 3200.0", originalPrice: "৳ 3200.0", imgUrl: "image4.jpg" },
    // Add more products as needed
  ];

  return (
    <>
      <Box>

        <Flex direction="column" align="center" bg="gray.50" p={5}>

          <header>
            <div className="head">
              <Container width={'100vw'} >
                <HStack padding={12} justifyContent={'space-around'}>
                  <Box boxSize={50} background={'transparent'} >
                    <Image src='src/assets/sheildlogo.jpg'></Image>
                  </Box>
                  {/* <Box>
                    <Bleed>

                    <PageDraw></PageDraw>
                    </Bleed>
                  </Box> */}
                  <Box>
                    
                  <Input placeholder='Search' colorPalette={'gray'} width={650} minWidth={'auto'} maxW={700}></Input>
                  </Box>

                  

                </HStack>

                <Separator paddingBottom={15}></Separator>

              </Container>


            </div>
          </header>


          <main>

            <Container>
              <Box height={850} width={'auto'}>
                <Image src='src/assets/plumbinghero.jpg' borderRadius={25}></Image>

                {/* <Separator paddingBottom={15}></Separator> */}
              </Box>

              
              <Box>
                <HStack justifyContent={'center'} padding={35}>
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
            <Container width={'100vw'}>

            </Container>
          </footer>

 



          
        </Flex>

      </Box>

 
    </>
  )
}

export default App
