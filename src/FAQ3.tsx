import { Stack, Heading, AccordionRoot, AccordionItem, AccordionItemTrigger, Icon, AccordionItemContent } from "@chakra-ui/react";
import { IoIosWoman } from "react-icons/io";
import { LuTags, LuChartBarStacked } from "react-icons/lu";
import { MdOutlineMan, MdOutlineReviews } from "react-icons/md";






export const FAQ3 = () => {
    return (
      <Stack width="full" maxW="400px">
        <Heading size="md">Don't Take Our Word For It!</Heading>
        <AccordionRoot collapsible defaultValue={[]}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionItemTrigger>
                <Icon fontSize="lg" color="fg.subtle">
                  {item.icon}
                </Icon>
                {item.title}
              </AccordionItemTrigger>
              <AccordionItemContent>{item.content}</AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Stack>
    )
  }
  
  const items = [
    {
      value: "info",
      icon: <MdOutlineReviews />,
      title: "Reviews",
      content:
        "Below are some our most glowing reviews!",
    },
    {
      value: "Price",
      icon: <MdOutlineMan />,
      title: "John Doe",
      content:
        "They came out fast and fixed my leaking shower in 30 minutes! The fact they don't have a service fee was an added bonus!",
    },
    {
    value: "Price",
    icon: <IoIosWoman />,
    title: "Mary Joe",
    content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo laboriosam magni animi maxime molestiae consequuntur',
    },
    {
    value: "Price",
    icon: <MdOutlineMan />,
    title: "Joe Gatos",
    content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo laboriosam magni animi maxime molestiae consequuntur',
    },
]

export default FAQ3;