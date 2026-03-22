"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateDetail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const common_1 = require("trabecula/utils/common");
const _1 = require(".");
const DateDetail = (props) => {
    return ((0, jsx_runtime_1.jsx)(_1.Detail, { ...props, value: props.value?.length ? (0, common_1.dayjs)(props.value).format("MMM D, YYYY [@] hh:mm:ss A") : null }));
};
exports.DateDetail = DateDetail;
