import React, {useEffect} from 'react';
import styles from './JqueryDiamonds.module.css';

export default () => {
    useEffect(() => {
        window.jQuery = require('../public/jquery-latest.min');
        window.Diamonds = require('../public/jquery.diamonds.js');

        window.jQuery("#demo").diamonds({
            size : 100, // Size of diamonds in pixels. Both width and height.
            gap : 5, // Pixels between each square.
            hideIncompleteRow : false, // Hide last row if there are not enough items to fill it completely.
            autoRedraw : true, // Auto redraw diamonds when it detects resizing.
            itemSelector : `.${styles.item}` // the css selector to use to select diamonds-items.
        });
    }, []);


    return (
        <div>
            <div id="demo" className="diamondswrap">
                <div className={styles.item}>Item 1</div>
                <div className={styles.item}>Item 2</div>
                <div className={styles.item}>Item 3</div>
                <div className={styles.item}>Item 4</div>
            </div>
        </div>
    );
};
