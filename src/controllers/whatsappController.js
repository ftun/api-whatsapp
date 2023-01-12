const verifyToken = (req, res) => {
    try {
        const accessTocken = 'LKSAJKL809-2738SADSD-OPJNAS986-87932KLJ';
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (token && challenge && token === accessTocken) {
            res.send(challenge);
        }

    } catch (error) {
        res.status(400).send();
    }
    res.send('Verify Token');
}

const receivedMessage = (req, res) => {
    res.send('Received Token');
};

module.exports = {
    verifyToken,
    receivedMessage
}