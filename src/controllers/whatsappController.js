const verifyToken = (req, res) => {
    // try {
    //     const accessTocken = 'LKSAJKL809-2738SADSD-OPJNAS986-87932KLJ';
    //     const token = req.query['hub.verify_token'];
    //     const challenge = req.query['hub.challenge'];

    //     console.log('verifyToken => ',  accessTocken, token, challenge)
    //     if (token && challenge && token === accessTocken) {
    //         return res.send(challenge);
    //     } else {
    //         return res.status(400).send();
    //     }
    // } catch (error) {
    //     return res.status(400).send();
    // }
    try {

        const verify_token = 'LKSAJKL809-2738SADSD-OPJNAS986-87932KLJ';

        // Parse params from the webhook verification request
        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        // Check if a token and mode were sent
        if (mode && token) {
            // Check the mode and token sent are correct
            if (mode === "subscribe" && token === verify_token) {
                // Respond with 200 OK and challenge token from the request
                console.log("WEBHOOK_VERIFIED");
                res.status(200).send(challenge);
            } else {
                // Responds with '403 Forbidden' if verify tokens do not match
                res.sendStatus(403);
            }
        }

        res.sendStatus(403);
    } catch (error) {
        res.status(200).send(error);
    }
}

const receivedMessage = (req, res) => {
    res.send('Received Token');
};

module.exports = {
    verifyToken,
    receivedMessage
}