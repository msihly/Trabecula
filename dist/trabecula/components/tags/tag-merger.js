import { useEffect, useState } from "react";
import Color from "color";
import { Button, Card, Checkbox, Comp, ConfirmModal, HeaderWrapper, Modal, TagInput, TagInputs, TagList, Text, UniformList, View, } from "trabecula/components";
import { tagToOption, useStores } from "trabecula/store";
import { colors, makeClasses, toast } from "trabecula/utils/client";
import { trpc } from "trabecula/utils/server";
export const TagMerger = Comp(() => {
    const { css } = useClasses(null);
    const stores = useStores();
    const [aliases, setAliases] = useState([]);
    const [childTags, setChildTags] = useState([]);
    const [isConfirmDiscardOpen, setIsConfirmDiscardOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [label, setLabel] = useState("");
    const [parentTags, setParentTags] = useState([]);
    const [regEx, setRegEx] = useState("");
    const [selectedTagValue, setSelectedTagValue] = useState([]);
    const [tagIdToKeep, setTagIdToKeep] = useState("");
    const [tagIdToMerge, setTagIdToMerge] = useState("");
    const [tagLabelToKeep, setTagLabelToKeep] = useState(null);
    const hasSelectedTag = selectedTagValue.length > 0;
    const disabled = isSaving || !hasSelectedTag;
    const baseTag = stores.tag.subEditor.isOpen ? stores.tag.subEditor.tag : stores.tag.editor.tag;
    const updateInputs = async () => {
        if (!selectedTagValue.length) {
            setAliases([]);
            setChildTags([]);
            setLabel("");
            setParentTags([]);
            setRegEx("");
            setTagLabelToKeep(null);
            return;
        }
        const tag = (await trpc.listTag.mutate({ filter: { id: selectedTagValue[0].id } })).data[0];
        const tagToKeep = tag.count > baseTag.count ? tag : baseTag;
        const tagToMerge = !(tag.count > baseTag.count) ? tag : baseTag;
        setTagIdToKeep(tagToKeep.id);
        setTagIdToMerge(tagToMerge.id);
        if (!tagLabelToKeep)
            setTagLabelToKeep(tagToKeep.id === stores.tag.merger.tagId ? "base" : "merge");
        const aliasToSet = tagLabelToKeep === "merge" ? baseTag.label : tag.label;
        setAliases([...new Set([aliasToSet, ...tagToKeep.aliases, ...tagToMerge.aliases])]);
        setLabel(tagLabelToKeep === "base" ? baseTag.label : tag.label);
        setRegEx(tagToKeep.regEx);
        const childIds = [...tagToKeep.childIds, ...tagToMerge.childIds];
        const parentIds = [...tagToKeep.parentIds, ...tagToMerge.parentIds];
        const tagIdsToExclude = [tagToKeep.id, tagToMerge.id];
        setChildTags(await mergeRelatedTags(childIds, tagIdsToExclude));
        setParentTags(await mergeRelatedTags(parentIds, tagIdsToExclude));
    };
    useEffect(() => {
        updateInputs();
    }, [hasSelectedTag, tagLabelToKeep]);
    const handleClose = async () => {
        setIsConfirmDiscardOpen(false);
        stores.tag.merger.setIsOpen(false);
        stores.tag.subEditor.setIsOpen(false);
        stores.tag.editor.setIsOpen(false);
        stores.file.search.reloadIfQueued();
        return true;
    };
    const handleConfirm = async () => {
        try {
            setIsSaving(true);
            const res = await stores.tag.mergeTags({
                aliases,
                childIds: childTags.map((t) => t.id),
                label,
                parentIds: parentTags.map((t) => t.id),
                regEx,
                tagIdToKeep,
                tagIdToMerge,
                withRegen: true,
                withSub: true,
            });
            if (!res.success)
                throw new Error(res.error);
            setIsSaving(false);
            stores.tag.merger.setIsOpen(false);
            stores.tag.merger.setTagId(tagIdToKeep);
            stores.tag.editor.setIsOpen(true);
            toast.success("Tags merged successfully!");
        }
        catch (err) {
            console.error(err);
            toast.error(err.message);
            setIsSaving(false);
        }
    };
    const mergeRelatedTags = async (tagIds, tagIdsToExclude) => {
        const result = new Set();
        const tagIdsSet = new Set(tagIds);
        const tagIdsToExcludeSet = new Set(tagIdsToExclude);
        const tags = (await trpc.listTag.mutate({ filter: { id: tagIds } })).data;
        const tagMap = new Map(tags.map((tag) => [tag.id, tag]));
        tagIdsSet.forEach((curId) => {
            const tagOption = tagMap.has(curId) ? tagToOption(tagMap.get(curId)) : null;
            if (tagIdsToExcludeSet.has(curId) || result.has(tagOption))
                return;
            const hasDescendants = Array.from(tagIdsSet).some((otherId) => {
                const otherTag = tagMap.get(otherId);
                if (!otherTag)
                    return false;
                const parentIds = new Set(otherTag.ancestorIds ?? []);
                return parentIds.has(curId);
            });
            if (!hasDescendants && tagOption)
                result.add(tagOption);
        });
        return Array.from(result);
    };
    return (<Modal.Container isLoading={isSaving} onClose={handleClose} width="50rem" draggable>
      <Modal.Header>
        <Text preset="title">{"Merge Tags"}</Text>
      </Modal.Header>

      <Modal.Content spacing="0.5rem">
        <Card column>
          <UniformList row spacing="0.5rem">
            <View column flex={1}>
              <HeaderWrapper header="Base Tag">
                <TagList search={{ onChange: null, value: baseTag ? [baseTag] : [] }} hasDelete={false} hasInput/>
              </HeaderWrapper>

              <Checkbox label="Keep This Label" checked={tagLabelToKeep === "base"} setChecked={() => setTagLabelToKeep("base")} disabled={disabled} center/>
            </View>

            <View column flex={1}>
              <TagInput header="Tag to Merge" excludedIds={[stores.tag.merger.tagId]} value={selectedTagValue} onChange={setSelectedTagValue} single/>

              <Checkbox label="Keep This Label" checked={tagLabelToKeep === "merge"} setChecked={() => setTagLabelToKeep("merge")} disabled={disabled} center/>
            </View>
          </UniformList>
        </Card>

        <Card column position="relative" spacing="0.5rem">
          {disabled && <View className={css.disabledOverlay}/>}

          <View row flex={1} spacing="0.5rem">
            <TagInputs.Label value={label} setValue={setLabel} disabled hasHelper={false}/>
          </View>

          <View row height="12rem" spacing="0.5rem">
            <TagInputs.Aliases value={aliases} onChange={setAliases} disabled hasHelper={false}/>

            <TagInputs.Relations header="Parent Tags" excludedIds={[stores.tag.merger.tagId, ...childTags.map((t) => t.id)]} value={parentTags} setValue={setParentTags} disabled hasDelete={false}/>

            <TagInputs.Relations header="Child Tags" excludedIds={[stores.tag.merger.tagId, ...parentTags.map((t) => t.id)]} value={childTags} setValue={setChildTags} disabled hasDelete={false}/>
          </View>

          <Text align="center" fontStyle="italic" fontSize="0.8em">
            {"Edit after merging"}
          </Text>
        </Card>
      </Modal.Content>

      <Modal.Footer>
        <Button text="Cancel" icon="Close" onClick={handleClose} disabled={isSaving} color={colors.custom.grey}/>

        <Button text="Confirm" icon="Check" onClick={handleConfirm} color={colors.custom.purple} {...{ disabled }}/>
      </Modal.Footer>

      {isConfirmDiscardOpen && (<ConfirmModal headerText="Discard Changes" subText="Are you sure you want to cancel merging?" setVisible={setIsConfirmDiscardOpen} onConfirm={handleClose}/>)}
    </Modal.Container>);
});
const useClasses = makeClasses({
    disabledOverlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: "inherit",
        width: "100%",
        height: "100%",
        background: Color(colors.background).fade(0.3).string(),
        zIndex: 20,
    },
});
