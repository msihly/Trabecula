import { CenteredText, Comp, View } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";
export const CardGrid = Comp(({ cards, cardsProps, children, className, flexFlow = "row wrap", maxCards = 6, noResultsText = "No results found", padding = { all: "0.3rem 0.3rem 7rem" }, position = "relative", ...props }, ref) => {
    const { css, cx } = useClasses({ hasCards: cards.length > 0, flexFlow, maxCards, position });
    return (<View {...props} className={cx(css.root, className)}>
        {cards.length ? (<View {...cardsProps} {...{ padding, ref }} className={cx(css.cards, cardsProps?.className)}>
            {cards}
          </View>) : (<View column flex={1}>
            <CenteredText text={noResultsText}/>
          </View>)}

        {children}
      </View>);
});
const useClasses = makeClasses((props, theme) => ({
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
