"use strict";
const { isUuid } = require("uuidv4");

const validateId = (request, response, next) => {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid ID" });
  }

  return next();
};

exports.validateId = validateId;
