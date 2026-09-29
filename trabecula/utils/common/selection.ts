export interface SelectionChange {
  id: string;
  isSelected?: boolean;
}

export interface SelectionRange {
  idsToDeselect: string[];
  idsToSelect: string[];
}

export const applySelectionChanges = (selectedIds: string[], changes: SelectionChange[]) => {
  const selected = new Set(selectedIds);

  for (const { id, isSelected } of changes) {
    if (isSelected) selected.add(id);
    else selected.delete(id);
  }

  return [...selected];
};

export const getSelectionRange = ({
  clickedId,
  orderedIds,
  selectedIds,
}: {
  clickedId: string;
  orderedIds: string[];
  selectedIds: string[];
}): SelectionRange | undefined => {
  const indexes = new Map(orderedIds.map((id, index) => [id, index]));
  const clickedIndex = indexes.get(clickedId);
  const selectedIndexes = selectedIds.map((id) => indexes.get(id));
  let result: SelectionRange | undefined;

  if (clickedIndex !== undefined && selectedIndexes.every((index) => index !== undefined)) {
    if (!selectedIds.length) result = { idsToDeselect: [], idsToSelect: [clickedId] };
    else {
      const first = selectedIndexes.reduce((min, index) => Math.min(min, index!), Infinity);
      const last = selectedIndexes.reduce((max, index) => Math.max(max, index!), -Infinity);

      if (first === clickedIndex) result = { idsToDeselect: [clickedId], idsToSelect: [] };
      else {
        const start = Math.min(first, clickedIndex);
        const end = clickedIndex < first ? last : clickedIndex;
        const range = orderedIds.slice(start, end + 1);
        const rangeSet = new Set(range);
        const selectedSet = new Set(selectedIds);

        result = {
          idsToDeselect: selectedIds.filter((id) => !rangeSet.has(id)),
          idsToSelect: range.filter((id) => !selectedSet.has(id)),
        };
      }
    }
  }

  return result;
};
