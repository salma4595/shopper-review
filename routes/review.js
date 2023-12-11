const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
const ReviewCntrl= require("../controllers/review")

// router.use(methodOverride('_method'));

//Routes
router.get("/add", ReviewCntrl.review_create_get);
router.post("/add", ReviewCntrl.review_create_post);
router.get("/index", ReviewCntrl.review_index_get);
router.get("/detail", ReviewCntrl.review_show_get);
router.get("/delete", ReviewCntrl.review_delete_get);
router.get("/edit", ReviewCntrl.review_edit_get);
router.post("/update", ReviewCntrl.review_update_post);








module.exports = router;