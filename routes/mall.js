const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
const MallCntrl= require("../controllers/mall")

// router.use(methodOverride('_method'));

//Routes
router.get("/add", MallCntrl.mall_create_get);
// router.post("/add", MallCntrl.mall_create_post);
router.get("/index", MallCntrl.mall_index_get);
// router.get("/detail", MallCntrl.mall_show_get);
// router.get("/delete", MallCntrl.mall_delete_get);
// router.get("/edit", MallCntrl.mall_edit_get);
// router.put("/update", MallCntrl.mall_update_put);


module.exports = router;