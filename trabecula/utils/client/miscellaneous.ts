import { toast } from "trabecula/utils/client";

export const copyToClipboard = async (value: string, message?: string) => {
  try {
    await navigator.clipboard.writeText(value);

    if (message) toast.info(message);
  } catch {
    toast.error("Failed to copy to clipboard");
  }
};
