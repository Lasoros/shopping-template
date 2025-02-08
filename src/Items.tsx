import { Image, Box, Button, Card, Grid } from "@chakra-ui/react"

export const Items = () => {


  return (

    
    <Grid templateColumns="repeat(3, 1fr)" gap="6">

      <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="src/assets/leaks.jpg"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Leak Fix</Card.Title>
                <Card.Description>
                Ah the worst sound a home owner can hear, 
                'Unkown running water'. We can take care 
                of that no trouble at all!.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">From $99</Button>
            </Card.Footer>
        </Card.Root>
      </Box>

      <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="src/assets/crawlspace.jpg"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Crawl Space Work</Card.Title>
                <Card.Description>
                We arent't afraid of a little Crawl Space Plumbing,
                If you need an inspection or a repair, give us a call!
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="left">
                <Button variant="outline">From $75</Button>
            </Card.Footer>
        </Card.Root>
      </Box>

      <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="src/assets/install.jpg"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Plumbing Installation</Card.Title>
                <Card.Description>
                Be it toilets, sinks, water heaters, showers, washers, and anything
                inbetween. We can do it better and cheaper than the other guys!
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">From $35</Button>            
            </Card.Footer>
        </Card.Root>
      </Box>

      

      {/* <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Footer>
        </Card.Root>
      </Box>

      <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Footer>
        </Card.Root>
      </Box>

      <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Footer>
        </Card.Root>
      </Box>

      <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Footer>
        </Card.Root>
      </Box>

      <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Footer>
        </Card.Root>
      </Box>

      <Box h={400}>
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Image
                    objectFit="cover"
                    maxW="200px"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Footer>
        </Card.Root>
      </Box>*/}

      </Grid> 
  )
}

export default Items;