type MobxKeystoneBindings = {
  _async: typeof import("mobx-keystone")._async;
  _await: typeof import("mobx-keystone")._await;
  getSnapshot: typeof import("mobx-keystone").getSnapshot;
  isTreeNode: typeof import("mobx-keystone").isTreeNode;
  onPatches: typeof import("mobx-keystone").onPatches;
  prop: typeof import("mobx-keystone").prop;
};

let mobxKeystoneBindings: MobxKeystoneBindings | null = null;

export const initMobx = (bindings: MobxKeystoneBindings) => (mobxKeystoneBindings = bindings);

const getMobx = (): MobxKeystoneBindings => {
  if (!mobxKeystoneBindings) throw new Error("Call initMobx() at app startup");

  return mobxKeystoneBindings;
};

export { getMobx };
