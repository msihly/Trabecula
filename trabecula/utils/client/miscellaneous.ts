import { toast } from "trabecula/utils/client";

export const copyToClipboard = (value: string, message: string) => {
  navigator.clipboard.writeText(value).then(
    () => toast.info(message),
    () => toast.error("Failed to copy to clipboard"),
  );
};
