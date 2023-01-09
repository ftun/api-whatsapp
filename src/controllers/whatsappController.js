const verifyToken = (req, res) => {
    try {
        const accessTocken = 'lksjlkjsalkdlkasjd';
        const token = req.query['hub.verify_token'];
        const challenge = req.body['hub.challenge'];

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