import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import StipeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from '../styles/Donate.module.css';
import { Button, Input } from 'antd';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const donate = () => {
    const [amount, setAmount] = useState();
    const handleToken = async (token) => {
        const response = await axios.post(
            'https://youtube-video-download-arelli7.herokuapp.com/donate',
            {
                token,
                amount
            }
        );
        const { status } = response.data;
        if (status === 'success') {
            toast('Success! check email for details', { type: 'success' });
        } else {
            toast('something went wrong', { type: 'error' });
        }
    };
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <p>Enter the amount you want to donate: </p>
                <Input
                    style={{ borderRadius: '5px', height: '50px' }}
                    placeholder="Rupees"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />{' '}
                <StipeCheckout
                    stripeKey="pk_live_51IlGNCSDvGZXZeesLdCsfUvWwOWPNYkh54N5mWpxIpVQlxTAiJOREuTvYvAS35TFIDAnOoxSUSI2ECiR0NzI4m7100ppH9NpIZ"
                    token={handleToken}
                    amount={amount}
                    currency="INR"
                />
            </div>
            <Button className={styles.button} href="/" type="primary" size="large">
                Back
            </Button>
        </div>
    );
};

export default donate;
