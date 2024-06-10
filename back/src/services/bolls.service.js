const data = require("../configs/admin/admin.config");

async function getBolls(brand){
    try {
        const bolls = await data.collection("bolls").where("brand", "==" , brand).get();
        const all = [];
        bolls.forEach((doc) => {
            all.push({
                id: doc.id,
                brand: doc.data().brand,
                op: doc.data().op,
                pryse: doc.data().pryse,
                img: doc.data().img
            })
        })
        return all;
    } catch (error) {
        console.log(error);
        return [];
    }
}

module.exports = {
    getBolls
}