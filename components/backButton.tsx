"use client";

import { useRouter } from "next/navigation";

import { Button } from "./ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="wrapper pt-4 m-auto">
      <Button type="button" onClick={() => router.back()}>
        Go Back
      </Button>
    </div>
  );
};

export default BackButton;
