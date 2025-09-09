const express = require("express");
const Users = require("./data/user.json");

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running successfully at port ${PORT}`)
})

app.get("/", (req, res) => {
    res.status(200).json({
        success: true, message: "Welcom to our YouTube Clone Website"
    });
})

app.get("/users", (req, res) => {
    const users = Users;

    if (!users || users.length === 0) {
        return res.status(400).json({
            success: false, message: "Users not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Fetched Users successfully",
        data: users
    });
});

req = {
    params: {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com"
    }
}

app.get("/users/:id", (req, res) => { 
    const { id } = req.params;
    

})