import React from "react";
import PanInfoLayout from "./PanInfoLayout";

export default function Guide({ guidelines }) {
  return (
    <PanInfoLayout
      eyebrow="Form 49AA · Foreign Citizens"
      title="PAN Application Guidelines"
      description="Understand the identity, address and attestation requirements before submitting a new PAN application."
      items={guidelines}
    />
  );
}
