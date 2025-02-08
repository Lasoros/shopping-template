import { DrawerRoot, DrawerBackdrop, DrawerTrigger, Button, DrawerContent, DrawerHeader, DrawerTitle, DrawerBody, DrawerFooter, DrawerActionTrigger, DrawerCloseTrigger } from "@chakra-ui/react";



export const PageDraw = () => {
    return (
        <DrawerRoot>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button variant="outline" size="lg">
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerActionTrigger>
            <Button>Save</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    )
  
}

export default PageDraw;