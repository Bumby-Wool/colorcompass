import React from "react";

// Props for the download action button.
export type DownloadDesignButtonProps = {
  onClick: () => void;
};

// CTA for exporting the current design.
export function DownloadDesignButton({ onClick }: DownloadDesignButtonProps): React.JSX.Element {
  return (
    <button className="order-link download-design-btn" type="button" onClick={onClick}>
      <span>Download Design as Image</span>
    </button>
  );
}
