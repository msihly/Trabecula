import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

type ExpandedSections = Record<string, boolean>;

interface AccordionGroupProps {
  children: ReactNode;
  defaultExpanded?: boolean;
  sectionIds: readonly string[];
}

interface AccordionGroupContextValue {
  allExpanded: boolean;
  expandedSections: ExpandedSections;
  setAllExpanded: (expanded: boolean) => void;
  setExpanded: (sectionId: string, expanded: boolean) => void;
}

const AccordionGroupContext = createContext<AccordionGroupContextValue | null>(null);

export const AccordionGroup = ({
  children,
  defaultExpanded = true,
  sectionIds,
}: AccordionGroupProps) => {
  const [expandedSections, setExpandedSections] = useState(() =>
    getInitialExpandedSections(sectionIds, defaultExpanded),
  );

  useEffect(() => {
    setExpandedSections((prev) => {
      const next = { ...prev };
      let hasChanged = false;

      sectionIds.forEach((sectionId) => {
        if (next[sectionId] !== undefined) return;

        next[sectionId] = defaultExpanded;
        hasChanged = true;
      });

      return hasChanged ? next : prev;
    });
  }, [defaultExpanded, sectionIds]);

  const allExpanded = sectionIds.every((sectionId) => expandedSections[sectionId]);

  const value = useMemo(
    () => ({
      allExpanded,
      expandedSections,
      setAllExpanded: (expanded: boolean) => {
        setExpandedSections((prev) => {
          const next = { ...prev };
          sectionIds.forEach((sectionId) => {
            next[sectionId] = expanded;
          });
          return next;
        });
      },
      setExpanded: (sectionId: string, expanded: boolean) => {
        setExpandedSections((prev) => ({
          ...prev,
          [sectionId]: expanded,
        }));
      },
    }),
    [allExpanded, expandedSections, sectionIds],
  );

  return <AccordionGroupContext.Provider value={value}>{children}</AccordionGroupContext.Provider>;
};

export const useAccordionGroup = () => {
  const { allExpanded, setAllExpanded } = useAccordionGroupContext();

  return {
    allExpanded,
    setAllExpanded,
    toggleAll: () => setAllExpanded(!allExpanded),
  };
};

export const useAccordionGroupSection = (sectionId: string) => {
  const { expandedSections, setExpanded } = useAccordionGroupContext();
  const isExpanded = expandedSections[sectionId] ?? true;

  return {
    isExpanded,
    setExpanded: (expanded: boolean) => setExpanded(sectionId, expanded),
  };
};

const useAccordionGroupContext = () => {
  const context = useContext(AccordionGroupContext);

  if (!context) {
    throw new Error("AccordionGroup hooks must be used within an AccordionGroup");
  }

  return context;
};

const getInitialExpandedSections = (sectionIds: readonly string[], defaultExpanded: boolean) => {
  return sectionIds.reduce((acc, sectionId) => {
    acc[sectionId] = defaultExpanded;
    return acc;
  }, {} as ExpandedSections);
};
