const verifyToken = (req, res) => {
    try {
        const accessTocken = 'LKSAJKL809-2738SADSD-OPJNAS986-87932KLJ';
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        console.log('verifyToken => ',  accessTocken, token, challenge)
        if (token && challenge && token === accessTocken) {
            return res.send(challenge);
        } else {
            return res.status(400).send();
        }
    } catch (error) {
        return res.status(400).send();
    }
}

const receivedMessage = (req, res) => {
    res.send('Received Token');
};

module.exports = {
    verifyToken,
    receivedMessage
}