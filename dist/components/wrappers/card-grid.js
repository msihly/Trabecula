"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardGrid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
exports.CardGrid = (0, components_1.Comp)(({ cards, cardsProps, children, className, flexFlow = "row wrap", maxCards = 6, noResultsText = "No results found", padding = { all: "0.3rem 0.3rem 7rem" }, position = "relative", ...props }, ref) => {
    const { css, cx } = useClasses({ hasCards: cards.length > 0, flexFlow, maxCards, position });
    return ((0, jsx_runtime_1.jsxs)(components_1.View, { ...props, className: cx(css.root, className), children: [cards.length ? ((0, jsx_runtime_1.jsx)(components_1.View, { ...cardsProps, padding, ref, className: cx(css.cards, cardsProps?.className), children: cards })) : ((0, jsx_runtime_1.jsx)(components_1.View, { column: true, flex: 1, children: (0, jsx_runtime_1.jsx)(components_1.CenteredText, { text: noResultsText }) })), children] }));
});
const useClasses = (0, client_1.makeClasses)((props, theme) => ({
    cards: {
        display: "flex",
        flexFlow: props.flexFlow,
        flex: "initial",
        overflowY: "auto",
        ...(!props.hasCards ? { height: "-webkit-fill-available" } : {}),
        "& > *": {
            overflow: "hidden",
            flexBasis: `calc(100% / ${props.maxCards})`,
            [theme.breakpoints.down("xl")]: {
                flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 1)})`,
            },
            [theme.breakpoints.down("lg")]: {
                flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 2)})`,
            },
            [theme.breakpoints.down("md")]: {
                flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 3)})`,
            },
            [theme.breakpoints.down("sm")]: {
                flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 4)})`,
            },
        },
    },
    root: {
        position: props.position,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflowY: "auto",
    },
}));
