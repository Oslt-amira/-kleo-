"use client";

import { Markdown } from "@/components/Markdown";
import { Button } from "@/components/ui/button";
import { getSegmentation } from "@/lib/embeddings";
import { useState } from "react";
import { seed_data } from "@/lib/example_document";

export default function Segmentation() {
  const [isLoading, setIsLoading] = useState(false);
  const [segments, setSegments] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  async function handleSegment() {
    setIsLoading(true);
    const reponse = await getSegmentation(seed_data[index].text);
    console.log(reponse);
    setSegments(reponse.chunks);
    setIsLoading(false);
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 py-8">
      <div className="flex gap-2">
        <Button
          disabled={index === 0}
          onClick={() => {
            setIndex(index - 1);
            setSegments([]);
          }}
        >
          Previous
        </Button>
        <Button disabled={isLoading} onClick={handleSegment}>
          Segment
        </Button>
        <Button
          disabled={index === seed_data.length - 1}
          onClick={() => {
            setIndex(index + 1);
            setSegments([]);
          }}
        >
          Next
        </Button>
      </div>
      <div className="h-[70vh] max-w-[45%] overflow-scroll">
        {segments.length > 0 ? (
          segments.map((segment, index) => (
            <Markdown
              key={index}
              bgColor={index % 2 === 0 ? "bg-orange-400" : "bg-gray-500"}
            >
              {segment}
            </Markdown>
          ))
        ) : (
          <Markdown>{seed_data[index].text}</Markdown>
        )}
      </div>
    </div>
  );
}
