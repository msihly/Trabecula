var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve2, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve2(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// trabecula/utils/server/index.ts
var server_exports = {};
__export(server_exports, {
  checkFileExists: () => checkFileExists,
  createTree: () => createTree,
  dirToFilePaths: () => dirToFilePaths,
  dirToFolderPaths: () => dirToFolderPaths,
  makeFolder: () => makeFolder,
  removeEmptyFolders: () => removeEmptyFolders
});
module.exports = __toCommonJS(server_exports);

// trabecula/utils/server/files.ts
var import_fs = require("fs");
var import_path2 = __toESM(require("path"));

// node_modules/fdir/dist/index.mjs
var import_module = require("module");
var import_path = require("path");
var nativeFs = __toESM(require("fs"), 1);
var import_meta = {};
var __require = /* @__PURE__ */ (0, import_module.createRequire)(import_meta.url);
function cleanPath(path2) {
  let normalized = (0, import_path.normalize)(path2);
  if (normalized.length > 1 && normalized[normalized.length - 1] === import_path.sep) normalized = normalized.substring(0, normalized.length - 1);
  return normalized;
}
var SLASHES_REGEX = /[\\/]/g;
function convertSlashes(path2, separator) {
  return path2.replace(SLASHES_REGEX, separator);
}
var WINDOWS_ROOT_DIR_REGEX = /^[a-z]:[\\/]$/i;
function isRootDirectory(path2) {
  return path2 === "/" || WINDOWS_ROOT_DIR_REGEX.test(path2);
}
function normalizePath(path2, options) {
  const { resolvePaths, normalizePath: normalizePath$1, pathSeparator } = options;
  const pathNeedsCleaning = process.platform === "win32" && path2.includes("/") || path2.startsWith(".");
  if (resolvePaths) path2 = (0, import_path.resolve)(path2);
  if (normalizePath$1 || pathNeedsCleaning) path2 = cleanPath(path2);
  if (path2 === ".") return "";
  const needsSeperator = path2[path2.length - 1] !== pathSeparator;
  return convertSlashes(needsSeperator ? path2 + pathSeparator : path2, pathSeparator);
}
function joinPathWithBasePath(filename, directoryPath) {
  return directoryPath + filename;
}
function joinPathWithRelativePath(root, options) {
  return function(filename, directoryPath) {
    const sameRoot = directoryPath.startsWith(root);
    if (sameRoot) return directoryPath.slice(root.length) + filename;
    else return convertSlashes((0, import_path.relative)(root, directoryPath), options.pathSeparator) + options.pathSeparator + filename;
  };
}
function joinPath(filename) {
  return filename;
}
function joinDirectoryPath(filename, directoryPath, separator) {
  return directoryPath + filename + separator;
}
function build$7(root, options) {
  const { relativePaths, includeBasePath } = options;
  return relativePaths && root ? joinPathWithRelativePath(root, options) : includeBasePath ? joinPathWithBasePath : joinPath;
}
function pushDirectoryWithRelativePath(root) {
  return function(directoryPath, paths) {
    paths.push(directoryPath.substring(root.length) || ".");
  };
}
function pushDirectoryFilterWithRelativePath(root) {
  return function(directoryPath, paths, filters) {
    const relativePath = directoryPath.substring(root.length) || ".";
    if (filters.every((filter) => filter(relativePath, true))) paths.push(relativePath);
  };
}
var pushDirectory = (directoryPath, paths) => {
  paths.push(directoryPath || ".");
};
var pushDirectoryFilter = (directoryPath, paths, filters) => {
  const path2 = directoryPath || ".";
  if (filters.every((filter) => filter(path2, true))) paths.push(path2);
};
var empty$2 = () => {
};
function build$6(root, options) {
  const { includeDirs, filters, relativePaths } = options;
  if (!includeDirs) return empty$2;
  if (relativePaths) return filters && filters.length ? pushDirectoryFilterWithRelativePath(root) : pushDirectoryWithRelativePath(root);
  return filters && filters.length ? pushDirectoryFilter : pushDirectory;
}
var pushFileFilterAndCount = (filename, _paths, counts, filters) => {
  if (filters.every((filter) => filter(filename, false))) counts.files++;
};
var pushFileFilter = (filename, paths, _counts, filters) => {
  if (filters.every((filter) => filter(filename, false))) paths.push(filename);
};
var pushFileCount = (_filename, _paths, counts, _filters) => {
  counts.files++;
};
var pushFile = (filename, paths) => {
  paths.push(filename);
};
var empty$1 = () => {
};
function build$5(options) {
  const { excludeFiles, filters, onlyCounts } = options;
  if (excludeFiles) return empty$1;
  if (filters && filters.length) return onlyCounts ? pushFileFilterAndCount : pushFileFilter;
  else if (onlyCounts) return pushFileCount;
  else return pushFile;
}
var getArray = (paths) => {
  return paths;
};
var getArrayGroup = () => {
  return [""].slice(0, 0);
};
function build$4(options) {
  return options.group ? getArrayGroup : getArray;
}
var groupFiles = (groups, directory, files) => {
  groups.push({
    directory,
    files,
    dir: directory
  });
};
var empty = () => {
};
function build$3(options) {
  return options.group ? groupFiles : empty;
}
var resolveSymlinksAsync = function(path2, state, callback$1) {
  const { queue, fs: fs2, options: { suppressErrors } } = state;
  queue.enqueue();
  fs2.realpath(path2, (error, resolvedPath) => {
    if (error) return queue.dequeue(suppressErrors ? null : error, state);
    fs2.stat(resolvedPath, (error$1, stat) => {
      if (error$1) return queue.dequeue(suppressErrors ? null : error$1, state);
      if (stat.isDirectory() && isRecursive(path2, resolvedPath, state)) return queue.dequeue(null, state);
      callback$1(stat, resolvedPath);
      queue.dequeue(null, state);
    });
  });
};
var resolveSymlinks = function(path2, state, callback$1) {
  const { queue, fs: fs2, options: { suppressErrors } } = state;
  queue.enqueue();
  try {
    const resolvedPath = fs2.realpathSync(path2);
    const stat = fs2.statSync(resolvedPath);
    if (stat.isDirectory() && isRecursive(path2, resolvedPath, state)) return;
    callback$1(stat, resolvedPath);
  } catch (e) {
    if (!suppressErrors) throw e;
  }
};
function build$2(options, isSynchronous) {
  if (!options.resolveSymlinks || options.excludeSymlinks) return null;
  return isSynchronous ? resolveSymlinks : resolveSymlinksAsync;
}
function isRecursive(path2, resolved, state) {
  if (state.options.useRealPaths) return isRecursiveUsingRealPaths(resolved, state);
  let parent = (0, import_path.dirname)(path2);
  let depth = 1;
  while (parent !== state.root && depth < 2) {
    const resolvedPath = state.symlinks.get(parent);
    const isSameRoot = !!resolvedPath && (resolvedPath === resolved || resolvedPath.startsWith(resolved) || resolved.startsWith(resolvedPath));
    if (isSameRoot) depth++;
    else parent = (0, import_path.dirname)(parent);
  }
  state.symlinks.set(path2, resolved);
  return depth > 1;
}
function isRecursiveUsingRealPaths(resolved, state) {
  return state.visited.includes(resolved + state.options.pathSeparator);
}
var onlyCountsSync = (state) => {
  return state.counts;
};
var groupsSync = (state) => {
  return state.groups;
};
var defaultSync = (state) => {
  return state.paths;
};
var limitFilesSync = (state) => {
  return state.paths.slice(0, state.options.maxFiles);
};
var onlyCountsAsync = (state, error, callback$1) => {
  report(error, callback$1, state.counts, state.options.suppressErrors);
  return null;
};
var defaultAsync = (state, error, callback$1) => {
  report(error, callback$1, state.paths, state.options.suppressErrors);
  return null;
};
var limitFilesAsync = (state, error, callback$1) => {
  report(error, callback$1, state.paths.slice(0, state.options.maxFiles), state.options.suppressErrors);
  return null;
};
var groupsAsync = (state, error, callback$1) => {
  report(error, callback$1, state.groups, state.options.suppressErrors);
  return null;
};
function report(error, callback$1, output, suppressErrors) {
  if (error && !suppressErrors) callback$1(error, output);
  else callback$1(null, output);
}
function build$1(options, isSynchronous) {
  const { onlyCounts, group, maxFiles } = options;
  if (onlyCounts) return isSynchronous ? onlyCountsSync : onlyCountsAsync;
  else if (group) return isSynchronous ? groupsSync : groupsAsync;
  else if (maxFiles) return isSynchronous ? limitFilesSync : limitFilesAsync;
  else return isSynchronous ? defaultSync : defaultAsync;
}
var readdirOpts = { withFileTypes: true };
var walkAsync = (state, crawlPath, directoryPath, currentDepth, callback$1) => {
  state.queue.enqueue();
  if (currentDepth < 0) return state.queue.dequeue(null, state);
  const { fs: fs2 } = state;
  state.visited.push(crawlPath);
  state.counts.directories++;
  fs2.readdir(crawlPath || ".", readdirOpts, (error, entries = []) => {
    callback$1(entries, directoryPath, currentDepth);
    state.queue.dequeue(state.options.suppressErrors ? null : error, state);
  });
};
var walkSync = (state, crawlPath, directoryPath, currentDepth, callback$1) => {
  const { fs: fs2 } = state;
  if (currentDepth < 0) return;
  state.visited.push(crawlPath);
  state.counts.directories++;
  let entries = [];
  try {
    entries = fs2.readdirSync(crawlPath || ".", readdirOpts);
  } catch (e) {
    if (!state.options.suppressErrors) throw e;
  }
  callback$1(entries, directoryPath, currentDepth);
};
function build(isSynchronous) {
  return isSynchronous ? walkSync : walkAsync;
}
var Queue = class {
  constructor(onQueueEmpty) {
    __publicField(this, "count", 0);
    this.onQueueEmpty = onQueueEmpty;
  }
  enqueue() {
    this.count++;
    return this.count;
  }
  dequeue(error, output) {
    if (this.onQueueEmpty && (--this.count <= 0 || error)) {
      this.onQueueEmpty(error, output);
      if (error) {
        output.controller.abort();
        this.onQueueEmpty = void 0;
      }
    }
  }
};
var Counter = class {
  constructor() {
    __publicField(this, "_files", 0);
    __publicField(this, "_directories", 0);
  }
  set files(num) {
    this._files = num;
  }
  get files() {
    return this._files;
  }
  set directories(num) {
    this._directories = num;
  }
  get directories() {
    return this._directories;
  }
  /**
  * @deprecated use `directories` instead
  */
  /* c8 ignore next 3 */
  get dirs() {
    return this._directories;
  }
};
var Aborter = class {
  constructor() {
    __publicField(this, "aborted", false);
  }
  abort() {
    this.aborted = true;
  }
};
var Walker = class {
  constructor(root, options, callback$1) {
    __publicField(this, "root");
    __publicField(this, "isSynchronous");
    __publicField(this, "state");
    __publicField(this, "joinPath");
    __publicField(this, "pushDirectory");
    __publicField(this, "pushFile");
    __publicField(this, "getArray");
    __publicField(this, "groupFiles");
    __publicField(this, "resolveSymlink");
    __publicField(this, "walkDirectory");
    __publicField(this, "callbackInvoker");
    __publicField(this, "walk", (entries, directoryPath, depth) => {
      const { paths, options: { filters, resolveSymlinks: resolveSymlinks$1, excludeSymlinks, exclude, maxFiles, signal, useRealPaths, pathSeparator }, controller } = this.state;
      if (controller.aborted || signal && signal.aborted || maxFiles && paths.length > maxFiles) return;
      const files = this.getArray(this.state.paths);
      for (let i = 0; i < entries.length; ++i) {
        const entry = entries[i];
        if (entry.isFile() || entry.isSymbolicLink() && !resolveSymlinks$1 && !excludeSymlinks) {
          const filename = this.joinPath(entry.name, directoryPath);
          this.pushFile(filename, files, this.state.counts, filters);
        } else if (entry.isDirectory()) {
          let path2 = joinDirectoryPath(entry.name, directoryPath, this.state.options.pathSeparator);
          if (exclude && exclude(entry.name, path2)) continue;
          this.pushDirectory(path2, paths, filters);
          this.walkDirectory(this.state, path2, path2, depth - 1, this.walk);
        } else if (this.resolveSymlink && entry.isSymbolicLink()) {
          let path2 = joinPathWithBasePath(entry.name, directoryPath);
          this.resolveSymlink(path2, this.state, (stat, resolvedPath) => {
            if (stat.isDirectory()) {
              resolvedPath = normalizePath(resolvedPath, this.state.options);
              if (exclude && exclude(entry.name, useRealPaths ? resolvedPath : path2 + pathSeparator)) return;
              this.walkDirectory(this.state, resolvedPath, useRealPaths ? resolvedPath : path2 + pathSeparator, depth - 1, this.walk);
            } else {
              resolvedPath = useRealPaths ? resolvedPath : path2;
              const filename = (0, import_path.basename)(resolvedPath);
              const directoryPath$1 = normalizePath((0, import_path.dirname)(resolvedPath), this.state.options);
              resolvedPath = this.joinPath(filename, directoryPath$1);
              this.pushFile(resolvedPath, files, this.state.counts, filters);
            }
          });
        }
      }
      this.groupFiles(this.state.groups, directoryPath, files);
    });
    this.isSynchronous = !callback$1;
    this.callbackInvoker = build$1(options, this.isSynchronous);
    this.root = normalizePath(root, options);
    this.state = {
      root: isRootDirectory(this.root) ? this.root : this.root.slice(0, -1),
      paths: [""].slice(0, 0),
      groups: [],
      counts: new Counter(),
      options,
      queue: new Queue((error, state) => this.callbackInvoker(state, error, callback$1)),
      symlinks: /* @__PURE__ */ new Map(),
      visited: [""].slice(0, 0),
      controller: new Aborter(),
      fs: options.fs || nativeFs
    };
    this.joinPath = build$7(this.root, options);
    this.pushDirectory = build$6(this.root, options);
    this.pushFile = build$5(options);
    this.getArray = build$4(options);
    this.groupFiles = build$3(options);
    this.resolveSymlink = build$2(options, this.isSynchronous);
    this.walkDirectory = build(this.isSynchronous);
  }
  start() {
    this.pushDirectory(this.root, this.state.paths, this.state.options.filters);
    this.walkDirectory(this.state, this.root, this.root, this.state.options.maxDepth, this.walk);
    return this.isSynchronous ? this.callbackInvoker(this.state, null) : null;
  }
};
function promise(root, options) {
  return new Promise((resolve$1, reject) => {
    callback(root, options, (err, output) => {
      if (err) return reject(err);
      resolve$1(output);
    });
  });
}
function callback(root, options, callback$1) {
  let walker = new Walker(root, options, callback$1);
  walker.start();
}
function sync(root, options) {
  const walker = new Walker(root, options);
  return walker.start();
}
var APIBuilder = class {
  constructor(root, options) {
    this.root = root;
    this.options = options;
  }
  withPromise() {
    return promise(this.root, this.options);
  }
  withCallback(cb) {
    callback(this.root, this.options, cb);
  }
  sync() {
    return sync(this.root, this.options);
  }
};
var pm = null;
try {
  __require.resolve("picomatch");
  pm = __require("picomatch");
} catch (e) {
}
var Builder = class {
  constructor(options) {
    __publicField(this, "globCache", {});
    __publicField(this, "options", {
      maxDepth: Infinity,
      suppressErrors: true,
      pathSeparator: import_path.sep,
      filters: []
    });
    __publicField(this, "globFunction");
    this.options = __spreadValues(__spreadValues({}, this.options), options);
    this.globFunction = this.options.globFunction;
  }
  group() {
    this.options.group = true;
    return this;
  }
  withPathSeparator(separator) {
    this.options.pathSeparator = separator;
    return this;
  }
  withBasePath() {
    this.options.includeBasePath = true;
    return this;
  }
  withRelativePaths() {
    this.options.relativePaths = true;
    return this;
  }
  withDirs() {
    this.options.includeDirs = true;
    return this;
  }
  withMaxDepth(depth) {
    this.options.maxDepth = depth;
    return this;
  }
  withMaxFiles(limit) {
    this.options.maxFiles = limit;
    return this;
  }
  withFullPaths() {
    this.options.resolvePaths = true;
    this.options.includeBasePath = true;
    return this;
  }
  withErrors() {
    this.options.suppressErrors = false;
    return this;
  }
  withSymlinks({ resolvePaths = true } = {}) {
    this.options.resolveSymlinks = true;
    this.options.useRealPaths = resolvePaths;
    return this.withFullPaths();
  }
  withAbortSignal(signal) {
    this.options.signal = signal;
    return this;
  }
  normalize() {
    this.options.normalizePath = true;
    return this;
  }
  filter(predicate) {
    this.options.filters.push(predicate);
    return this;
  }
  onlyDirs() {
    this.options.excludeFiles = true;
    this.options.includeDirs = true;
    return this;
  }
  exclude(predicate) {
    this.options.exclude = predicate;
    return this;
  }
  onlyCounts() {
    this.options.onlyCounts = true;
    return this;
  }
  crawl(root) {
    return new APIBuilder(root || ".", this.options);
  }
  withGlobFunction(fn) {
    this.globFunction = fn;
    return this;
  }
  /**
  * @deprecated Pass options using the constructor instead:
  * ```ts
  * new fdir(options).crawl("/path/to/root");
  * ```
  * This method will be removed in v7.0
  */
  /* c8 ignore next 4 */
  crawlWithOptions(root, options) {
    this.options = __spreadValues(__spreadValues({}, this.options), options);
    return new APIBuilder(root || ".", this.options);
  }
  glob(...patterns) {
    if (this.globFunction) return this.globWithOptions(patterns);
    return this.globWithOptions(patterns, ...[{ dot: true }]);
  }
  globWithOptions(patterns, ...options) {
    const globFn = this.globFunction || pm;
    if (!globFn) throw new Error("Please specify a glob function to use glob matching.");
    var isMatch = this.globCache[patterns.join("\0")];
    if (!isMatch) {
      isMatch = globFn(patterns, ...options);
      this.globCache[patterns.join("\0")] = isMatch;
    }
    this.options.filters.push((path2) => isMatch(path2));
    return this;
  }
};

// trabecula/utils/server/files.ts
var checkFileExists = (path2) => __async(null, null, function* () {
  return !!(yield import_fs.promises.stat(path2).catch(() => false));
});
var createTreeNode = (dirPath, tree) => {
  const dirNames = import_path2.default.normalize(dirPath).split(import_path2.default.sep);
  const [rootDirName, ...remainingDirNames] = dirNames;
  const treeNode = tree.find((t) => t.name === rootDirName);
  if (!treeNode) tree.push({ name: rootDirName, children: [] });
  if (remainingDirNames.length > 0)
    createTreeNode(import_path2.default.join(...remainingDirNames), (treeNode != null ? treeNode : tree[tree.length - 1]).children);
};
var createTree = (paths) => paths.reduce((acc, cur) => (createTreeNode(cur, acc), acc), []);
var dirToFilePaths = (dirPath, filterFn) => __async(null, null, function* () {
  return yield filterFn ? new Builder().withFullPaths().filter(filterFn).crawl(dirPath).withPromise() : new Builder().withFullPaths().crawl(dirPath).withPromise();
});
var dirToFolderPaths = (dirPath) => __async(null, null, function* () {
  return yield new Builder().onlyDirs().withFullPaths().crawl(dirPath).withPromise();
});
var makeFolder = (path2) => __async(null, null, function* () {
  return yield import_fs.promises.mkdir(path2, { recursive: true });
});
var removeEmptyFolders = (..._0) => __async(null, [..._0], function* (dirPath = ".", options = {}) {
  const dirPathsParts = [.../* @__PURE__ */ new Set([dirPath, ...yield dirToFolderPaths(dirPath)])].filter((p) => {
    var _a;
    return !((_a = options.excludedPaths) == null ? void 0 : _a.includes(p));
  }).map((p) => p.split(import_path2.default.sep));
  const dirPathsDeepToShallow = [...dirPathsParts].sort((a, b) => b.length - a.length).map((p) => p.join(import_path2.default.sep));
  const emptyFolders = /* @__PURE__ */ new Set();
  yield Promise.all(
    dirPathsDeepToShallow.map((dir) => __async(null, null, function* () {
      if ((yield dirToFilePaths(dir)).length === 0) emptyFolders.add(dir);
    }))
  );
  const rootDirsToEmpty = /* @__PURE__ */ new Set();
  for (const dir of dirPathsDeepToShallow) {
    if (emptyFolders.has(dir)) {
      const parts = dir.split(import_path2.default.sep);
      parts.pop();
      const ancestors = parts.map((_, i) => parts.slice(0, i + 1).join(import_path2.default.sep));
      if (!ancestors.some((a) => emptyFolders.has(a))) rootDirsToEmpty.add(dir);
    }
  }
  yield Promise.all([...rootDirsToEmpty].map((dir) => import_fs.promises.rmdir(dir, { recursive: true })));
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkFileExists,
  createTree,
  dirToFilePaths,
  dirToFolderPaths,
  makeFolder,
  removeEmptyFolders
});
//# sourceMappingURL=index.js.map