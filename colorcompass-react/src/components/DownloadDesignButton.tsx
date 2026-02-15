import React from "react";

export type DownloadDesignButtonProps = {
  onClick: () => void;
};

export function DownloadDesignButton({ onClick }: DownloadDesignButtonProps): React.JSX.Element {
  return (
    <button className="order-link download-design-btn" type="button" onClick={onClick}>
      <span>Download Design as Image</span>
    </button>
  );
}
