export const isArchive = (filePath) => /\.(7z|rar|zip)$/.test(filePath);
export const isArchivePart = (filePath) => /\.(part)?(?!0*1\b)\d+\.(7z|rar|zip)$/.test(filePath);
export const isArchiveFirstPart = (filePath) => /\.(part)?(0*1\b)\.(7z|rar|zip)/.test(filePath);
