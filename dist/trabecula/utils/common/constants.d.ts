export declare const AUDIO_CODECS_COMMON: readonly ["None", "aac_he", "aac_ld", "aac", "ac3", "aiff", "alac", "avc", "dts", "flac", "mp2", "mp3", "mp4als", "opus", "pcm_alaw", "pcm_bluray", "pcm_dvd", "pcm_s16be", "pcm_s16le", "pcm_s24le", "pcm_s32le", "pcm_u8", "pcm", "tta", "vorbis", "wav", "wmapro", "wmav1", "wmav2"];
export declare const AUDIO_CODECS_UNCOMMON: readonly ["aac_latm", "alac", "ape", "aptx_hd", "aptx", "avs", "binkaudio_dct", "binkaudio_rdft", "cavs", "cook", "hcom", "iac", "mace3", "mace6", "paf_audio", "ra_144", "ra_288", "ralf", "sipr", "tak", "westwood_snd1", "wmalossless", "wmavoice", "xma1", "xma2"];
export declare const AUDIO_CODECS: readonly ["None", "aac_he", "aac_ld", "aac", "ac3", "aiff", "alac", "avc", "dts", "flac", "mp2", "mp3", "mp4als", "opus", "pcm_alaw", "pcm_bluray", "pcm_dvd", "pcm_s16be", "pcm_s16le", "pcm_s24le", "pcm_s32le", "pcm_u8", "pcm", "tta", "vorbis", "wav", "wmapro", "wmav1", "wmav2", "aac_latm", "alac", "ape", "aptx_hd", "aptx", "avs", "binkaudio_dct", "binkaudio_rdft", "cavs", "cook", "hcom", "iac", "mace3", "mace6", "paf_audio", "ra_144", "ra_288", "ralf", "sipr", "tak", "westwood_snd1", "wmalossless", "wmavoice", "xma1", "xma2"];
export type AudioCodec = (typeof AUDIO_CODECS)[number];
export declare const IMAGE_EXTS_COMMON: readonly ["gif", "heic", "jpeg", "jpg", "png", "webp"];
export declare const IMAGE_EXTS_UNCOMMON: readonly ["apng", "avif", "bmp", "jfif", "jif", "jiff", "svg", "tiff"];
export declare const IMAGE_EXTS: ("svg" | "gif" | "heic" | "jpeg" | "jpg" | "png" | "webp" | "apng" | "avif" | "bmp" | "jfif" | "jif" | "jiff" | "tiff")[];
export type ImageExt = (typeof IMAGE_EXTS)[number];
export declare const VIDEO_CODECS_COMMON: readonly ["av1", "h264", "hevc", "mpeg4", "prores", "vp8", "vp9", "wmv1"];
export declare const VIDEO_CODECS_UNCOMMON: readonly ["amv", "asv1", "asv2", "auravision", "binkvideo", "camstudio", "cinepak", "dirac", "dnxhd", "dnxhr", "dvvideo", "ffv1", "flv1", "h263", "h263p", "huffyuv", "indeo3", "indeo5", "jpeg2000", "jpegls", "lagarith", "mjpeg", "mjpegb", "mpeg1video", "mpeg2video", "msmpeg4v1", "msmpeg4v2", "msmpeg4v3", "rawvideo", "rv10", "rv20", "rv30", "rv40", "smacker", "snow", "sp5x", "svq1", "svq3", "theora", "tscc", "utvideo", "uyvy422", "v210", "vixl", "vp6", "vp6f", "wmv2", "wmv3", "yuyv422", "zlib", "zmbv"];
export declare const VIDEO_CODECS: readonly ["av1", "h264", "hevc", "mpeg4", "prores", "vp8", "vp9", "wmv1", "amv", "asv1", "asv2", "auravision", "binkvideo", "camstudio", "cinepak", "dirac", "dnxhd", "dnxhr", "dvvideo", "ffv1", "flv1", "h263", "h263p", "huffyuv", "indeo3", "indeo5", "jpeg2000", "jpegls", "lagarith", "mjpeg", "mjpegb", "mpeg1video", "mpeg2video", "msmpeg4v1", "msmpeg4v2", "msmpeg4v3", "rawvideo", "rv10", "rv20", "rv30", "rv40", "smacker", "snow", "sp5x", "svq1", "svq3", "theora", "tscc", "utvideo", "uyvy422", "v210", "vixl", "vp6", "vp6f", "wmv2", "wmv3", "yuyv422", "zlib", "zmbv"];
export type VideoCodec = (typeof VIDEO_CODECS)[number];
export declare const VIDEO_EXTS_COMMON: readonly ["3gp", "avi", "f4v", "flv", "m4v", "mkv", "mov", "mp4", "ts", "webm", "wmv"];
export declare const VIDEO_EXTS_UNCOMMON: readonly ["3gp2", "3gpp", "amv", "asf", "avi", "divx", "m2t", "m2ts", "m2v", "m4b", "m4p", "mpeg", "mpg", "mts", "ogv", "qt", "vob", "wm", "wmp"];
export declare const VIDEO_EXTS: ("amv" | "3gp" | "avi" | "f4v" | "flv" | "m4v" | "mkv" | "mov" | "mp4" | "ts" | "webm" | "wmv" | "3gp2" | "3gpp" | "asf" | "divx" | "m2t" | "m2ts" | "m2v" | "m4b" | "m4p" | "mpeg" | "mpg" | "mts" | "ogv" | "qt" | "vob" | "wm" | "wmp")[];
export type VideoExt = (typeof VIDEO_EXTS)[number];
export declare const WEB_VIDEO_CODECS: string[];
export declare const WEB_VIDEO_EXTS: string[];
export interface Constants {
    IMAGE_EXTS: readonly ImageExt[];
    TOOLTIP: {
        ENTER_DELAY: number;
        ENTER_NEXT_DELAY: number;
    };
    VIDEO_CODECS: readonly VideoCodec[];
    VIDEO_EXTS: readonly VideoExt[];
}
export declare const CONSTANTS: Constants;
