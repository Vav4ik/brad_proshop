import express from "express";
import multer from "multer";
import path from "path";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    //where it will be stored in file directory
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    //give file a name
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    //accept file
    return cb(null, true);
  } else {
    //ignore file and return an error
    cb("Images only! JPG/JPEG or PNG files.", false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, //max size 5Mb
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", protect, admin, upload.single("image"), (req, res) => {
    res.send(`/${req.file.path}`);
});

export default router;
