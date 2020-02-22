"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const router = (0, _express.Router)();
router.route('/').get((req, res) => res.send('hi there')).post((req, res) => res.send('hi there'));
router.route('/:id').get((req, res) => res.send('hi there')).put((req, res) => res.send('hi there')).delete((req, res) => res.send('hi there'));
var _default = router;
exports.default = _default;