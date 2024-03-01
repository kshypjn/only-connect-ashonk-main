import React from "react";
import { MAX_MISTAKES } from "../../../lib/constants";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";

function InfoModal() {
  return (
        <BaseModal
          title=""
          trigger={<Info className="mr-4" />}
          initiallyOpen={false}
          actionButtonText="Got It!"
        >
          <Tabs defaultValue="how-to-play">
            <TabsList className="grid w-full">
              <TabsTrigger value="how-to-play">How To Play</TabsTrigger>
            </TabsList>
            <TabsContent value="how-to-play">
              {" "}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What's The Goal?</AccordionTrigger>
                  <AccordionContent>
                    Find groups of items or names that share something in common.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How Do I Play?</AccordionTrigger>
                  <AccordionContent>
                    Select the items and tap 'Submit' to check if your guess matches
                    one of the answer categories.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How Many Tries Do I Get?</AccordionTrigger>
                  <AccordionContent>
                    {`You can make ${MAX_MISTAKES} mistakes before the game ends.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Contribute to the Game</AccordionTrigger>
                  <AccordionContent>
                    <a href="https://forms.gle/o1zHDmMBgCxJCZi59" className="text-blue-800 underline">Click Here</a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </BaseModal>
  );
}

export default InfoModal;
