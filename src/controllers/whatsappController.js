const verifyToken = (req, res) => {
    res.send('Verify Token');
}

const receivedMessage = (req, res) => {
    res.send('Received Token');
};

module.exports = {
    verifyToken,
    receivedMessage
}