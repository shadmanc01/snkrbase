const pool = require("../db.js")

const registerInfo = async (username, password) => {
    const newUser = await pool.query("INSERT INTO public.user (username, password) VALUES($1, $2) RETURNING *",[username,password]).then(result=> result.rows[0])
    return newUser
}
const doso = (value)=> {
    return pool.query("SELECT * FROM public.userWishlist WHERE user_id = $1",[value]).then(result=> {return result.rows})
}

module.exports = {
    registerInfo 
}


