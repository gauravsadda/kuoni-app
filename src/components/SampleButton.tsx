import React from "react";

export function SampleButton({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button onClick={onClick} data-testid="sample-button">
      {children}
    </button>
  );
}
