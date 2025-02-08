import { Stack, Heading, AccordionRoot, AccordionItem, AccordionItemTrigger, Icon, AccordionItemContent } from "@chakra-ui/react";
import { AiOutlineStop } from "react-icons/ai";
import { IoPricetags } from "react-icons/io5";
import { LuTags, LuChartBarStacked } from "react-icons/lu";






export const FAQ2 = () => {
    return (
      <Stack width="full" maxW="400px">
        <Heading size="md">Pricing</Heading>
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
      icon: <AiOutlineStop />,
      title: "No Service Fee",
      content:
        "We have a $0 service fee, this allows every dollar to go toward the fix if needed!",
    },
    {
      value: "Price",
      icon: <IoPricetags />,
      title: "Emergency Call Fee",
      content:
        "We have a small fee for emergency visits of, $50",
    },
]

export default FAQ2;