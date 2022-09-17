import React from 'react'
import {NavLink  } from 'react-router-dom'
import About from '../Pages/About'
import { SearchOutlined } from '@ant-design/icons';
import styles from '../Pages/Home.module.css';

import {
    Input,
    Select,
} from 'antd';

const { Option } = Select;

const Search = () => {
    return (
        <div>
            <div className={[styles.site_input, styles['site-input-group-wrHomeer']].join(' ')}>
                <Input.Group compact >
                    <Select defaultValue="Resources" className={styles.select}>
                        <Option value="Zhejiang">Zhejiang</Option>
                        <Option value="Jiangsu">Jiangsu</Option>
                    </Select>
                    <div className={styles.home_input}>
                        <Input className={styles.Input}
                            defaultValue="Search something..."
                        />
                        <NavLink to='/about'><SearchOutlined className={styles.lupa} /></NavLink>
                    </div>
                </Input.Group>

            </div>
        </div>
    )
}

export default Search