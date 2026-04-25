type MobxKeystoneBindings = {
  onPatches: typeof import("mobx-keystone").onPatches;
  isTreeNode: typeof import("mobx-keystone").isTreeNode;
  getSnapshot: typeof import("mobx-keystone").getSnapshot;
  _async: typeof import("mobx-keystone")._async;
  _await: typeof import("mobx-keystone")._await;
  prop: typeof import("mobx-keystone").prop;
};

let mobxKeystoneBindings: MobxKeystoneBindings | null = null;

export const initMobx = (bindings: MobxKeystoneBindings) => (mobxKeystoneBindings = bindings);

const getMobx = (): MobxKeystoneBindings => {
  if (!mobxKeystoneBindings) throw new Error("Call initMobx() at app startup");
  return mobxKeystoneBindings;
};

export { getMobx };
