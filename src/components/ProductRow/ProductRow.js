import React, {memo, useMemo} from 'react';
import styles from './ProductRow.module.scss';
import cn from 'classnames'


const ProductRow = ({product}) => {
    const classNames = useMemo(() => cn({
        [styles.productRow] :true,
        [styles.productRow_active] : !product.stocked,
    }),[product])
    return (
     <>
         <tr className={classNames}>
             <td className={styles.rowLeft}>{product.name}</td>
             <td className={styles.rowRight}>{product.price}</td>
         </tr>
     </>
    );
};

export default memo(ProductRow);