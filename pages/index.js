import { Fragment, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import { Menu, Dropdown, Button } from 'antd';
import { Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import Iframe from 'react-iframe';
import { GoogleFonts } from 'next-google-fonts';
import Navbar from '../components/Navbar';

export default function Home() {
    const [format, setFormat] = useState('Select Video Format');
    const [link, setLink] = useState('');
    const [toggle, setToggle] = useState(true);

    const onFinish = (values) => {
        setToggle(false);
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleOnclick = () => {
        window.stop();
    };
    const url = `https://loader.to/api/button/?url=${link}&f=${format}&color=0099ff`;
    const menu = (
        <Menu
            onClick={async (e) => {
                setFormat(e.key);
            }}>
            <Menu.Item key="mp3">Mp3</Menu.Item>
            <Menu.Item key="mp4a">144 Mp4</Menu.Item>
            <Menu.Item key="360">360 Mp4</Menu.Item>
            <Menu.Item key="480">480 Mp4</Menu.Item>
            <Menu.Item key="720">720 Mp4</Menu.Item>
            <Menu.Item key="1080">1080 Mp4</Menu.Item>
            <Menu.Item key="4k">4k Mp4</Menu.Item>
            <Menu.Item key="8k">8k Mp4</Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Fragment>
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Eczar:wght@600&display=swap" />

                <Head>
                    <title>YouTube Video Downloader</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta
                        name="description"
                        content="Download YouTube videos by using BalenoSave.com  The best youtube video downloader"
                    />
                    <meta name="keywords" content="youtube , video , download" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </Fragment>
            <Navbar />
            <div className={styles.body}>
                <h1 className={styles.header}>Youtube Video Downloader</h1>
                <Form
                    className={styles.form}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    style={{ width: '100%' }}>
                    <Form.Item
                        style={{ alignItems: 'center' }}
                        label="Video___URL"
                        name="videourl"
                        rules={[{ required: true, message: 'Please input your URL!' }]}>
                        <Input
                            style={{ borderRadius: '5px', height: '50px' }}
                            placeholder="paste your video link here"
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="VideoFormat"
                        name="videoformat"
                        style={{ alignItems: 'center' }}
                        rules={[{ required: true, message: 'Please select video format!' }]}>
                        <Dropdown overlay={menu}>
                            <Button style={{ width: '100%', borderRadius: '5px', height: '50px' }}>
                                {format} <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Form.Item>
                    <Form.Item>
                        {toggle ? (
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                onClick={() => {
                                    if (link !== '' && format !== 'Select Video Format') {
                                        setToggle(false);
                                    }
                                }}
                                style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }}>
                                Download
                            </Button>
                        ) : (
                            <div className="iframe">
                                {' '}
                                <Iframe
                                    onClick={handleOnclick}
                                    url={url}
                                    width="100%"
                                    height="53px"
                                    id="myId"
                                    className="frame"
                                    display="initial"
                                    position="relative"
                                />
                            </div>
                        )}
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
