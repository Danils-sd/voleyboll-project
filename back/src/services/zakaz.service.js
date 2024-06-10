const data = require("../configs/admin/admin.config");

async function addZakaz(date, name, number, email, stuf){
    try {
        const zakaz = await data.collection("zakazi").doc();
        const arr = []
        for(let i = 0; i < stuf.length; i++){
            arr.push(stuf[i]["id"])
        }
        zakaz.set({
            date: date,
            name: name,
            number: number,
            email: email,
            stuf: arr.join("+")
        })
        return zakaz.id;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

module.exports = {
    addZakaz
}