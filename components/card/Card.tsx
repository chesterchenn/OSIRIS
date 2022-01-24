import styles from './style.module.scss';
import clsx from 'clsx';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Card = (props: Props) => {
  const { ...rest } = props;
  return (
    <div className={clsx(styles.card)} {...rest}>
      <div className={styles.card__body}></div>
      <div className={styles.card__footer}>{props.children}</div>
    </div>
  );
};

export default Card;
