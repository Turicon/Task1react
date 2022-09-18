
import React, { useEffect } from 'react';
import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Search from '../Elements/Search'
import styles from './Home.module.css';
import { Images } from "../../Assets/images/Images"

import {
    Input,
    Select,
} from 'antd';

const { Option } = Select;

function Home() {

    return (
        <div className={styles.Home}>
            <div className={styles.search_area} data-aos="fade-up">
                <div className='search-title'>
                    <h1>Use Domain Finder to find unique domains!</h1>
                    <p>Millions of people are searching for companies, domains, meta tags, company names and etc., on Domain finder. Try today! 1 000 000 data for your search.</p>
                    <Search />
                </div>

                <div className={styles.top_searches}>
                    <span>Top searches:</span>
                    <span>development</span>
                    <span>agile</span>
                    <span>design</span>
                    <span>finance</span>
                    <span>startup</span>
                    <span>design</span>
                </div>
            </div>

            <div className='home-middle'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8' data-aos="fade-left">
                            <div className='search-title'>
                                <h1 className='col-md-8'>Use Domain Finder to find unique domains!</h1>
                                <p className='col-md-10'>Millions of people are searching for companies, domains, meta tags, company names and etc., on Domain finder. Try today! 1 000 000 data for your search.</p>
                                <div className='search-actions'>
                                    <ul>
                                        <li><span>1</span> Type to search <ArrowRightOutlined /></li>
                                        <li><span>2</span> Find domains <ArrowRightOutlined /></li>
                                        <li><span>3</span> Filter them </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className={[styles.home_img, ['col-md-4']].join(' ')} data-aos="fade-right">
                            <img src={Images.home} />
                        </div>
                    </div>
                </div>
            </div>

        </div>





    )
}
export default Home
