"use client";

import { Button } from "@repo/ui/button";
import { useState } from "react";

export default function Home() {
  const [connected, setConnected] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Socket Demo</h1>
      <div className="flex gap-4">
        <Button onClick={() => setConnected(true)} disabled={connected}>
          Connect
        </Button>
        <Button onClick={() => setConnected(false)} disabled={!connected}>
          Disconnect
        </Button>
      </div>
    </main>
  );
}
