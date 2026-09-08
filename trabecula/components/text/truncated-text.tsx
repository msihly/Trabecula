import { ReactNode } from "react";
import { Text, TextProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";

export interface TextTruncation {
  isTruncated: boolean;
  preview: string;
  remainder: string;
  truncationIndex: number;
}

export interface TruncatedTextProps extends Omit<TextProps, "children"> {
  expanded?: boolean;
  maxLength: number;
  text: string;
  ellipsis?: ReactNode;
  lineClamp?: number;
  wordBoundaryRatio?: number;
}

export interface TruncatedTextRemainderProps extends Omit<TextProps, "children"> {
  maxLength: number;
  text: string;
  wordBoundaryRatio?: number;
}

export const getTextTruncation = (
  text: string,
  maxLength: number,
  wordBoundaryRatio = 0.8,
): TextTruncation => {
  if (text.length <= maxLength) {
    return {
      isTruncated: false,
      preview: text,
      remainder: "",
      truncationIndex: text.length,
    };
  }

  const truncatedText = text.substring(0, maxLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");
  const truncationIndex =
    lastSpaceIndex > maxLength * wordBoundaryRatio ? lastSpaceIndex : maxLength;

  return {
    isTruncated: true,
    preview: text.substring(0, truncationIndex),
    remainder: text.substring(truncationIndex).trim(),
    truncationIndex,
  };
};

export const TruncatedText = ({
  expanded = false,
  maxLength,
  text,
  ellipsis = "...",
  lineClamp = 1,
  wordBoundaryRatio,
  display,
  overflow,
  overflowWrap,
  sx,
  textOverflow,
  wordBreak,
  ...textProps
}: TruncatedTextProps) => {
  const { isTruncated, preview } = getTextTruncation(text, maxLength, wordBoundaryRatio);
  const shouldClamp = lineClamp > 0;

  return (
    <Text
      display={display ?? (shouldClamp ? ("-webkit-box" as CSS["display"]) : undefined)}
      overflow={overflow ?? (shouldClamp ? "hidden" : undefined)}
      overflowWrap={overflowWrap ?? "break-word"}
      textOverflow={textOverflow ?? (shouldClamp ? "ellipsis" : undefined)}
      wordBreak={wordBreak ?? "break-word"}
      sx={
        shouldClamp
          ? {
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: lineClamp,
              ...sx,
            }
          : sx
      }
      {...textProps}
    >
      {preview}
      {!expanded && isTruncated ? ellipsis : null}
    </Text>
  );
};

TruncatedText.Remainder = ({
  maxLength,
  text,
  wordBoundaryRatio,
  ...textProps
}: TruncatedTextRemainderProps) => {
  const { isTruncated, remainder } = getTextTruncation(text, maxLength, wordBoundaryRatio);

  if (!isTruncated) return null;

  return <Text {...textProps}>{remainder}</Text>;
};
