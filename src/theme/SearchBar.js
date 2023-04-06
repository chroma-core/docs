
import React from "react";
import { MendableSearchBar } from "@mendable/search";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function SearchBarWrapper() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  return (
    <div className="mendable-search">
      <MendableSearchBar
        anon_key={customFields.mendableAnonKey}
        style={{ accentColor: "#FE8154", darkMode: false }}
        placeholder="Search..."
        dialogPlaceholder="How to add texts to my collection?"
      />
    </div>
  );
}