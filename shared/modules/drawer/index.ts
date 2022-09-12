import * as atoms from "shared/modules/drawer/atom";
import * as keys from "shared/modules/drawer/key";
import * as actions from "shared/modules/drawer/action";

const drawer = {
  ...atoms,
  ...keys,
  ...actions,
};

export default drawer;
