const data = require("../configs/admin/admin.config");

async function getSnikers(brand){
    try {
        const snikers = await data.collection("snikers").where("brand", "==" , brand).get();
        const all = [];
        snikers.forEach((doc) => {
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
    getSnikers
}