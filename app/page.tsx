"use client";

import PlaygroundApp from "@/components/rte/App";

export default function Home() {
  return (
    <div className="malda-rte">
    <PlaygroundApp
    settings={{
      showTreeView: false
    }}
    // notEditable
    onChange={nv => console.log(nv)}
    />
    </div>
  )
}
