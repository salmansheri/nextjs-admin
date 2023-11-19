"use client";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";

interface ImageUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export default function ImageUpload({ onChange, endpoint }: ImageUploadProps) {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
