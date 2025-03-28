import { Stack, Heading, AccordionRoot, AccordionItem, AccordionItemTrigger, Icon, AccordionItemContent } from "@chakra-ui/react";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";






export const FAQ = () => {
    return (
      <Stack width="full" maxW="400px">
        <Heading size="md">Why Use Us?</Heading>
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
      icon: <FaRegThumbsUp />,
      title: "Quality",
      content:
        "We offer the best bang for you buck Plumbing work in the locality",
    },
    {
      value: "Price",
      icon: <IoPricetags />,
      title: "Price",
      content:
        "While it is difficult to give pricing for unseen Plumbing work, we do our best to give the best quality work for the least cost to you. Firstsly by not charging a service all fee!",
    },
]

export default FAQ;

