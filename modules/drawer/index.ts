import * as atoms from "@modules/drawer/atom";
import * as keys from "@modules/drawer/key";
import * as actions from "@modules/drawer/action";

const drawer = {
  ...atoms,
  ...keys,
  ...actions,
};

export default drawer;
