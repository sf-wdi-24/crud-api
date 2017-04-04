
// export public methods here
module.exports = {
  getSingularResponse: function (err, foundObject) {
    err ? this.status(500).json({ error: err.message }) :
      foundObject === null ?
        this.status(404).json({ error: "Nothing found by this ID." }) :
        this.status(200).json(foundObject);
  }
};
