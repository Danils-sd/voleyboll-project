const data = require("../configs/admin/admin.config");
async function auth(login, password){
    try {
        if(login == "admin" && password == "admin"){
            const st = await data.collection("zakazi").get();
            const stuf = [];
            st.forEach((doc) => {
                stuf.push({
                    id: doc.id,
                    date: doc.data().date,
                    name: doc.data().name,
                    email: doc.data().email,
                    number: doc.data().number,
                    stuf: doc.data().stuf.split("+")
                })
            })
            console.log(stuf.stuf)
            return {res: true, content: stuf};

        } else {
            return {res: false};
        }
    } catch (error) {
        console.log(error);
        return {res: false};
    }
}

module.exports = {
    auth
}