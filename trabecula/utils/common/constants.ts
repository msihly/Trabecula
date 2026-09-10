const AUDIO_CODECS_COMMON = [
  "None",
  "aac_he",
  "aac_ld",
  "aac",
  "ac3",
  "aiff",
  "alac",
  "avc",
  "dts",
  "flac",
  "mp2",
  "mp3",
  "mp4als",
  "opus",
  "pcm_alaw",
  "pcm_bluray",
  "pcm_dvd",
  "pcm_s16be",
  "pcm_s16le",
  "pcm_s24le",
  "pcm_s32le",
  "pcm_u8",
  "pcm",
  "tta",
  "vorbis",
  "wav",
  "wmapro",
  "wmav1",
  "wmav2",
] as const;

const AUDIO_CODECS_UNCOMMON = [
  "aac_latm",
  "alac",
  "ape",
  "aptx_hd",
  "aptx",
  "avs",
  "binkaudio_dct",
  "binkaudio_rdft",
  "cavs",
  "cook",
  "hcom",
  "iac",
  "mace3",
  "mace6",
  "paf_audio",
  "ra_144",
  "ra_288",
  "ralf",
  "sipr",
  "tak",
  "westwood_snd1",
  "wmalossless",
  "wmavoice",
  "xma1",
  "xma2",
] as const;

const AUDIO_CODECS = [...AUDIO_CODECS_COMMON, ...AUDIO_CODECS_UNCOMMON];
export type AudioCodec = (typeof AUDIO_CODECS)[number];

const IMAGE_EXTS_COMMON = ["gif", "heic", "jpeg", "jpg", "png", "webp"] as const;

const IMAGE_EXTS_UNCOMMON = ["apng", "avif", "bmp", "jfif", "jif", "jiff", "svg", "tiff"] as const;

const IMAGE_EXTS = [...IMAGE_EXTS_COMMON, ...IMAGE_EXTS_UNCOMMON];
export type ImageExt = (typeof IMAGE_EXTS)[number];

const VIDEO_CODECS_COMMON = [
  "av1",
  "h264",
  "hevc",
  "mpeg4",
  "prores",
  "vp8",
  "vp9",
  "wmv1",
] as const;

const VIDEO_CODECS_UNCOMMON = [
  "amv",
  "asv1",
  "asv2",
  "auravision",
  "binkvideo",
  "camstudio",
  "cinepak",
  "dirac",
  "dnxhd",
  "dnxhr",
  "dvvideo",
  "ffv1",
  "flv1",
  "h263",
  "h263p",
  "huffyuv",
  "indeo3",
  "indeo5",
  "jpeg2000",
  "jpegls",
  "lagarith",
  "mjpeg",
  "mjpegb",
  "mpeg1video",
  "mpeg2video",
  "msmpeg4v1",
  "msmpeg4v2",
  "msmpeg4v3",
  "rawvideo",
  "rv10",
  "rv20",
  "rv30",
  "rv40",
  "smacker",
  "snow",
  "sp5x",
  "svq1",
  "svq3",
  "theora",
  "tscc",
  "utvideo",
  "uyvy422",
  "v210",
  "vixl",
  "vp6",
  "vp6f",
  "wmv2",
  "wmv3",
  "yuyv422",
  "zlib",
  "zmbv",
] as const;

const VIDEO_CODECS = [...VIDEO_CODECS_COMMON, ...VIDEO_CODECS_UNCOMMON];
export type VideoCodec = (typeof VIDEO_CODECS)[number];

const VIDEO_EXTS_COMMON = [
  "3gp",
  "avi",
  "f4v",
  "flv",
  "m4v",
  "mkv",
  "mov",
  "mp4",
  "ts",
  "webm",
  "wmv",
] as const;

const VIDEO_EXTS_UNCOMMON = [
  "3gp2",
  "3gpp",
  "amv",
  "asf",
  "avi",
  "divx",
  "m2t",
  "m2ts",
  "m2v",
  "m4b",
  "m4p",
  "mpeg",
  "mpg",
  "mts",
  "ogv",
  "qt",
  "vob",
  "wm",
  "wmp",
] as const;

const VIDEO_EXTS = [...VIDEO_EXTS_COMMON, ...VIDEO_EXTS_UNCOMMON];
export type VideoExt = (typeof VIDEO_EXTS)[number];

const WEB_VIDEO_CODECS = ["h264", "hevc", "vp8", "vp9", "theora", "av1"] as const;
export type WebVideoCodec = (typeof WEB_VIDEO_CODECS)[number];

const WEB_VIDEO_EXTS = ["mp4", "webm", "ogv", "wav"] as const;
export type WebVideoExt = (typeof WEB_VIDEO_EXTS)[number];

export interface _Constants {
  AUDIO: {
    CODECS: AudioCodec[];
    CODECS_COMMON: AudioCodec[];
    CODECS_UNCOMMON: AudioCodec[];
  };
  IMAGE: {
    EXTS: ImageExt[];
    EXTS_COMMON: ImageExt[];
    EXTS_UNCOMMON: ImageExt[];
  };
  TOOLTIP: {
    ENTER_DELAY: number;
    ENTER_NEXT_DELAY: number;
  };
  VIDEO: {
    CODECS: VideoCodec[];
    CODECS_COMMON: VideoCodec[];
    CODECS_UNCOMMON: VideoCodec[];
    EXTS: VideoExt[];
    EXTS_COMMON: VideoExt[];
    EXTS_UNCOMMON: VideoExt[];
  };
  WEB_VIDEO: {
    CODECS: WebVideoCodec[];
    EXTS: WebVideoExt[];
  };
}

export const DENSE_FORM_ROW_HEIGHT = "1.8rem";
export const FORM_ROW_HEIGHT = "2.25rem";

export const _CONSTANTS: _Constants = {
  AUDIO: {
    CODECS: AUDIO_CODECS,
    CODECS_COMMON: AUDIO_CODECS_COMMON as unknown as AudioCodec[],
    CODECS_UNCOMMON: AUDIO_CODECS_UNCOMMON as unknown as AudioCodec[],
  },
  IMAGE: {
    EXTS: IMAGE_EXTS,
    EXTS_COMMON: IMAGE_EXTS_COMMON as unknown as ImageExt[],
    EXTS_UNCOMMON: IMAGE_EXTS_UNCOMMON as unknown as ImageExt[],
  },
  TOOLTIP: {
    ENTER_DELAY: 1000,
    ENTER_NEXT_DELAY: 500,
  },
  VIDEO: {
    CODECS: VIDEO_CODECS,
    CODECS_COMMON: VIDEO_CODECS_COMMON as unknown as VideoCodec[],
    CODECS_UNCOMMON: VIDEO_CODECS_UNCOMMON as unknown as VideoCodec[],
    EXTS: VIDEO_EXTS,
    EXTS_COMMON: VIDEO_EXTS_COMMON as unknown as VideoExt[],
    EXTS_UNCOMMON: VIDEO_EXTS_UNCOMMON as unknown as VideoExt[],
  },
  WEB_VIDEO: {
    CODECS: WEB_VIDEO_CODECS as unknown as WebVideoCodec[],
    EXTS: WEB_VIDEO_EXTS as unknown as WebVideoExt[],
  },
};
