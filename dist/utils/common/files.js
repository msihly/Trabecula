"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArchiveFirstPart = exports.isArchivePart = exports.isArchive = void 0;
const isArchive = (filePath) => /\.(7z|rar|zip)$/.test(filePath);
exports.isArchive = isArchive;
const isArchivePart = (filePath) => /\.(part)?(?!0*1\b)\d+\.(7z|rar|zip)$/.test(filePath);
exports.isArchivePart = isArchivePart;
const isArchiveFirstPart = (filePath) => /\.(part)?(0*1\b)\.(7z|rar|zip)/.test(filePath);
exports.isArchiveFirstPart = isArchiveFirstPart;
