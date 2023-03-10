import { FC } from 'react';
import { DEVELOPERS } from '../../../constants/constants';

import styles from './DevelopersBlock.module.scss';

export const DevelopersBlock: FC = () => {
    const developers = Object.keys(DEVELOPERS);

    return (
        <div className={styles['footer-developers']}>
            {developers.map((developer, i) => {
                return <a key={i}>{developer}</a>;
            })}
        </div>
    );
};
