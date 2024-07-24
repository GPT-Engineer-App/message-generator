import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [greeting, setGreeting] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [optout, setOptout] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");

  const generateMessage = () => {
    const name = "[NAME]"; // This could be made dynamic in the future
    const newMessage = `${greeting.replace("[NAME]", name)} ${identifier} ${message} ${link} ${optout}`;
    setGeneratedMessage(newMessage);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage);
    toast.success("Message copied to clipboard!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Message Template Builder</h1>
      <p className="text-lg mb-6">Generate randomized template messages for Luce Research</p>

      <div className="grid gap-4 mb-6">
        <Select onValueChange={setGreeting}>
          <SelectTrigger>
            <SelectValue placeholder="Select a greeting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Hi, [NAME].">Hi, [NAME].</SelectItem>
            <SelectItem value="Hello, [NAME]!!">Hello, [NAME]!!</SelectItem>
            <SelectItem value="Hey, [NAME]!">Hey, [NAME]!</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setIdentifier}>
          <SelectTrigger>
            <SelectValue placeholder="Select an identifier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="This is Adam for Luce Research.">This is Adam for Luce Research.</SelectItem>
            <SelectItem value="I'm Adam for Luce Research.">I'm Adam for Luce Research.</SelectItem>
            <SelectItem value="I'm Adam with Luce Research.">I'm Adam with Luce Research.</SelectItem>
            <SelectItem value="I am Adam w/Luce Research.">I am Adam w/Luce Research.</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setMessage}>
          <SelectTrigger>
            <SelectValue placeholder="Select a message" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Have your voice heard: Click on the link to take a quick survey on the upcoming election in Pasadena!">
              Have your voice heard: Click on the link to take a quick survey on the upcoming election in Pasadena!
            </SelectItem>
            <SelectItem value="Share your thoughts on the upcoming election in Pasadena! Tap the link to share your opinion.">
              Share your thoughts on the upcoming election in Pasadena! Tap the link to share your opinion.
            </SelectItem>
            <SelectItem value="Your opinion matters! Make it heard with a quick survey on the upcoming election in Pasadena! Tap the link to start:">
              Your opinion matters! Make it heard with a quick survey on the upcoming election in Pasadena! Tap the link to start:
            </SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setLink}>
          <SelectTrigger>
            <SelectValue placeholder="Select a link" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="https://lucer.co/SE/1/PSD/?p=EXTERN_ID">https://lucer.co/SE/1/PSD/?p=EXTERN_ID</SelectItem>
            <SelectItem value="https://lucer.us/SE/1/PSD/?p=EXTERN_ID">https://lucer.us/SE/1/PSD/?p=EXTERN_ID</SelectItem>
            <SelectItem value="https://1luce.com/SE/1/PSD/?p=EXTERN_ID">https://1luce.com/SE/1/PSD/?p=EXTERN_ID</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setOptout}>
          <SelectTrigger>
            <SelectValue placeholder="Select an optout message" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="STOP to stop">STOP to stop</SelectItem>
            <SelectItem value="Txt STOP 2 Optout">Txt STOP 2 Optout</SelectItem>
            <SelectItem value="2 end messages, STOP">2 end messages, STOP</SelectItem>
            <SelectItem value="2 stop reply STOP">2 stop reply STOP</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={generateMessage} className="w-full mb-4">Generate Message</Button>

      <div className="mb-4">
        <label htmlFor="generated-message" className="block text-sm font-medium text-gray-700 mb-2">
          Generated Message
        </label>
        <Textarea
          id="generated-message"
          value={generatedMessage}
          readOnly
          className="w-full h-32"
        />
      </div>

      <Button onClick={copyToClipboard} className="w-full">Copy to Clipboard</Button>
    </div>
  );
};

export default Index;