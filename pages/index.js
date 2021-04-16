/* eslint-disable */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import { Menu, Dropdown, Button } from 'antd';
import { Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import Iframe from 'react-iframe';

export default function Home() {
    const [error, setError] = useState(true);
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 }
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [format, setFormat] = useState('Select Video Format');
    const [link, setLink] = useState('');
    const [toggle, setToggle] = useState(true);

    const url = `https://loader.to/api/button/?url=${link}&f=${format}`;
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
            <Head>
                <title>YouTube Video Downloader</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.body}>
                <h1>Youtube Videos Download Any Online Videos</h1>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    style={{ width: '100%' }}>
                    <Form.Item
                        label="Video___URL"
                        name="username"
                        rules={[{ required: true, message: 'Please input your URL!' }]}>
                        <Input placeholder="Video URL" onChange={(e) => setLink(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="VideoFormat"
                        name="password"
                        rules={[{ required: true, message: 'Please select video format!' }]}>
                        <Dropdown overlay={menu}>
                            <Button style={{ width: '100%' }}>
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
                                    setToggle(false);
                                }}
                                style={{ width: '100%' }}>
                                Download
                            </Button>
                        ) : (
                            <Iframe
                                url={url}
                                width="100%"
                                height="70px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                            />
                        )}
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
