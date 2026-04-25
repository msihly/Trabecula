"use strict";
function init(modules) {
    const ts = modules.typescript;
    function create(info) {
        var _a, _b;
        const moveUpPatterns = (_a = info.config.moveUpPatterns) !== null && _a !== void 0 ? _a : [
            "@/",
            "\\.{1,2}/", // matches `../` or `./`
        ];
        const moveDownPatterns = (_b = info.config.moveDownPatterns) !== null && _b !== void 0 ? _b : [];
        const moveUpRegexes = moveUpPatterns.map((pattern) => new RegExp(pattern));
        const moveDownRegexes = moveDownPatterns.map((pattern) => new RegExp(pattern));
        // Diagnostic logging
        info.project.projectService.logger.info("TSSortImportSuggestionsPlugin: Started");
        // Set up decorator object
        const proxy = Object.create(null);
        for (let k of Object.keys(info.languageService)) {
            const x = info.languageService[k];
            // @ts-expect-error - JS runtime trickery which is tricky to type tersely
            proxy[k] = (...args) => x.apply(info.languageService, args);
        }
        // Override completions
        proxy.getCompletionsAtPosition = (fileName, position, options, ...restArgs) => {
            const prior = info.languageService.getCompletionsAtPosition(fileName, position, options, ...restArgs);
            if (!prior)
                return;
            prior.entries = prior.entries.map((e) => {
                const newEntry = { ...e };
                const source = e.source;
                if (source) {
                    if (moveUpRegexes.some((re) => re.test(source))) {
                        // Move this item to the bottom of its previous group, e.g. sortText: `12` -> `111`
                        newEntry.sortText =
                            e.sortText.slice(0, -1) +
                                String.fromCharCode(e.sortText.slice(-1).charCodeAt(0) - 1) +
                                "1";
                    }
                    else if (moveDownRegexes.some((re) => re.test(source))) {
                        // Move this item to the bottom of its group
                        // Ref: https://github.com/microsoft/TypeScript/blob/60f93aa83ae644092ace6d729d0f10c42715292f/src/services/completions.ts#L406-L430
                        newEntry.sortText = newEntry.sortText + "1";
                    }
                }
                return newEntry;
            });
            return prior;
        };
        proxy.getCodeFixesAtPosition = (fileName, start, end, errorCodes, formatOptions, preferences) => {
            const prior = info.languageService.getCodeFixesAtPosition(fileName, start, end, errorCodes, formatOptions, preferences);
            const newFixes = [...prior].sort((a, b) => {
                const aSort = moveUpRegexes.some((re) => re.test(a.description))
                    ? -1
                    : moveDownRegexes.some((re) => re.test(a.description))
                        ? 1
                        : 0;
                const bSort = moveUpRegexes.some((re) => re.test(b.description))
                    ? -1
                    : moveDownRegexes.some((re) => re.test(b.description))
                        ? 1
                        : 0;
                return aSort - bSort;
            });
            return newFixes;
        };
        // Override getCombinedCodeFix
        proxy.getCombinedCodeFix = (scope, fixId, formatOptions, preferences) => {
            const prior = info.languageService.getCombinedCodeFix(scope, fixId, formatOptions, preferences);
            if (!prior)
                return prior;
            prior.changes = prior.changes.toSorted((a, b) => {
                const aSort = moveUpRegexes.some((re) => re.test(a.fileName))
                    ? -1
                    : moveDownRegexes.some((re) => re.test(a.fileName))
                        ? 1
                        : 0;
                const bSort = moveUpRegexes.some((re) => re.test(b.fileName))
                    ? -1
                    : moveDownRegexes.some((re) => re.test(b.fileName))
                        ? 1
                        : 0;
                return aSort - bSort;
            });
            return prior;
        };
        return proxy;
    }
    return { create };
}
module.exports = init;
