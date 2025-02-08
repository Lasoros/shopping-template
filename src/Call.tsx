import { PopoverRoot, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverBody } from "@chakra-ui/react";
import { useState } from "react";




export const Call = () => {
    const [open, setOpen] = useState(false)
    return (
      <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <PopoverTrigger asChild>
          <Button size="sm" variant="outline">
            Give Us A Call To Solve Your Plumbing Needs!
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            #999-999-9999
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    )
  }

  export default Call;