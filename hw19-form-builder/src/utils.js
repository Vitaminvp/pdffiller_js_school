import get from "lodash/get";
import uniqueId from "lodash/uniqueId";

const getReducerProp = prop => state => get(state, prop, {});
const getFields = prop => state => get(state, prop, []);

export { uniqueId, getReducerProp, getFields };
